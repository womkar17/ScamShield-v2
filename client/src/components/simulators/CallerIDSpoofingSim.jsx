import React, { useState } from 'react';

export default function CallerIDSpoofingSim({ onComplete }) {
  const [step, setStep] = useState('call'); // call | scammed | safe

  return (
    <div style={{
      maxWidth: '380px',
      margin: '0 auto',
      background: '#0a0e17',
      border: '8px solid #1e293b',
      borderRadius: '36px',
      padding: '24px',
      color: '#fff',
      fontFamily: 'sans-serif',
      textAlign: 'center'
    }}>
      {step === 'call' && (
        <div>
          <div style={{ fontSize: '3rem', marginBottom: '8px' }}>🏦</div>
          <h4 style={{ margin: '0 0 4px 0', color: '#38bdf8' }}>Caller ID: 1800-22-1000</h4>
          <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Verified Customer Care Helpline Number</span>

          <div style={{
            background: '#111827',
            padding: '14px',
            borderRadius: '10px',
            margin: '20px 0',
            fontSize: '0.85rem',
            lineHeight: '1.4',
            color: '#cbd5e1',
            textAlign: 'left'
          }}>
            <strong>Agent on Line:</strong> "Hello, this is SBI Card Security. We detected a suspicious debit charge of ₹49,999 in Dubai. To block this transaction immediately, please read out the 6-digit cancellation OTP sent to your phone."
          </div>

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
              Read Out Cancellation OTP to Agent
            </button>
            <button
              onClick={() => {
                setStep('safe');
                setTimeout(() => onComplete(['Recognized Caller ID Spoofing & protected OTP']), 1800);
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
              Hang Up & Call Back Official Number on Card
            </button>
          </div>
        </div>
      )}

      {step === 'scammed' && (
        <div>
          <div style={{ background: '#7f1d1d', padding: '14px', borderRadius: '8px', marginBottom: '16px' }}>
            🚨 <strong>OTP STOLEN!</strong> Scammers use VoIP software to spoof their Caller ID so your phone displays your bank's exact 1800 helpline number!
          </div>
          <button
            onClick={() => onComplete(['Shared OTP with Caller ID spoofed scammer'])}
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
            Review Caller ID Spoofing Breakdown
          </button>
        </div>
      )}

      {step === 'safe' && (
        <div style={{ padding: '10px' }}>
          <h3 style={{ color: '#10b981' }}>Great Call!</h3>
          <p style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
            Caller ID numbers can be forged easily. Always hang up and dial the official number printed on the back of your card yourself.
          </p>
        </div>
      )}
    </div>
  );
}
