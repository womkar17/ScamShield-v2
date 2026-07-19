import React, { useState } from 'react';

export default function WhatsAppOTPSim({ onComplete }) {
  const [step, setStep] = useState('chat'); // chat | scammed | safe
  const [otpInput, setOtpInput] = useState('');

  const handleSendOtp = (e) => {
    e.preventDefault();
    setStep('scammed');
  };

  return (
    <div style={{
      maxWidth: '420px',
      margin: '0 auto',
      background: '#0b141a',
      border: '8px solid #1f2c34',
      borderRadius: '28px',
      overflow: 'hidden',
      color: '#e9edef',
      fontFamily: 'sans-serif'
    }}>
      {/* WhatsApp Header */}
      <div style={{
        background: '#202c33',
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        borderBottom: '1px solid #2a3942'
      }}>
        <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#00a884', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
          R
        </div>
        <div>
          <strong style={{ display: 'block', fontSize: '0.95rem' }}>Rahul (College Friend)</strong>
          <span style={{ fontSize: '0.75rem', color: '#8696a0' }}>Online</span>
        </div>
      </div>

      <div style={{ padding: '16px', minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        {step === 'chat' && (
          <div>
            {/* Chat bubbles */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
              <div style={{ alignSelf: 'flex-start', background: '#202c33', padding: '10px 14px', borderRadius: '8px', maxWidth: '85%', fontSize: '0.9rem' }}>
                Hey!! Urgent help! My phone screen broke and I am trying to log into my WhatsApp from my laptop.
              </div>
              <div style={{ alignSelf: 'flex-start', background: '#202c33', padding: '10px 14px', borderRadius: '8px', maxWidth: '85%', fontSize: '0.9rem' }}>
                I accidentally put your number for the verification SMS code. Can you please send me the 6-digit WhatsApp code you just got via SMS??
              </div>
            </div>

            {/* Simulated SMS Alert Banner */}
            <div style={{
              background: '#111b21',
              border: '1px solid #f59e0b',
              padding: '12px',
              borderRadius: '8px',
              marginBottom: '18px'
            }}>
              <div style={{ fontSize: '0.75rem', color: '#f59e0b', fontWeight: 'bold' }}>📱 SYSTEM SMS RECEIVED:</div>
              <div style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>
                "Your WhatsApp Business code is 849-201. Do not share this code with anyone."
              </div>
            </div>

            <form onSubmit={handleSendOtp} style={{ marginBottom: '12px' }}>
              <input
                type="text"
                placeholder="Enter code to send to Rahul"
                value={otpInput}
                onChange={(e) => setOtpInput(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '6px',
                  border: '1px solid #2a3942',
                  background: '#2a3942',
                  color: '#fff',
                  marginBottom: '10px'
                }}
              />
              <button
                type="submit"
                style={{
                  width: '100%',
                  background: '#00a884',
                  color: '#fff',
                  border: 'none',
                  padding: '10px',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Forward 6-Digit Code to Rahul
              </button>
            </form>

            <button
              onClick={() => {
                setStep('safe');
                setTimeout(() => onComplete(['Successfully refused to share WhatsApp recovery OTP']), 1800);
              }}
              style={{
                width: '100%',
                background: '#ef4444',
                color: '#fff',
                border: 'none',
                padding: '10px',
                borderRadius: '6px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Call Rahul Directly & Never Share Code
            </button>
          </div>
        )}

        {step === 'scammed' && (
          <div>
            <div style={{ background: '#7f1d1d', padding: '14px', borderRadius: '8px', marginBottom: '16px' }}>
              🚨 <strong>WHATSAPP ACCOUNT HIJACKED!</strong> That wasn't Rahul—his account was already hacked! By sharing the 6-digit WhatsApp registration code sent to your phone, the hacker logs into YOUR WhatsApp account!
            </div>
            <button
              onClick={() => onComplete(['Forwarded WhatsApp registration code to scammer'])}
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
              Review WhatsApp Account Hijacking Defense
            </button>
          </div>
        )}

        {step === 'safe' && (
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <h3 style={{ color: '#00a884' }}>Account Protected!</h3>
            <p style={{ fontSize: '0.9rem', color: '#8696a0' }}>
              NEVER share a 6-digit verification code with anyone, even a family member or friend.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
