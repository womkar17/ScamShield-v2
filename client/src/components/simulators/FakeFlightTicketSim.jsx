import React, { useState } from 'react';

export default function FakeFlightTicketSim({ onComplete }) {
  const [step, setStep] = useState('offer'); // offer | pay | scammed | safe

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
      <div style={{ background: '#1e293b', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontWeight: 'bold', color: '#38bdf8' }}>✈️ SkyDeals Express - Flash Flight Sale</span>
        <span style={{ fontSize: '0.8rem', background: '#ef4444', padding: '4px 8px', borderRadius: '4px' }}>TIMER: 03:14</span>
      </div>

      <div style={{ padding: '24px' }}>
        {step === 'offer' && (
          <div>
            <div style={{
              background: '#1e293b',
              padding: '16px',
              borderRadius: '8px',
              marginBottom: '18px',
              border: '1px solid #475569'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <strong style={{ fontSize: '1.1rem' }}>Mumbai (BOM) ➔ London (LHR)</strong>
                <span style={{ color: '#10b981', fontWeight: 'bold', fontSize: '1.2rem' }}>₹18,500</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                Roundtrip • British Airways Direct • Normal Market Price: ₹85,000 (78% Discount!)
              </div>
            </div>

            <div style={{
              background: 'rgba(239, 68, 68, 0.15)',
              borderLeft: '4px solid #ef4444',
              padding: '12px',
              borderRadius: '4px',
              marginBottom: '20px',
              fontSize: '0.85rem',
              color: '#fca5a5'
            }}>
              ⚠️ Payment Policy: Promotional flash fares are only valid via Direct UPI / QR Code transfer to Agency Treasurer account. Card checkout is disabled for promo tickets.
            </div>

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
                Scan UPI QR & Book Now (₹18,500)
              </button>
              <button
                onClick={() => {
                  setStep('safe');
                  setTimeout(() => onComplete(['Successfully avoided fake airline ticket portal']), 1800);
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
                Book Directly via Official Airline Site
              </button>
            </div>
          </div>
        )}

        {step === 'pay' && (
          <div style={{ textAlign: 'center' }}>
            <div style={{ background: '#7f1d1d', padding: '16px', borderRadius: '8px', marginBottom: '16px' }}>
              🚨 <strong>FAKE TICKET ISSUED!</strong> Scammers create lookalike flight booking sites with unrealistic 80% discounts and insist on direct UPI/P2P transfers. The PNR issued is counterfeit!
            </div>
            <button
              onClick={() => onComplete(['Paid for counterfeit flight tickets via direct transfer'])}
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
              Review Fake Flight Ticket Defense
            </button>
          </div>
        )}

        {step === 'safe' && (
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <h3 style={{ color: '#10b981' }}>Smart Booking!</h3>
            <p style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>
              Always book directly through official airline/railway/hotel websites or verified OTAs.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
