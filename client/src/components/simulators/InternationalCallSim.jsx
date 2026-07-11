import React, { useState } from 'react';

export default function InternationalCallSim({ onComplete }) {
  const [step, setStep] = useState('incoming'); // incoming | talking | scammed | safe

  return (
    <div style={{
      maxWidth: '400px',
      margin: '0 auto',
      background: '#0a0e17',
      border: '8px solid #1e293b',
      borderRadius: '36px',
      padding: '24px',
      color: '#fff',
      fontFamily: 'sans-serif',
      textAlign: 'center'
    }}>
      {step === 'incoming' && (
        <div>
          <div style={{ fontSize: '3rem', marginBottom: '8px' }}>🎙️</div>
          <h3 style={{ margin: '0 0 4px 0', color: '#f87171' }}>Incoming Call...</h3>
          <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '6px' }}>+44 20 7946 0921</div>
          <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '24px' }}>
            London, United Kingdom (International)
          </div>

          <div style={{
            background: '#111827',
            padding: '12px',
            borderRadius: '8px',
            fontSize: '0.85rem',
            color: '#cbd5e1',
            marginBottom: '20px'
          }}>
            Robotic Voice Preview: "This is International Interpol Cyber Division. Your passport has been linked to money laundering..."
          </div>

          <div style={{ display: 'flex', gap: '14px' }}>
            <button
              onClick={() => {
                setStep('safe');
                setTimeout(() => onComplete(['Hung up on unsolicited international threatening voice call']), 1800);
              }}
              style={{
                flex: 1,
                background: '#ef4444',
                color: '#fff',
                border: 'none',
                padding: '14px',
                borderRadius: '30px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Hang Up & Report
            </button>
            <button
              onClick={() => setStep('talking')}
              style={{
                flex: 1,
                background: '#10b981',
                color: '#fff',
                border: 'none',
                padding: '14px',
                borderRadius: '30px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Answer Call
            </button>
          </div>
        </div>
      )}

      {step === 'talking' && (
        <div>
          <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>📞</div>
          <h4 style={{ color: '#38bdf8', margin: '0 0 12px 0' }}>Connected (00:34)</h4>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.5', background: '#111827', padding: '14px', borderRadius: '8px', marginBottom: '18px' }}>
            "Officer Officer Vance speaking. To prevent immediate international warrant issuance, confirm your social security / Aadhaar number and transfer refundable security deposit."
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button
              onClick={() => setStep('scammed')}
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
              Share ID & Transfer Security Deposit
            </button>
            <button
              onClick={() => {
                setStep('safe');
                setTimeout(() => onComplete(['Disconnected threatening Vishing interrogation call']), 1800);
              }}
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
              Disconnect Call Instantly
            </button>
          </div>
        </div>
      )}

      {step === 'scammed' && (
        <div>
          <div style={{ background: '#7f1d1d', padding: '14px', borderRadius: '8px', marginBottom: '16px' }}>
            🚨 <strong>SCAM COMPLETE!</strong> Law enforcement never calls from overseas numbers threatening instant arrest or demanding security deposits.
          </div>
          <button
            onClick={() => onComplete(['Complied with international intimidation caller'])}
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
            Review International Call Scam Defense
          </button>
        </div>
      )}

      {step === 'safe' && (
        <div style={{ padding: '10px' }}>
          <h3 style={{ color: '#10b981' }}>Call Terminated!</h3>
          <p style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
            Never engage with unsolicited international callers threatening legal action.
          </p>
        </div>
      )}
    </div>
  );
}
