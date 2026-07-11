import React, { useState } from 'react';

export default function EmailSpoofingSim({ onComplete }) {
  const [showHeaders, setShowHeaders] = useState(false);
  const [outcome, setOutcome] = useState(null); // login | reported

  const handleLogin = (e) => {
    e.preventDefault();
    setOutcome('login');
  };

  const handleReport = () => {
    setOutcome('reported');
    setTimeout(() => {
      onComplete(['Successfully identified Email Display Name Spoofing']);
    }, 1800);
  };

  return (
    <div style={{
      maxWidth: '620px',
      margin: '0 auto',
      background: '#0f172a',
      border: '1px solid #334155',
      borderRadius: '12px',
      overflow: 'hidden',
      color: '#fff',
      fontFamily: 'sans-serif'
    }}>
      {/* Email Client Header */}
      <div style={{
        background: '#1e293b',
        padding: '16px',
        borderBottom: '1px solid #334155'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
          <div>
            <h4 style={{ margin: '0 0 4px 0', fontSize: '1.1rem' }}>URGENT: Mandatory Annual IT Security Update</h4>
            <div style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>
              From: <strong>IT Helpdesk & Corp Security</strong>
            </div>
          </div>
          <button
            onClick={() => setShowHeaders(!showHeaders)}
            style={{
              background: '#334155',
              color: '#38bdf8',
              border: '1px solid #475569',
              padding: '4px 10px',
              borderRadius: '4px',
              fontSize: '0.75rem',
              cursor: 'pointer'
            }}
          >
            {showHeaders ? 'Hide Full Headers' : 'Inspect Sender Headers'}
          </button>
        </div>

        {showHeaders && (
          <div style={{
            background: '#0a0e17',
            padding: '10px',
            borderRadius: '6px',
            fontFamily: 'monospace',
            fontSize: '0.8rem',
            color: '#fca5a5',
            marginTop: '8px'
          }}>
            <div>Display Name: IT Helpdesk & Corp Security</div>
            <div>Actual Sender (Return-Path): support-update-9912@mail-ru-srv.xyz</div>
            <div>Reply-To: attacker-collector@mail-ru-srv.xyz</div>
          </div>
        )}
      </div>

      <div style={{ padding: '24px' }}>
        {!outcome && (
          <div>
            <p style={{ lineHeight: '1.6', fontSize: '0.95rem', color: '#e2e8f0', marginBottom: '20px' }}>
              All employees must log in to the new Corporate SSO Portal within 24 hours to re-verify their credentials. Accounts failing to authenticate will be locked from VPN access.
            </p>

            <div style={{
              background: '#1e293b',
              padding: '16px',
              borderRadius: '8px',
              marginBottom: '20px'
            }}>
              <button
                onClick={handleLogin}
                style={{
                  background: '#ef4444',
                  color: '#fff',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  marginRight: '12px'
                }}
              >
                Click Here to Authenticate Corporate SSO
              </button>
              <button
                onClick={handleReport}
                style={{
                  background: '#10b981',
                  color: '#fff',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Report Phishing to Real IT Security
              </button>
            </div>
          </div>
        )}

        {outcome === 'login' && (
          <div>
            <div style={{ background: '#7f1d1d', padding: '14px', borderRadius: '8px', marginBottom: '16px' }}>
              🚨 <strong>CREDENTIALS HARVESTED!</strong> Scammers spoof trusted internal department names ("IT Helpdesk"). Always inspect the actual `Return-Path` / sender email address!
            </div>
            <button
              onClick={() => onComplete(['Entered corporate credentials on spoofed email link'])}
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
              Review Email Spoofing Defense
            </button>
          </div>
        )}

        {outcome === 'reported' && (
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <h3 style={{ color: '#10b981' }}>Well Inspected!</h3>
            <p style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
              By checking the sender headers, you spotted the mismatched domain (`mail-ru-srv.xyz`).
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
