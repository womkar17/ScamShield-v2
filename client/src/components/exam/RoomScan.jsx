import React, { useState, useEffect, useRef, useCallback } from 'react';
import { loadCocoSsd } from '../../utils/tfModelManager';


const SCAN_PHASES = [
  { id: 'front', label: '📱 Show your desk area (front)', duration: 6 },
  { id: 'left',  label: '⬅️ Pan slowly to your LEFT',     duration: 6 },
  { id: 'right', label: '➡️ Pan slowly to your RIGHT',    duration: 6 },
  { id: 'behind',label: '🔄 Show behind you',              duration: 6 },
];

// ─── Analysis Utilities ──────────────────────────────────────────────

/** Build a 32-bin-per-channel color histogram from ImageData. */
const buildHistogram = (imgData) => {
  const bins = new Float32Array(96);
  const d = imgData.data;
  const totalPixels = d.length / 4;
  for (let i = 0; i < d.length; i += 16) {
    bins[Math.floor(d[i] / 8)] += 1;
    bins[32 + Math.floor(d[i+1] / 8)] += 1;
    bins[64 + Math.floor(d[i+2] / 8)] += 1;
  }
  const sampledPixels = totalPixels / 4;
  for (let i = 0; i < 96; i++) bins[i] /= sampledPixels;
  return bins;
};

/** Bhattacharyya distance between two histograms. Returns 0-1 (higher = more different). */
const histogramDistance = (h1, h2) => {
  let bc = 0;
  for (let i = 0; i < h1.length; i++) bc += Math.sqrt(h1[i] * h2[i]);
  bc /= 3;
  return Math.max(0, Math.min(1, 1 - bc));
};

/** Build a 4×4 spatial brightness grid from ImageData. */
const buildSpatialGrid = (imgData, width, height) => {
  const grid = new Float32Array(16);
  const counts = new Float32Array(16);
  const d = imgData.data;
  const cellW = width / 4, cellH = height / 4;
  for (let y = 0; y < height; y += 2) {
    for (let x = 0; x < width; x += 2) {
      const idx = (y * width + x) * 4;
      const brightness = (d[idx] + d[idx+1] + d[idx+2]) / 3;
      const cellIdx = Math.min(3, Math.floor(y / cellH)) * 4 + Math.min(3, Math.floor(x / cellW));
      grid[cellIdx] += brightness;
      counts[cellIdx] += 1;
    }
  }
  for (let i = 0; i < 16; i++) grid[i] = counts[i] > 0 ? grid[i] / counts[i] : 0;
  return grid;
};

/** Compare two spatial grids. Returns 0-1 (higher = more different). */
const spatialGridDistance = (g1, g2) => {
  let totalDiff = 0;
  for (let i = 0; i < 16; i++) totalDiff += Math.abs(g1[i] - g2[i]);
  return Math.min(1, totalDiff / 2040);
};

/**
 * Detect face using browser FaceDetector API, with multi-range skin-tone heuristic fallback.
 * Covers light, medium, and dark skin tones.
 */
const detectFaceInCanvas = async (canvas) => {
  // Try native FaceDetector API (Chrome/Edge)
  if (typeof window.FaceDetector !== 'undefined') {
    try {
      const detector = new window.FaceDetector({ fastMode: true, maxDetectedFaces: 1 });
      const faces = await detector.detect(canvas);
      return faces.length > 0;
    } catch (e) { /* fall through */ }
  }

  // Heuristic fallback: multi-range skin-tone detection in center 60% of frame
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  const w = canvas.width, h = canvas.height;
  const cx = Math.floor(w * 0.2), cy = Math.floor(h * 0.2);
  const cw = Math.floor(w * 0.6), ch = Math.floor(h * 0.6);
  const centerData = ctx.getImageData(cx, cy, cw, ch).data;

  let skinPixels = 0;
  let totalSampled = 0;
  for (let i = 0; i < centerData.length; i += 12) { // sample every 3rd pixel
    const r = centerData[i], g = centerData[i+1], b = centerData[i+2];
    
    // Convert to YCbCr for better skin detection across all skin tones
    const y  = 0.299 * r + 0.587 * g + 0.114 * b;
    const cb = 128 - 0.169 * r - 0.331 * g + 0.500 * b;
    const cr = 128 + 0.500 * r - 0.419 * g - 0.081 * b;
    
    // YCbCr skin-tone range (works across light to dark skin)
    if (y > 50 && cb > 77 && cb < 127 && cr > 133 && cr < 173) {
      skinPixels++;
    }
    totalSampled++;
  }
  // If > 20% of center region is skin-toned, likely a face
  return totalSampled > 0 && (skinPixels / totalSampled) > 0.20;
};

// ─── Component ───────────────────────────────────────────────────────

const RoomScan = ({ onComplete }) => {
  const [currentPhaseIdx, setCurrentPhaseIdx] = useState(0);
  const [phaseTimeLeft, setPhaseTimeLeft] = useState(SCAN_PHASES[0].duration);
  const [images, setImages] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [motionScore, setMotionScore] = useState(0);
  const [analysisResult, setAnalysisResult] = useState(null); // null | { passed, failReason }
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const prevFrameRef = useRef(null);
  const capturedCanvases = useRef([]);
  const modelRef = useRef(null);

  // Load COCO-SSD model
  useEffect(() => {
    let isMounted = true;
    loadCocoSsd().then(model => {
      if (isMounted) modelRef.current = model;
    }).catch(err => console.error("Failed to load COCO-SSD:", err));
    return () => { isMounted = false; };
  }, []);

  // Start camera — track when it's actually ready
  const [cameraReady, setCameraReady] = useState(false);
  useEffect(() => {
    let cancelled = false;
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        if (cancelled) { stream.getTracks().forEach(t => t.stop()); return; }
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          // Wait for actual video data before marking ready
          const onPlaying = () => {
            if (!cancelled) setCameraReady(true);
          };
          videoRef.current.addEventListener('playing', onPlaying, { once: true });
          videoRef.current.play().catch(() => {});
        }
      })
      .catch(err => console.error("Camera error:", err));
    return () => {
      cancelled = true;
      if (streamRef.current) streamRef.current.getTracks().forEach(t => t.stop());
    };
  }, []);

  // Re-attach stream to video element if it remounts (e.g. on retake)
  useEffect(() => {
    if (videoRef.current && streamRef.current && videoRef.current.srcObject !== streamRef.current) {
      videoRef.current.srcObject = streamRef.current;
    }
  }, [isComplete]);

  // Motion detection
  const [edgeMotionScore, setEdgeMotionScore] = useState(0);
  const [centerMotionScore, setCenterMotionScore] = useState(0);

  useEffect(() => {
    if (isComplete || !cameraReady) return;
    const canvas = document.createElement('canvas');
    canvas.width = 160; canvas.height = 120;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });

    // Throttled motion detection at ~4fps (250ms) instead of 60fps (rAF)
    // This prevents the heavy pixel processing from starving the UI timer
    const motionInterval = setInterval(() => {
      if (!videoRef.current || videoRef.current.readyState < 2) return;

      ctx.drawImage(videoRef.current, 0, 0, 160, 120);
      const currentFrame = ctx.getImageData(0, 0, 160, 120);
      if (prevFrameRef.current) {
        let diff = 0, edgeDiff = 0, centerDiff = 0;
        let edgeSamples = 0, centerSamples = 0;
        const prev = prevFrameRef.current.data, curr = currentFrame.data;
        
        for (let y = 0; y < 120; y += 2) {
          for (let x = 0; x < 160; x += 2) {
            const i = (y * 160 + x) * 4;
            const d = Math.abs(curr[i] - prev[i]) + Math.abs(curr[i+1] - prev[i+1]) + Math.abs(curr[i+2] - prev[i+2]);
            diff += d;
            
            // Define center as middle 50% of the screen
            if (x > 40 && x < 120 && y > 30 && y < 90) {
              centerDiff += d;
              centerSamples++;
            } else {
              edgeDiff += d;
              edgeSamples++;
            }
          }
        }
        
        const avgTotal = diff / (edgeSamples + centerSamples);
        const avgCenter = centerDiff / centerSamples;
        const avgEdge = edgeDiff / edgeSamples;
        
        if (avgTotal > 15) setMotionScore(prev => prev + 1);
        if (avgCenter > 15) setCenterMotionScore(prev => prev + 1);
        if (avgEdge > 15) setEdgeMotionScore(prev => prev + 1);
      }
      prevFrameRef.current = currentFrame;
    }, 250);

    return () => clearInterval(motionInterval);
  }, [isComplete, cameraReady]);

  const phaseIdxRef = useRef(0);
  const timeLeftRef = useRef(SCAN_PHASES[0].duration);

  // Phase timer — only starts once camera is actually ready
  useEffect(() => {
    if (isComplete || !cameraReady) return;
    
    // Reset timer state when camera becomes ready
    phaseIdxRef.current = 0;
    timeLeftRef.current = SCAN_PHASES[0].duration;
    setCurrentPhaseIdx(0);
    setPhaseTimeLeft(SCAN_PHASES[0].duration);

    const timer = setInterval(() => {
      timeLeftRef.current -= 1;
      const t = timeLeftRef.current;
      setPhaseTimeLeft(t);
      if (t <= 0) {
        const idx = phaseIdxRef.current;
        if (idx + 1 < SCAN_PHASES.length) {
          // Defer capture so it doesn't block the UI timer update
          setTimeout(() => captureFrame(SCAN_PHASES[idx].label), 0);
          phaseIdxRef.current = idx + 1;
          timeLeftRef.current = SCAN_PHASES[idx + 1].duration;
          setCurrentPhaseIdx(idx + 1);
          setPhaseTimeLeft(SCAN_PHASES[idx + 1].duration);
        } else {
          clearInterval(timer);
          // For the last frame, ensure capture finishes BEFORE unmounting the video
          setTimeout(() => {
            captureFrame(SCAN_PHASES[idx].label);
            setIsComplete(true);
          }, 0);
        }
      }
    }, 1000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isComplete, cameraReady]);

  // ─── Multi-signal analysis (runs silently, user only sees pass/fail) ───
  useEffect(() => {
    if (!isComplete) return;
    const analyze = async () => {
      const canvases = capturedCanvases.current;
      if (canvases.length < 2) {
        setAnalysisResult({ passed: false, failReason: 'Not enough environment data captured. Please retake the scan.' });
        return;
      }

      // 1. Histogram check
      const histograms = canvases.map(c => {
        const ctx = c.getContext('2d', { willReadFrequently: true });
        return buildHistogram(ctx.getImageData(0, 0, c.width, c.height));
      });
      let minHistDist = Infinity;
      for (let i = 0; i < histograms.length; i++)
        for (let j = i + 1; j < histograms.length; j++) {
          minHistDist = Math.min(minHistDist, histogramDistance(histograms[i], histograms[j]));
        }
      if (minHistDist < 0.05) {
        setAnalysisResult({ passed: false, failReason: 'Your captures appear to show the same scene. Please pan your camera to show different areas of your room.' });
        return;
      }

      // 2. Spatial grid check
      const grids = canvases.map(c => {
        const ctx = c.getContext('2d', { willReadFrequently: true });
        return buildSpatialGrid(ctx.getImageData(0, 0, c.width, c.height), c.width, c.height);
      });
      let minGridDist = Infinity;
      for (let i = 0; i < grids.length; i++)
        for (let j = i + 1; j < grids.length; j++) {
          minGridDist = Math.min(minGridDist, spatialGridDistance(grids[i], grids[j]));
        }
      if (minGridDist < 0.06) {
        setAnalysisResult({ passed: false, failReason: 'Insufficient variation detected. Please physically rotate your camera to show your entire surroundings.' });
        return;
      }

      // 3. Face detection — fail if face is in ALL captures
      let faceCount = 0;
      for (const canvas of canvases) {
        if (await detectFaceInCanvas(canvas)) faceCount++;
      }
      if (faceCount >= canvases.length) {
        setAnalysisResult({ passed: false, failReason: 'A face was detected in every capture. The room scan must show your environment, not your face. Please retake and pan the camera around the room.' });
        return;
      }

      // 4. Motion check (and Mobile Phone Bypass detection)
      if (motionScore < 15) {
        setAnalysisResult({ passed: false, failReason: 'No significant camera movement was detected during the scan. Please physically move/rotate your camera while scanning.' });
        return;
      }
      
      // If center motion is high but edge motion is extremely low, they are likely holding a phone screen in front of a stationary laptop
      if (centerMotionScore > 15 && edgeMotionScore < 5) {
        setAnalysisResult({ passed: false, failReason: 'Unnatural motion detected. Please pan the laptop/webcam itself, do not hold a screen in front of the camera.' });
        return;
      }

      // 5. ML Object Detection (COCO-SSD)
      if (modelRef.current) {
        let forbiddenFound = null;
        for (const canvas of canvases) {
          try {
            const predictions = await modelRef.current.detect(canvas);
            for (const p of predictions) {
              if (p.class === 'cell phone') forbiddenFound = 'Mobile phone';
              if (p.class === 'laptop') forbiddenFound = 'Laptop';
            }
          } catch (e) {
            console.error(e);
          }
          if (forbiddenFound) break;
        }

        if (forbiddenFound) {
          setAnalysisResult({ passed: false, failReason: `Forbidden object detected during room scan: ${forbiddenFound}. Please clear your desk.` });
          return;
        }
      }

      // All checks passed
      setAnalysisResult({ passed: true, failReason: null });
    };
    analyze();
  }, [isComplete, motionScore]);

  const captureFrame = useCallback((label) => {
    if (!videoRef.current) return;
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth || 640;
    canvas.height = videoRef.current.videoHeight || 480;
    canvas.getContext('2d').drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    setImages(prev => [...prev, { src: canvas.toDataURL('image/jpeg', 0.6), label }]);

    const fpCanvas = document.createElement('canvas');
    fpCanvas.width = 120; fpCanvas.height = 90;
    fpCanvas.getContext('2d', { willReadFrequently: true }).drawImage(videoRef.current, 0, 0, 120, 90);
    capturedCanvases.current.push(fpCanvas);
  }, []);

  const handleProceed = () => {
    if (streamRef.current) streamRef.current.getTracks().forEach(t => t.stop());
    onComplete(images.map(i => i.src));
  };

  const handleRetake = () => {
    setCurrentPhaseIdx(0);
    setPhaseTimeLeft(SCAN_PHASES[0].duration);
    setImages([]);
    setIsComplete(false);
    setMotionScore(0);
    setAnalysisResult(null);
    capturedCanvases.current = [];
    phaseIdxRef.current = 0;
    timeLeftRef.current = SCAN_PHASES[0].duration;
    prevFrameRef.current = null;
  };

  const currentPhase = SCAN_PHASES[currentPhaseIdx] || SCAN_PHASES[SCAN_PHASES.length - 1];
  const scanPassed = analysisResult?.passed === true;

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📷 360° Room Scan</h2>
      <p style={styles.subtitle}>
        {!isComplete 
          ? "Follow each direction below. Slowly pan your camera to show your environment." 
          : analysisResult === null 
            ? "Analyzing your environment..." 
            : scanPassed 
              ? "Environment verification successful." 
              : "Environment verification failed."}
      </p>

      {/* Phase progress bar — only show once camera is ready */}
      {!isComplete && cameraReady && (
        <div style={styles.phaseTracker}>
          {SCAN_PHASES.map((phase, i) => (
            <div key={phase.id} style={{
              ...styles.phaseStep,
              background: i < currentPhaseIdx ? '#22c55e' : i === currentPhaseIdx ? '#3b82f6' : 'var(--bg3)',
              color: i <= currentPhaseIdx ? 'white' : 'var(--text2)',
            }}>
              {i < currentPhaseIdx ? '✓' : i + 1}
            </div>
          ))}
        </div>
      )}

      {/* Current direction — show "Connecting" until camera is ready */}
      {!isComplete && currentPhase && (
        <div style={styles.directionBanner}>
          {!cameraReady ? (
            <span style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', animation: 'pulse 1.5s infinite' }}>
              📡 Connecting to camera...
            </span>
          ) : (
            <>
              <span style={{ fontSize: '1.3rem' }}>{currentPhase.label}</span>
              <span style={styles.phaseTimer}>{phaseTimeLeft}s</span>
            </>
          )}
        </div>
      )}

      {/* Video feed — visible during scan, hidden after */}
      {!isComplete && (
        <div style={styles.videoWrapper}>
          <video ref={videoRef} autoPlay playsInline muted style={styles.video} />
          {!cameraReady ? (
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              background: '#000', gap: '12px'
            }}>
              <div style={styles.spinner} />
              <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 'bold' }}>
                Starting camera...
              </span>
            </div>
          ) : (
            <div style={styles.overlay}>
              <div style={styles.recordingIndicator}>🔴 Recording</div>
              <div style={styles.timerOverlay}>{phaseTimeLeft}s</div>
            </div>
          )}
        </div>
      )}

      {/* Result — simple pass/fail */}
      {isComplete && (
        <div style={styles.resultArea}>
          {analysisResult === null ? (
            <div style={styles.analyzingBox}>
              <div style={styles.spinner} />
              <span style={{ color: 'var(--text2)', fontWeight: 'bold', fontSize: '1.1rem' }}>
                Verifying environment security...
              </span>
            </div>
          ) : scanPassed ? (
            <>
              <div style={styles.successBox}>
                <span style={{ fontSize: '2.5rem' }}>✅</span>
                <div>
                  <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#22c55e' }}>
                    Room Scan Verified
                  </div>
                  <div style={{ color: 'var(--text2)', marginTop: '4px' }}>
                    Your environment has been successfully recorded and approved.
                  </div>
                </div>
              </div>
              <button onClick={handleProceed} style={styles.button}>
                Proceed to Eye Calibration ➔
              </button>
            </>
          ) : (
            <>
              <div style={styles.failBox}>
                <span style={{ fontSize: '2.5rem' }}>❌</span>
                <div>
                  <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#ef4444' }}>
                    Room Scan Failed
                  </div>
                  <div style={{ color: 'var(--text2)', marginTop: '4px' }}>
                    {analysisResult.failReason}
                  </div>
                </div>
              </div>
              <button onClick={handleRetake} style={styles.retakeButton}>
                🔄 Retake Room Scan
              </button>
            </>
          )}
        </div>
      )}

      {/* Hidden video element for post-scan camera access (needed for retake) */}
      {isComplete && <video ref={videoRef} style={{ display: 'none' }} />}
    </div>
  );
};

const styles = {
  container: {
    background: 'var(--bg2)', padding: '2.5rem', borderRadius: '16px',
    border: '1px solid var(--border)', maxWidth: '800px', width: '100%',
    margin: '0 auto', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', textAlign: 'center'
  },
  title: { margin: '0 0 0.5rem 0', color: 'var(--text)', fontSize: '1.8rem' },
  subtitle: { margin: '0 0 1.5rem 0', color: 'var(--text2)', fontSize: '1rem' },
  phaseTracker: { display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '1rem' },
  phaseStep: {
    width: '36px', height: '36px', borderRadius: '50%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontWeight: 'bold', fontSize: '0.9rem', transition: 'all 0.3s ease'
  },
  directionBanner: {
    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem',
    padding: '0.8rem 1.5rem', background: 'rgba(59, 130, 246, 0.15)',
    border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '10px',
    marginBottom: '1rem', color: '#93c5fd', fontWeight: 'bold', fontSize: '1.1rem'
  },
  phaseTimer: {
    background: '#3b82f6', color: 'white', padding: '2px 12px',
    borderRadius: '20px', fontFamily: 'monospace', fontSize: '1.1rem'
  },
  videoWrapper: {
    position: 'relative', width: '100%', aspectRatio: '16/9',
    background: '#000', borderRadius: '12px', overflow: 'hidden', marginBottom: '1.5rem'
  },
  video: { width: '100%', height: '100%', objectFit: 'cover' },
  overlay: {
    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
    boxShadow: 'inset 0 0 0 4px #ef4444',
    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    padding: '1rem', pointerEvents: 'none'
  },
  timerOverlay: {
    position: 'absolute', top: '50%', left: '50%',
    transform: 'translate(-50%, -50%)', fontSize: '5rem', fontWeight: '900',
    color: 'rgba(255,255,255,0.5)', textShadow: '0 4px 12px rgba(0,0,0,0.5)'
  },
  recordingIndicator: {
    position: 'absolute', top: '1rem', right: '1rem',
    background: 'rgba(0,0,0,0.6)', color: '#ef4444',
    padding: '4px 12px', borderRadius: '20px', fontWeight: 'bold',
    animation: 'pulse 1.5s infinite'
  },
  resultArea: { animation: 'fadeIn 0.5s ease-out', marginTop: '1rem' },
  analyzingBox: {
    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px',
    padding: '2rem', borderRadius: '12px', border: '1px solid var(--border)',
    background: 'var(--bg)'
  },
  spinner: {
    width: '28px', height: '28px', border: '3px solid var(--border)',
    borderTopColor: '#3b82f6', borderRadius: '50%',
    animation: 'spin 0.8s linear infinite'
  },
  successBox: {
    display: 'flex', alignItems: 'center', gap: '15px',
    padding: '1.5rem 2rem', borderRadius: '12px',
    border: '1px solid rgba(34,197,94,0.3)', background: 'rgba(34,197,94,0.08)',
    marginBottom: '1.5rem', textAlign: 'left'
  },
  failBox: {
    display: 'flex', alignItems: 'center', gap: '15px',
    padding: '1.5rem 2rem', borderRadius: '12px',
    border: '1px solid rgba(239,68,68,0.3)', background: 'rgba(239,68,68,0.08)',
    marginBottom: '1.5rem', textAlign: 'left'
  },
  button: {
    padding: '0.8rem 1.5rem',
    background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
    color: 'white', border: 'none', borderRadius: '8px',
    fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer',
    width: '100%', maxWidth: '380px'
  },
  retakeButton: {
    padding: '0.8rem 1.5rem', background: 'var(--bg3)', color: 'var(--text)',
    border: '1px solid var(--border)', borderRadius: '8px',
    fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer',
    width: '100%', maxWidth: '380px'
  }
};

export default RoomScan;
