import React, { useState } from 'react';

export default function FakeHotelBookingSim({ onComplete }) {
  const [step, setStep] = useState('chat'); // chat | pay | safe

  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      background: '#0f172a',
      border: '1px solid #334155',
      borderRadius: '16px',
      overflow: 'hidden',
      color: '#fff',
      fontFamily: 'sans-serif'
    }}>
      <div style={{ background: '#1e293b', padding: '16px' }}>
        <h3 style={{ margin: 0, color: '#38bdf8' }}>🏖️ Luxury Sea-Facing Villa - Peak Holiday Season</h3>
        <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Goa Beach Resort • Verified Host: "Vikram"</span>
      </div>

      <div style={{ padding: '24px' }}>
        {step === 'chat' && (
          <div>
            <div style={{ background: '#1e293b', padding: '14px', borderRadius: '8px', marginBottom: '18px' }}>
              <strong style={{ display: 'block', color: '#60a5fa', marginBottom: '4px' }}>Host Message on WhatsApp:</strong>
              <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.4' }}>
                "Hello! We have 1 villa left for New Year's Eve. If you book through the platform site, they charge 25% commission. Cancel there and transfer ₹15,000 advance directly to my UPI ID so I can give you an extra 20% discount!"
              </p>
            </div>

            <p style={{ fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '16px' }}>
              How do you proceed with the host's direct transfer offer?
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
                Transfer Advance Directly via UPI (₹15,000)
              </button>
              <button
                onClick={() => {
                  setStep('safe');
                  setTimeout(() => onComplete(['Refused off-platform direct hotel booking payment']), 1800);
                }}
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
                Keep Booking on Verified Official Portal
              </button>
            </div>
          </div>
        )}

        {step === 'pay' && (
          <div style={{ textAlign: 'center' }}>
            <div style={{ background: '#7f1d1d', padding: '16px', borderRadius: '8px', marginBottom: '16px' }}>
              🚨 <strong>ADVANCE LOST!</strong> Once you transfer advance money outside an official booking platform, the host blocks your number and the listing disappears.
            </div>
            <button
              onClick={() => onComplete(['Paid off-platform advance for non-existent hotel villa'])}
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
              Review Fake Hotel Booking Breakdown
            </button>
          </div>
        )}

        {step === 'safe' && (
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <h3 style={{ color: '#10b981' }}>Booking Protected!</h3>
            <p style={{ color: '#cbd5e1' }}>
              Never communicate or transfer advance payments outside verified travel platforms.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
