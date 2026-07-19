import React, { useState } from 'react';
import { validateFields } from './scamFieldValidators';

export default function RankGuaranteeCoachingScamSim({ onComplete }) {
  const [view, setView] = useState('offer'); // 'offer' | 'pay'
  const [formData, setFormData] = useState({ fullName: '', examTarget: '', phone: '', cardNumber: '', cardExpiry: '', cardCvv: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setFormData((p) => ({ ...p, [field]: e.target.value }));

  const handleOfferStep = (e) => {
    e.preventDefault();
    const msg = validateFields(formData, { fullName: 'name', examTarget: 'nonEmpty', phone: 'phone' });
    if (msg) { setError(msg); return; }
    setError('');
    setView('pay');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = validateFields(formData, { cardNumber: 'cardNumber', cardExpiry: 'cardExpiry', cardCvv: 'cvv' });
    if (msg) { setError(msg); return; }
    setError('');
    setLoading(true);
    const exposedArray = ['Full Name', 'Target Exam', 'Phone Number', 'Card Number', 'Card Expiry', 'CVV'];
    setTimeout(() => onComplete && onComplete(exposedArray), 1500);
  };

  if (view === 'offer') {
    return (
      <div style={{ maxWidth: '580px', margin: '0 auto', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', fontFamily: '"Segoe UI", Roboto, Arial, sans-serif', color: '#1e293b', overflow: 'hidden' }}>
        <div style={{ background: '#92400e', padding: '20px 22px', color: '#fff' }}>
          <h2 style={{ margin: 0 }}>RankMaster Academy</h2>
          <p style={{ margin: '6px 0 0', opacity: 0.9 }}>Crack Any Exam in 30 Days — Guaranteed Rank</p>
        </div>
        <div style={{ padding: '22px' }}>
          <div style={{ background: '#fffbeb', color: '#b45309', padding: '10px 14px', borderRadius: '6px', fontWeight: 600, fontSize: '0.85rem', marginBottom: '16px' }}>
            🎯 Early-bird batch closes tonight
          </div>
          <p style={{ color: '#475569', fontSize: '0.88rem', marginBottom: '16px' }}>Join 10,000+ toppers.</p>
          <form onSubmit={handleOfferStep}>
            <Field label="Full Name" value={formData.fullName} onChange={handleChange('fullName')} placeholder="As per ID" />
            <Field label="Target Exam" value={formData.examTarget} onChange={handleChange('examTarget')} placeholder="e.g. JEE, NEET, UPSC" />
            <Field label="Phone Number" value={formData.phone} onChange={handleChange('phone')} placeholder="10-digit mobile number" />
            {error && <p style={{ color: '#dc2626', fontSize: '0.85rem' }}>{error}</p>}
            <button type="submit" style={{ width: '100%', padding: '14px', background: '#92400e', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer' }}>
              Enroll Now
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '460px', margin: '0 auto', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', fontFamily: '"Segoe UI", Roboto, Arial, sans-serif', color: '#1e293b', overflow: 'hidden' }}>
      <div style={{ background: '#92400e', padding: '20px 22px', color: '#fff' }}>
        <h3 style={{ margin: 0 }}>Pay Full Course Fee to Lock Early-Bird Price</h3>
        <p style={{ margin: '4px 0 0', fontSize: '0.85rem', opacity: 0.9 }}>₹18,999 one-time (regular price ₹40,000)</p>
      </div>
      <div style={{ padding: '24px' }}>
        <form onSubmit={handleSubmit}>
          <Field label="Card Number" value={formData.cardNumber} onChange={handleChange('cardNumber')} placeholder="16-digit card number" />
          <Field label="Expiry (MM/YY)" value={formData.cardExpiry} onChange={handleChange('cardExpiry')} placeholder="MM/YY" />
          <Field label="CVV" value={formData.cardCvv} onChange={handleChange('cardCvv')} type="password" placeholder="3-4 digits" />
          {error && <p style={{ color: '#dc2626', fontSize: '0.85rem' }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '13px', background: loading ? '#94a3b8' : '#92400e', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', marginTop: '6px' }}>
            {loading ? 'Processing…' : 'Pay & Lock Price'}
          </button>
        </form>
      </div>
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
