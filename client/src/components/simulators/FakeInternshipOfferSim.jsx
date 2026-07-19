import React, { useState } from 'react';
import { validateFields } from './scamFieldValidators';

export default function FakeInternshipOfferSim({ onComplete }) {
  const [view, setView] = useState('apply'); // 'apply' | 'pay'
  const [formData, setFormData] = useState({ fullName: '', college: '', email: '', phone: '', upiId: '', address: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setFormData((p) => ({ ...p, [field]: e.target.value }));

  const handleApplyStep = (e) => {
    e.preventDefault();
    const msg = validateFields(formData, { fullName: 'name', college: 'nonEmpty', email: 'email', phone: 'phone' });
    if (msg) { setError(msg); return; }
    setError('');
    setView('pay');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = validateFields(formData, { upiId: 'upiId', address: 'nonEmpty' });
    if (msg) { setError(msg); return; }
    setError('');
    setLoading(true);
    const exposedArray = ['Full Name', 'College', 'Email', 'Phone Number', 'UPI ID', 'Home Address', 'Registration Fee'];
    setTimeout(() => onComplete && onComplete(exposedArray), 1500);
  };

  if (view === 'apply') {
    return (
      <div style={{ maxWidth: '580px', margin: '0 auto', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', fontFamily: '"Segoe UI", Roboto, Arial, sans-serif', color: '#1e293b', overflow: 'hidden' }}>
        <div style={{ background: '#1d4ed8', padding: '20px 22px', color: '#fff' }}>
          <h2 style={{ margin: 0 }}>BrightPath Internships</h2>
          <p style={{ margin: '6px 0 0', opacity: 0.85 }}>Work-From-Home Internship — Certificate + Stipend</p>
        </div>
        <div style={{ padding: '22px' }}>
          <p style={{ color: '#475569', fontSize: '0.9rem', marginBottom: '16px' }}>Open to all students. No interview required. Certificate issued on completion.</p>
          <form onSubmit={handleApplyStep}>
            <Field label="Full Name" value={formData.fullName} onChange={handleChange('fullName')} placeholder="As per ID" />
            <Field label="College/University" value={formData.college} onChange={handleChange('college')} placeholder="Full college name" />
            <Field label="Email" value={formData.email} onChange={handleChange('email')} placeholder="you@email.com" />
            <Field label="Phone Number" value={formData.phone} onChange={handleChange('phone')} placeholder="10-digit mobile number" />
            {error && <p style={{ color: '#dc2626', fontSize: '0.85rem' }}>{error}</p>}
            <button type="submit" style={{ width: '100%', padding: '14px', background: '#1d4ed8', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer' }}>
              Apply Now
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '460px', margin: '0 auto', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', fontFamily: '"Segoe UI", Roboto, Arial, sans-serif', color: '#1e293b', overflow: 'hidden' }}>
      <div style={{ background: '#1d4ed8', padding: '20px 22px', color: '#fff' }}>
        <h3 style={{ margin: 0 }}>Pay Registration Fee to Confirm Your Seat</h3>
        <p style={{ margin: '4px 0 0', fontSize: '0.85rem', opacity: 0.85 }}>A refundable ₹499 fee issues your ID card and materials</p>
      </div>
      <div style={{ padding: '24px' }}>
        <form onSubmit={handleSubmit}>
          <Field label="UPI ID" value={formData.upiId} onChange={handleChange('upiId')} placeholder="name@bank" />
          <Field label="Home Address (for certificate courier)" value={formData.address} onChange={handleChange('address')} placeholder="Full address" />
          {error && <p style={{ color: '#dc2626', fontSize: '0.85rem' }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '13px', background: loading ? '#94a3b8' : '#1d4ed8', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', marginTop: '6px' }}>
            {loading ? 'Processing…' : 'Pay & Confirm Seat'}
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
