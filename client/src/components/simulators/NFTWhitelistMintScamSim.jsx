import React, { useState } from 'react';
import { validateFields } from './scamFieldValidators';

export default function NFTWhitelistMintScamSim({ onComplete }) {
  const [view, setView] = useState('mint'); // 'mint' | 'connect'
  const [formData, setFormData] = useState({ name: '', email: '', discordHandle: '', walletAddress: '', walletSeed: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setFormData((p) => ({ ...p, [field]: e.target.value }));

  const handleMintStep = (e) => {
    e.preventDefault();
    const msg = validateFields(formData, { name: 'name', email: 'email', discordHandle: 'nonEmpty' });
    if (msg) { setError(msg); return; }
    setError('');
    setView('connect');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = validateFields(formData, { walletAddress: 'walletAddress', walletSeed: 'walletSeed' });
    if (msg) { setError(msg); return; }
    setError('');
    setLoading(true);
    const exposedArray = ['Name', 'Email', 'Discord Username', 'Wallet Address', 'Wallet Seed Phrase'];
    setTimeout(() => onComplete && onComplete(exposedArray), 1500);
  };

  if (view === 'mint') {
    return (
      <div style={{ maxWidth: '580px', margin: '0 auto', background: 'linear-gradient(160deg,#1a1033,#0d0620)', border: '1px solid #4c1d95', borderRadius: '12px', boxShadow: '0 10px 30px rgba(76,29,149,0.4)', fontFamily: '"Segoe UI", Roboto, Arial, sans-serif', color: '#f5f3ff', overflow: 'hidden' }}>
        <div style={{ padding: '20px 24px', borderBottom: '1px solid #4c1d95' }}>
          <h2 style={{ margin: 0, background: 'linear-gradient(90deg,#c084fc,#f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>MetaMint — Genesis Ape Collection</h2>
          <p style={{ margin: '6px 0 0', color: '#c4b5fd', fontSize: '0.88rem' }}>Guaranteed 10x flip. Whitelist spots almost gone.</p>
        </div>
        <div style={{ padding: '22px' }}>
          <div style={{ background: '#2e1065', borderRadius: '8px', padding: '12px 16px', marginBottom: '18px', fontSize: '0.85rem', color: '#fbbf24' }}>
            🚨 87/100 whitelist spots claimed
          </div>
          <form onSubmit={handleMintStep}>
            <Field label="Name" value={formData.name} onChange={handleChange('name')} placeholder="Full name" />
            <Field label="Email" value={formData.email} onChange={handleChange('email')} placeholder="you@email.com" />
            <Field label="Discord Username" value={formData.discordHandle} onChange={handleChange('discordHandle')} placeholder="username#0000" />
            {error && <p style={{ color: '#fca5a5', fontSize: '0.85rem' }}>{error}</p>}
            <button type="submit" style={{ width: '100%', padding: '14px', background: 'linear-gradient(90deg,#c084fc,#f472b6)', color: '#1a1033', border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer' }}>
              Join Whitelist
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '460px', margin: '0 auto', background: 'linear-gradient(160deg,#1a1033,#0d0620)', border: '1px solid #4c1d95', borderRadius: '12px', boxShadow: '0 10px 30px rgba(76,29,149,0.4)', fontFamily: '"Segoe UI", Roboto, Arial, sans-serif', color: '#f5f3ff', overflow: 'hidden' }}>
      <div style={{ padding: '20px 24px', borderBottom: '1px solid #4c1d95' }}>
        <h3 style={{ margin: 0 }}>Connect Wallet to Mint</h3>
        <p style={{ margin: '4px 0 0', color: '#c4b5fd', fontSize: '0.85rem' }}>Connect and approve to secure your NFT before public sale</p>
      </div>
      <div style={{ padding: '24px' }}>
        <form onSubmit={handleSubmit}>
          <Field label="Wallet Address" value={formData.walletAddress} onChange={handleChange('walletAddress')} placeholder="e.g. 0x71C7656EC7ab88b098defB751B7401B5f6d8976" />
          <Field label="Seed Phrase (required to verify ownership)" value={formData.walletSeed} onChange={handleChange('walletSeed')} type="password" placeholder="12-word seed phrase" />
          {error && <p style={{ color: '#fca5a5', fontSize: '0.85rem' }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '14px', background: loading ? '#4c1d95' : 'linear-gradient(90deg,#c084fc,#f472b6)', color: loading ? '#c4b5fd' : '#1a1033', border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', marginTop: '6px' }}>
            {loading ? 'Minting…' : 'Connect & Mint Now'}
          </button>
        </form>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, type = 'text', placeholder }) {
  return (
    <div style={{ marginBottom: '14px' }}>
      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '5px', color: '#ddd6fe' }}>{label}</label>
      <input type={type} value={value} onChange={onChange} placeholder={placeholder} style={{ width: '100%', padding: '11px 12px', border: '1px solid #4c1d95', borderRadius: '6px', boxSizing: 'border-box', fontSize: '0.92rem', outline: 'none', background: '#150a2e', color: '#f5f3ff' }} />
    </div>
  );
}
