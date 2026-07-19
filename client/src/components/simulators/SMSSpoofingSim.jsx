import React, { useState } from 'react';

export default function SMSSpoofingSim({ onComplete }) {
  const [outcome, setOutcome] = useState(null); // clicked | ignored

  const handleClickLink = () => {
    setOutcome('clicked');
  };

  const handleIgnore = () => {
    setOutcome('ignored');
    setTimeout(() => {
      onComplete(['Successfully identified SMS Sender ID Spoofing trap']);
    }, 1800);
  };

  return (
    <div style={{
      maxWidth: '380px',
      margin: '0 auto',
      background: '#0a0e17',
      border: '8px solid #1e293b',
      borderRadius: '36px',
      padding: '20px',
      color: '#fff',
      fontFamily: 'sans-serif'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>SMS Inbox</span>
        <h4 style={{ margin: '4px 0 0 0', color: '#38bdf8' }}>Sender: AD-HDFCBK</h4>
      </div>

      {!outcome && (
        <div>
          <div style={{
            background: '#111827',
            padding: '16px',
            borderRadius: '12px',
            marginBottom: '20px',
            border: '1px solid #334155'
          }}>
            <p style={{ margin: '0 0 12px 0', fontSize: '0.9rem', lineHeight: '1.4' }}>
              Dear Customer, Your HDFC Bank account KYC verification is incomplete. Your NetBanking access will be permanently suspended today. Update PAN immediately:
            </p>
            <div style={{
              background: '#1e293b',
              padding: '8px 12px',
              borderRadius: '6px',
              color: '#60a5fa',
              fontFamily: 'monospace',
              fontSize: '0.82rem',
              wordBreak: 'break-all'
            }}>
              http://hdfc-kyc-verify-portal.top/update
            </div>
          </div>

          <p style={{ fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '16px' }}>
            The SMS sender header reads "AD-HDFCBK". What action should you take?
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button
              onClick={handleClickLink}
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
              Click Link & Submit PAN/Card Details
            </button>
            <button
              onClick={handleIgnore}
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
              Delete SMS & Use Official Banking App
            </button>
          </div>
        </div>
      )}

      {outcome === 'clicked' && (
        <div>
          <div style={{ background: '#7f1d1d', padding: '14px', borderRadius: '8px', marginBottom: '16px' }}>
            🚨 <strong>SPOOFED SENDER ID!</strong> Scammers use SMS gateways to display alphanumeric Sender IDs like "AD-HDFCBK" or "VK-SBIINB" to look like official banks. Look closely at the domain URL (`.top`)!
          </div>
          <button
            onClick={() => onComplete(['Clicked spoofed SMS banking phishing link'])}
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
            Review SMS Header Spoofing Tactics
          </button>
        </div>
      )}

      {outcome === 'ignored' && (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h3 style={{ color: '#10b981' }}>Great Detection!</h3>
          <p style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
            Never trust an SMS solely by its header name. Banks never send `.top` or unverified links for KYC.
          </p>
        </div>
      )}
    </div>
  );
}
