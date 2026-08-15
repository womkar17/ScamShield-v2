import React, { useState, useEffect } from 'react';

const ExamHUD = ({ currentSimNum, totalSims, score, timeLeftFormatted, isUrgent, strikes, gazeWarnings, faceDetectionStatus, eyeTrackingStatus }) => {
  // Live diagnostic state — polls statusRefs every second
  const [diagnostics, setDiagnostics] = useState({ camera: false, ml: false, face: false, frames: 0, etFrames: 0 });
  
  useEffect(() => {
    const interval = setInterval(() => {
      const fd = faceDetectionStatus?.current || {};
      const et = eyeTrackingStatus?.current || {};
      setDiagnostics({
        camera: fd.cameraReady || et.cameraReady,
        ml: et.mlLoaded,
        face: et.faceDetected,
        frames: (fd.framesProcessed || 0) + (et.framesProcessed || 0),
        etFrames: et.framesProcessed || 0,
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [faceDetectionStatus, eyeTrackingStatus]);

  return (
    <>
      {/* Top HUD */}
      <div style={styles.topHud}>
        <div style={styles.liveIndicator}>
          <div style={styles.liveDot} />
          <span>LIVE PROCTORING</span>
        </div>
        
        <div style={styles.centerStats}>
          <div style={styles.statBox}>
            <span style={styles.statLabel}>Simulation</span>
            <span style={styles.statValue}>{currentSimNum} / {totalSims}</span>
          </div>
        </div>

        <div style={{ ...styles.timer, color: isUrgent ? '#ef4444' : 'var(--text)', animation: isUrgent ? 'pulse 1.5s infinite' : 'none' }}>
          ⏱️ {timeLeftFormatted}
        </div>
      </div>

      {/* Bottom HUD */}
      <div style={styles.bottomHud}>
        <div style={styles.strikes}>
          ⚠️ Strikes: 
          <span style={{ color: strikes > 0 ? '#ef4444' : 'var(--text2)', fontWeight: 'bold', marginLeft: '5px' }}>
            {strikes} (1 = Fail)
          </span>
        </div>
        
        {/* Live diagnostic badge */}
        <div style={styles.diagnosticBadge}>
          <span title="Camera active" style={{ color: diagnostics.camera ? '#22c55e' : '#ef4444' }}>
            📷 {diagnostics.camera ? '✓' : '✗'}
          </span>
          <span title="ML model loaded" style={{ color: diagnostics.ml ? '#22c55e' : '#f59e0b' }}>
            🧠 {diagnostics.ml ? '✓' : '…'}
          </span>
          <span title="Face detected" style={{ color: (!diagnostics.ml && diagnostics.etFrames < 10) ? '#f59e0b' : (diagnostics.face ? '#22c55e' : '#ef4444') }}>
            👤 {(!diagnostics.ml && diagnostics.etFrames < 10) ? '…' : (diagnostics.face ? '✓' : '✗')}
          </span>
          <span title="Frames processed" style={{ color: 'var(--text2)', fontFamily: 'monospace', fontSize: '0.75rem' }}>
            f:{diagnostics.frames}
          </span>
        </div>

        <div style={styles.tracking}>
          👁️ Eye Tracking:
          <span style={{ color: gazeWarnings > 0 ? '#f59e0b' : '#22c55e', fontWeight: 'bold', marginLeft: '5px' }}>
            {gazeWarnings === 0 ? 'Optimal' : `Warning (${gazeWarnings})`}
          </span>
        </div>
      </div>
    </>
  );
};

const styles = {
  topHud: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '60px',
    background: 'var(--bg2)',
    borderBottom: '1px solid var(--border)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 1.5rem',
    zIndex: 100,
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
  },
  liveIndicator: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#ef4444',
    fontWeight: '900',
    fontSize: '0.85rem',
    letterSpacing: '1px'
  },
  liveDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: '#ef4444',
    animation: 'pulse 1s infinite'
  },
  centerStats: {
    display: 'flex',
    gap: '2rem'
  },
  statBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  statLabel: {
    fontSize: '0.75rem',
    color: 'var(--text2)',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  statValue: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: 'var(--text)'
  },
  timer: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    fontFamily: 'monospace'
  },
  bottomHud: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '40px',
    background: 'var(--bg2)',
    borderTop: '1px solid var(--border)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 1.5rem',
    zIndex: 100,
    fontSize: '0.9rem'
  },
  strikes: {
    color: 'var(--text2)',
    display: 'flex',
    alignItems: 'center'
  },
  diagnosticBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '0.8rem',
    padding: '2px 10px',
    background: 'rgba(0,0,0,0.2)',
    borderRadius: '12px',
    border: '1px solid var(--border)',
  },
  tracking: {
    color: 'var(--text2)',
    display: 'flex',
    alignItems: 'center'
  }
};

export default ExamHUD;
