import React, { useState } from 'react';
import { validateFields } from './scamFieldValidators';

export default function FakeSkillMissionScamSim({ onComplete }) {
  const [view, setView] = useState('offer'); // 'offer' | 'deposit'
  const [formData, setFormData] = useState({ fullName: '', qualification: '', phone: '', aadhaar: '', bankAccount: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setFormData((p) => ({ ...p, [field]: e.target.value }));

  const handleOfferStep = (e) => {
    e.preventDefault();
    const msg = validateFields(formData, { fullName: 'name', qualification: 'nonEmpty', phone: 'phone' });
    if (msg) { setError(msg); return; }
    setError('');
    setView('deposit');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = validateFields(formData, { aadhaar: 'aadhaar', bankAccount: 'bankAccount' });
    if (msg) { setError(msg); return; }
    setError('');
    setLoading(true);
    const exposedArray = ['Full Name', 'Qualification', 'Phone Number', 'Aadhaar Number', 'Bank Account Number'];
    setTimeout(() => onComplete && onComplete(exposedArray), 1500);
  };

  if (view === 'offer') {
    return (
      <div style={{ maxWidth: '580px', margin: '0 auto', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', fontFamily: '"Segoe UI", Roboto, Arial, sans-serif', color: '#1e293b', overflow: 'hidden' }}>
        <div style={{ background: '#166534', padding: '20px 22px', color: '#fff' }}>
          <h2 style={{ margin: 0 }}>Govt-Backed Skill Mission</h2>
          <p style={{ margin: '6px 0 0', opacity: 0.9 }}>Free Govt-Certified Skill Course + ₹8,000 Stipend</p>
        </div>
        <div style={{ padding: '22px' }}>
          <p style={{ color: '#475569', fontSize: '0.88rem', marginBottom: '16px' }}>Limited seats under national skill development scheme.</p>
          <form onSubmit={handleOfferStep}>
            <Field label="Full Name" value={formData.fullName} onChange={handleChange('fullName')} placeholder="As per ID" />
            <Field label="Highest Qualification" value={formData.qualification} onChange={handleChange('qualification')} placeholder="e.g. B.A., 12th Pass" />
            <Field label="Phone Number" value={formData.phone} onChange={handleChange('phone')} placeholder="10-digit mobile number" />
            {error && <p style={{ color: '#dc2626', fontSize: '0.85rem' }}>{error}</p>}
            <button type="submit" style={{ width: '100%', padding: '14px', background: '#166534', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer' }}>
              Register for Free Course
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '460px', margin: '0 auto', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', fontFamily: '"Segoe UI", Roboto, Arial, sans-serif', color: '#1e293b', overflow: 'hidden' }}>
      <div style={{ background: '#166534', padding: '20px 22px', color: '#fff' }}>
        <h3 style={{ margin: 0 }}>Pay Refundable Caution Deposit</h3>
        <p style={{ margin: '4px 0 0', fontSize: '0.85rem', opacity: 0.9 }}>₹1,200 deposit ensures serious candidates only</p>
      </div>
      <div style={{ padding: '24px' }}>
        <form onSubmit={handleSubmit}>
          <Field label="Aadhaar Number" value={formData.aadhaar} onChange={handleChange('aadhaar')} placeholder="12-digit Aadhaar" />
          <Field label="Bank Account Number" value={formData.bankAccount} onChange={handleChange('bankAccount')} placeholder="9-18 digits" />
          {error && <p style={{ color: '#dc2626', fontSize: '0.85rem' }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '13px', background: loading ? '#94a3b8' : '#166534', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', marginTop: '6px' }}>
            {loading ? 'Processing…' : 'Pay Deposit & Enroll'}
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
