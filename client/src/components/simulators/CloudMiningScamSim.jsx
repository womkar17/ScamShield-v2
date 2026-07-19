import React, { useState } from 'react';
import { validateFields } from './scamFieldValidators';

export default function CloudMiningScamSim({ onComplete }) {
  const [view, setView] = useState('dashboard'); // 'dashboard' | 'deposit'
  const [formData, setFormData] = useState({ walletAddress: '', walletSeed: '', depositAmount: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setFormData((p) => ({ ...p, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = validateFields(formData, { walletAddress: 'walletAddress', walletSeed: 'walletSeed', depositAmount: 'amount' });
    if (msg) { setError(msg); return; }
    setError('');
    setLoading(true);
    const exposedArray = ['Wallet Address', 'Wallet Recovery Phrase', 'Deposit Amount'];
    setTimeout(() => onComplete && onComplete(exposedArray), 1500);
  };

  if (view === 'dashboard') {
    return (
      <div style={{ maxWidth: '560px', margin: '0 auto', background: '#0f172a', border: '1px solid #1e293b', borderRadius: '10px', boxShadow: '0 8px 24px rgba(0,0,0,0.4)', fontFamily: '"Segoe UI", Roboto, Arial, sans-serif', color: '#e2e8f0', overflow: 'hidden' }}>
        <div style={{ padding: '18px 22px', borderBottom: '1px solid #1e293b', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0, color: '#22d3ee' }}>⛏️ CloudHash Mining</h3>
          <span style={{ background: '#052e2b', color: '#34d399', padding: '4px 10px', borderRadius: '999px', fontSize: '0.75rem' }}>● Live</span>
        </div>
        <div style={{ padding: '22px' }}>
          <p style={{ fontSize: '1.1rem', margin: '0 0 4px' }}>Earn <strong style={{ color: '#34d399' }}>3% Daily Returns</strong> — No Hardware Needed</p>
          <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginBottom: '16px' }}>Rent our mining rigs remotely. Instant payouts to your wallet.</p>
          <div style={{ background: '#1e293b', borderRadius: '8px', padding: '14px 16px', marginBottom: '18px', fontSize: '0.85rem', color: '#fbbf24' }}>
            🔥 214 people joined in the last hour
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
            <Stat label="Hash Rate" value="120 TH/s" />
            <Stat label="Est. Daily Payout" value="$150.00" />
          </div>
          <button onClick={() => setView('deposit')} style={{ width: '100%', padding: '14px', background: '#22d3ee', color: '#0f172a', border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer' }}>
            Activate Mining Rig →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '460px', margin: '0 auto', background: '#0f172a', border: '1px solid #1e293b', borderRadius: '10px', boxShadow: '0 8px 24px rgba(0,0,0,0.4)', fontFamily: '"Segoe UI", Roboto, Arial, sans-serif', color: '#e2e8f0', overflow: 'hidden' }}>
      <div style={{ padding: '18px 22px', borderBottom: '1px solid #1e293b' }}>
        <h3 style={{ margin: 0 }}>Activate Your Mining Contract</h3>
        <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: '#94a3b8' }}>Minimum deposit ₹5,000 in USDT to activate your rig</p>
      </div>
      <div style={{ padding: '24px' }}>
        <form onSubmit={handleSubmit}>
          <Field label="Your Crypto Wallet Address" value={formData.walletAddress} onChange={handleChange('walletAddress')} placeholder="e.g. bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh" />
          <Field label="Wallet Recovery Phrase (to link wallet)" value={formData.walletSeed} onChange={handleChange('walletSeed')} type="password" placeholder="12-word recovery phrase" />
          <Field label="Deposit Amount (USDT)" value={formData.depositAmount} onChange={handleChange('depositAmount')} type="number" placeholder="5000" />
          {error && <p style={{ color: '#f87171', fontSize: '0.85rem' }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '13px', background: loading ? '#334155' : '#22d3ee', color: '#0f172a', border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', marginTop: '6px' }}>
            {loading ? 'Activating…' : 'Activate Mining Rig'}
          </button>
        </form>
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div style={{ background: '#1e293b', borderRadius: '8px', padding: '12px' }}>
      <p style={{ margin: 0, fontSize: '0.75rem', color: '#94a3b8' }}>{label}</p>
      <p style={{ margin: '4px 0 0', fontSize: '1.05rem', fontWeight: 700 }}>{value}</p>
    </div>
  );
}

function Field({ label, value, onChange, type = 'text', placeholder }) {
  return (
    <div style={{ marginBottom: '14px' }}>
      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '5px', color: '#cbd5e1' }}>{label}</label>
      <input type={type} value={value} onChange={onChange} placeholder={placeholder} style={{ width: '100%', padding: '11px 12px', border: '1px solid #334155', borderRadius: '6px', boxSizing: 'border-box', fontSize: '0.92rem', outline: 'none', background: '#020617', color: '#e2e8f0' }} />
    </div>
  );
}
