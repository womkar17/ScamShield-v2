import React, { useState } from 'react';

export default function AITradingBotSim({ onComplete }) {
  const [view, setView] = useState('dashboard'); // 'dashboard' | 'deposit'
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [deposit, setDeposit] = useState('');
  const [pan, setPan] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [balance, setBalance] = useState(10000);
  const [ticking, setTicking] = useState(true);

  React.useEffect(() => {
    if (!ticking) return;
    const t = setInterval(() => setBalance(b => Math.round(b * 1.002)), 300);
    return () => clearInterval(t);
  }, [ticking]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !mobile.trim() || !deposit.trim() || !pan.trim()) {
      setError('Please fill in all fields to activate the AI bot.');
      return;
    }
    setError('');
    setLoading(true);
    setTicking(false);
    setTimeout(() => {
      onComplete(['Full Name', 'PAN Number', 'Payment Details', 'Deposited Funds']);
    }, 1600);
  };

  if (view === 'dashboard') {
    return (
      <div style={{
        maxWidth: '440px', margin: '0 auto', background: '#0d1117', borderRadius: '14px',
        overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.5)', color: '#e6edf3',
        fontFamily: '"Segoe UI", Roboto, sans-serif'
      }}>
        <div style={{ background: 'linear-gradient(135deg, #1a2980 0%, #26d0ce 100%)', padding: '20px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.6rem' }}>🤖</span>
            <div>
              <h2 style={{ margin: 0, fontSize: '1.1rem', color: '#fff' }}>Quantum AI Trader Pro</h2>
              <p style={{ margin: 0, fontSize: '0.78rem', color: '#e0f7fa' }}>quantum-ai-trader.pro</p>
            </div>
          </div>
        </div>
        <div style={{ padding: '24px' }}>
          <p style={{ margin: '0 0 6px', fontSize: '0.85rem', color: '#8b949e' }}>Live Portfolio Value</p>
          <h1 style={{ margin: '0 0 4px', fontSize: '2.4rem', color: '#3fb950' }}>₹{balance.toLocaleString('en-IN')}</h1>
          <p style={{ margin: '0 0 20px', fontSize: '0.85rem', color: '#3fb950' }}>▲ 15.2% today — AI Bot is actively trading</p>

          <div style={{ background: '#161b22', borderRadius: '10px', padding: '16px', marginBottom: '18px', border: '1px solid #30363d' }}>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#e6edf3' }}>
              🔥 Our proprietary AI algorithm <strong>guarantees 15% daily returns</strong>. Deposit now and let the bot trade for you — no experience needed!
            </p>
          </div>

          <button onClick={() => setView('deposit')} style={{
            width: '100%', padding: '14px', background: '#238636', color: '#fff', border: 'none',
            borderRadius: '8px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer'
          }}>
            Activate AI Bot — Deposit ₹10,000
          </button>
          <p style={{ textAlign: 'center', fontSize: '0.75rem', color: '#f85149', marginTop: '10px' }}>
            ⏳ Only 4 bot seats remaining today
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '440px', margin: '0 auto', background: '#0d1117', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.5)', color: '#e6edf3', fontFamily: '"Segoe UI", Roboto, sans-serif' }}>
      <div style={{ background: 'linear-gradient(135deg, #1a2980 0%, #26d0ce 100%)', padding: '18px 24px' }}>
        <h2 style={{ margin: 0, fontSize: '1.05rem', color: '#fff' }}>Deposit to Activate Bot</h2>
      </div>
      <div style={{ padding: '24px' }}>
        <form onSubmit={handleSubmit}>
          {[
            { label: 'Full Name', value: name, set: setName },
            { label: 'Mobile Number', value: mobile, set: setMobile },
            { label: 'Deposit via Card/UPI', value: deposit, set: setDeposit },
            { label: 'PAN Card Number (for "compliance")', value: pan, set: setPan },
          ].map((f, i) => (
            <div key={i} style={{ marginBottom: '14px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85rem', color: '#8b949e' }}>{f.label}</label>
              <input type="text" value={f.value} onChange={e => { f.set(e.target.value); setError(''); }}
                style={{ width: '100%', padding: '11px 14px', background: '#161b22', border: '1px solid #30363d', borderRadius: '6px', fontSize: '0.92rem', boxSizing: 'border-box', outline: 'none', color: '#e6edf3' }} />
            </div>
          ))}
          {error && <p style={{ color: '#f85149', fontSize: '0.82rem', margin: '0 0 10px' }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '13px', background: loading ? '#555' : '#238636', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer' }}>
            {loading ? 'Activating Bot...' : 'Confirm Deposit & Activate'}
          </button>
        </form>
      </div>
    </div>
  );
}
