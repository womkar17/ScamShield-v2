import React, { useState } from 'react';

export default function QRStickerSim({ onComplete }) {
  const [upiId, setUpiId] = useState('');
  const [payeeCheck, setPayeeCheck] = useState('');
  const [pin, setPin] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!upiId.trim() || !payeeCheck.trim() || !pin.trim()) {
      setError('Please fill in all fields to confirm payment.');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      onComplete(['UPI ID', 'UPI PIN', 'Payment Sent to Wrong Account']);
    }, 1400);
  };

  return (
    <div style={{
      maxWidth: '380px', margin: '0 auto', borderRadius: '24px', overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0,0,0,0.5)', background: '#fff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{ background: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)', padding: '20px', textAlign: 'center' }}>
        <span style={{ fontSize: '2rem' }}>🏷️</span>
        <h2 style={{ margin: '8px 0 2px', color: '#4a3200', fontSize: '1.1rem' }}>Pay Merchant</h2>
        <p style={{ margin: 0, color: '#6b4e00', fontSize: '0.8rem' }}>Scanned QR at Store Counter</p>
      </div>
      <div style={{ padding: '24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '18px' }}>
          <p style={{ margin: '0 0 4px', color: '#666', fontSize: '0.85rem' }}>Amount to pay</p>
          <h1 style={{ margin: 0, color: '#333', fontSize: '2.2rem' }}>₹850</h1>
        </div>
        <div style={{ background: '#fff3e0', border: '1px solid #ffcc80', borderRadius: '8px', padding: '12px 14px', marginBottom: '18px' }}>
          <p style={{ margin: 0, fontSize: '0.82rem', color: '#e65100' }}>
            ⚠️ Look carefully at the payee name shown below before entering your PIN.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.85rem', color: '#444' }}>Your UPI ID</label>
            <input type="text" value={upiId} onChange={e => { setUpiId(e.target.value); setError(''); }} placeholder="yourname@bank"
              style={{ width: '100%', padding: '11px 14px', border: '1px solid #bbb', borderRadius: '6px', fontSize: '0.92rem', boxSizing: 'border-box', outline: 'none', color: '#333' }} />
          </div>
          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.85rem', color: '#444' }}>Displayed Payee Name (type what you see)</label>
            <input type="text" value={payeeCheck} onChange={e => { setPayeeCheck(e.target.value); setError(''); }} placeholder="e.g. 'Rakesh Traders' (not the shop's real name)"
              style={{ width: '100%', padding: '11px 14px', border: '1px solid #bbb', borderRadius: '6px', fontSize: '0.9rem', boxSizing: 'border-box', outline: 'none', color: '#333' }} />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.85rem', color: '#444' }}>UPI PIN to Confirm Payment</label>
            <input type="password" value={pin} onChange={e => { setPin(e.target.value); setError(''); }} maxLength={6}
              style={{ width: '100%', padding: '11px 14px', border: '1px solid #bbb', borderRadius: '6px', fontSize: '1.1rem', boxSizing: 'border-box', outline: 'none', color: '#333', letterSpacing: '8px', textAlign: 'center' }} />
          </div>
          {error && <p style={{ color: '#e74c3c', fontSize: '0.82rem', margin: '0 0 10px' }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '13px', background: loading ? '#999' : '#f7971e', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer' }}>
            {loading ? 'Processing Payment...' : 'Pay ₹850'}
          </button>
        </form>
      </div>
    </div>
  );
}
