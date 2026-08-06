import React, { useState } from 'react';
import ThreatAnalysis from './ThreatAnalysis';
import { soundEffects } from '../../utils/soundEffects';

export default function EmailThreadGame({ game, onComplete }) {
  const rawData = typeof game.data === 'string'
    ? (() => { try { return JSON.parse(game.data); } catch (e) { return {}; } })()
    : (game.data || {});

  const emails = rawData.emails || [
    { id: 1, sender: 'CEO <ceo@company.com>', subject: 'Re: Q3 Report', content: 'Good work on the report. Are we ready for the board meeting?', timestamp: 'Oct 12, 09:14 AM', isSuspicious: false },
    { id: 2, sender: 'You <you@company.com>', subject: 'Re: Q3 Report', content: 'Yes, I have prepared all the slides. I will present them at 2 PM.', timestamp: 'Oct 12, 09:45 AM', isSuspicious: false },
    { id: 3, sender: 'CEO <ceo@c0mpany.com>', subject: 'Re: Q3 Report', content: 'Actually, change of plans. I need you to wire $50,000 to our new vendor ASAP before the meeting. Attached are the wire instructions.', timestamp: 'Oct 12, 10:02 AM', isSuspicious: true }
  ];

  const [selectedEmail, setSelectedEmail] = useState(null);
  const [showThreat, setShowThreat] = useState(false);
  const [score, setScore] = useState(0);

  const handleSelect = (email) => {
    if (showThreat) return;
    setSelectedEmail(email.id);
    
    if (email.isSuspicious) {
      soundEffects.play('success');
      setScore(1);
    } else {
      soundEffects.play('error');
      setScore(0);
    }
    
    setTimeout(() => {
      if (email.isSuspicious) soundEffects.play('win');
      setShowThreat(true);
    }, 1500);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Email Thread Investigator</h2>
        <p style={styles.subtitle}>Click the exact email where the thread gets hijacked by a scammer.</p>
      </div>

      <div style={styles.inbox}>
        {emails.map((email) => {
          const isSelected = selectedEmail === email.id;
          const isCorrect = isSelected && email.isSuspicious;
          const isWrong = isSelected && !email.isSuspicious;
          
          let borderStyle = '1px solid #e2e8f0';
          if (isSelected) {
            borderStyle = isCorrect ? '2px solid #22c55e' : '2px solid #ef4444';
          }

          return (
            <div 
              key={email.id} 
              onClick={() => handleSelect(email)}
              style={{
                ...styles.emailCard,
                border: borderStyle,
                backgroundColor: isSelected ? (isCorrect ? '#f0fdf4' : '#fef2f2') : '#ffffff',
                cursor: showThreat ? 'default' : 'pointer'
              }}
            >
              <div style={styles.emailHeader}>
                <div style={styles.senderInfo}>
                  <div style={styles.avatar}>{email.sender.charAt(0).toUpperCase()}</div>
                  <div>
                    <div style={styles.senderName}>{email.sender}</div>
                    <div style={styles.subject}>{email.subject}</div>
                  </div>
                </div>
                <div style={styles.timestamp}>{email.timestamp}</div>
              </div>
              <div style={styles.emailBody}>{email.content}</div>
              
              {isSelected && (
                <div style={{ ...styles.feedbackLabel, color: isCorrect ? '#16a34a' : '#dc2626' }}>
                  {isCorrect ? '✓ Threat Identified' : '✗ Safe Email'}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {showThreat && (
        <ThreatAnalysis data={rawData.threatAnalysis} onProceed={() => onComplete(score, 1)} />
      )}
    </div>
  );
}

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    maxWidth: '700px',
    margin: '0 auto',
    backgroundColor: '#f8fafc',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  },
  header: {
    padding: '24px',
    backgroundColor: '#1e293b',
    color: 'white',
    textAlign: 'center'
  },
  title: {
    margin: '0 0 8px 0',
    fontSize: '20px'
  },
  subtitle: {
    margin: 0,
    color: '#94a3b8',
    fontSize: '14px'
  },
  inbox: {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    backgroundColor: '#f1f5f9'
  },
  emailCard: {
    padding: '16px',
    borderRadius: '8px',
    transition: 'all 0.2s ease',
    position: 'relative'
  },
  emailHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '12px',
    borderBottom: '1px solid #f1f5f9',
    paddingBottom: '12px'
  },
  senderInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  avatar: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: '#3b82f6',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '16px'
  },
  senderName: {
    fontWeight: 'bold',
    color: '#0f172a',
    fontSize: '14px'
  },
  subject: {
    color: '#475569',
    fontSize: '13px',
    marginTop: '2px'
  },
  timestamp: {
    color: '#94a3b8',
    fontSize: '12px'
  },
  emailBody: {
    color: '#334155',
    fontSize: '14px',
    lineHeight: '1.5'
  },
  feedbackLabel: {
    position: 'absolute',
    top: '16px',
    right: '16px',
    fontWeight: 'bold',
    fontSize: '14px',
    backgroundColor: 'white',
    padding: '4px 8px',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
  }
};
