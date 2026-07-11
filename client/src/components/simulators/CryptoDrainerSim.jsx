import React, { useState } from 'react';

export default function CryptoDrainerSim({ onComplete }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [outcome, setOutcome] = useState(null); // 'drained' | 'rejected'

  const handleSign = () => {
    setOutcome('drained');
  };

  const handleReject = () => {
    setOutcome('rejected');
    setTimeout(() => {
      onComplete(['Successfully rejected malicious setApprovalForAll permission']);
    }, 1800);
  };

  return (
    <div style={{
      maxWidth: '620px',
      margin: '0 auto',
      background: '#0a0e17',
      border: '1px solid #1e293b',
      borderRadius: '16px',
      padding: '24px',
      color: '#fff',
      fontFamily: 'sans-serif'
    }}>
      {/* Fake dApp Banner */}
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <div style={{ fontSize: '3rem', marginBottom: '8px' }}>🦊</div>
        <h3 style={{ margin: '0 0 6px 0', fontSize: '1.4rem', color: '#38bdf8' }}>
          Arbitrum Ecosystem Airdrop Portal
        </h3>
        <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: 0 }}>
          Eligible wallets can claim up to 5,000 ARB ($6,200 USD) instant community distribution.
        </p>
      </div>

      {!modalOpen && !outcome && (
        <div style={{ textAlign: 'center', padding: '20px', background: '#111827', borderRadius: '12px', border: '1px solid #374151' }}>
          <div style={{ color: '#10b981', fontWeight: 'bold', marginBottom: '14px' }}>
            🎉 Your Wallet Address is Eligible for 5,000 ARB!
          </div>
          <button
            onClick={() => setModalOpen(true)}
            style={{
              background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
              color: '#fff',
              border: 'none',
              padding: '14px 28px',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Connect Wallet & Claim Tokens
          </button>
        </div>
      )}

      {/* Simulated MetaMask Signature Popup */}
      {modalOpen && !outcome && (
        <div style={{
          background: '#1f2937',
          border: '2px solid #f97316',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <span style={{ color: '#f97316', fontWeight: 'bold' }}>🦊 Signature Request (MetaMask)</span>
            <span style={{ fontSize: '0.8rem', color: '#9ca3af' }}>Network: Ethereum Mainnet</span>
          </div>

          <div style={{
            background: '#111827',
            padding: '14px',
            borderRadius: '8px',
            marginBottom: '16px',
            fontFamily: 'monospace',
            fontSize: '0.85rem'
          }}>
            <div style={{ color: '#ef4444', fontWeight: 'bold', marginBottom: '6px' }}>
              Function: setApprovalForAll(address operator, bool approved)
            </div>
            <div style={{ color: '#d1d5db' }}>
              Spender: 0x93A1...E491 (Unverified Contract)
            </div>
            <div style={{ color: '#d1d5db', marginTop: '4px' }}>
              Permission: Grant unlimited access to transfer ALL NFTs and ERC-20 tokens from your wallet.
            </div>
          </div>

          <p style={{ fontSize: '0.85rem', color: '#fca5a5', marginBottom: '18px' }}>
            ⚠️ Look closely at the permission above. Does this look like claiming a free token or granting total wallet control?
          </p>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={handleReject}
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
              Reject Signature Request
            </button>
            <button
              onClick={handleSign}
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
              Sign & Claim Airdrop
            </button>
          </div>
        </div>
      )}

      {outcome === 'drained' && (
        <div style={{ textAlign: 'center' }}>
          <div style={{ background: '#7f1d1d', padding: '16px', borderRadius: '8px', marginBottom: '16px' }}>
            🚨 <strong>WALLET DRAINED!</strong> Signing `setApprovalForAll` or `Permit` signatures gives malicious smart contracts permission to withdraw all tokens and NFTs from your wallet without further confirmation.
          </div>
          <button
            onClick={() => onComplete(['Signed malicious wallet drainer permission'])}
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
            Review Web3 Wallet Safety Breakdown
          </button>
        </div>
      )}

      {outcome === 'rejected' && (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h3 style={{ color: '#10b981', margin: '0 0 8px 0' }}>Wallet Saved!</h3>
          <p style={{ color: '#cbd5e1' }}>
            You caught the malicious `setApprovalForAll` trap. Never sign approval or permit transactions from unsolicited airdrop links.
          </p>
        </div>
      )}
    </div>
  );
}
