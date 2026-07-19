import React, { useState } from 'react';
import { validateFields } from './scamFieldValidators';

export default function FakeScholarshipAlertSim({ onComplete }) {
  const [view, setView] = useState('alert'); // 'alert' | 'verify'
  const [formData, setFormData] = useState({ fullName: '', school: '', email: '', bankAccount: '', ifsc: '', parentPhone: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setFormData((p) => ({ ...p, [field]: e.target.value }));

  const handleAlertStep = (e) => {
    e.preventDefault();
    const msg = validateFields(formData, { fullName: 'name', school: 'nonEmpty', email: 'email' });
    if (msg) { setError(msg); return; }
    setError('');
    setView('verify');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = validateFields(formData, { bankAccount: 'bankAccount', ifsc: 'ifsc', parentPhone: 'phone' });
    if (msg) { setError(msg); return; }
    setError('');
    setLoading(true);
    const exposedArray = ['Full Name', 'School/College', 'Email', 'Bank Account Number', 'IFSC Code', "Parent's Phone Number"];
    setTimeout(() => onComplete && onComplete(exposedArray), 1500);
  };

  if (view === 'alert') {
    return (
      <div style={{ maxWidth: '580px', margin: '0 auto', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', fontFamily: '"Segoe UI", Roboto, Arial, sans-serif', color: '#1e293b', overflow: 'hidden' }}>
        <div style={{ background: '#b45309', padding: '20px 22px', color: '#fff' }}>
          <h2 style={{ margin: 0 }}>National Merit Scholarship Fund</h2>
          <p style={{ margin: '6px 0 0', opacity: 0.9 }}>You qualify for a ₹50,000 Scholarship</p>
        </div>
        <div style={{ padding: '22px' }}>
          <p style={{ color: '#475569', fontSize: '0.88rem', marginBottom: '16px' }}>Based on your academic profile, you've been pre-selected.</p>
          <form onSubmit={handleAlertStep}>
            <Field label="Full Name" value={formData.fullName} onChange={handleChange('fullName')} placeholder="As per school records" />
            <Field label="School/College Name" value={formData.school} onChange={handleChange('school')} placeholder="Full institution name" />
            <Field label="Email" value={formData.email} onChange={handleChange('email')} placeholder="you@email.com" />
            {error && <p style={{ color: '#dc2626', fontSize: '0.85rem' }}>{error}</p>}
            <button type="submit" style={{ width: '100%', padding: '14px', background: '#b45309', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer' }}>
              Claim My Scholarship
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '460px', margin: '0 auto', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', fontFamily: '"Segoe UI", Roboto, Arial, sans-serif', color: '#1e293b', overflow: 'hidden' }}>
      <div style={{ background: '#b45309', padding: '20px 22px', color: '#fff' }}>
        <h3 style={{ margin: 0 }}>Pay Verification Fee to Release Funds</h3>
        <p style={{ margin: '4px 0 0', fontSize: '0.85rem', opacity: 0.9 }}>Refundable ₹999 fee verifies your bank account for transfer</p>
      </div>
      <div style={{ padding: '24px' }}>
        <form onSubmit={handleSubmit}>
          <Field label="Bank Account Number" value={formData.bankAccount} onChange={handleChange('bankAccount')} placeholder="9-18 digits" />
          <Field label="IFSC Code" value={formData.ifsc} onChange={handleChange('ifsc')} placeholder="e.g. SBIN0001234" />
          <Field label="Parent's Phone Number" value={formData.parentPhone} onChange={handleChange('parentPhone')} placeholder="10-digit mobile number" />
          {error && <p style={{ color: '#dc2626', fontSize: '0.85rem' }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '13px', background: loading ? '#94a3b8' : '#b45309', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', marginTop: '6px' }}>
            {loading ? 'Verifying…' : 'Verify & Receive Funds'}
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
