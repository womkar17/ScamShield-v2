import React, { useState, useEffect } from 'react';
import Certificate from './Certificate';

const ExamResults = ({ score, total, isPassed, violationLog, roomScanImages, onRetake, userName }) => {
  const [cooldownRemaining, setCooldownRemaining] = useState('');
  const percent = Math.round((score / total) * 100);
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  useEffect(() => {
    if (isPassed) return;
    
    // Check cooldown
    const updateCooldown = () => {
      const lastAttempt = localStorage.getItem('ss_exam_last_fail');
      if (!lastAttempt) return;
      
      const failTime = parseInt(lastAttempt, 10);
      const now = Date.now();
      const diff = (failTime + 24 * 60 * 60 * 1000) - now;
      
      if (diff <= 0) {
        setCooldownRemaining(null);
      } else {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        setCooldownRemaining(`${hours}h ${minutes}m`);
      }
    };
    
    updateCooldown();
    const interval = setInterval(updateCooldown, 60000); // update every minute
    return () => clearInterval(interval);
  }, [isPassed]);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={{ fontSize: '5rem', marginBottom: '1rem', textAlign: 'center' }}>
          {isPassed ? '🎓' : '⚠️'}
        </div>
        
        <h2 style={{ ...styles.title, color: isPassed ? '#22c55e' : '#ef4444' }}>
          {isPassed ? 'Exam Passed!' : 'Exam Failed'}
        </h2>
        
        <div style={styles.scoreBoard}>
          <div style={styles.scoreItem}>
            <span style={styles.scoreLabel}>Score</span>
            <span style={styles.scoreValue}>{score} / {total}</span>
          </div>
          <div style={styles.scoreItem}>
            <span style={styles.scoreLabel}>Percentage</span>
            <span style={styles.scoreValue}>{percent}%</span>
          </div>
          <div style={styles.scoreItem}>
            <span style={styles.scoreLabel}>Status</span>
            <span style={{ ...styles.scoreValue, color: isPassed ? '#22c55e' : '#ef4444' }}>
              {isPassed ? 'PASSED' : 'FAILED'}
            </span>
          </div>
        </div>

        {violationLog.length > 0 && (
          <div style={styles.logSection}>
            <h3 style={styles.logTitle}>Violation Log</h3>
            <ul style={styles.logList}>
              {violationLog.map((log, i) => (
                <li key={i} style={styles.logItem}>{log}</li>
              ))}
            </ul>
          </div>
        )}

        {roomScanImages.length > 0 && (
          <div style={styles.logSection}>
            <h3 style={styles.logTitle}>Room Scan Verification</h3>
            <div style={styles.gallery}>
              {roomScanImages.map((img, i) => (
                <img key={i} src={img} alt={`Room scan ${i+1}`} style={styles.thumbnail} />
              ))}
            </div>
          </div>
        )}

        <div style={styles.actionSection}>
          {isPassed ? (
            <Certificate userName={userName} score={score} total={total} date={today} />
          ) : (
            <div style={styles.failActions}>
              <p style={{ color: 'var(--text2)', marginBottom: '1rem' }}>
                You must achieve at least 55% ({Math.ceil(total * 0.55)} out of {total} correct) to pass the proctored exam. 
                <br/>Any strikes accrued during the exam result in an automatic failure (0 score).
              </p>
              
              {cooldownRemaining ? (
                <div style={styles.cooldownBox}>
                  🔒 You must wait <strong>{cooldownRemaining}</strong> before retaking the exam.
                </div>
              ) : (
                <button onClick={onRetake} style={styles.retakeButton}>
                  Retake Exam
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '3rem 1rem',
    display: 'flex',
    justifyContent: 'center',
    minHeight: '100vh',
    background: 'var(--bg)'
  },
  card: {
    background: 'var(--bg2)',
    padding: '3rem',
    borderRadius: '16px',
    border: '1px solid var(--border)',
    maxWidth: '1000px',
    width: '100%',
    boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
    overflow: 'hidden'
  },
  title: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '2rem',
    fontWeight: '900'
  },
  scoreBoard: {
    display: 'flex',
    justifyContent: 'center',
    gap: '4rem',
    padding: '2rem',
    background: 'var(--bg)',
    borderRadius: '12px',
    marginBottom: '2rem'
  },
  scoreItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  scoreLabel: {
    color: 'var(--text2)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontSize: '0.9rem',
    marginBottom: '0.5rem'
  },
  scoreValue: {
    color: 'var(--text)',
    fontSize: '2.5rem',
    fontWeight: 'bold'
  },
  logSection: {
    marginBottom: '2rem',
    padding: '1.5rem',
    background: 'rgba(239, 68, 68, 0.05)',
    border: '1px solid rgba(239, 68, 68, 0.2)',
    borderRadius: '12px'
  },
  logTitle: {
    margin: '0 0 1rem 0',
    color: '#ef4444',
    fontSize: '1.2rem',
    borderBottom: '1px solid rgba(239, 68, 68, 0.2)',
    paddingBottom: '0.5rem'
  },
  logList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  logItem: {
    color: 'var(--text)',
    fontFamily: 'monospace',
    fontSize: '0.95rem'
  },
  gallery: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  },
  thumbnail: {
    width: '150px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '6px',
    border: '1px solid var(--border)'
  },
  actionSection: {
    marginTop: '3rem',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },
  failActions: {
    width: '100%',
    maxWidth: '500px'
  },
  cooldownBox: {
    background: 'var(--bg3)',
    border: '1px solid var(--border)',
    padding: '1.5rem',
    borderRadius: '8px',
    color: 'var(--text2)',
    fontSize: '1.1rem'
  },
  retakeButton: {
    width: '100%',
    padding: '1rem',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
  }
};

export default ExamResults;
