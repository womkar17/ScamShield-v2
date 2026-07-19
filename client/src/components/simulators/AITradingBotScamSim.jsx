import React, { useState } from 'react';
import { validateFields } from './scamFieldValidators';

export default function AITradingBotScamSim({ onComplete }) {
  const [view, setView] = useState('landing'); // 'landing' | 'fund'
  const [formData, setFormData] = useState({ fullName: '', phone: '', email: '', cardNumber: '', cardExpiry: '', cardCvv: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setFormData((p) => ({ ...p, [field]: e.target.value }));

  const handleLandingStep = (e) => {
    e.preventDefault();
    const msg = validateFields(formData, { fullName: 'name', phone: 'phone', email: 'email' });
    if (msg) { setError(msg); return; }
    setError('');
    setView('fund');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = validateFields(formData, { cardNumber: 'cardNumber', cardExpiry: 'cardExpiry', cardCvv: 'cvv' });
    if (msg) { setError(msg); return; }
    setError('');
    setLoading(true);
    const exposedArray = ['Full Name', 'Phone Number', 'Email', 'Card Number', 'Card Expiry', 'CVV'];
    setTimeout(() => onComplete && onComplete(exposedArray), 1500);
  };

  if (view === 'landing') {
    return (
      <div style={{ maxWidth: '600px', margin: '0 auto', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', fontFamily: '"Segoe UI", Roboto, Arial, sans-serif', color: '#1e293b', overflow: 'hidden' }}>
        <div style={{ background: '#064e3b', padding: '22px', color: '#fff' }}>
          <h2 style={{ margin: 0 }}>QuantumTrade AI</h2>
          <p style={{ margin: '6px 0 0', opacity: 0.85 }}>Let our AI bot trade for you — 92% win rate</p>
        </div>
        <div style={{ padding: '22px' }}>
          <div style={{ background: '#ecfdf5', borderLeft: '4px solid #059669', padding: '12px 14px', borderRadius: '6px', marginBottom: '18px', fontSize: '0.88rem', color: '#065f46' }}>
            ⭐ "Made ₹2.3L in my first month" — verified user
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '20px', textAlign: 'center' }}>
            <Stat label="Win Rate" value="92%" />
            <Stat label="Avg Monthly" value="+34%" />
            <Stat label="Active Users" value="48K" />
          </div>
          <form onSubmit={handleLandingStep}>
            <Field label="Full Name" value={formData.fullName} onChange={handleChange('fullName')} placeholder="As per ID" />
            <Field label="Phone Number" value={formData.phone} onChange={handleChange('phone')} placeholder="10-digit mobile number" />
            <Field label="Email" value={formData.email} onChange={handleChange('email')} placeholder="you@email.com" />
            {error && <p style={{ color: '#dc2626', fontSize: '0.85rem' }}>{error}</p>}
            <button type="submit" style={{ width: '100%', padding: '14px', background: '#059669', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer' }}>
              Create Free Account
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '460px', margin: '0 auto', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', fontFamily: '"Segoe UI", Roboto, Arial, sans-serif', color: '#1e293b', overflow: 'hidden' }}>
      <div style={{ background: '#064e3b', padding: '20px 22px', color: '#fff' }}>
        <h3 style={{ margin: 0 }}>Fund Your AI Trading Wallet</h3>
        <p style={{ margin: '4px 0 0', fontSize: '0.85rem', opacity: 0.85 }}>Minimum funding ₹10,000 to unlock the AI bot</p>
      </div>
      <div style={{ padding: '24px' }}>
        <form onSubmit={handleSubmit}>
          <Field label="Card Number" value={formData.cardNumber} onChange={handleChange('cardNumber')} placeholder="16-digit card number" />
          <Field label="Expiry (MM/YY)" value={formData.cardExpiry} onChange={handleChange('cardExpiry')} placeholder="MM/YY" />
          <Field label="CVV" value={formData.cardCvv} onChange={handleChange('cardCvv')} type="password" placeholder="3-4 digits" />
          {error && <p style={{ color: '#dc2626', fontSize: '0.85rem' }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '13px', background: loading ? '#94a3b8' : '#059669', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', marginTop: '6px' }}>
            {loading ? 'Activating Bot…' : 'Fund & Activate Bot'}
          </button>
        </form>
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div style={{ background: '#f0fdf4', borderRadius: '8px', padding: '10px' }}>
      <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700, color: '#059669' }}>{value}</p>
      <p style={{ margin: '2px 0 0', fontSize: '0.72rem', color: '#64748b' }}>{label}</p>
    </div>
  );
}

function Field({ label, value, onChange, type = 'text', placeholder }) {
  return (
    <div style={{ marginBottom: '13px' }}>
      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '5px' }}>{label}</label>
      <input type={type} value={value} onChange={onChange} placeholder={placeholder} style={{ width: '100%', padding: '11px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', boxSizing: 'border-box', fontSize: '0.92rem', outline: 'none' }} />
    </div>
  );
}
