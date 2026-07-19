import React, { useState } from 'react';

export default function FakeAntivirusSim({ onComplete }) {
  const [step, setStep] = useState('scan'); // scan | pay | safe
  const [cardNumber, setCardNumber] = useState('');

  const handlePay = (e) => {
    e.preventDefault();
    setStep('scammed');
  };

  const handleClose = () => {
    setStep('safe');
    setTimeout(() => {
      onComplete(['Identified fake antivirus extortion popup']);
    }, 1800);
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      background: '#111827',
      border: '2px solid #ef4444',
      borderRadius: '12px',
      overflow: 'hidden',
      color: '#fff',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      {/* Fake Header */}
      <div style={{
        background: '#991b1b',
        padding: '12px 18px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span style={{ fontWeight: 'bold' }}>🛡️ Norton LifeLock Shield - Emergency Scan</span>
        <span
          onClick={handleClose}
          style={{ cursor: 'pointer', background: '#7f1d1d', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85rem' }}
        >
          Close (X)
        </span>
      </div>

      <div style={{ padding: '24px' }}>
        {step === 'scan' && (
          <div>
            <div style={{
              background: 'rgba(239, 68, 68, 0.2)',
              border: '1px solid #ef4444',
              borderRadius: '8px',
              padding: '16px',
              marginBottom: '20px',
              textAlign: 'center'
            }}>
              <h3 style={{ color: '#ef4444', margin: '0 0 8px 0' }}>⚠️ 394 Viruses & Spyware Found!</h3>
              <p style={{ margin: 0, fontSize: '0.92rem', color: '#fca5a5' }}>
                Your Real-Time Protection expired 4 days ago. Banking passwords and webcam are currently exposed to cyber criminals.
              </p>
            </div>

            <div style={{ background: '#1f2937', padding: '16px', borderRadius: '8px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem' }}>
                <span>Trojan.Win32.Banker.gen</span>
                <span style={{ color: '#ef4444' }}>Critical Risk</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem' }}>
                <span>Spyware.Keylogger.Active</span>
                <span style={{ color: '#ef4444' }}>Active Now</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                <span>Ransomware.Cryptor.Dropper</span>
                <span style={{ color: '#ef4444' }}>Pending Encrypt</span>
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '16px' }}>
              What would you like to do to resolve this alert?
            </p>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => setStep('pay')}
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
                Renew Norton Shield Now ($89.99)
              </button>
              <button
                onClick={handleClose}
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
                Recognize Fake Web Ad & Close
              </button>
            </div>
          </div>
        )}

        {step === 'pay' && (
          <form onSubmit={handlePay}>
            <h4 style={{ margin: '0 0 12px 0', color: '#38bdf8' }}>Instant Protection Checkout ($89.99)</h4>
            <div style={{ marginBottom: '14px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '4px' }}>Credit/Debit Card Number:</label>
              <input
                type="text"
                required
                placeholder="4532 •••• •••• ••••"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
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
                borderRadius: '6px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Submit Payment & Clean PC
            </button>
          </form>
        )}

        {step === 'scammed' && (
          <div>
            <div style={{ background: '#7f1d1d', padding: '14px', borderRadius: '8px', marginBottom: '16px' }}>
              🚨 <strong>CARD COMPROMISED!</strong> Legitimate antivirus software does not run inside browser ad frames or demand immediate credit card renewal over scary popups.
            </div>
            <button
              onClick={() => onComplete(['Entered card details on fake antivirus popup'])}
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
              Review Antivirus Scam Tactics
            </button>
          </div>
        )}

        {step === 'safe' && (
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <h3 style={{ color: '#10b981', margin: '0 0 8px 0' }}>Excellent Spotting!</h3>
            <p style={{ color: '#cbd5e1' }}>
              You identified that web browsers cannot scan your hard drive. Scammers buy malicious ad banners to mimic antivirus alerts.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
