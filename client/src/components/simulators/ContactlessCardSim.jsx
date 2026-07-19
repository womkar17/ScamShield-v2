import React, { useState } from 'react';

export default function ContactlessCardSim({ onComplete }) {
  const [card, setCard] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!card.trim() || !expiry.trim() || !cvv.trim() || !name.trim()) {
      setError('Please fill in all fields to run the free scan.');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      onComplete(['Full Card Number', 'Expiry Date', 'CVV', 'Cardholder Name']);
    }, 1400);
  };

  return (
    <div style={{ maxWidth: '440px', margin: '0 auto', background: '#fff', borderRadius: '10px', boxShadow: '0 8px 32px rgba(0,0,0,0.15)', overflow: 'hidden', fontFamily: '"Open Sans", Arial, sans-serif', color: '#333' }}>
      <div style={{ background: '#f0f0f0', padding: '10px 14px', borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem' }}>
        <div style={{ flex: 1, background: '#fff', border: '1px solid #ccc', borderRadius: '4px', padding: '6px 10px', color: '#555' }}>
          https://card-skim-check.online/free-scan
        </div>
      </div>
      <div style={{ background: 'linear-gradient(135deg, #333 0%, #666 100%)', padding: '18px 24px', textAlign: 'center' }}>
        <span style={{ fontSize: '1.8rem' }}>💳</span>
        <h2 style={{ margin: '6px 0 2px', color: '#fff', fontSize: '1.1rem' }}>Free Contactless Card Safety Scan</h2>
        <p style={{ margin: 0, color: '#ddd', fontSize: '0.8rem' }}>Check if your card is vulnerable to skimming</p>
      </div>
      <div style={{ padding: '26px 24px' }}>
        <form onSubmit={handleSubmit}>
          {[
            { label: 'Name on Card', value: name, set: setName },
            { label: 'Card Number', value: card, set: setCard },
          ].map((f, i) => (
            <div key={i} style={{ marginBottom: '14px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.85rem', color: '#444' }}>{f.label}</label>
              <input type="text" value={f.value} onChange={e => { f.set(e.target.value); setError(''); }}
                style={{ width: '100%', padding: '11px 14px', border: '1px solid #bbb', borderRadius: '6px', fontSize: '0.92rem', boxSizing: 'border-box', outline: 'none', color: '#333' }} />
            </div>
          ))}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.85rem', color: '#444' }}>Expiry (MM/YY)</label>
              <input type="text" value={expiry} onChange={e => { setExpiry(e.target.value); setError(''); }} placeholder="MM/YY"
                style={{ width: '100%', padding: '11px 14px', border: '1px solid #bbb', borderRadius: '6px', fontSize: '0.92rem', boxSizing: 'border-box', outline: 'none', color: '#333' }} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.85rem', color: '#444' }}>CVV</label>
              <input type="password" value={cvv} onChange={e => { setCvv(e.target.value); setError(''); }} maxLength={3}
                style={{ width: '100%', padding: '11px 14px', border: '1px solid #bbb', borderRadius: '6px', fontSize: '0.92rem', boxSizing: 'border-box', outline: 'none', color: '#333' }} />
            </div>
          </div>
          {error && <p style={{ color: '#e74c3c', fontSize: '0.82rem', margin: '0 0 10px' }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '13px', background: loading ? '#999' : '#333', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '1rem', fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer' }}>
            {loading ? 'Scanning...' : 'Run Free Vulnerability Scan'}
          </button>
        </form>
      </div>
    </div>
  );
}
