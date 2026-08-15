import React, { useState, useEffect } from 'react';

const EyeCalibration = ({ startCalibration, markCalibrated, onComplete }) => {
  const [clickedDots, setClickedDots] = useState([]);
  const [showInstructions, setShowInstructions] = useState(true);
  
  // 5 dots: 4 corners + 1 center. Center dot appears AFTER corners are done.
  const cornerDots = [
    { id: 1, top: '10%', left: '10%' },
    { id: 2, top: '10%', right: '10%' },
    { id: 3, bottom: '10%', left: '10%' },
    { id: 4, bottom: '10%', right: '10%' },
  ];

  const centerDot = { id: 5, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' };

  const allCornersDone = clickedDots.length >= 4;

  useEffect(() => {
    startCalibration();
    // Hide instruction card after 3 seconds so center dot will be visible
    const timer = setTimeout(() => setShowInstructions(false), 3000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDotClick = (id) => {
    if (clickedDots.includes(id)) return;

    const newClicked = [...clickedDots, id];
    setClickedDots(newClicked);
      
    if (newClicked.length === 5) {
      markCalibrated();
      setTimeout(onComplete, 1000);
    }
  };

  const activeDots = allCornersDone ? [centerDot] : cornerDots;

  return (
    <div style={styles.container}>
      {/* Instruction card — only shown briefly, then fades away so center dot is accessible */}
      {showInstructions && (
        <div style={styles.content}>
          <h2 style={styles.title}>👁️ Eye Tracking Calibration</h2>
          <p style={styles.subtitle}>
            We need to calibrate the eye tracker. <br/>
            <strong>Please look directly at each red dot and click it once.</strong>
          </p>
        </div>
      )}

      {/* Floating progress indicator — always visible, but positioned out of center dot's way */}
      <div style={styles.progressBadge}>
        {clickedDots.length < 5 
          ? `Progress: ${clickedDots.length} / 5` 
          : '✅ Calibration Complete! Preparing exam...'}
      </div>

      {/* Phase label */}
      {allCornersDone && clickedDots.length < 5 && (
        <div style={styles.centerPrompt}>
          Now click the center dot ↓
        </div>
      )}

      {/* Render dots */}
      {activeDots.map(dot => {
        const isClicked = clickedDots.includes(dot.id);
        return (
          <button
            key={dot.id}
            onClick={() => handleDotClick(dot.id)}
            style={{
              ...styles.dot,
              top: dot.top,
              bottom: dot.bottom,
              left: dot.left,
              right: dot.right,
              transform: dot.transform,
              background: isClicked ? '#22c55e' : '#ef4444',
              animation: isClicked ? 'none' : 'pulse 2s infinite',
              opacity: isClicked ? 0.5 : 1,
              pointerEvents: isClicked ? 'none' : 'auto',
              // Center dot is larger for visibility
              width: dot.id === 5 ? '40px' : '30px',
              height: dot.id === 5 ? '40px' : '30px',
            }}
            title={`Calibration point ${dot.id}`}
          />
        );
      })}
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'var(--bg)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    background: 'var(--bg2)',
    padding: '2.5rem',
    borderRadius: '16px',
    border: '1px solid var(--border)',
    textAlign: 'center',
    maxWidth: '500px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
    zIndex: 10,
    animation: 'fadeIn 0.5s ease'
  },
  title: {
    margin: '0 0 1rem 0',
    color: 'var(--text)',
    fontSize: '1.8rem'
  },
  subtitle: {
    margin: 0,
    color: 'var(--text2)',
    fontSize: '1.1rem',
    lineHeight: 1.5
  },
  progressBadge: {
    position: 'absolute',
    bottom: '3%',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'var(--bg2)',
    padding: '0.6rem 1.5rem',
    borderRadius: '30px',
    border: '1px solid var(--border)',
    color: 'var(--blue, #3b82f6)',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    zIndex: 20,
    boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
  },
  centerPrompt: {
    position: 'absolute',
    top: '38%',
    left: '50%',
    transform: 'translateX(-50%)',
    color: '#f59e0b',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    zIndex: 20,
    textShadow: '0 2px 8px rgba(0,0,0,0.5)',
    animation: 'pulse 1.5s infinite'
  },
  dot: {
    position: 'absolute',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    border: '3px solid white',
    cursor: 'pointer',
    zIndex: 15,
    boxShadow: '0 0 15px rgba(239, 68, 68, 0.6), 0 0 30px rgba(239, 68, 68, 0.3)'
  }
};

export default EyeCalibration;
