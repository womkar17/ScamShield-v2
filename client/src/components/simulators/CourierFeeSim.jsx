import React, { useState } from 'react';

export default function CourierFeeSim({ onComplete }) {
  const [view, setView] = useState('sms');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [card, setCard] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLinkClick = (e) => { e.preventDefault(); setView('form'); };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !address.trim() || !card.trim() || !expiry.trim() || !cvv.trim()) {
      setError('Please fill in all fields to reschedule delivery.');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      onComplete(['Full Card Number', 'Expiry Date', 'CVV', 'Home Address']);
    }, 1500);
  };

  if (view === 'sms') {
    return (
      <div style={{
        maxWidth: '380px', margin: '0 auto', borderRadius: '32px', overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)', height: '600px', display: 'flex',
        flexDirection: 'column', background: '#f5f5f5',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 20px', background: '#fff', color: '#333', fontSize: '0.8rem' }}>
          <span style={{ fontWeight: '600' }}>9:41</span>
          <div><span>📶 🔋 61%</span></div>
        </div>
        <div style={{ background: '#fff', padding: '8px 16px 14px', borderBottom: '1px solid #e0e0e0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: '#007AFF', fontSize: '1rem' }}>← Messages</span>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <h3 style={{ margin: 0, fontSize: '1rem', color: '#333' }}>FedEx-Delivery</h3>
              <p style={{ margin: 0, fontSize: '0.75rem', color: '#888' }}>SMS</p>
            </div>
          </div>
        </div>
        <div style={{ flex: 1, padding: '20px 16px', overflowY: 'auto' }}>
          <div style={{ background: '#e8e8e8', borderRadius: '18px 18px 18px 6px', padding: '14px 16px', maxWidth: '92%', boxShadow: '0 1px 2px rgba(0,0,0,0.08)' }}>
            <p style={{ margin: 0, color: '#1a1a1a', fontSize: '0.92rem', lineHeight: '1.5' }}>
              FedEx: Your international package is <strong style={{ color: '#c0392b' }}>held at customs</strong>. Pay a small re-delivery fee of ₹49 to release it.
            </p>
            <a href="#" onClick={handleLinkClick} style={{ display: 'block', marginTop: '10px', color: '#007AFF', fontSize: '0.88rem', wordBreak: 'break-all', textDecoration: 'underline' }}>
              https://fedex-redelivery-in.com/pay
            </a>
            <p style={{ margin: '10px 0 0', color: '#c0392b', fontSize: '0.82rem', fontWeight: '600' }}>
              ⚠️ Package will be returned to sender in 24 hours.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '480px', margin: '0 auto', background: '#fff', borderRadius: '8px', boxShadow: '0 8px 32px rgba(0,0,0,0.15)', overflow: 'hidden', fontFamily: '"Open Sans", Arial, sans-serif', color: '#333' }}>
      <div style={{ background: 'linear-gradient(135deg, #4d148c 0%, #ff6200 100%)', padding: '18px 24px', display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{ width: '50px', height: '50px', background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>📦</div>
        <div>
          <h2 style={{ margin: 0, color: '#fff', fontSize: '1.1rem' }}>FedEx Customs Clearance</h2>
          <p style={{ margin: '2px 0 0', color: '#f3e5f5', fontSize: '0.8rem' }}>Re-delivery Fee: ₹49</p>
        </div>
      </div>
      <div style={{ padding: '28px 24px' }}>
        <form onSubmit={handleSubmit}>
          {[
            { label: 'Full Name', value: name, set: setName },
            { label: 'Delivery Address', value: address, set: setAddress },
            { label: 'Card Number', value: card, set: setCard },
          ].map((f, i) => (
            <div key={i} style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.88rem', color: '#444' }}>{f.label}</label>
              <input type="text" value={f.value} onChange={e => { f.set(e.target.value); setError(''); }}
                style={{ width: '100%', padding: '11px 14px', border: '1px solid #bbb', borderRadius: '4px', fontSize: '0.92rem', boxSizing: 'border-box', outline: 'none', color: '#333' }} />
            </div>
          ))}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.88rem', color: '#444' }}>Expiry (MM/YY)</label>
              <input type="text" value={expiry} onChange={e => { setExpiry(e.target.value); setError(''); }} placeholder="MM/YY"
                style={{ width: '100%', padding: '11px 14px', border: '1px solid #bbb', borderRadius: '4px', fontSize: '0.92rem', boxSizing: 'border-box', outline: 'none', color: '#333' }} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.88rem', color: '#444' }}>CVV</label>
              <input type="password" value={cvv} onChange={e => { setCvv(e.target.value); setError(''); }} maxLength={3}
                style={{ width: '100%', padding: '11px 14px', border: '1px solid #bbb', borderRadius: '4px', fontSize: '0.92rem', boxSizing: 'border-box', outline: 'none', color: '#333' }} />
            </div>
          </div>
          {error && <p style={{ color: '#e74c3c', fontSize: '0.82rem', margin: '0 0 10px' }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '13px', background: loading ? '#999' : '#4d148c', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '1rem', fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer' }}>
            {loading ? 'Processing Payment...' : 'Pay ₹49 & Reschedule Delivery'}
          </button>
        </form>
      </div>
      <div style={{ background: '#f5f5f5', padding: '12px 24px', textAlign: 'center', fontSize: '0.75rem', color: '#999', borderTop: '1px solid #e0e0e0' }}>
        Unofficial lookalike — not affiliated with FedEx or DHL
      </div>
    </div>
  );
}
