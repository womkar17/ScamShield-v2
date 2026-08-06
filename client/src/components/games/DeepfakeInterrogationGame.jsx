import React, { useState, useEffect } from 'react';
import ThreatAnalysis from './ThreatAnalysis';
import { soundEffects } from '../../utils/soundEffects';

export default function DeepfakeInterrogationGame({ game, onComplete }) {
  const rawData = typeof game.data === 'string'
    ? (() => { try { return JSON.parse(game.data); } catch (e) { return {}; } })()
    : (game.data || {});

  const transcript = rawData.transcript || "Hey [0.2s silence] John. This is [metallic artifact] the CEO. I need you to wire [monotone] $50,000 to the new vendor [0.5s silence] immediately. Don't call me back, I am [metallic artifact] in a meeting.";
  
  const options = rawData.options || [
    { id: 'glitch', text: 'Metallic voice glitches / Audio artifacts', isCorrect: true },
    { id: 'breathing', text: 'Heavy breathing', isCorrect: false },
    { id: 'emotion', text: 'Flat emotional delivery / Monotone', isCorrect: true },
    { id: 'urgency', text: 'Creating false urgency', isCorrect: true }
  ];

  const requiredCorrect = options.filter(o => o.isCorrect).length;

  const [selectedFlags, setSelectedFlags] = useState({});
  const [showThreat, setShowThreat] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => {
    if (progress >= 100) setProgress(0);
    setIsPlaying(!isPlaying);
  };

  const toggleFlag = (id) => {
    if (submitted) return;
    setSelectedFlags(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    let correctPicks = 0;
    let wrongPicks = 0;

    options.forEach(opt => {
      const isPicked = !!selectedFlags[opt.id];
      if (isPicked && opt.isCorrect) correctPicks++;
      if (isPicked && !opt.isCorrect) wrongPicks++;
    });

    const isWin = (correctPicks === requiredCorrect) && (wrongPicks === 0);

    if (isWin) {
      soundEffects.play('win');
    } else {
      soundEffects.play('error');
    }

    setTimeout(() => {
      setShowThreat(true);
    }, 1500);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Audio Forensics Lab</h2>
        <p style={styles.subtitle}>Review the voicemail and flag all deepfake artifacts.</p>
      </div>

      <div style={styles.content}>
        <div style={styles.audioPlayer}>
          <button onClick={togglePlay} style={styles.playButton}>
            {isPlaying ? '⏸' : '▶'}
          </button>
          <div style={styles.progressContainer}>
            <div style={{...styles.progressBar, width: `${progress}%`}}></div>
          </div>
          <div style={styles.time}>{progress === 100 ? '0:12 / 0:12' : `0:0${Math.floor(progress/10)} / 0:12`}</div>
        </div>

        <div style={styles.transcriptBox}>
          <h3 style={styles.boxTitle}>VOICEMAIL TRANSCRIPT (AUTO-GENERATED)</h3>
          <p style={styles.transcriptText}>{transcript}</p>
        </div>

        <div style={styles.optionsGrid}>
          <h3 style={styles.boxTitle}>SELECT DETECTED ANOMALIES:</h3>
          {options.map((opt) => {
            const isSelected = !!selectedFlags[opt.id];
            let borderCol = '#cbd5e1';
            let bgCol = '#ffffff';
            
            if (submitted) {
              if (opt.isCorrect && isSelected) { borderCol = '#22c55e'; bgCol = '#f0fdf4'; }
              if (!opt.isCorrect && isSelected) { borderCol = '#ef4444'; bgCol = '#fef2f2'; }
              if (opt.isCorrect && !isSelected) { borderCol = '#f59e0b'; bgCol = '#fffbeb'; }
            } else if (isSelected) {
              borderCol = '#3b82f6';
              bgCol = '#eff6ff';
            }

            return (
              <div 
                key={opt.id} 
                onClick={() => toggleFlag(opt.id)}
                style={{
                  ...styles.checkboxRow,
                  borderColor: borderCol,
                  backgroundColor: bgCol,
                  cursor: submitted ? 'default' : 'pointer'
                }}
              >
                <div style={{
                  ...styles.checkbox,
                  backgroundColor: isSelected ? '#3b82f6' : 'transparent',
                  borderColor: isSelected ? '#3b82f6' : '#cbd5e1'
                }}>
                  {isSelected && <span style={{color: 'white', fontWeight: 'bold'}}>✓</span>}
                </div>
                <span style={styles.optionText}>{opt.text}</span>
              </div>
            );
          })}
        </div>

        {!showThreat && (
          <button 
            onClick={handleSubmit} 
            disabled={submitted}
            style={{
              ...styles.submitBtn,
              opacity: submitted ? 0.5 : 1,
              cursor: submitted ? 'default' : 'pointer'
            }}
          >
            SUBMIT FORENSIC REPORT
          </button>
        )}
      </div>

      {showThreat && (
        <ThreatAnalysis data={rawData.threatAnalysis} onProceed={() => onComplete(1, 1)} />
      )}
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    maxWidth: '700px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  },
  header: {
    padding: '24px',
    backgroundColor: '#6366f1',
    color: 'white',
    textAlign: 'center'
  },
  title: {
    margin: '0 0 8px 0',
    fontSize: '22px',
    fontWeight: '700'
  },
  subtitle: {
    margin: 0,
    fontSize: '15px',
    opacity: 0.9
  },
  content: {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  audioPlayer: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '16px',
    backgroundColor: '#f8fafc',
    borderRadius: '8px',
    border: '1px solid #e2e8f0'
  },
  playButton: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#6366f1',
    color: 'white',
    border: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '18px',
    cursor: 'pointer',
    flexShrink: 0
  },
  progressContainer: {
    flex: 1,
    height: '8px',
    backgroundColor: '#e2e8f0',
    borderRadius: '4px',
    overflow: 'hidden'
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#6366f1',
    transition: 'width 0.1s linear'
  },
  time: {
    fontSize: '13px',
    color: '#64748b',
    fontWeight: '500',
    minWidth: '70px',
    textAlign: 'right'
  },
  transcriptBox: {
    backgroundColor: '#f1f5f9',
    padding: '16px',
    borderRadius: '8px',
    borderLeft: '4px solid #6366f1'
  },
  boxTitle: {
    margin: '0 0 12px 0',
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#64748b',
    letterSpacing: '1px'
  },
  transcriptText: {
    margin: 0,
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#334155',
    fontFamily: 'Georgia, serif',
    fontStyle: 'italic'
  },
  optionsGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  checkboxRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 16px',
    border: '1px solid',
    borderRadius: '8px',
    transition: 'all 0.2s'
  },
  checkbox: {
    width: '20px',
    height: '20px',
    border: '2px solid',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '14px',
    flexShrink: 0
  },
  optionText: {
    fontSize: '15px',
    color: '#1e293b',
    fontWeight: '500'
  },
  submitBtn: {
    width: '100%',
    padding: '16px',
    backgroundColor: '#6366f1',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
    letterSpacing: '1px'
  }
};
