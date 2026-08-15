import { useEffect, useRef, useCallback } from 'react';
import { loadCocoSsd } from '../utils/tfModelManager';
import { getSharedCamera, releaseCamera } from '../utils/sharedCamera';

/**
 * Object detection hook for proctored exam.
 * 
 * Detection layers (defense in depth):
 * 1. Camera obstruction detector: Pixel-level analysis that catches when the 
 *    camera is blocked by a phone, hand, or any object (very dark / very uniform frame).
 * 2. COCO-SSD ML model: Detects phones, multiple people at normal distances.
 * 
 * Uses the shared camera singleton — no more competing streams.
 */
export const useFaceDetection = ({ isActive, onMiss }) => {
  const videoRef = useRef(null);
  const modelRef = useRef(null);
  const canvasRef = useRef(null);
  const statusRef = useRef({ cameraReady: false, modelLoaded: false, framesProcessed: 0 });

  // Store callback in ref so it doesn't trigger effect re-runs.
  // Without this, every ExamPage render creates a new onMiss arrow function,
  // which was causing the effect to tear down and re-create everything on EVERY frame.
  const onMissRef = useRef(onMiss);
  onMissRef.current = onMiss;

  // Create and manage hidden video element internally
  const setupVideo = useCallback(async () => {
    try {
      const stream = await getSharedCamera();
      
      // Create a hidden video element that Chrome will still process
      const video = document.createElement('video');
      video.srcObject = stream;
      video.setAttribute('playsinline', '');
      video.muted = true;
      // CRITICAL: Cannot use display:none — Chrome won't decode frames.
      video.style.cssText = 'position:fixed;top:-9999px;left:-9999px;width:1px;height:1px;opacity:0;pointer-events:none;';
      document.body.appendChild(video);
      
      await video.play();
      videoRef.current = video;
      statusRef.current.cameraReady = true;
      console.log('[useFaceDetection] Video element ready, readyState:', video.readyState);
    } catch (err) {
      console.error('[useFaceDetection] Failed to setup video:', err);
    }
  }, []);

  useEffect(() => {
    if (!isActive) return;

    let isMounted = true;
    let cellPhoneFrames = 0;
    let multiplePersonsFrames = 0;
    let obstructionTicks = 0;

    // Warm-up: cameras need time to adjust exposure/white balance.
    // First frames are often dark or uniform → skip detection during this window.
    const warmUpStart = Date.now();
    const WARM_UP_MS = 6000; // 6 seconds grace period

    // Create a small offscreen canvas for pixel analysis
    const canvas = document.createElement('canvas');
    canvas.width = 80;
    canvas.height = 60;
    canvasRef.current = canvas;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });

    // Load COCO-SSD model
    const loadModel = async () => {
      try {
        modelRef.current = await loadCocoSsd();
        if (!isMounted) return;
        statusRef.current.modelLoaded = true;
        console.log('[useFaceDetection] COCO-SSD model loaded.');
      } catch (err) {
        console.error('[useFaceDetection] Failed to load COCO-SSD:', err);
      }
    };

    // Start camera and model in parallel
    setupVideo();
    loadModel();

    /**
     * Camera obstruction detection via pixel analysis.
     * Returns true if the camera appears to be blocked.
     */
    const isCameraObstructed = (video) => {
      try {
        ctx.drawImage(video, 0, 0, 80, 60);
        const imageData = ctx.getImageData(0, 0, 80, 60);
        const data = imageData.data;
        
        let totalBrightness = 0;
        let pixelCount = 0;
        const brightnesses = [];
        
        for (let i = 0; i < data.length; i += 16) {
          const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
          totalBrightness += brightness;
          brightnesses.push(brightness);
          pixelCount++;
        }
        
        const avgBrightness = totalBrightness / pixelCount;
        
        // Check 1: Very dark frame (camera covered)
        if (avgBrightness < 15) {
          return true;
        }
        
        // Check 2: Very uniform frame (object pressed against lens)
        let sumSquaredDiff = 0;
        for (const b of brightnesses) {
          sumSquaredDiff += (b - avgBrightness) ** 2;
        }
        const stdDev = Math.sqrt(sumSquaredDiff / pixelCount);
        
        // Normal webcam feed has stdDev > 15-20. 
        // Phone/hand pressed against lens has stdDev < 5.
        if (stdDev < 5 && avgBrightness < 40) {
          return true;
        }
        
        return false;
      } catch (e) {
        return false;
      }
    };

    const interval = setInterval(async () => {
      const video = videoRef.current;
      if (!video || video.readyState < 2) return;

      statusRef.current.framesProcessed++;

      // Skip all violation detection during warm-up
      if (Date.now() - warmUpStart < WARM_UP_MS) return;

      // === Layer 1: Camera obstruction detection (always runs, no ML needed) ===
      if (isCameraObstructed(video)) {
        obstructionTicks++;
        if (obstructionTicks >= 5 && onMissRef.current) {
          onMissRef.current('Camera obstructed — lens appears to be blocked');
          obstructionTicks = 0;
        }
      } else {
        obstructionTicks = Math.max(0, obstructionTicks - 1);
      }

      // === Layer 2: COCO-SSD object detection (only if model loaded) ===
      if (!modelRef.current) return;

      try {
        const predictions = await modelRef.current.detect(video);
        
        let personCount = 0;
        let phoneFound = false;
        
        for (const p of predictions) {
          if (p.class === 'person') personCount++;
          if (p.class === 'cell phone') phoneFound = true;
        }

        if (personCount > 1) {
          multiplePersonsFrames++;
          if (multiplePersonsFrames >= 3 && onMissRef.current) {
            onMissRef.current('Multiple people detected in frame');
            multiplePersonsFrames = 0;
          }
        } else {
          multiplePersonsFrames = Math.max(0, multiplePersonsFrames - 1);
        }

        if (phoneFound) {
          cellPhoneFrames++;
          if (cellPhoneFrames >= 2 && onMissRef.current) {
            onMissRef.current('Mobile phone detected in camera frame');
            cellPhoneFrames = 0;
          }
        } else {
          cellPhoneFrames = Math.max(0, cellPhoneFrames - 1);
        }
      } catch (err) {
        console.error("[useFaceDetection] Detection error", err);
      }
    }, 400);

    return () => {
      isMounted = false;
      clearInterval(interval);
      // Clean up the video element
      if (videoRef.current) {
        videoRef.current.pause();
        if (videoRef.current.parentNode) {
          videoRef.current.parentNode.removeChild(videoRef.current);
        }
        videoRef.current.srcObject = null;
        videoRef.current = null;
      }
      releaseCamera();
    };
  }, [isActive, setupVideo]); // onMiss deliberately excluded — stored in onMissRef

  return { statusRef };
};
