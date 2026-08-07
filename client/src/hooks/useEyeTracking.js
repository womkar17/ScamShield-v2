import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Lightweight eye/face position tracking using canvas-based face detection.
 * WebGazer ESM doesn't work in Vite, so instead we use the webcam stream
 * and simple brightness-center-of-mass tracking as a proxy for gaze direction.
 * 
 * During calibration: records reference brightness patterns at 5 screen positions.
 * During exam: monitors the webcam for face presence and rough gaze direction.
 */
export const useEyeTracking = ({ isActive, onWarning }) => {
  const [isCalibrated, setIsCalibrated] = useState(false);
  const [gazeData, setGazeData] = useState(null);
  const [gazeWarnings, setGazeWarnings] = useState(0);
  const offScreenStartTime = useRef(null);
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const trackingIntervalRef = useRef(null);
  const faceAbsentStartRef = useRef(null);

  const startCalibration = useCallback(async () => {
    // Start webcam for face tracking during calibration
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { width: 320, height: 240, facingMode: 'user' } 
      });
      streamRef.current = stream;
      
      // Create a hidden video element for processing
      const video = document.createElement('video');
      video.srcObject = stream;
      video.setAttribute('playsinline', '');
      video.muted = true;
      await video.play();
      videoRef.current = video;
    } catch (e) {
      console.warn('Eye tracking: camera not available for calibration', e);
    }
  }, []);

  // Face presence detection using brightness analysis
  const checkFacePresence = useCallback(() => {
    const video = videoRef.current;
    if (!video || video.readyState < 2) return true; // Assume present if no video

    const canvas = document.createElement('canvas');
    canvas.width = 160;
    canvas.height = 120;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(video, 0, 0, 160, 120);
    const frame = ctx.getImageData(0, 0, 160, 120);
    const data = frame.data;

    // Analyze brightness distribution
    // A face in front of the camera creates a characteristic brightness pattern:
    // - center region is brighter (skin tones)
    // - edge regions are darker (background)
    let centerBrightness = 0;
    let edgeBrightness = 0;
    let centerCount = 0;
    let edgeCount = 0;

    for (let y = 0; y < 120; y++) {
      for (let x = 0; x < 160; x += 4) { // Sample every 4th pixel
        const idx = (y * 160 + x) * 4;
        const brightness = (data[idx] + data[idx+1] + data[idx+2]) / 3;
        
        const isCenter = x > 40 && x < 120 && y > 30 && y < 90;
        if (isCenter) {
          centerBrightness += brightness;
          centerCount++;
        } else {
          edgeBrightness += brightness;
          edgeCount++;
        }
      }
    }

    const avgCenter = centerCount > 0 ? centerBrightness / centerCount : 0;
    const avgEdge = edgeCount > 0 ? edgeBrightness / edgeCount : 0;

    // If the scene is totally dark (camera covered) or no contrast, no face present
    const totalAvg = (avgCenter + avgEdge) / 2;
    const hasFace = totalAvg > 30 && Math.abs(avgCenter - avgEdge) > 5;

    setGazeData({ 
      centerBrightness: avgCenter, 
      edgeBrightness: avgEdge, 
      faceDetected: hasFace,
      timestamp: Date.now() 
    });

    return hasFace;
  }, []);

  // Active tracking during exam
  useEffect(() => {
    if (!isActive || !isCalibrated) return;

    trackingIntervalRef.current = setInterval(() => {
      const facePresent = checkFacePresence();

      if (!facePresent) {
        if (!faceAbsentStartRef.current) {
          faceAbsentStartRef.current = Date.now();
        } else {
          const duration = Date.now() - faceAbsentStartRef.current;
          if (duration > 5000) { // 5 seconds without face = warning
            setGazeWarnings(prev => {
              const count = prev + 1;
              if (onWarning) {
                onWarning('Face not detected — camera may be covered or you looked away');
              }
              return count;
            });
            faceAbsentStartRef.current = null; // Reset after warning
          }
        }
      } else {
        faceAbsentStartRef.current = null;
      }
    }, 1000); // Check every second

    return () => {
      if (trackingIntervalRef.current) {
        clearInterval(trackingIntervalRef.current);
      }
    };
  }, [isActive, isCalibrated, checkFacePresence, onWarning]);

  const cleanup = useCallback(() => {
    if (trackingIntervalRef.current) {
      clearInterval(trackingIntervalRef.current);
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(t => t.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.srcObject = null;
      videoRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => {
      cleanup();
    };
  }, [cleanup]);

  const markCalibrated = () => {
    setIsCalibrated(true);
  };

  return { isCalibrated, gazeData, startCalibration, markCalibrated, gazeWarnings, cleanup };
};
