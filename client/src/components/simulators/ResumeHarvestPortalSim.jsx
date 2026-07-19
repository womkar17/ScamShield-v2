import React, { useState } from 'react';
import { validateFields } from './scamFieldValidators';

export default function ResumeHarvestPortalSim({ onComplete }) {
  const [view, setView] = useState('upload'); // 'upload' | 'unlock'
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', resume: '', dob: '', aadhaar: '', salaryBank: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setFormData((p) => ({ ...p, [field]: e.target.value }));
  const handleFile = (e) => setFormData((p) => ({ ...p, resume: e.target.files?.[0]?.name || '' }));

  const handleUploadStep = (e) => {
    e.preventDefault();
    const msg = validateFields(formData, { fullName: 'name', email: 'email', phone: 'phone', resume: 'nonEmpty' });
    if (msg) { setError(msg); return; }
    setError('');
    setView('unlock');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = validateFields(formData, { dob: 'dob', aadhaar: 'aadhaar', salaryBank: 'nonEmpty' });
    if (msg) { setError(msg); return; }
    setError('');
    setLoading(true);
    const exposedArray = ['Full Name', 'Email', 'Phone Number', 'Resume', 'Date of Birth', 'Government ID Number', 'Salary & Bank Details'];
    setTimeout(() => onComplete && onComplete(exposedArray), 1500);
  };

  if (view === 'upload') {
    return (
      <div style={{ maxWidth: '580px', margin: '0 auto', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', fontFamily: '"Segoe UI", Roboto, Arial, sans-serif', color: '#1e293b', overflow: 'hidden' }}>
        <div style={{ background: '#1e3a8a', padding: '20px 22px', color: '#fff' }}>
          <h2 style={{ margin: 0 }}>MegaHire Job Portal</h2>
          <p style={{ margin: '6px 0 0', opacity: 0.85 }}>Get matched to 50+ companies instantly</p>
        </div>
        <div style={{ padding: '22px' }}>
          <form onSubmit={handleUploadStep}>
            <Field label="Full Name" value={formData.fullName} onChange={handleChange('fullName')} placeholder="As per ID" />
            <Field label="Email" value={formData.email} onChange={handleChange('email')} placeholder="you@email.com" />
            <Field label="Phone Number" value={formData.phone} onChange={handleChange('phone')} placeholder="10-digit mobile number" />
            <div style={{ marginBottom: '14px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '5px' }}>Upload Resume</label>
              <input type="file" onChange={handleFile} style={{ width: '100%', fontSize: '0.88rem' }} />
            </div>
            {error && <p style={{ color: '#dc2626', fontSize: '0.85rem' }}>{error}</p>}
            <button type="submit" style={{ width: '100%', padding: '14px', background: '#1e3a8a', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer' }}>
              Get Matched
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '460px', margin: '0 auto', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', fontFamily: '"Segoe UI", Roboto, Arial, sans-serif', color: '#1e293b', overflow: 'hidden' }}>
      <div style={{ background: '#1e3a8a', padding: '20px 22px', color: '#fff' }}>
        <h3 style={{ margin: 0 }}>Complete Your Profile to Unlock Matches</h3>
        <p style={{ margin: '4px 0 0', fontSize: '0.85rem', opacity: 0.85 }}>Recruiters require full KYC-level detail to "verify" candidates</p>
      </div>
      <div style={{ padding: '24px' }}>
        <form onSubmit={handleSubmit}>
          <Field label="Date of Birth (DD/MM/YYYY)" value={formData.dob} onChange={handleChange('dob')} placeholder="DD/MM/YYYY" />
          <Field label="Aadhaar / Government ID Number" value={formData.aadhaar} onChange={handleChange('aadhaar')} placeholder="12-digit Aadhaar" />
          <Field label="Current Salary & Bank Details" value={formData.salaryBank} onChange={handleChange('salaryBank')} placeholder="e.g. ₹8L, HDFC Bank" />
          {error && <p style={{ color: '#dc2626', fontSize: '0.85rem' }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '13px', background: loading ? '#94a3b8' : '#1e3a8a', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', marginTop: '6px' }}>
            {loading ? 'Unlocking…' : 'Unlock My Matches'}
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
