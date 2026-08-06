import React, { useState } from 'react';
import ThreatAnalysis from './ThreatAnalysis';
import { soundEffects } from '../../utils/soundEffects';

export default function ScamSimulatorGame({ game, onComplete }) {
  const rawData = typeof game.data === 'string'
    ? (() => { try { return JSON.parse(game.data); } catch (e) { return {}; } })()
    : (game.data || {});

  const stages = rawData.stages || [
    {
      prompt: 'TARGET ACQUIRED: GlobalTech HR Department. Objective: Steal employee database. \n\nSelect Initial Access Vector:',
      options: [
        { text: 'run exploit_eternalblue -target 192.168.1.0/24', isCorrect: false, feedback: '[FAILED] GlobalTech patched this vulnerability years ago. Intrusion Detection System triggered.' },
        { text: 'send_phish -template "Urgent Payroll Update" -target hr_group', isCorrect: true, feedback: '[SUCCESS] Phishing email bypassed spam filters. One user clicked the link.' }
      ]
    },
    {
      prompt: 'We have a hook. The user is at the fake login page. What payload do we serve?',
      options: [
        { text: 'serve_payload -type "Ransomware"', isCorrect: false, feedback: '[FAILED] Endpoint detection quarantined the ransomware payload immediately. Access lost.' },
        { text: 'serve_payload -type "CredentialHarvester"', isCorrect: true, feedback: '[SUCCESS] User entered credentials. We have HR_Admin access.' }
      ]
    }
  ];

  const [currentStage, setCurrentStage] = useState(0);
  const [history, setHistory] = useState([]);
  const [showThreat, setShowThreat] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleOption = (option) => {
    if (showThreat || failed) return;

    setHistory(prev => [
      ...prev,
      { type: 'command', text: '> ' + option.text },
      { type: 'response', text: option.feedback, success: option.isCorrect }
    ]);

    if (option.isCorrect) {
      soundEffects.play('success');
      if (currentStage + 1 < stages.length) {
        setCurrentStage(prev => prev + 1);
      } else {
        setTimeout(() => {
          soundEffects.play('win');
          setShowThreat(true);
        }, 1500);
      }
    } else {
      soundEffects.play('error');
      setFailed(true);
      setTimeout(() => {
        setShowThreat(true);
      }, 2000);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>SCAM SIMULATOR: ATTACKER POV</h2>
        <p style={styles.subtitle}>Think like a hacker to understand their methods.</p>
      </div>

      <div style={styles.terminal}>
        <div style={styles.history}>
          <div style={styles.logLine}>[SYSTEM] Initializing attack simulation...</div>
          <div style={styles.logLine}>[SYSTEM] Target profile loaded.</div>
          <br/>
          
          {history.map((line, i) => (
            <div 
              key={i} 
              style={{
                ...styles.logLine, 
                color: line.type === 'command' ? '#60a5fa' : (line.success ? '#4ade80' : '#f87171'),
                marginBottom: line.type === 'response' ? '12px' : '4px'
              }}
            >
              {line.text}
            </div>
          ))}
          
          {!showThreat && !failed && (
            <div style={{ ...styles.logLine, color: '#e2e8f0', marginTop: '12px', whiteSpace: 'pre-wrap' }}>
              {stages[currentStage].prompt}
            </div>
          )}
        </div>

        {!showThreat && !failed && (
          <div style={styles.optionsContainer}>
            {stages[currentStage].options.map((opt, i) => (
              <button 
                key={i} 
                onClick={() => handleOption(opt)}
                style={styles.optionBtn}
                onMouseOver={e => e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.15)'}
                onMouseOut={e => e.currentTarget.style.backgroundColor = 'rgba(15, 23, 42, 0.8)'}
              >
                <span style={{ color: '#60a5fa', marginRight: '8px' }}>[{i+1}]</span> {opt.text}
              </button>
            ))}
          </div>
        )}
      </div>

      {showThreat && (
        <ThreatAnalysis data={rawData.threatAnalysis} onProceed={() => onComplete(failed ? 0 : 1, 1)} />
      )}
    </div>
  );
}

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    maxWidth: '750px',
    margin: '0 auto',
    backgroundColor: '#020617',
    borderRadius: '12px',
    overflow: 'hidden',
    border: '1px solid #334155',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    fontFamily: '"Fira Code", "Courier New", monospace'
  },
  header: {
    padding: '16px 24px',
    backgroundColor: '#0f172a',
    borderBottom: '1px solid #334155'
  },
  title: {
    margin: '0 0 4px 0',
    fontSize: '18px',
    color: '#38bdf8',
    letterSpacing: '1px'
  },
  subtitle: {
    margin: 0,
    color: '#94a3b8',
    fontSize: '13px'
  },
  terminal: {
    padding: '24px',
    minHeight: '350px',
    display: 'flex',
    flexDirection: 'column'
  },
  history: {
    flex: 1,
    overflowY: 'auto',
    marginBottom: '20px'
  },
  logLine: {
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#cbd5e1'
  },
  optionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    borderTop: '1px dashed #334155',
    paddingTop: '20px'
  },
  optionBtn: {
    textAlign: 'left',
    padding: '12px 16px',
    backgroundColor: 'rgba(15, 23, 42, 0.8)',
    border: '1px solid #334155',
    borderRadius: '6px',
    color: '#e2e8f0',
    fontFamily: 'inherit',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    display: 'flex'
  }
};
