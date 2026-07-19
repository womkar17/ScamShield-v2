import React, { useState } from 'react';

export default function FakeTravelPackageSim({ onComplete }) {
  const [step, setStep] = useState('offer'); // offer | scammed | safe

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
        <h3 style={{ margin: 0, color: '#38bdf8' }}>🏝️ Bali 7-Day All-Inclusive Luxury Couple Tour</h3>
        <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Wanderlust Tours & Holidays • Instagram Sponsored Ad</span>
      </div>

      <div style={{ padding: '24px' }}>
        {step === 'offer' && (
          <div>
            <div style={{ background: '#1e293b', padding: '16px', borderRadius: '8px', marginBottom: '18px' }}>
              <div style={{ fontSize: '1.4rem', color: '#10b981', fontWeight: 'bold', marginBottom: '6px' }}>
                Only ₹14,999 per Couple (Flights + 5-Star Resort Included!)
              </div>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#cbd5e1' }}>
                Includes roundtrip flights from any metro city, luxury private pool villa, and all meals. Only 2 couple slots remaining at this promotional tariff.
              </p>
            </div>

            <p style={{ fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '16px' }}>
              The deal is 90% cheaper than standard travel costs. What do you do?
            </p>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => setStep('scammed')}
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
                Pay 100% Upfront via UPI to Secure Slot
              </button>
              <button
                onClick={() => {
                  setStep('safe');
                  setTimeout(() => onComplete(['Recognized and avoided fake travel package lure']), 1800);
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
                Verify Agency License & Book with Reputable Tours
              </button>
            </div>
          </div>
        )}

        {step === 'scammed' && (
          <div style={{ textAlign: 'center' }}>
            <div style={{ background: '#7f1d1d', padding: '16px', borderRadius: '8px', marginBottom: '16px' }}>
              🚨 <strong>HOLIDAY SCAMMED!</strong> Fake Instagram/social media travel agencies post unrealistically cheap packages, take non-refundable upfront UPI transfers, and disappear.
            </div>
            <button
              onClick={() => onComplete(['Paid upfront deposit to fake Instagram travel agency'])}
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
              Review Fake Travel Package Defense
            </button>
          </div>
        )}

        {step === 'safe' && (
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <h3 style={{ color: '#10b981' }}>Well Spotted!</h3>
            <p style={{ color: '#cbd5e1' }}>
              Always book holidays through registered tour operators and verify hotel/airline reservations independently.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
