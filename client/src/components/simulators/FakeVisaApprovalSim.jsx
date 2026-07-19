import React, { useState } from 'react';

export default function FakeVisaApprovalSim({ onComplete }) {
  const [step, setStep] = useState('apply'); // apply | scammed | safe

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
        <h3 style={{ margin: 0, color: '#38bdf8' }}>🌐 Fast-Track Embassy e-Visa Service</h3>
        <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>URL: www.fast-embassy-evisa-approval.org</span>
      </div>

      <div style={{ padding: '24px' }}>
        {step === 'apply' && (
          <div>
            <div style={{
              background: '#1e293b',
              padding: '16px',
              borderRadius: '8px',
              marginBottom: '18px'
            }}>
              <h4 style={{ margin: '0 0 8px 0', color: '#10b981' }}>Guaranteed 24-Hour Express Visa Approval</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#cbd5e1' }}>
                Skip consular embassy appointments and document queues. 100% Guaranteed Approval for US, Schengen, and UK visas or money back.
              </p>
            </div>

            <div style={{ background: 'rgba(239, 68, 68, 0.15)', padding: '12px', borderRadius: '6px', marginBottom: '20px', fontSize: '0.85rem' }}>
              ⚠️ Processing Fee: $250 USD per applicant payable immediately to initiate express diplomatic clearance.
            </div>

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
                Pay $250 Express Visa Processing Fee
              </button>
              <button
                onClick={() => {
                  setStep('safe');
                  setTimeout(() => onComplete(['Successfully avoided fake visa agency portal']), 1800);
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
                Apply Only on Official Embassy Government Site
              </button>
            </div>
          </div>
        )}

        {step === 'scammed' && (
          <div style={{ textAlign: 'center' }}>
            <div style={{ background: '#7f1d1d', padding: '16px', borderRadius: '8px', marginBottom: '16px' }}>
              🚨 <strong>IDENTITY & MONEY STOLEN!</strong> No private agency can "guarantee" a foreign government visa approval or bypass diplomatic interview rules.
            </div>
            <button
              onClick={() => onComplete(['Paid upfront processing fee to fake visa agency'])}
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
              Review Fake Visa Approval Defense
            </button>
          </div>
        )}

        {step === 'safe' && (
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <h3 style={{ color: '#10b981' }}>Well Avoided!</h3>
            <p style={{ color: '#cbd5e1' }}>
              Always check that visa portals end in `.gov` or official diplomatic domains.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
