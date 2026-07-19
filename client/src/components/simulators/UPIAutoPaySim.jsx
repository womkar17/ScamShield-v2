import React, { useState } from 'react';

export default function UPIAutoPaySim({ onComplete }) {
  const [upiId, setUpiId] = useState('');
  const [pin, setPin] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!upiId.trim() || !pin.trim()) {
      setError('Please enter your UPI ID and PIN to approve the mandate.');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      onComplete(['UPI ID', 'UPI PIN', 'Recurring Payment Authorization']);
    }, 1400);
  };

  return (
    <div style={{
      maxWidth: '380px', margin: '0 auto', borderRadius: '24px', overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0,0,0,0.5)', background: '#fff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{ background: 'linear-gradient(135deg, #00b09b 0%, #96c93d 100%)', padding: '20px', textAlign: 'center' }}>
        <span style={{ fontSize: '2rem' }}>🔁</span>
        <h2 style={{ margin: '8px 0 2px', color: '#fff', fontSize: '1.1rem' }}>Free Trial Activated!</h2>
        <p style={{ margin: 0, color: '#e0f2e9', fontSize: '0.8rem' }}>freetrial-autopay-setup.in</p>
      </div>
      <div style={{ padding: '24px' }}>
        <div style={{ background: '#f5f5f5', borderRadius: '10px', padding: '16px', marginBottom: '18px' }}>
          <p style={{ margin: '0 0 6px', fontSize: '0.85rem', color: '#555' }}>Approve AutoPay Mandate</p>
          <h1 style={{ margin: 0, color: '#2e7d32', fontSize: '2rem' }}>₹1<span style={{ fontSize: '0.9rem', color: '#888', fontWeight: 'normal' }}> today</span></h1>
          <p style={{ margin: '8px 0 0', fontSize: '0.72rem', color: '#aaa' }}>
            Maximum mandate limit: ₹9,999 / month <span style={{ opacity: 0.4 }}>(auto-renews)</span>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.85rem', color: '#444' }}>UPI ID</label>
            <input type="text" value={upiId} onChange={e => { setUpiId(e.target.value); setError(''); }} placeholder="yourname@bank"
              style={{ width: '100%', padding: '11px 14px', border: '1px solid #bbb', borderRadius: '6px', fontSize: '0.92rem', boxSizing: 'border-box', outline: 'none', color: '#333' }} />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.85rem', color: '#444' }}>UPI PIN to Approve Mandate</label>
            <input type="password" value={pin} onChange={e => { setPin(e.target.value); setError(''); }} maxLength={6}
              style={{ width: '100%', padding: '11px 14px', border: '1px solid #bbb', borderRadius: '6px', fontSize: '1.1rem', boxSizing: 'border-box', outline: 'none', color: '#333', letterSpacing: '8px', textAlign: 'center' }} />
          </div>
          {error && <p style={{ color: '#e74c3c', fontSize: '0.82rem', margin: '0 0 10px' }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '13px', background: loading ? '#999' : '#00b09b', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer' }}>
            {loading ? 'Approving...' : 'Approve Mandate — Start Free Trial'}
          </button>
        </form>
      </div>
    </div>
  );
}
