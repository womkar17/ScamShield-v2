import React, { useState } from 'react';

export default function ClipboardHijackSim({ onComplete }) {
  const legitAddress = '0x71C95911E9a5D330f4D0d2919a4e82C0E8118B9A';
  const hijackedAddress = '0x71C95911E9a5D330f4D0d2919a4e82C0E8114E1A'; // Lookalike end characters

  const [copied, setCopied] = useState(false);
  const [pastedValue, setPastedValue] = useState('');
  const [status, setStatus] = useState('pending'); // pending | inspected | failed

  const handleCopy = () => {
    setCopied(true);
    setPastedValue(hijackedAddress); // Simulates malware overwriting clipboard
  };

  const handleSend = () => {
    if (pastedValue === legitAddress) {
      setStatus('inspected');
      setTimeout(() => onComplete(['Verified full recipient wallet address']), 1800);
    } else {
      setStatus('failed');
    }
  };

  const handleFixAddress = () => {
    setPastedValue(legitAddress);
    setStatus('inspected');
    setTimeout(() => onComplete(['Detected and replaced hijacked clipboard address']), 1800);
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      background: '#0f172a',
      border: '1px solid #334155',
      borderRadius: '12px',
      padding: '24px',
      color: '#fff',
      fontFamily: 'sans-serif'
    }}>
      <h3 style={{ margin: '0 0 8px 0', color: '#38bdf8' }}>💎 Crypto Withdrawal Simulator</h3>
      <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '20px' }}>
        You are sending 1.5 ETH ($4,200) to your hardware storage wallet. Copy the address and paste it into the recipient field.
      </p>

      {/* Hardware Wallet Address Card */}
      <div style={{
        background: '#1e293b',
        padding: '14px',
        borderRadius: '8px',
        marginBottom: '20px',
        border: '1px solid #475569'
      }}>
        <div style={{ fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '6px' }}>
          Your Hardware Wallet Recipient Address:
        </div>
        <div style={{
          fontFamily: 'monospace',
          fontSize: '0.9rem',
          color: '#10b981',
          wordBreak: 'break-all',
          marginBottom: '10px'
        }}>
          {legitAddress}
        </div>
        <button
          onClick={handleCopy}
          style={{
            background: copied ? '#059669' : '#3b82f6',
            color: '#fff',
            border: 'none',
            padding: '8px 14px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '0.85rem'
          }}
        >
          {copied ? 'Copied to Clipboard!' : 'Copy Address'}
        </button>
      </div>

      {/* Withdrawal Form */}
      <div style={{
        background: '#1e293b',
        padding: '18px',
        borderRadius: '8px'
      }}>
        <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '6px' }}>
          Destination Wallet Address (Simulated Paste):
        </label>
        <input
          type="text"
          value={pastedValue}
          onChange={(e) => setPastedValue(e.target.value)}
          placeholder="Click Copy above to simulate pasting address"
          style={{
            width: '100%',
            padding: '10px 12px',
            borderRadius: '6px',
            border: '1px solid #475569',
            background: '#0f172a',
            color: pastedValue !== legitAddress && pastedValue ? '#f87171' : '#fff',
            fontFamily: 'monospace',
            marginBottom: '14px'
          }}
        />

        {pastedValue && pastedValue !== legitAddress && status === 'pending' && (
          <div style={{
            background: 'rgba(239, 68, 68, 0.15)',
            borderLeft: '4px solid #ef4444',
            padding: '10px 12px',
            borderRadius: '4px',
            fontSize: '0.85rem',
            marginBottom: '14px',
            color: '#fca5a5'
          }}>
            ⚠️ Look closely at the last 4 characters! Did your clipboard paste the exact address you copied?
          </div>
        )}

        {status === 'failed' && (
          <div style={{ marginBottom: '16px' }}>
            <div style={{
              background: '#7f1d1d',
              padding: '14px',
              borderRadius: '6px',
              marginBottom: '12px'
            }}>
              🚨 <strong>FUNDS HIJACKED!</strong> Clipboard malware (Clipper Trojan) monitors when you copy a crypto address and replaces it in clipboard memory with an attacker address matching the first and last few characters.
            </div>
            <button
              onClick={() => onComplete(['Fell for lookalike clipboard replacement'])}
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
              Review Clipboard Defense Lesson
            </button>
          </div>
        )}

        {status === 'inspected' && (
          <div style={{
            background: '#065f46',
            padding: '14px',
            borderRadius: '6px',
            color: '#ecfdf5',
            textAlign: 'center'
          }}>
            ✅ Excellent! Always verify character-by-character before signing high-value transfers.
          </div>
        )}

        {status === 'pending' && (
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              disabled={!pastedValue}
              onClick={handleSend}
              style={{
                flex: 1,
                background: !pastedValue ? '#475569' : '#ef4444',
                color: '#fff',
                border: 'none',
                padding: '12px',
                borderRadius: '6px',
                fontWeight: 'bold',
                cursor: !pastedValue ? 'not-allowed' : 'pointer'
              }}
            >
              Confirm & Send 1.5 ETH
            </button>
            {pastedValue && pastedValue !== legitAddress && (
              <button
                onClick={handleFixAddress}
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
                Catch Tampering & Correct Address
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
