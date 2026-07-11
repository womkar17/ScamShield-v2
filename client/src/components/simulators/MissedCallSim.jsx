import React, { useState } from 'react';

export default function MissedCallSim({ onComplete }) {
  const [outcome, setOutcome] = useState(null); // called | blocked

  const handleCall = () => {
    setOutcome('called');
  };

  const handleBlock = () => {
    setOutcome('blocked');
    setTimeout(() => {
      onComplete(['Successfully ignored Wangiri premium-rate missed call trap']);
    }, 1800);
  };

  return (
    <div style={{
      maxWidth: '380px',
      margin: '0 auto',
      background: '#0a0e17',
      border: '8px solid #1e293b',
      borderRadius: '36px',
      padding: '20px',
      color: '#fff',
      fontFamily: 'sans-serif'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h4 style={{ margin: '0 0 4px 0', color: '#f87171' }}>📞 Recent Calls</h4>
        <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Tap to view caller details</span>
      </div>

      {!outcome && (
        <div>
          <div style={{
            background: '#111827',
            padding: '14px',
            borderRadius: '10px',
            marginBottom: '18px',
            borderLeft: '4px solid #ef4444'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
              <span style={{ color: '#ef4444', fontWeight: 'bold' }}>+882 13 4920 188</span>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>2 mins ago</span>
            </div>
            <div style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>
              Missed Call (Ring duration: 1 second) • International Satellite Code
            </div>
          </div>

          <p style={{ fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '16px', textAlign: 'center' }}>
            You received a one-ring missed call from an unfamiliar country code. What do you do?
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button
              onClick={handleCall}
              style={{
                background: '#ef4444',
                color: '#fff',
                border: 'none',
                padding: '12px',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Call Back Immediately to See Who It Was
            </button>
            <button
              onClick={handleBlock}
              style={{
                background: '#10b981',
                color: '#fff',
                border: 'none',
                padding: '12px',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Do Not Call Back & Block Number
            </button>
          </div>
        </div>
      )}

      {outcome === 'called' && (
        <div style={{ textAlign: 'center' }}>
          <div style={{ background: '#7f1d1d', padding: '14px', borderRadius: '8px', marginBottom: '16px' }}>
            🚨 <strong>CHARGED $25/MIN!</strong> This is the Wangiri (One-Ring) scam. Scammers program bots to ring once and hang up using premium-rate international lines. Calling back drains your phone balance!
          </div>
          <button
            onClick={() => onComplete(['Called back international Wangiri premium number'])}
            style={{
              width: '100%',
              background: '#3b82f6',
              color: '#fff',
              border: 'none',
              padding: '12px',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Review Wangiri & Vishing Defenses
          </button>
        </div>
      )}

      {outcome === 'blocked' && (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h3 style={{ color: '#10b981' }}>Safe Choice!</h3>
          <p style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
            Legitimate callers will leave a message or call back. One-ring missed calls from unknown international prefixes should never be returned.
          </p>
        </div>
      )}
    </div>
  );
}
