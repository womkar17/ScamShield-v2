import React, { useState } from 'react';
import { validateFields } from './scamFieldValidators';

export default function FakeJobOfferAbroadScamSim({ onComplete }) {
  const [view, setView] = useState('offer'); // 'offer' | 'process'
  const [formData, setFormData] = useState({ fullName: '', phone: '', email: '', passportNumber: '', bankAccount: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setFormData((p) => ({ ...p, [field]: e.target.value }));

  const handleOfferStep = (e) => {
    e.preventDefault();
    const msg = validateFields(formData, { fullName: 'name', phone: 'phone', email: 'email' });
    if (msg) { setError(msg); return; }
    setError('');
    setView('process');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = validateFields(formData, { passportNumber: 'passport', bankAccount: 'bankAccount' });
    if (msg) { setError(msg); return; }
    setError('');
    setLoading(true);
    const exposedArray = ['Full Name', 'Phone Number', 'Email', 'Passport Number', 'Bank Account Number', 'Processing Fee'];
    setTimeout(() => onComplete && onComplete(exposedArray), 1500);
  };

  if (view === 'offer') {
    return (
      <div style={{ maxWidth: '600px', margin: '0 auto', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', fontFamily: '"Segoe UI", Roboto, Arial, sans-serif', color: '#1e293b', overflow: 'hidden' }}>
        <div style={{ background: '#0e7490', padding: '20px 22px', color: '#fff' }}>
          <h2 style={{ margin: 0 }}>WorldWide Careers Placement</h2>
          <p style={{ margin: '6px 0 0', opacity: 0.9 }}>Warehouse Supervisor — Germany • €3,200/month + Accommodation</p>
        </div>
        <div style={{ padding: '22px' }}>
          <div style={{ background: '#ecfeff', color: '#0e7490', padding: '10px 14px', borderRadius: '6px', fontWeight: 600, fontSize: '0.85rem', marginBottom: '16px' }}>
            ✈️ Direct company sponsorship — no work experience required, all levels welcome
          </div>
          <form onSubmit={handleOfferStep}>
            <Field label="Full Name" value={formData.fullName} onChange={handleChange('fullName')} placeholder="As per passport" />
            <Field label="Phone Number" value={formData.phone} onChange={handleChange('phone')} placeholder="10-digit mobile number" />
            <Field label="Email" value={formData.email} onChange={handleChange('email')} placeholder="you@email.com" />
            {error && <p style={{ color: '#dc2626', fontSize: '0.85rem' }}>{error}</p>}
            <button type="submit" style={{ width: '100%', padding: '14px', background: '#0e7490', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer' }}>
              Apply for This Role
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '460px', margin: '0 auto', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', fontFamily: '"Segoe UI", Roboto, Arial, sans-serif', color: '#1e293b', overflow: 'hidden' }}>
      <div style={{ background: '#0e7490', padding: '20px 22px', color: '#fff' }}>
        <h3 style={{ margin: 0 }}>Pay Visa Sponsorship Processing Fee</h3>
        <p style={{ margin: '4px 0 0', fontSize: '0.85rem', opacity: 0.9 }}>€450 covers work-permit filing and employer sponsorship paperwork</p>
      </div>
      <div style={{ padding: '24px' }}>
        <form onSubmit={handleSubmit}>
          <Field label="Passport Number" value={formData.passportNumber} onChange={handleChange('passportNumber')} placeholder="e.g. A1234567" />
          <Field label="Bank Account (for fee payment)" value={formData.bankAccount} onChange={handleChange('bankAccount')} placeholder="9-18 digits" />
          {error && <p style={{ color: '#dc2626', fontSize: '0.85rem' }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '13px', background: loading ? '#94a3b8' : '#0e7490', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', marginTop: '6px' }}>
            {loading ? 'Processing…' : 'Pay & Start Sponsorship'}
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
