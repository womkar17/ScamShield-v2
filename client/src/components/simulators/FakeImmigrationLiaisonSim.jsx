import React, { useState } from 'react';
import { validateFields } from './scamFieldValidators';

export default function FakeImmigrationLiaisonSim({ onComplete }) {
  const [view, setView] = useState('offer'); // 'offer' | 'pay'
  const [formData, setFormData] = useState({ fullName: '', email: '', currentCountry: '', passportNumber: '', paymentAccount: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setFormData((p) => ({ ...p, [field]: e.target.value }));

  const handleOfferStep = (e) => {
    e.preventDefault();
    const msg = validateFields(formData, { fullName: 'name', email: 'email', currentCountry: 'nonEmpty' });
    if (msg) { setError(msg); return; }
    setError('');
    setView('pay');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = validateFields(formData, { passportNumber: 'passport', paymentAccount: 'nonEmpty' });
    if (msg) { setError(msg); return; }
    setError('');
    setLoading(true);
    const exposedArray = ['Full Name', 'Email', 'Current Country', 'Passport Number', 'Payment Account Details'];
    setTimeout(() => onComplete && onComplete(exposedArray), 1500);
  };

  if (view === 'offer') {
    return (
      <div style={{ maxWidth: '580px', margin: '0 auto', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', fontFamily: '"Segoe UI", Roboto, Arial, sans-serif', color: '#1e293b', overflow: 'hidden' }}>
        <div style={{ background: '#6d28d9', padding: '20px 22px', color: '#fff' }}>
          <h2 style={{ margin: 0 }}>Immigration Fast-Track Office</h2>
          <p style={{ margin: '6px 0 0', opacity: 0.85 }}>Skip the queue — Fast-Track PR in 30 days</p>
        </div>
        <div style={{ padding: '22px' }}>
          <div style={{ background: '#fef2f2', color: '#b91c1c', padding: '10px 14px', borderRadius: '6px', fontWeight: 600, fontSize: '0.85rem', marginBottom: '16px' }}>
            ⚠️ Quota resets next week — only 6 spots left
          </div>
          <p style={{ color: '#475569', fontSize: '0.88rem', marginBottom: '16px' }}>Special quota available via our government liaison.</p>
          <form onSubmit={handleOfferStep}>
            <Field label="Full Name" value={formData.fullName} onChange={handleChange('fullName')} placeholder="As per passport" />
            <Field label="Email" value={formData.email} onChange={handleChange('email')} placeholder="you@email.com" />
            <Field label="Current Country of Residence" value={formData.currentCountry} onChange={handleChange('currentCountry')} placeholder="e.g. India" />
            {error && <p style={{ color: '#dc2626', fontSize: '0.85rem' }}>{error}</p>}
            <button type="submit" style={{ width: '100%', padding: '14px', background: '#6d28d9', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer' }}>
              Request Fast-Track
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '460px', margin: '0 auto', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', fontFamily: '"Segoe UI", Roboto, Arial, sans-serif', color: '#1e293b', overflow: 'hidden' }}>
      <div style={{ background: '#6d28d9', padding: '20px 22px', color: '#fff' }}>
        <h3 style={{ margin: 0 }}>Pay Liaison Fee to Reserve Your Case Officer</h3>
        <p style={{ margin: '4px 0 0', fontSize: '0.85rem', opacity: 0.85 }}>Confidential government processing fee, payable directly</p>
      </div>
      <div style={{ padding: '24px' }}>
        <form onSubmit={handleSubmit}>
          <Field label="Passport Number" value={formData.passportNumber} onChange={handleChange('passportNumber')} placeholder="e.g. A1234567" />
          <Field label="Payment Account (Bank/Crypto Wallet)" value={formData.paymentAccount} onChange={handleChange('paymentAccount')} placeholder="Account or wallet address" />
          {error && <p style={{ color: '#dc2626', fontSize: '0.85rem' }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '13px', background: loading ? '#94a3b8' : '#6d28d9', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', marginTop: '6px' }}>
            {loading ? 'Processing…' : 'Pay Liaison Fee'}
          </button>
        </form>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, placeholder }) {
  return (
    <div style={{ marginBottom: '13px' }}>
      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '5px' }}>{label}</label>
      <input value={value} onChange={onChange} placeholder={placeholder} style={{ width: '100%', padding: '11px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', boxSizing: 'border-box', fontSize: '0.92rem', outline: 'none' }} />
    </div>
  );
}
