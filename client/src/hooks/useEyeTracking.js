import { useState, useEffect, useCallback, useRef } from 'react';
import { getSharedCamera, releaseCamera } from '../utils/sharedCamera';

/**
 * ML-powered eye/gaze tracking using MediaPipe Face Landmarker.
 * 
 * Uses 478 3D face landmarks (including iris at indices 468-477) to detect:
 * 1. Face presence/absence
 * 2. Gaze direction via iris-to-eye-corner ratios (left/right/up/down)
 * 3. Head pose via nose-cheek geometry
 * 
 * Falls back to brightness heuristic if MediaPipe is unavailable.
 * Uses the shared camera singleton — no more competing streams.
 */

// CDN path for the MediaPipe ESM bundle
const MEDIAPIPE_CDN = 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest';

export const useEyeTracking = ({ isActive, onWarning }) => {
  const [isCalibrated, setIsCalibrated] = useState(false);
  const [gazeData, setGazeData] = useState(null);
  const [gazeWarnings, setGazeWarnings] = useState(0);
  const videoRef = useRef(null);
  const trackingIntervalRef = useRef(null);
  const faceLandmarkerRef = useRef(null);
  const useMLRef = useRef(false);

  // Store callback in ref to prevent effect re-runs on every render
  const onWarningRef = useRef(onWarning);
  onWarningRef.current = onWarning;

  // Calibration reference: stores the "looking at screen" iris ratios + baseline face area
  const calibrationRef = useRef(null);
  
  // Diagnostic status for the HUD badge
  const statusRef = useRef({ 
    mlLoaded: false, 
    cameraReady: false, 
    faceDetected: false, 
    faceOccluded: false,
    lastCheckTime: 0,
    framesProcessed: 0 
  });

  // ─── MediaPipe Face Landmarker Setup ──────────────────────────────
  const initFaceLandmarker = useCallback(async () => {
    try {
      const { FaceLandmarker, FilesetResolver } = await import(
        /* @vite-ignore */
        `${MEDIAPIPE_CDN}/vision_bundle.mjs`
      );

      const vision = await FilesetResolver.forVisionTasks(
        `${MEDIAPIPE_CDN}/wasm`
      );

      const faceLandmarker = await FaceLandmarker.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath: 'https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task',
          delegate: 'GPU'
        },
        runningMode: 'VIDEO',
        numFaces: 1,
        outputFacialTransformationMatrixes: false,
        outputFaceBlendshapes: false,
      });

      faceLandmarkerRef.current = faceLandmarker;
      useMLRef.current = true;
      statusRef.current.mlLoaded = true;
      console.log('[useEyeTracking] MediaPipe Face Landmarker initialized successfully.');
      return true;
    } catch (e) {
      console.warn('[useEyeTracking] Failed to init MediaPipe, using fallback.', e);
      useMLRef.current = false;
      return false;
    }
  }, []);

  // ─── Iris Gaze Calculation ────────────────────────────────────────
  const getIrisRatios = useCallback((landmarks) => {
    const leftIris = landmarks.slice(468, 473);
    const rightIris = landmarks.slice(473, 478);

    const avgPoint = (points) => ({
      x: points.reduce((s, p) => s + p.x, 0) / points.length,
      y: points.reduce((s, p) => s + p.y, 0) / points.length,
    });

    const leftIrisCenter = avgPoint(leftIris);
    const rightIrisCenter = avgPoint(rightIris);

    const lInner = landmarks[133], lOuter = landmarks[33];
    const lHRatio = (leftIrisCenter.x - lOuter.x) / (lInner.x - lOuter.x + 1e-6);

    const rInner = landmarks[362], rOuter = landmarks[263];
    const rHRatio = (rightIrisCenter.x - rOuter.x) / (rInner.x - rOuter.x + 1e-6);

    const lTop = landmarks[159], lBottom = landmarks[145];
    const lVRatio = (leftIrisCenter.y - lTop.y) / (lBottom.y - lTop.y + 1e-6);

    const rTop = landmarks[386], rBottom = landmarks[374];
    const rVRatio = (rightIrisCenter.y - rTop.y) / (rBottom.y - rTop.y + 1e-6);

    return {
      hRatio: (lHRatio + rHRatio) / 2,
      vRatio: (lVRatio + rVRatio) / 2,
    };
  }, []);

  // ─── Head Pose Estimation ─────────────────────────────────────────
  const isHeadTurned = useCallback((landmarks) => {
    const nose = landmarks[1];
    const leftCheek = landmarks[234];
    const rightCheek = landmarks[454];
    const faceWidth = Math.abs(rightCheek.x - leftCheek.x);
    const noseToCenterX = nose.x - (leftCheek.x + rightCheek.x) / 2;
    const turnRatio = Math.abs(noseToCenterX) / (faceWidth + 1e-6);
    return turnRatio > 0.35;
  }, []);

  // ─── Fallback: Brightness Heuristic ───────────────────────────────
  const checkFacePresenceFallback = useCallback(() => {
    const video = videoRef.current;
    if (!video || video.readyState < 2) return { faceDetected: false, gazeOff: false };

    const canvas = document.createElement('canvas');
    canvas.width = 160;
    canvas.height = 120;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(video, 0, 0, 160, 120);
    const frame = ctx.getImageData(0, 0, 160, 120);
    const data = frame.data;

    let centerBrightness = 0, edgeBrightness = 0;
    let centerCount = 0, edgeCount = 0;

    for (let y = 0; y < 120; y++) {
      for (let x = 0; x < 160; x += 4) {
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
    const totalAvg = (avgCenter + avgEdge) / 2;
    const hasFace = totalAvg > 30 && Math.abs(avgCenter - avgEdge) > 5;

    return { faceDetected: hasFace, gazeOff: false };
  }, []);

  // ─── Face Bounding Box Area (for occlusion detection) ─────────────
  /**
   * Calculate the face bounding box area from landmarks.
   * When something partially blocks the face, MediaPipe may still detect it
   * but the visible landmark spread shrinks dramatically.
   */
  const getFaceArea = useCallback((landmarks) => {
    let minX = 1, maxX = 0, minY = 1, maxY = 0;
    // Use the face oval landmarks (indices 0-467) for bounding box
    const keyPoints = [10, 338, 297, 332, 284, 251, 389, 356, 454, 323, 361, 288,
                       397, 365, 379, 378, 400, 377, 152, 148, 176, 149, 150, 136,
                       172, 58, 132, 93, 234, 127, 162, 21, 54, 103, 67, 109];
    for (const idx of keyPoints) {
      if (landmarks[idx]) {
        minX = Math.min(minX, landmarks[idx].x);
        maxX = Math.max(maxX, landmarks[idx].x);
        minY = Math.min(minY, landmarks[idx].y);
        maxY = Math.max(maxY, landmarks[idx].y);
      }
    }
    return (maxX - minX) * (maxY - minY);
  }, []);

  // ─── ML-Powered Detection ─────────────────────────────────────────
  const checkGazeML = useCallback(() => {
    const video = videoRef.current;
    const landmarker = faceLandmarkerRef.current;
    if (!video || video.readyState < 2 || !landmarker) {
      return { faceDetected: false, gazeOff: false, hRatio: 0.5, vRatio: 0.5, faceOccluded: false };
    }

    try {
      const results = landmarker.detectForVideo(video, performance.now());

      if (!results.faceLandmarks || results.faceLandmarks.length === 0) {
        console.log('[useEyeTracking] No face found in frame');
        return { faceDetected: false, gazeOff: false, hRatio: 0.5, vRatio: 0.5, faceOccluded: false };
      }

      const landmarks = results.faceLandmarks[0];
      
      if (landmarks.length < 478) {
        return { faceDetected: true, gazeOff: false, hRatio: 0.5, vRatio: 0.5, faceOccluded: false };
      }

      const { hRatio, vRatio } = getIrisRatios(landmarks);
      const headTurned = isHeadTurned(landmarks);

      // ─── Face occlusion check ───────────────────────────────────
      // If we have a calibration baseline, compare current face area to it.
      // A phone/hand blocking part of the face shrinks the visible area.
      let faceOccluded = false;
      const currentArea = getFaceArea(landmarks);
      const cal = calibrationRef.current || { hRatio: 0.5, vRatio: 0.45 };
      
      if (cal.faceArea && cal.faceArea > 0) {
        const areaRatio = currentArea / cal.faceArea;
        // If visible face area drops below 50% of baseline, something is blocking it
        if (areaRatio < 0.50) {
          faceOccluded = true;
          console.log(`[useEyeTracking] Face partially occluded: area ratio ${(areaRatio * 100).toFixed(0)}%`);
        }
      }

      const hDeviation = Math.abs(hRatio - cal.hRatio);
      const vDeviation = Math.abs(vRatio - cal.vRatio);

      const gazeOff = headTurned || hDeviation > 0.30 || vDeviation > 0.18;

      return { faceDetected: true, gazeOff, hRatio, vRatio, headTurned, faceOccluded, faceArea: currentArea };
    } catch (e) {
      console.warn('[useEyeTracking] ML detection error:', e);
      return { faceDetected: false, gazeOff: false, hRatio: 0.5, vRatio: 0.5, faceOccluded: false };
    }
  }, [getIrisRatios, isHeadTurned, getFaceArea]);

  // ─── Start Calibration (uses shared camera) ───────────────────────
  const startCalibration = useCallback(async () => {
    try {
      const stream = await getSharedCamera();
      
      const video = document.createElement('video');
      video.srcObject = stream;
      video.setAttribute('playsinline', '');
      // CRITICAL: Cannot use display:none — Chrome won't decode video frames.
      video.style.cssText = 'position:fixed;top:-9999px;left:-9999px;width:1px;height:1px;opacity:0;pointer-events:none;';
      video.muted = true;
      document.body.appendChild(video);
      await video.play();
      videoRef.current = video;
      statusRef.current.cameraReady = true;
      
      console.log('[useEyeTracking] Video element ready, readyState:', video.readyState);

      // Initialize MediaPipe
      await initFaceLandmarker();

      // Capture baseline gaze + face area after model is warmed up
      if (useMLRef.current && faceLandmarkerRef.current) {
        // Wait for video to have enough data
        await new Promise(resolve => setTimeout(resolve, 1500));
        try {
          const result = checkGazeML();
          if (result.faceDetected && result.hRatio !== undefined) {
            calibrationRef.current = { 
              hRatio: result.hRatio, 
              vRatio: result.vRatio,
              faceArea: result.faceArea || 0  // Baseline face bounding box area
            };
            console.log('[useEyeTracking] Calibration baseline captured:', calibrationRef.current);
          } else {
            console.warn('[useEyeTracking] Could not detect face during calibration baseline');
          }
        } catch (e) {
          console.warn('[useEyeTracking] Calibration baseline error:', e);
        }
      }
    } catch (e) {
      console.warn('[useEyeTracking] Camera not available:', e);
    }
  }, [initFaceLandmarker, checkGazeML]);

  // ─── Active Tracking During Exam ──────────────────────────────────
  const faceAbsentTicksRef = useRef(0);
  const gazeOffTicksRef = useRef(0);

  useEffect(() => {
    if (!isActive || !isCalibrated) return;

    faceAbsentTicksRef.current = 0;
    gazeOffTicksRef.current = 0;

    // Time-based warm-up: skip violations for first 8 seconds
    const warmUpStartTime = Date.now();
    const WARM_UP_MS = 8000;

    trackingIntervalRef.current = setInterval(() => {
      let result;
      
      if (useMLRef.current && faceLandmarkerRef.current) {
        result = checkGazeML();
      } else {
        result = checkFacePresenceFallback();
      }

      statusRef.current.framesProcessed++;
      statusRef.current.faceDetected = result.faceDetected;
      statusRef.current.lastCheckTime = Date.now();

      setGazeData({
        faceDetected: result.faceDetected,
        gazeOff: result.gazeOff,
        hRatio: result.hRatio,
        vRatio: result.vRatio,
        headTurned: result.headTurned,
        usingML: useMLRef.current,
        timestamp: Date.now()
      });

      // Skip violation counting during warm-up
      if (Date.now() - warmUpStartTime < WARM_UP_MS) return;

      // Face absence — cumulative tick counter
      if (!result.faceDetected) {
        faceAbsentTicksRef.current++;
        if (faceAbsentTicksRef.current >= 8) {
          if (onWarningRef.current) {
            onWarningRef.current('Face not detected — camera may be covered or you left the frame');
          }
          setGazeWarnings(prev => prev + 1);
          faceAbsentTicksRef.current = 0;
        }
      } else {
        faceAbsentTicksRef.current = Math.max(0, faceAbsentTicksRef.current - 1);
      }

      // Face occlusion — something partially blocking the face (phone/hand)
      if (result.faceOccluded) {
        statusRef.current.faceOccluded = true;
        // Zero-tolerance: strike immediately on the very first frame it happens
        if (onWarningRef.current) {
          onWarningRef.current('Face partially blocked — remove any objects from in front of camera');
        }
        setGazeWarnings(prev => prev + 1);
      } else {
        statusRef.current.faceOccluded = false;
      }

      // Gaze off-screen — cumulative tick counter
      if (result.faceDetected && result.gazeOff) {
        gazeOffTicksRef.current++;
        console.log(`[useEyeTracking] Gaze off-screen: h=${result.hRatio?.toFixed(2)} v=${result.vRatio?.toFixed(2)} head=${result.headTurned} ticks=${gazeOffTicksRef.current}`);
        if (gazeOffTicksRef.current >= 4) {
          if (onWarningRef.current) {
            const direction = result.headTurned 
              ? 'Head turned away from screen'
              : 'Eyes looking away from screen';
            onWarningRef.current(`${direction} — keep your eyes on the exam`);
          }
          setGazeWarnings(prev => prev + 1);
          gazeOffTicksRef.current = 0;
        }
      } else {
        gazeOffTicksRef.current = Math.max(0, gazeOffTicksRef.current - 1);
      }
    }, 500);

    return () => {
      if (trackingIntervalRef.current) {
        clearInterval(trackingIntervalRef.current);
      }
    };
  }, [isActive, isCalibrated, checkGazeML, checkFacePresenceFallback]); // onWarning excluded — stored in ref

  // ─── Cleanup ──────────────────────────────────────────────────────
  const cleanup = useCallback(() => {
    if (trackingIntervalRef.current) {
      clearInterval(trackingIntervalRef.current);
    }
    if (faceLandmarkerRef.current) {
      try { faceLandmarkerRef.current.close(); } catch (e) { /* ignore */ }
      faceLandmarkerRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.pause();
      if (videoRef.current.parentNode) {
        videoRef.current.parentNode.removeChild(videoRef.current);
      }
      videoRef.current.srcObject = null;
      videoRef.current = null;
    }
    releaseCamera();
    useMLRef.current = false;
  }, []);

  useEffect(() => {
    return () => {
      cleanup();
    };
  }, [cleanup]);

  const markCalibrated = useCallback(() => {
    if (useMLRef.current && faceLandmarkerRef.current) {
      try {
        const result = checkGazeML();
        if (result.faceDetected && result.hRatio !== undefined) {
          calibrationRef.current = { 
            hRatio: result.hRatio, 
            vRatio: result.vRatio,
            faceArea: result.faceArea || calibrationRef.current?.faceArea || 0
          };
          console.log('[useEyeTracking] Final calibration snapshot:', calibrationRef.current);
        }
      } catch (e) { /* use existing baseline */ }
    }
    setIsCalibrated(true);
  }, [checkGazeML]);

  return { isCalibrated, gazeData, startCalibration, markCalibrated, gazeWarnings, cleanup, statusRef };
};
