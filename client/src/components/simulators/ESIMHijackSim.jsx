import React, { useState } from 'react';

export default function ESIMHijackSim({ onComplete }) {
  const [step, setStep] = useState('sms'); // sms | form | safe | scammed
  const [eid, setEid] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep('scammed');
  };

  return (
    <div style={{
      maxWidth: '380px',
      margin: '0 auto',
      background: '#0f172a',
      border: '8px solid #334155',
      borderRadius: '36px',
      overflow: 'hidden',
      color: '#fff',
      fontFamily: 'sans-serif'
    }}>
      {/* Phone Header */}
      <div style={{ background: '#1e293b', padding: '12px 20px', display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
        <span>5G Network</span>
        <span>SMS Messages</span>
      </div>

      <div style={{ padding: '20px', minHeight: '440px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        {step === 'sms' && (
          <div>
            <div style={{ background: '#1e293b', padding: '14px', borderRadius: '12px', marginBottom: '20px', borderLeft: '4px solid #f97316' }}>
              <strong style={{ display: 'block', fontSize: '0.8rem', color: '#f97316', marginBottom: '4px' }}>
                AIRTEL/JIO 5G UPGRADE DEPT
              </strong>
              <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.4' }}>
                Dear Subscriber, Your physical SIM will be deactivated tonight at 11:59 PM per 5G compliance rules. To prevent signal loss, convert to e-SIM instantly. Reply or enter your 32-digit EID & OTP code now.
              </p>
            </div>

            <p style={{ fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '16px' }}>
              Your network signal seems fine right now. How do you respond?
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                onClick={() => setStep('form')}
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
                Start e-SIM Conversion & Share EID/OTP
              </button>
              <button
                onClick={() => {
                  setStep('safe');
                  setTimeout(() => onComplete(['Successfully blocked eSIM hijacking SMS trap']), 1800);
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
                Ignore SMS & Call Official Customer Care
              </button>
            </div>
          </div>
        )}

        {step === 'form' && (
          <form onSubmit={handleSubmit}>
            <h4 style={{ margin: '0 0 10px 0', color: '#38bdf8' }}>e-SIM Activation Portal</h4>
            <div style={{ marginBottom: '14px' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '4px' }}>Enter 6-digit Activation OTP received via SMS:</label>
              <input
                type="text"
                required
                placeholder="Enter 6-digit OTP"
                value={eid}
                onChange={(e) => setEid(e.target.value)}
                style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #475569', background: '#1e293b', color: '#fff' }}
              />
            </div>
            <button
              type="submit"
              style={{
                width: '100%',
                background: '#ef4444',
                color: '#fff',
                border: 'none',
                padding: '12px',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Verify & Switch to e-SIM
            </button>
          </form>
        )}

        {step === 'scammed' && (
          <div>
            <div style={{ background: '#7f1d1d', padding: '14px', borderRadius: '8px', marginBottom: '16px' }}>
              🚨 <strong>SIM HIJACKED!</strong> By giving the scammer your e-SIM request OTP, your mobile number is transferred to their phone. They now intercept your banking SMS OTPs!
            </div>
            <button
              onClick={() => onComplete(['Shared e-SIM conversion OTP with attacker'])}
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
              Review SIM Hijack Defense
            </button>
          </div>
        )}

        {step === 'safe' && (
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <h3 style={{ color: '#10b981' }}>Number Protected!</h3>
            <p style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
              Telecom operators never threaten sudden SIM deactivation over SMS or ask for e-SIM forwarding OTPs.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
