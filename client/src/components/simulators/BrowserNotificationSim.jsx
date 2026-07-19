import React, { useState } from 'react';

export default function BrowserNotificationSim({ onComplete }) {
  const [permissionState, setPermissionState] = useState('prompt'); // prompt | allowed | blocked
  const [notifications, setNotifications] = useState([]);

  const handleDecision = (decision) => {
    if (decision === 'allow') {
      setPermissionState('allowed');
      setNotifications([
        { title: '⚠️ McAfee Security', body: 'Your PC is infected with 5 Trojans! Renew subscription immediately.' },
        { title: '🚨 Windows Defender Alert', body: 'System file corruption detected. Click here to remove virus.' },
        { title: '🎁 Bonus Awarded', body: 'You won an Apple iPhone 16 Pro! Claim shipment now.' }
      ]);
    } else {
      setPermissionState('blocked');
      setTimeout(() => {
        onComplete(['Successfully blocked malicious browser push notifications']);
      }, 1800);
    }
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      background: '#1e293b',
      border: '1px solid #475569',
      borderRadius: '12px',
      overflow: 'hidden',
      color: '#f8fafc',
      fontFamily: 'sans-serif'
    }}>
      {/* Mock Browser URL Bar */}
      <div style={{
        background: '#0f172a',
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        borderBottom: '1px solid #334155'
      }}>
        <span style={{ color: '#ef4444' }}>🔒 Not Secure</span>
        <div style={{
          background: '#1e293b',
          flex: 1,
          padding: '6px 12px',
          borderRadius: '6px',
          fontSize: '0.85rem',
          color: '#94a3b8'
        }}>
          https://free-hd-stream-live24.net/watch?id=99281
        </div>
      </div>

      <div style={{ padding: '24px', position: 'relative', minHeight: '320px' }}>
        {permissionState === 'prompt' && (
          <div style={{
            background: '#334155',
            border: '1px solid #64748b',
            borderRadius: '10px',
            padding: '20px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
            maxWidth: '380px',
            margin: '20px auto'
          }}>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '1rem' }}>
              free-hd-stream-live24.net wants to:
            </h4>
            <p style={{ margin: '0 0 16px 0', fontSize: '0.9rem', color: '#cbd5e1' }}>
              Show notifications (Click ALLOW to verify you are not a robot and continue streaming)
            </p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button
                onClick={() => handleDecision('block')}
                style={{
                  background: '#10b981',
                  color: '#fff',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: '600'
                }}
              >
                Block / Close
              </button>
              <button
                onClick={() => handleDecision('allow')}
                style={{
                  background: '#3b82f6',
                  color: '#fff',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: '600'
                }}
              >
                Allow
              </button>
            </div>
          </div>
        )}

        {permissionState === 'allowed' && (
          <div>
            <div style={{ background: '#7f1d1d', padding: '12px', borderRadius: '8px', marginBottom: '16px' }}>
              ❌ <strong>TRAP ACTIVATED:</strong> Allowing notifications enables scammers to flood your desktop with fake antivirus warnings that impersonate system alerts.
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
              {notifications.map((n, idx) => (
                <div key={idx} style={{
                  background: '#0f172a',
                  borderLeft: '4px solid #ef4444',
                  padding: '12px',
                  borderRadius: '6px'
                }}>
                  <strong style={{ display: 'block', color: '#fca5a5', marginBottom: '4px' }}>{n.title}</strong>
                  <span style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>{n.body}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => onComplete(['Granted abusive notification permissions'])}
              style={{
                width: '100%',
                background: '#3b82f6',
                color: '#fff',
                border: 'none',
                padding: '12px',
                borderRadius: '6px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Learn How to Revoke Push Notifications
            </button>
          </div>
        )}

        {permissionState === 'blocked' && (
          <div style={{ textAlign: 'center', paddingTop: '40px' }}>
            <div style={{ fontSize: '3rem', marginBottom: '12px' }}>🛡️</div>
            <h3 style={{ color: '#10b981', margin: '0 0 8px 0' }}>Great Defense!</h3>
            <p style={{ color: '#cbd5e1' }}>
              Never click 'Allow' on notification prompts that claim you must prove you are not a robot. Legitimate CAPTCHAs never use browser notifications.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
