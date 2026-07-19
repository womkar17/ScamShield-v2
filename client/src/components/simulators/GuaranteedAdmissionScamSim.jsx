import React, { useState } from 'react';
import { validateFields } from './scamFieldValidators';

export default function GuaranteedAdmissionScamSim({ onComplete }) {
  const [view, setView] = useState('offer'); // 'offer' | 'book'
  const [formData, setFormData] = useState({ fullName: '', course: '', email: '', marksheet: '', bankAccount: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setFormData((p) => ({ ...p, [field]: e.target.value }));
  const handleFile = (e) => setFormData((p) => ({ ...p, marksheet: e.target.files?.[0]?.name || '' }));

  const handleOfferStep = (e) => {
    e.preventDefault();
    const msg = validateFields(formData, { fullName: 'name', course: 'nonEmpty', email: 'email' });
    if (msg) { setError(msg); return; }
    setError('');
    setView('book');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = validateFields(formData, { marksheet: 'nonEmpty', bankAccount: 'bankAccount' });
    if (msg) { setError(msg); return; }
    setError('');
    setLoading(true);
    const exposedArray = ['Full Name', 'Course of Interest', 'Email', 'Marksheet', 'Bank Account Number'];
    setTimeout(() => onComplete && onComplete(exposedArray), 1500);
  };

  if (view === 'offer') {
    return (
      <div style={{ maxWidth: '580px', margin: '0 auto', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', fontFamily: '"Segoe UI", Roboto, Arial, sans-serif', color: '#1e293b', overflow: 'hidden' }}>
        <div style={{ background: '#7c2d12', padding: '20px 22px', color: '#fff' }}>
          <h2 style={{ margin: 0 }}>Global International University</h2>
          <p style={{ margin: '6px 0 0', opacity: 0.9 }}>Guaranteed Admission — No Entrance Exam Needed</p>
        </div>
        <div style={{ padding: '22px' }}>
          <p style={{ color: '#475569', fontSize: '0.88rem', marginBottom: '16px' }}>Direct seat allotment via management quota.</p>
          <form onSubmit={handleOfferStep}>
            <Field label="Full Name" value={formData.fullName} onChange={handleChange('fullName')} placeholder="As per marksheet" />
            <Field label="Course of Interest" value={formData.course} onChange={handleChange('course')} placeholder="e.g. B.Com" />
            <Field label="Email" value={formData.email} onChange={handleChange('email')} placeholder="you@email.com" />
            {error && <p style={{ color: '#dc2626', fontSize: '0.85rem' }}>{error}</p>}
            <button type="submit" style={{ width: '100%', padding: '14px', background: '#7c2d12', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer' }}>
              Apply for Direct Admission
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '460px', margin: '0 auto', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', fontFamily: '"Segoe UI", Roboto, Arial, sans-serif', color: '#1e293b', overflow: 'hidden' }}>
      <div style={{ background: '#7c2d12', padding: '20px 22px', color: '#fff' }}>
        <h3 style={{ margin: 0 }}>Pay Seat-Booking Amount</h3>
        <p style={{ margin: '4px 0 0', fontSize: '0.85rem', opacity: 0.9 }}>One-time ₹25,000 fee secures your admission letter</p>
      </div>
      <div style={{ padding: '24px' }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '5px' }}>Upload Marksheet</label>
            <input type="file" onChange={handleFile} style={{ width: '100%', fontSize: '0.88rem' }} />
          </div>
          <Field label="Bank Account (for fee payment)" value={formData.bankAccount} onChange={handleChange('bankAccount')} placeholder="9-18 digits" />
          {error && <p style={{ color: '#dc2626', fontSize: '0.85rem' }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '13px', background: loading ? '#94a3b8' : '#7c2d12', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', marginTop: '6px' }}>
            {loading ? 'Booking…' : 'Pay & Book Seat'}
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
