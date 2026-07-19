import React, { useState } from 'react';
import { validateFields } from './scamFieldValidators';

export default function FakeVisaConsultancyFeeSim({ onComplete }) {
  const [view, setView] = useState('eligibility'); // 'eligibility' | 'pay'
  const [formData, setFormData] = useState({ fullName: '', phone: '', destinationCountry: 'Canada', passportNumber: '', passportScan: '', bankAccount: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setFormData((p) => ({ ...p, [field]: e.target.value }));
  const handleFile = (e) => setFormData((p) => ({ ...p, passportScan: e.target.files?.[0]?.name || '' }));

  const handleEligibilityStep = (e) => {
    e.preventDefault();
    const msg = validateFields(formData, { fullName: 'name', phone: 'phone' });
    if (msg) { setError(msg); return; }
    setError('');
    setView('pay');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = validateFields(formData, { passportNumber: 'passport', passportScan: 'nonEmpty', bankAccount: 'bankAccount' });
    if (msg) { setError(msg); return; }
    setError('');
    setLoading(true);
    const exposedArray = ['Full Name', 'Phone Number', 'Destination Country', 'Passport Number', 'Passport Copy', 'Bank Account Number'];
    setTimeout(() => onComplete && onComplete(exposedArray), 1500);
  };

  if (view === 'eligibility') {
    return (
      <div style={{ maxWidth: '580px', margin: '0 auto', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', fontFamily: '"Segoe UI", Roboto, Arial, sans-serif', color: '#1e293b', overflow: 'hidden' }}>
        <div style={{ background: '#5b21b6', padding: '20px 22px', color: '#fff' }}>
          <h2 style={{ margin: 0 }}>GlobalMove Visa Services</h2>
          <p style={{ margin: '6px 0 0', opacity: 0.85 }}>100% Visa Approval Guaranteed — Canada, UK, Australia</p>
        </div>
        <div style={{ padding: '22px' }}>
          <p style={{ color: '#475569', fontSize: '0.85rem', marginBottom: '16px' }}>Trusted by 5,000+ clients.</p>
          <form onSubmit={handleEligibilityStep}>
            <Field label="Full Name" value={formData.fullName} onChange={handleChange('fullName')} placeholder="As per passport" />
            <Field label="Phone Number" value={formData.phone} onChange={handleChange('phone')} placeholder="10-digit mobile number" />
            <div style={{ marginBottom: '14px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '5px' }}>Country of Interest</label>
              <select value={formData.destinationCountry} onChange={handleChange('destinationCountry')} style={{ width: '100%', padding: '11px 12px', border: '1px solid #cbd5e1', borderRadius: '6px' }}>
                {['Canada', 'UK', 'Australia', 'USA', 'Germany'].map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            {error && <p style={{ color: '#dc2626', fontSize: '0.85rem' }}>{error}</p>}
            <button type="submit" style={{ width: '100%', padding: '14px', background: '#5b21b6', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer' }}>
              Check My Eligibility
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '460px', margin: '0 auto', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', fontFamily: '"Segoe UI", Roboto, Arial, sans-serif', color: '#1e293b', overflow: 'hidden' }}>
      <div style={{ background: '#5b21b6', padding: '20px 22px', color: '#fff' }}>
        <h3 style={{ margin: 0 }}>Pay Consultation & Documentation Fee</h3>
        <p style={{ margin: '4px 0 0', fontSize: '0.85rem', opacity: 0.85 }}>₹15,000 fee locks your visa slot and starts document processing</p>
      </div>
      <div style={{ padding: '24px' }}>
        <form onSubmit={handleSubmit}>
          <Field label="Passport Number" value={formData.passportNumber} onChange={handleChange('passportNumber')} placeholder="e.g. A1234567" />
          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '5px' }}>Upload Passport Copy</label>
            <input type="file" onChange={handleFile} style={{ width: '100%', fontSize: '0.88rem' }} />
          </div>
          <Field label="Bank Account (for fee payment)" value={formData.bankAccount} onChange={handleChange('bankAccount')} placeholder="9-18 digits" />
          {error && <p style={{ color: '#dc2626', fontSize: '0.85rem' }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '13px', background: loading ? '#94a3b8' : '#5b21b6', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', marginTop: '6px' }}>
            {loading ? 'Processing…' : 'Pay & Lock Visa Slot'}
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
