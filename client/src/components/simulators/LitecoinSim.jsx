import React, { useState } from 'react';

export default function LitecoinSim({ onComplete }) {
  const [view, setView] = useState('chat');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [amount, setAmount] = useState('');
  const [wallet, setWallet] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const openForm = (e) => { e.preventDefault(); setView('form'); };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !mobile.trim() || !amount.trim() || !wallet.trim()) {
      setError('Please complete all fields to start earning.');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      onComplete(['Full Name', 'Mobile Number', 'Investment Amount', 'Crypto Wallet Seed Phrase / Private Key']);
    }, 1500);
  };

  if (view === 'chat') {
    return (
      <div style={{
        maxWidth: '380px', margin: '0 auto', borderRadius: '28px', overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)', height: '560px', display: 'flex', flexDirection: 'column',
        background: '#0b141a', fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, sans-serif'
      }}>
        <div style={{ background: '#1f2c34', padding: '14px 18px', color: '#fff', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#b7b7b7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>Ł</div>
          <div>
            <p style={{ margin: 0, fontWeight: 'bold', fontSize: '0.95rem' }}>LiteGrow Investments</p>
            <p style={{ margin: 0, fontSize: '0.72rem', color: '#8696a0' }}>online</p>
          </div>
        </div>
        <div style={{ flex: 1, padding: '18px 14px', overflowY: 'auto' }}>
          <div style={{ background: '#202c33', borderRadius: '10px', padding: '12px 14px', maxWidth: '92%' }}>
            <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.5', color: '#e9edef' }}>
              🚀 Our Litecoin trading bot turned my ₹15,000 into ₹68,000 in 10 days! Our AI predicts price
              movements with 96% accuracy. Slots for new investors close tonight.
            </p>
            <a href="#" onClick={openForm} style={{ display: 'block', marginTop: '10px', color: '#53bdeb', fontSize: '0.85rem' }}>
              Join LiteGrow now →
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '460px', margin: '0 auto', background: '#12141c', borderRadius: '10px', boxShadow: '0 10px 40px rgba(0,0,0,0.4)', overflow: 'hidden', fontFamily: 'Arial, sans-serif', color: '#eee' }}>
      <div style={{ padding: '20px 24px', background: 'linear-gradient(135deg, #345d9d, #1c2e4a)' }}>
        <h2 style={{ margin: 0, fontSize: '1.1rem' }}>Ł LiteGrow — Start Earning Today</h2>
        <p style={{ margin: '4px 0 0', fontSize: '0.8rem', color: '#c7cad6' }}>Guaranteed 3x returns in 10 days</p>
      </div>
      <form onSubmit={handleSubmit} style={{ padding: '22px' }}>
        {[
          { label: 'Full Name', value: name, set: setName },
          { label: 'Mobile Number', value: mobile, set: setMobile },
          { label: 'Investment Amount (₹)', value: amount, set: setAmount },
        ].map((f, i) => (
          <div key={i} style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85rem', color: '#9aa0b4' }}>{f.label}</label>
            <input type="text" value={f.value} onChange={e => { f.set(e.target.value); setError(''); }}
              style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #333', background: '#1c1f2e', color: '#fff', boxSizing: 'border-box' }} />
          </div>
        ))}
        <div style={{ marginBottom: '18px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85rem', color: '#9aa0b4' }}>Wallet Seed Phrase (for auto-deposit)</label>
          <input type="text" value={wallet} onChange={e => { setWallet(e.target.value); setError(''); }} placeholder="12-word recovery phrase"
            style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #333', background: '#1c1f2e', color: '#fff', boxSizing: 'border-box' }} />
        </div>
        {error && <p style={{ color: '#ff6b6b', fontSize: '0.82rem', margin: '0 0 10px' }}>{error}</p>}
        <button type="submit" disabled={loading} style={{ width: '100%', padding: '13px', background: loading ? '#555' : 'linear-gradient(135deg, #345d9d, #53bdeb)', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer' }}>
          {loading ? 'Activating account…' : 'Start Investing Now'}
        </button>
      </form>
    </div>
  );
}
