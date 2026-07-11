import React, { useState } from 'react';

export default function RobocallSim({ onComplete }) {
  const [step, setStep] = useState('call'); // call | keypress | safe

  return (
    <div style={{
      maxWidth: '380px',
      margin: '0 auto',
      background: '#0f172a',
      border: '8px solid #1e293b',
      borderRadius: '36px',
      padding: '24px',
      color: '#fff',
      fontFamily: 'sans-serif',
      textAlign: 'center'
    }}>
      {step === 'call' && (
        <div>
          <div style={{ fontSize: '3rem', marginBottom: '8px' }}>🤖</div>
          <h4 style={{ margin: '0 0 4px 0', color: '#f87171' }}>Automated Call Active</h4>
          <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Voice Phishing (Robocall)</span>

          <div style={{
            background: '#1e293b',
            padding: '16px',
            borderRadius: '12px',
            margin: '20px 0',
            fontSize: '0.88rem',
            lineHeight: '1.4',
            color: '#cbd5e1',
            textAlign: 'left'
          }}>
            <strong>Recorded Message:</strong> "This is an automated alert from Customs & Narcotics Enforcement. A suspicious parcel containing illegal contraband addressed to your identity has been seized at airport customs. Press 1 immediately to speak to a senior investigating officer."
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button
              onClick={() => setStep('keypress')}
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
              Press '1' to Connect to Customs Officer
            </button>
            <button
              onClick={() => {
                setStep('safe');
                setTimeout(() => onComplete(['Successfully hung up on automated robocall intimidation trap']), 1800);
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
              Hang Up Immediately
            </button>
          </div>
        </div>
      )}

      {step === 'keypress' && (
        <div>
          <div style={{ background: '#7f1d1d', padding: '14px', borderRadius: '8px', marginBottom: '16px' }}>
            🚨 <strong>SCAM TRANSFERRED!</strong> Pressing 1 connects you directly to a scam call center where fake police operatives demand extortion money or bank details.
          </div>
          <button
            onClick={() => onComplete(['Pressed 1 on automated robocall extortion trap'])}
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
            Review Robocall & Vishing Defense
          </button>
        </div>
      )}

      {step === 'safe' && (
        <div style={{ padding: '10px' }}>
          <h3 style={{ color: '#10b981' }}>Safe Choice!</h3>
          <p style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
            Government agencies never use automated robocalls instructing you to press 1 regarding seized parcels or criminal cases.
          </p>
        </div>
      )}
    </div>
  );
}
