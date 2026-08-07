import React, { useState } from 'react';

export default function CBDCWalletSim({ onComplete }) {
  const [view, setView] = useState('notice'); // 'notice' | 'migrate'
  const [formData, setFormData] = useState({ 
    walletType: 'MetaMask',
    seedPhrase: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => {
    let val = e.target.value;
    const f = field.toLowerCase();
    
    if (f.includes('card')) val = val.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim().slice(0, 19);
    else if (f === 'cvv') val = val.replace(/\D/g, '').slice(0, 4);
    else if (f === 'expiry') val = val.replace(/\D/g, '').replace(/^(\d{2})(\d{1,2})/, '$1/$2').slice(0, 5);
    else if (f === 'otp' || f === 'pin') val = val.replace(/\D/g, '').slice(0, 6);
    else if (f.includes('phone') || f.includes('mobile')) val = val.replace(/\D/g, '').slice(0, 15);
    else if (f.includes('account')) val = val.replace(/\D/g, '').slice(0, 18);
    else if (f.includes('aadhaar')) val = val.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim().slice(0, 14);
    else if (f.includes('ifsc')) val = val.replace(/[^a-zA-Z0-9]/g, '').toUpperCase().slice(0, 11);
    else if (f === 'name' || f === 'fullname') val = val.replace(/[^a-zA-Z\s.-]/g, '');
    else if (f.includes('email') || f.includes('upi')) val = val.replace(/\s/g, '');
    
    e.target.value = val;
    setFormData(prev => ({ ...prev, [field]: val }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.seedPhrase) {
      setError('Please provide your 12 or 24-word recovery phrase to migrate.');
      return;
    }
    setLoading(true);
    const exposedArray = ['Crypto Wallet Seed Phrase', 'Full Wallet Balance'];
    setTimeout(() => {
        if (onComplete) {
            onComplete(exposedArray);
        }
    }, 1500);
  };

  if (view === 'notice') {
    return (
      <div style={{
        maxWidth: '500px', margin: '0 auto', background: '#0a192f', border: '1px solid #112240',
        borderRadius: '12px', boxShadow: '0 8px 32px rgba(0,0,0,0.5)', fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', color: '#8892b0', overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{ background: '#112240', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '2px solid #64ffda' }}>
          <h2 style={{ margin: 0, fontSize: '1.4rem', color: '#ccd6f6', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.8rem' }}>🏛️</span> Global CBDC Exchange
          </h2>
        </div>

        {/* Notice Section */}
        <div style={{ padding: '30px 20px', textAlign: 'center' }}>
          <div style={{ background: 'rgba(255, 77, 79, 0.1)', border: '1px solid #ff4d4f', padding: '15px', borderRadius: '8px', marginBottom: '25px' }}>
            <h3 style={{ margin: '0 0 10px', color: '#ff4d4f', fontSize: '1.1rem' }}>URGENT: Regulatory Compliance Required</h3>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#e6f7ff', textAlign: 'left' }}>
              Due to new international regulations, all decentralized cryptocurrency wallets must be migrated to the new government-backed CBDC standard network by <strong>Midnight tonight</strong>. Unmigrated wallets will be frozen.
            </p>
          </div>

          <p style={{ margin: '0 0 25px', fontSize: '1rem', lineHeight: '1.5', color: '#a8b2d1' }}>
            Use our official automated migration tool to seamlessly transition your assets to the compliant CBDC network. Zero fees apply during the grace period.
          </p>

          <button onClick={() => setView('migrate')} style={{
            width: '100%', padding: '15px', background: '#64ffda', color: '#0a192f', border: 'none',
            borderRadius: '6px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(100, 255, 218, 0.3)', transition: 'all 0.2s'
          }}>
            Begin Secure Migration
          </button>
        </div>
      </div>
    );
  }

  // Migrate View
  return (
    <div style={{
      maxWidth: '450px', margin: '0 auto', background: '#0a192f', border: '1px solid #112240',
      borderRadius: '12px', boxShadow: '0 8px 32px rgba(0,0,0,0.5)', fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', color: '#8892b0', overflow: 'hidden'
    }}>
      <div style={{ background: '#112240', padding: '20px', color: '#ccd6f6', textAlign: 'center', borderBottom: '2px solid #64ffda' }}>
        <h2 style={{ margin: 0, fontSize: '1.3rem' }}>Asset Migration Portal</h2>
        <p style={{ margin: '5px 0 0', fontSize: '0.85rem', color: '#64ffda' }}>End-to-End Encrypted</p>
      </div>
      
      <div style={{ padding: '30px 20px' }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#ccd6f6', fontSize: '0.95rem' }}>Select Wallet Type</label>
            <select value={formData.walletType} onChange={handleChange('walletType')}
              style={{ width: '100%', padding: '12px', border: '1px solid #233554', borderRadius: '6px', boxSizing: 'border-box', fontSize: '1rem', background: '#112240', color: '#ccd6f6', outline: 'none' }}>
              <option value="MetaMask">MetaMask</option>
              <option value="TrustWallet">Trust Wallet</option>
              <option value="Coinbase">Coinbase Wallet</option>
              <option value="Ledger">Ledger / Hardware</option>
            </select>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#ccd6f6', fontSize: '0.95rem' }}>Recovery Seed Phrase</label>
            <textarea required value={formData.seedPhrase} onChange={handleChange('seedPhrase')} placeholder="Enter your 12 or 24-word recovery phrase separated by spaces" rows="4"
              style={{ width: '100%', padding: '14px', border: '1px solid #233554', borderRadius: '6px', boxSizing: 'border-box', fontSize: '1rem', background: '#112240', color: '#ccd6f6', outline: 'none', resize: 'none' }} />
            <p style={{ margin: '8px 0 0', fontSize: '0.8rem', color: '#8892b0' }}>
              Your phrase is required to generate a 1:1 cryptographic mapping on the CBDC ledger. This happens entirely locally in your browser.
            </p>
          </div>

          {error && <p style={{ color: '#ff4d4f', fontSize: '0.85rem', marginBottom: '15px' }}>{error}</p>}

          <button type="submit" disabled={loading} style={{
            width: '100%', padding: '16px', background: loading ? '#233554' : '#64ffda', color: loading ? '#8892b0' : '#0a192f', border: 'none',
            borderRadius: '6px', fontSize: '1.1rem', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer'
          }}>
            {loading ? 'Mapping Assets...' : 'Migrate to CBDC Network'}
          </button>
        </form>
      </div>
    </div>
  );
}
