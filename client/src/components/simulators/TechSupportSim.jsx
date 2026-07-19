import React, { useState } from 'react';

export default function TechSupportSim({ onComplete }) {
  const [step, setStep] = useState('alert'); // alert | chat | remote | done
  const [messages, setMessages] = useState([
    { sender: 'System', text: 'Connecting to Certified Microsoft Support...' },
    { sender: 'Agent Kevin', text: 'HELLO! This is Kevin from Microsoft Security Operations. Your computer has reported Critical Alert #0x80072ee7 (Trojan.Zeus.Spyware).' }
  ]);
  const [userChoice, setUserChoice] = useState(null);

  const handleReply = (replyType) => {
    if (replyType === 'allow_remote') {
      setUserChoice('vulnerable');
      setMessages(prev => [
        ...prev,
        { sender: 'You', text: 'Okay, please help me fix it. I will download the tool.' },
        { sender: 'Agent Kevin', text: 'Good. Click the download link below to install AnyDesk Remote Support so I can take control of your screen and delete the hackers.' }
      ]);
      setStep('remote');
    } else {
      setUserChoice('safe');
      setMessages(prev => [
        ...prev,
        { sender: 'You', text: 'Microsoft never calls or puts popup numbers. I am closing this browser window.' },
        { sender: 'Agent Kevin', text: 'WAIT!! If you close this window your hard drive will be permanently locked!!' }
      ]);
      setTimeout(() => {
        onComplete(['Identified Fake Tech Support Alert']);
      }, 2000);
    }
  };

  return (
    <div style={{
      maxWidth: '620px',
      margin: '0 auto',
      background: '#0f172a',
      border: '2px solid #ef4444',
      borderRadius: '12px',
      overflow: 'hidden',
      color: '#fff',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      {/* Fake OS Header */}
      <div style={{
        background: '#ef4444',
        padding: '12px 18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontWeight: 'bold'
      }}>
        <span>⚠️ CRITICAL SYSTEM SECURITY ALERT #0x80072ee7</span>
        <span style={{ cursor: 'pointer', background: '#991b1b', padding: '2px 8px', borderRadius: '4px' }}>X</span>
      </div>

      <div style={{ padding: '20px' }}>
        <div style={{
          background: 'rgba(239, 68, 68, 0.15)',
          borderLeft: '4px solid #ef4444',
          padding: '14px',
          marginBottom: '18px',
          borderRadius: '6px'
        }}>
          <h4 style={{ margin: '0 0 8px 0', color: '#fca5a5' }}>Suspicious Activity Detected</h4>
          <p style={{ margin: 0, fontSize: '0.92rem', lineHeight: '1.4' }}>
            Access to your financial data and passwords has been compromised. Do not restart your computer. Contact Technical Support immediately.
          </p>
        </div>

        {/* Live Support Chat UI */}
        <div style={{
          background: '#1e293b',
          borderRadius: '8px',
          padding: '15px',
          height: '240px',
          overflowY: 'auto',
          marginBottom: '18px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          {messages.map((m, idx) => (
            <div key={idx} style={{
              alignSelf: m.sender === 'You' ? 'flex-end' : 'flex-start',
              background: m.sender === 'You' ? '#3b82f6' : '#334155',
              padding: '10px 14px',
              borderRadius: '8px',
              maxWidth: '85%',
              fontSize: '0.9rem'
            }}>
              <strong style={{ display: 'block', fontSize: '0.75rem', opacity: 0.8, marginBottom: '4px' }}>{m.sender}</strong>
              {m.text}
            </div>
          ))}
        </div>

        {step === 'alert' && (
          <div>
            <p style={{ fontSize: '0.9rem', marginBottom: '12px', color: '#cbd5e1' }}>
              How do you respond to Agent Kevin's request?
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={() => handleReply('allow_remote')}
                style={{
                  flex: 1,
                  background: '#ef4444',
                  color: '#fff',
                  border: 'none',
                  padding: '12px',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Download Remote Tool & Let Him Fix It
              </button>
              <button
                onClick={() => handleReply('decline')}
                style={{
                  flex: 1,
                  background: '#10b981',
                  color: '#fff',
                  border: 'none',
                  padding: '12px',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Hang Up & Close Browser (Fake Alert)
              </button>
            </div>
          </div>
        )}

        {step === 'remote' && (
          <div style={{ textAlign: 'center', padding: '10px' }}>
            <div style={{
              background: '#991b1b',
              padding: '14px',
              borderRadius: '8px',
              marginBottom: '15px'
            }}>
              ⚠️ <strong>SCAM TRIGGERED:</strong> Scammers use fake browser popups and fear to trick you into granting Remote Desktop control. Never download tools like AnyDesk or TeamViewer for unsolicited callers!
            </div>
            <button
              onClick={() => onComplete(['Downloaded Remote Access Malware'])}
              style={{
                background: '#3b82f6',
                color: '#fff',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '6px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Analyze What Went Wrong
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
