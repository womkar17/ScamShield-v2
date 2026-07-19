import React, { useState, useEffect } from 'react';
import { soundEffects } from '../../utils/soundEffects';

const SwipeGame = ({ game, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [feedback, setFeedback] = useState(null); 
  const [showAnalysis, setShowAnalysis] = useState(false);
  
  const [dragStartX, setDragStartX] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Fallback in case game.data is an array (old data) or object with items
  const items = Array.isArray(game.data) ? game.data : (game.data?.items || []);
  const currentItem = items[currentIndex];

  const handleChoice = (isScamChoice) => {
    if (feedback) return; 

    const isCorrect = isScamChoice === currentItem.isScam;

    if (isCorrect) {
      soundEffects.play('success');
      setFeedback({ type: 'success', message: 'Correct!', slideOut: true, direction: isScamChoice ? -1 : 1 });
      setScore(s => s + 1);
      setTimeout(() => {
        nextItem(true);
      }, 800);
    } else {
      soundEffects.play('error');
      setFeedback({ type: 'error', message: currentItem.explanation || 'Incorrect! You lost a life.', slideOut: false });
      setLives(l => l - 1);
      setTimeout(() => {
        if (lives - 1 === 0) {
          setShowAnalysis(true);
        } else {
          nextItem(false);
        }
      }, 2000);
    }
  };

  const nextItem = (wasSuccess) => {
    setFeedback(null);
    setDragX(0);
    if (currentIndex + 1 >= items.length) {
      setShowAnalysis(true);
    } else {
      setCurrentIndex(c => c + 1);
    }
  };

  const handleStart = (clientX) => {
    if (feedback || showAnalysis) return;
    setDragStartX(clientX);
    setIsDragging(true);
  };
  
  const handleMove = (clientX) => {
    if (!isDragging) return;
    setDragX(clientX - dragStartX);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragX > 100) {
      handleChoice(false); // Safe
    } else if (dragX < -100) {
      handleChoice(true); // Scam
    }
    setDragX(0);
  };

  if (showAnalysis) {
    const analysis = game.data?.threatAnalysis || {};
    return (
      <div style={styles.analysisOverlay}>
        <div style={styles.analysisCard}>
          <h2 style={styles.analysisTitle}>Threat Analysis Complete</h2>
          <div style={styles.analysisScore}>Final Score: {score} / {items.length}</div>
          
          <div style={styles.analysisSection}>
            <h3 style={styles.analysisSubtitle}>Psychology</h3>
            <p style={styles.analysisText}>{analysis.psychology || 'No psychological data available.'}</p>
          </div>
          <div style={styles.analysisSection}>
            <h3 style={styles.analysisSubtitle}>Payload</h3>
            <p style={styles.analysisText}>{analysis.payload || 'No payload data available.'}</p>
          </div>
          <div style={styles.analysisSection}>
            <h3 style={styles.analysisSubtitle}>Defense</h3>
            <p style={styles.analysisText}>{analysis.defense || 'No defense data available.'}</p>
          </div>
          <button 
            style={styles.continueBtn} 
            onClick={() => onComplete(score, items.length)}
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  if (!currentItem) return null;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.scoreBoard}>
          <span style={styles.statText}>Score: {score}</span>
          <span style={styles.statText}>Lives: {'❤️'.repeat(lives)}</span>
        </div>
        <div style={styles.progress}>
          {currentIndex + 1} / {items.length}
        </div>
      </div>

      <div style={styles.instructions}>
        Swipe Left for <strong>Scam</strong>, Swipe Right for <strong>Safe</strong>
      </div>

      <div 
        style={{
          ...styles.card,
          ...(feedback?.type === 'success' ? styles.cardSuccess : {}),
          ...(feedback?.type === 'error' ? styles.cardError : {}),
          transform: feedback?.slideOut 
            ? `translateX(${feedback.direction * 150}%) rotate(${feedback.direction * 15}deg)` 
            : `translateX(${dragX}px) rotate(${dragX * 0.05}deg)`,
          transition: isDragging ? 'none' : 'transform 0.4s ease, background-color 0.4s ease, border-color 0.4s ease',
          cursor: isDragging ? 'grabbing' : 'grab',
          opacity: feedback?.slideOut ? 0 : 1
        }}
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
      >
        <div style={styles.cardContent}>
          <h3 style={styles.contentTitle}>{currentItem.type === 'email' ? 'Email Address' : 'URL'}</h3>
          <p style={styles.contentText}>{currentItem.content}</p>
        </div>
        
        {feedback && (
          <div style={{...styles.feedbackBox, ...(feedback.type === 'success' ? styles.feedbackSuccess : styles.feedbackError)}}>
            {feedback.message}
          </div>
        )}

        <div style={styles.actions}>
          <button 
            onClick={() => handleChoice(true)} 
            style={{...styles.btn, ...styles.btnScam}}
            disabled={!!feedback}
          >
            Scam (Left)
          </button>
          <button 
            onClick={() => handleChoice(false)} 
            style={{...styles.btn, ...styles.btnSafe}}
            disabled={!!feedback}
          >
            Safe (Right)
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: '"Inter", sans-serif',
    overflow: 'hidden'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '10px',
    alignItems: 'center'
  },
  instructions: {
    marginBottom: '20px',
    color: '#666',
    fontSize: '0.9rem',
    textAlign: 'center'
  },
  scoreBoard: {
    display: 'flex',
    gap: '15px'
  },
  statText: {
    fontWeight: 'bold',
    fontSize: '1.1rem',
    color: '#333'
  },
  progress: {
    color: '#666',
    fontWeight: '600'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '16px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    width: '100%',
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    position: 'relative',
    userSelect: 'none',
    boxSizing: 'border-box'
  },
  cardSuccess: {
    backgroundColor: '#e6fffa',
    borderColor: '#38b2ac',
    borderWidth: '2px',
    borderStyle: 'solid'
  },
  cardError: {
    backgroundColor: '#fff5f5',
    borderColor: '#fc8181',
    borderWidth: '2px',
    borderStyle: 'solid',
    animation: 'shake 0.5s'
  },
  cardContent: {
    textAlign: 'center',
    marginBottom: '10px',
    pointerEvents: 'none'
  },
  contentTitle: {
    fontSize: '0.9rem',
    color: '#a0aec0',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '10px'
  },
  contentText: {
    fontSize: '1.4rem',
    color: '#2d3748',
    wordBreak: 'break-all',
    fontWeight: '600'
  },
  actions: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '10px'
  },
  btn: {
    flex: 1,
    padding: '15px 20px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    color: '#fff',
    transition: 'transform 0.2s, opacity 0.2s'
  },
  btnSafe: {
    backgroundColor: '#48bb78',
  },
  btnScam: {
    backgroundColor: '#f56565',
  },
  feedbackBox: {
    padding: '12px',
    borderRadius: '8px',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1rem'
  },
  feedbackSuccess: {
    color: '#276749',
    backgroundColor: '#c6f6d5'
  },
  feedbackError: {
    color: '#9b2c2c',
    backgroundColor: '#fed7d7'
  },
  analysisOverlay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '20px',
    boxSizing: 'border-box',
    fontFamily: '"Inter", sans-serif'
  },
  analysisCard: {
    backgroundColor: '#fff',
    borderRadius: '16px',
    padding: '30px',
    maxWidth: '500px',
    width: '100%',
    boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  analysisTitle: {
    margin: '0',
    color: '#2d3748',
    fontSize: '1.5rem',
    textAlign: 'center'
  },
  analysisScore: {
    textAlign: 'center',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#4299e1',
    marginBottom: '10px'
  },
  analysisSection: {
    backgroundColor: '#f7fafc',
    padding: '15px',
    borderRadius: '8px'
  },
  analysisSubtitle: {
    margin: '0 0 5px 0',
    fontSize: '1.1rem',
    color: '#4a5568'
  },
  analysisText: {
    margin: '0',
    color: '#2d3748',
    lineHeight: '1.5'
  },
  continueBtn: {
    marginTop: '15px',
    padding: '15px',
    backgroundColor: '#4299e1',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer'
  }
};

export default SwipeGame;
