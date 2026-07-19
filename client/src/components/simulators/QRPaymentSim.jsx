import React, { useState } from 'react';

export default function QRPaymentSim({ onComplete }) {
  const [upiId, setUpiId] = useState('');
  const [pin, setPin] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!upiId.trim() || !pin.trim()) {
      setError('Please enter your UPI ID and PIN to receive the refund.');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      onComplete(['UPI ID', 'UPI PIN', 'Bank Account Access']);
    }, 1400);
  };

  return (
    <div style={{
      maxWidth: '380px', margin: '0 auto', borderRadius: '24px', overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0,0,0,0.5)', background: '#fff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{ background: 'linear-gradient(135deg, #5f27cd 0%, #341f97 100%)', padding: '20px', textAlign: 'center' }}>
        <span style={{ fontSize: '2rem' }}>📲</span>
        <h2 style={{ margin: '8px 0 2px', color: '#fff', fontSize: '1.1rem' }}>Refund Ready to Receive</h2>
        <p style={{ margin: 0, color: '#d1c4e9', fontSize: '0.8rem' }}>upi-refund-scan.app</p>
      </div>
      <div style={{ padding: '24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '18px' }}>
          <p style={{ margin: '0 0 4px', color: '#666', fontSize: '0.85rem' }}>You have a pending refund of</p>
          <h1 style={{ margin: 0, color: '#2e7d32', fontSize: '2.2rem' }}>₹5,000</h1>
          <p style={{ margin: '4px 0 0', color: '#c0392b', fontSize: '0.8rem', fontWeight: '600' }}>⏳ Window closes in 09:41</p>
        </div>
        <div style={{ background: '#f5f5f5', borderRadius: '10px', padding: '14px', marginBottom: '18px', textAlign: 'center' }}>
          <p style={{ margin: '0 0 8px', fontSize: '0.8rem', color: '#555' }}>Scan below or enter your UPI ID to receive</p>
          <div style={{ width: '110px', height: '110px', margin: '0 auto', background: 'repeating-linear-gradient(45deg,#333,#333 4px,#fff 4px,#fff 8px)', borderRadius: '6px' }} />
        </div>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.85rem', color: '#444' }}>Your UPI ID</label>
            <input type="text" value={upiId} onChange={e => { setUpiId(e.target.value); setError(''); }} placeholder="yourname@bank"
              style={{ width: '100%', padding: '11px 14px', border: '1px solid #bbb', borderRadius: '6px', fontSize: '0.92rem', boxSizing: 'border-box', outline: 'none', color: '#333' }} />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.85rem', color: '#444' }}>Enter UPI PIN to Confirm Receipt</label>
            <input type="password" value={pin} onChange={e => { setPin(e.target.value); setError(''); }} maxLength={6}
              style={{ width: '100%', padding: '11px 14px', border: '1px solid #bbb', borderRadius: '6px', fontSize: '1.1rem', boxSizing: 'border-box', outline: 'none', color: '#333', letterSpacing: '8px', textAlign: 'center' }} />
          </div>
          {error && <p style={{ color: '#e74c3c', fontSize: '0.82rem', margin: '0 0 10px' }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '13px', background: loading ? '#999' : '#5f27cd', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer' }}>
            {loading ? 'Processing...' : 'Receive ₹5,000 Now'}
          </button>
        </form>
      </div>
    </div>
  );
}
