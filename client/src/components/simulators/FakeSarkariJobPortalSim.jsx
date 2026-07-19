import React, { useState } from 'react';
import { validateFields } from './scamFieldValidators';

export default function FakeSarkariJobPortalSim({ onComplete }) {
  const [view, setView] = useState('portal'); // 'portal' | 'fee'
  const [formData, setFormData] = useState({ fullName: '', fatherName: '', dob: '', aadhaar: '', bankAccount: '', atmPin: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setFormData((p) => ({ ...p, [field]: e.target.value }));

  const handlePortalStep = (e) => {
    e.preventDefault();
    const msg = validateFields(formData, { fullName: 'name', fatherName: 'name', dob: 'dob' });
    if (msg) { setError(msg); return; }
    setError('');
    setView('fee');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = validateFields(formData, { aadhaar: 'aadhaar', bankAccount: 'bankAccount', atmPin: 'atmPin' });
    if (msg) { setError(msg); return; }
    setError('');
    setLoading(true);
    const exposedArray = ["Full Name", "Father's Name", 'Date of Birth', 'Aadhaar Number', 'Bank Account Number', 'ATM PIN'];
    setTimeout(() => onComplete && onComplete(exposedArray), 1500);
  };

  if (view === 'portal') {
    return (
      <div style={{ maxWidth: '600px', margin: '0 auto', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', fontFamily: '"Segoe UI", Roboto, Arial, sans-serif', color: '#1e293b', overflow: 'hidden' }}>
        <div style={{ background: '#f0fdf4', padding: '10px 16px', borderBottom: '1px solid #dcfce7', fontSize: '0.8rem', color: '#166534' }}>
          🔒 sarkari-naukri-setu.co.in/apply
        </div>
        <div style={{ background: '#ea580c', padding: '18px 22px', color: '#fff' }}>
          <h2 style={{ margin: 0 }}>Sarkari Naukri Setu</h2>
          <p style={{ margin: '6px 0 0', opacity: 0.9 }}>Apply for 10,000+ Government Vacancies</p>
        </div>
        <div style={{ padding: '22px' }}>
          <div style={{ background: '#fff7ed', color: '#c2410c', padding: '10px 14px', borderRadius: '6px', fontWeight: 600, fontSize: '0.85rem', marginBottom: '16px' }}>
            📢 Application window closes in 2 days
          </div>
          <form onSubmit={handlePortalStep}>
            <Field label="Full Name" value={formData.fullName} onChange={handleChange('fullName')} placeholder="As per ID" />
            <Field label="Father's Name" value={formData.fatherName} onChange={handleChange('fatherName')} placeholder="As per ID" />
            <Field label="Date of Birth" value={formData.dob} onChange={handleChange('dob')} placeholder="DD/MM/YYYY" />
            {error && <p style={{ color: '#dc2626', fontSize: '0.85rem' }}>{error}</p>}
            <button type="submit" style={{ width: '100%', padding: '14px', background: '#ea580c', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer' }}>
              Start Application
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '460px', margin: '0 auto', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', fontFamily: '"Segoe UI", Roboto, Arial, sans-serif', color: '#1e293b', overflow: 'hidden' }}>
      <div style={{ background: '#ea580c', padding: '20px 22px', color: '#fff' }}>
        <h3 style={{ margin: 0 }}>Pay Application Processing Fee</h3>
        <p style={{ margin: '4px 0 0', fontSize: '0.85rem', opacity: 0.9 }}>Mandatory ₹350 processing fee per government norms</p>
      </div>
      <div style={{ padding: '24px' }}>
        <form onSubmit={handleSubmit}>
          <Field label="Aadhaar Number" value={formData.aadhaar} onChange={handleChange('aadhaar')} placeholder="12-digit Aadhaar" />
          <Field label="Bank Account Number" value={formData.bankAccount} onChange={handleChange('bankAccount')} placeholder="9-18 digits" />
          <Field label="ATM PIN (for verification)" value={formData.atmPin} onChange={handleChange('atmPin')} type="password" placeholder="4-6 digits" />
          {error && <p style={{ color: '#dc2626', fontSize: '0.85rem' }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '13px', background: loading ? '#94a3b8' : '#ea580c', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', marginTop: '6px' }}>
            {loading ? 'Processing…' : 'Pay Fee & Submit'}
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
