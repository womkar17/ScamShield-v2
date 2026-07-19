import React, { useState } from 'react';
import { validateFields } from './scamFieldValidators';

export default function FakeHealthInsuranceScamSim({ onComplete }) {
  const [view, setView] = useState('offer'); // 'offer' | 'activate'
  const [formData, setFormData] = useState({ fullName: '', dob: '', familyMembers: '', medicalHistory: '', cardNumber: '', cardCvv: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setFormData((p) => ({ ...p, [field]: e.target.value }));

  const handleOfferStep = (e) => {
    e.preventDefault();
    const msg = validateFields(formData, { fullName: 'name', dob: 'dob', familyMembers: 'age' });
    if (msg) { setError(msg); return; }
    setError('');
    setView('activate');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = validateFields(formData, { medicalHistory: 'nonEmpty', cardNumber: 'cardNumber', cardCvv: 'cvv' });
    if (msg) { setError(msg); return; }
    setError('');
    setLoading(true);
    const exposedArray = ['Full Name', 'Date of Birth', 'Family Details', 'Medical History', 'Card Number', 'CVV'];
    setTimeout(() => onComplete && onComplete(exposedArray), 1500);
  };

  if (view === 'offer') {
    return (
      <div style={{ maxWidth: '580px', margin: '0 auto', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', fontFamily: '"Segoe UI", Roboto, Arial, sans-serif', color: '#1e293b', overflow: 'hidden' }}>
        <div style={{ background: '#be123c', padding: '20px 22px', color: '#fff' }}>
          <h2 style={{ margin: 0 }}>FamilyCare Health Shield</h2>
          <p style={{ margin: '6px 0 0', opacity: 0.9 }}>₹10 Lakh Health Cover for Just ₹499/Year</p>
        </div>
        <div style={{ padding: '22px' }}>
          <p style={{ color: '#475569', fontSize: '0.88rem', marginBottom: '16px' }}>No medical checkup. Instant policy issuance.</p>
          <form onSubmit={handleOfferStep}>
            <Field label="Full Name" value={formData.fullName} onChange={handleChange('fullName')} placeholder="As per ID" />
            <Field label="Date of Birth" value={formData.dob} onChange={handleChange('dob')} placeholder="DD/MM/YYYY" />
            <Field label="Number of Family Members to Cover" value={formData.familyMembers} onChange={handleChange('familyMembers')} type="number" placeholder="1-10" />
            {error && <p style={{ color: '#dc2626', fontSize: '0.85rem' }}>{error}</p>}
            <button type="submit" style={{ width: '100%', padding: '14px', background: '#be123c', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer' }}>
              Get My Policy
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '460px', margin: '0 auto', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', fontFamily: '"Segoe UI", Roboto, Arial, sans-serif', color: '#1e293b', overflow: 'hidden' }}>
      <div style={{ background: '#be123c', padding: '20px 22px', color: '#fff' }}>
        <h3 style={{ margin: 0 }}>Pay Premium to Activate Policy</h3>
        <p style={{ margin: '4px 0 0', fontSize: '0.85rem', opacity: 0.9 }}>Policy activates instantly on payment</p>
      </div>
      <div style={{ padding: '24px' }}>
        <form onSubmit={handleSubmit}>
          <Field label="Existing Medical Conditions" value={formData.medicalHistory} onChange={handleChange('medicalHistory')} placeholder="e.g. None, Diabetes" />
          <Field label="Card Number" value={formData.cardNumber} onChange={handleChange('cardNumber')} placeholder="16-digit card number" />
          <Field label="CVV" value={formData.cardCvv} onChange={handleChange('cardCvv')} type="password" placeholder="3-4 digits" />
          {error && <p style={{ color: '#dc2626', fontSize: '0.85rem' }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '13px', background: loading ? '#94a3b8' : '#be123c', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', marginTop: '6px' }}>
            {loading ? 'Activating…' : 'Pay Premium & Activate'}
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
