import React, { useState } from 'react';
import { validateFields } from './scamFieldValidators';

export default function GulfJobOfferPostalScamSim({ onComplete }) {
  const [view, setView] = useState('letter'); // 'letter' | 'stamping'
  const [formData, setFormData] = useState({ fullName: '', phone: '', address: '', passportNumber: '', bankAccount: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setFormData((p) => ({ ...p, [field]: e.target.value }));

  const handleLetterStep = (e) => {
    e.preventDefault();
    const msg = validateFields(formData, { fullName: 'name', phone: 'phone', address: 'nonEmpty' });
    if (msg) { setError(msg); return; }
    setError('');
    setView('stamping');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = validateFields(formData, { passportNumber: 'passport', bankAccount: 'bankAccount' });
    if (msg) { setError(msg); return; }
    setError('');
    setLoading(true);
    const exposedArray = ['Full Name', 'Phone Number', 'Home Address', 'Passport Number', 'Bank Account Number', 'Visa Stamping Fee'];
    setTimeout(() => onComplete && onComplete(exposedArray), 1500);
  };

  if (view === 'letter') {
    return (
      <div style={{ maxWidth: '600px', margin: '0 auto', background: '#fdfaf3', border: '1px solid #d4c9a8', borderRadius: '4px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', fontFamily: 'Georgia, "Times New Roman", serif', color: '#3f3627', overflow: 'hidden' }}>
        <div style={{ background: '#7c6a3f', padding: '18px 24px', color: '#fdfaf3' }}>
          <h2 style={{ margin: 0, fontFamily: '"Segoe UI", Arial, sans-serif' }}>Al-Manara Overseas Recruitment Agency</h2>
          <p style={{ margin: '4px 0 0', fontSize: '0.85rem', opacity: 0.85, fontFamily: '"Segoe UI", Arial, sans-serif' }}>Appointment Letter — Ref No. AMR/2026/04471</p>
        </div>
        <div style={{ padding: '26px' }}>
          <p style={{ lineHeight: 1.7, fontSize: '0.95rem' }}>
            We are pleased to inform you that you have been selected for the position of
            <strong> Site Electrician</strong> with a leading construction firm in Dubai, UAE, at a
            monthly salary of <strong>AED 3,800</strong> plus free accommodation and food.
            Your appointment letter and visa documents have been dispatched by courier to your
            registered address.
          </p>
          <form onSubmit={handleLetterStep}>
            <Field label="Full Name" value={formData.fullName} onChange={handleChange('fullName')} placeholder="As per passport" />
            <Field label="Phone Number" value={formData.phone} onChange={handleChange('phone')} placeholder="10-digit mobile number" />
            <Field label="Home Address (for courier delivery)" value={formData.address} onChange={handleChange('address')} placeholder="Full address" />
            {error && <p style={{ color: '#b91c1c', fontSize: '0.85rem' }}>{error}</p>}
            <button type="submit" style={{ width: '100%', padding: '13px', background: '#7c6a3f', color: '#fdfaf3', border: 'none', borderRadius: '4px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', fontFamily: '"Segoe UI", Arial, sans-serif' }}>
              Confirm Delivery Address
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '460px', margin: '0 auto', background: '#fdfaf3', border: '1px solid #d4c9a8', borderRadius: '4px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)', fontFamily: '"Segoe UI", Roboto, Arial, sans-serif', color: '#3f3627', overflow: 'hidden' }}>
      <div style={{ background: '#7c6a3f', padding: '20px 22px', color: '#fdfaf3' }}>
        <h3 style={{ margin: 0 }}>Pay Visa Stamping & Emigration Clearance Fee</h3>
        <p style={{ margin: '4px 0 0', fontSize: '0.85rem', opacity: 0.85 }}>₹28,500 covers visa stamping, labor card, and emigration clearance</p>
      </div>
      <div style={{ padding: '24px' }}>
        <form onSubmit={handleSubmit}>
          <Field label="Passport Number" value={formData.passportNumber} onChange={handleChange('passportNumber')} placeholder="e.g. A1234567" />
          <Field label="Bank Account (for fee payment)" value={formData.bankAccount} onChange={handleChange('bankAccount')} placeholder="9-18 digits" />
          {error && <p style={{ color: '#b91c1c', fontSize: '0.85rem' }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '13px', background: loading ? '#a89a72' : '#7c6a3f', color: '#fdfaf3', border: 'none', borderRadius: '4px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', marginTop: '6px' }}>
            {loading ? 'Processing…' : 'Pay & Process Visa'}
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
      <input value={value} onChange={onChange} placeholder={placeholder} style={{ width: '100%', padding: '11px 12px', border: '1px solid #d4c9a8', borderRadius: '4px', boxSizing: 'border-box', fontSize: '0.92rem', outline: 'none' }} />
    </div>
  );
}
