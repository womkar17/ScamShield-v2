import React, { useState } from 'react';

export default function CDMScamSim({ onComplete }) {
  const [view, setView] = useState('scene');
  const [account, setAccount] = useState('');
  const [cash, setCash] = useState('');
  const [receipt, setReceipt] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!account.trim() || !cash.trim() || !receipt.trim()) {
      setError('Please complete all fields to finish the deposit.');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      onComplete(['Account Number Redirected', 'Cash Deposited to Wrong/Scammer Account', 'False Receipt']);
    }, 1500);
  };

  if (view === 'scene') {
    return (
      <div style={{
        maxWidth: '420px', margin: '0 auto', borderRadius: '14px', overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)', background: '#263238', color: '#eceff1',
        fontFamily: '"Segoe UI", Roboto, sans-serif', padding: '28px 24px', textAlign: 'center'
      }}>
        <div style={{ fontSize: '2.2rem', marginBottom: '10px' }}>🏛️</div>
        <h3 style={{ margin: '0 0 10px', fontSize: '1.05rem', color: '#ffca28' }}>A Stranger Offers to Help</h3>
        <p style={{ margin: '0 0 16px', fontSize: '0.88rem', color: '#cfd8dc', lineHeight: '1.6' }}>
          You're at the Cash Deposit Machine with ₹20,000 in hand. A stranger nearby says: <br />
          <em>"Let me help — this machine is tricky. I'll type in the account number for you and hand you the receipt."</em>
        </p>
        <button onClick={() => setView('form')} style={{ width: '100%', padding: '13px', background: '#ffca28', color: '#263238', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: '700', cursor: 'pointer' }}>
          Accept Help & Continue Deposit
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', background: '#fff', borderRadius: '10px', boxShadow: '0 8px 32px rgba(0,0,0,0.15)', overflow: 'hidden', fontFamily: '"Open Sans", Arial, sans-serif', color: '#333' }}>
      <div style={{ background: 'linear-gradient(135deg, #37474f 0%, #263238 100%)', padding: '18px 24px', textAlign: 'center' }}>
        <h2 style={{ margin: 0, color: '#fff', fontSize: '1.05rem' }}>Cash Deposit In Progress</h2>
        <p style={{ margin: '4px 0 0', color: '#cfd8dc', fontSize: '0.8rem' }}>Amount: ₹20,000</p>
      </div>
      <div style={{ padding: '24px' }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.85rem', color: '#444' }}>Account Number (entered by "helper")</label>
            <input type="text" value={account} onChange={e => { setAccount(e.target.value); setError(''); }}
              style={{ width: '100%', padding: '11px 14px', border: '1px solid #bbb', borderRadius: '6px', fontSize: '0.92rem', boxSizing: 'border-box', outline: 'none', color: '#333' }} />
          </div>
          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.85rem', color: '#444' }}>Cash Handed to Helper</label>
            <input type="text" value={cash} onChange={e => { setCash(e.target.value); setError(''); }} placeholder="₹20,000"
              style={{ width: '100%', padding: '11px 14px', border: '1px solid #bbb', borderRadius: '6px', fontSize: '0.92rem', boxSizing: 'border-box', outline: 'none', color: '#333' }} />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.85rem', color: '#444' }}>Receipt Received</label>
            <input type="text" value={receipt} onChange={e => { setReceipt(e.target.value); setError(''); }} placeholder="Confirm receipt details shown"
              style={{ width: '100%', padding: '11px 14px', border: '1px solid #bbb', borderRadius: '6px', fontSize: '0.92rem', boxSizing: 'border-box', outline: 'none', color: '#333' }} />
          </div>
          {error && <p style={{ color: '#e74c3c', fontSize: '0.82rem', margin: '0 0 10px' }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '13px', background: loading ? '#999' : '#37474f', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer' }}>
            {loading ? 'Finalizing Deposit...' : 'Confirm Deposit Complete'}
          </button>
        </form>
      </div>
    </div>
  );
}
