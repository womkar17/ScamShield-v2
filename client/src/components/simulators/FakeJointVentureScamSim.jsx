import React, { useState } from 'react';
import { validateFields } from './scamFieldValidators';

export default function FakeJointVentureScamSim({ onComplete }) {
  const [view, setView] = useState('proposal'); // 'proposal' | 'invest'
  const [formData, setFormData] = useState({ fullName: '', businessName: '', email: '', phone: '', panCard: '', bankAccount: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setFormData((p) => ({ ...p, [field]: e.target.value }));

  const handleProposalStep = (e) => {
    e.preventDefault();
    const msg = validateFields(formData, { fullName: 'name', businessName: 'nonEmpty', email: 'email', phone: 'phone' });
    if (msg) { setError(msg); return; }
    setError('');
    setView('invest');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = validateFields(formData, { panCard: 'pan', bankAccount: 'bankAccount' });
    if (msg) { setError(msg); return; }
    setError('');
    setLoading(true);
    const exposedArray = ['Full Name', 'Business Name', 'Email', 'Phone Number', 'PAN Number', 'Bank Account Number', 'Capital Contribution'];
    setTimeout(() => onComplete && onComplete(exposedArray), 1500);
  };

  if (view === 'proposal') {
    return (
      <div style={{ maxWidth: '600px', margin: '0 auto', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', fontFamily: '"Segoe UI", Roboto, Arial, sans-serif', color: '#1e293b', overflow: 'hidden' }}>
        <div style={{ background: '#1e293b', padding: '20px 22px', color: '#fff' }}>
          <h2 style={{ margin: 0 }}>Sterling & Cross Ventures</h2>
          <p style={{ margin: '6px 0 0', opacity: 0.85 }}>Exclusive Joint Venture Proposal for Your Business</p>
        </div>
        <div style={{ padding: '22px' }}>
          <p style={{ color: '#475569', fontSize: '0.9rem', marginBottom: '16px' }}>
            Our investment group has identified your business as a strong candidate for a joint
            venture partnership. We bring ₹50,00,000 in growth capital; you contribute a matching
            stake to formalize the partnership and unlock funds.
          </p>
          <form onSubmit={handleProposalStep}>
            <Field label="Your Full Name" value={formData.fullName} onChange={handleChange('fullName')} placeholder="As per ID" />
            <Field label="Business Name" value={formData.businessName} onChange={handleChange('businessName')} placeholder="Your registered business" />
            <Field label="Email" value={formData.email} onChange={handleChange('email')} placeholder="you@email.com" />
            <Field label="Phone Number" value={formData.phone} onChange={handleChange('phone')} placeholder="10-digit mobile number" />
            {error && <p style={{ color: '#dc2626', fontSize: '0.85rem' }}>{error}</p>}
            <button type="submit" style={{ width: '100%', padding: '14px', background: '#1e293b', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer' }}>
              Review Partnership Terms
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '460px', margin: '0 auto', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', fontFamily: '"Segoe UI", Roboto, Arial, sans-serif', color: '#1e293b', overflow: 'hidden' }}>
      <div style={{ background: '#1e293b', padding: '20px 22px', color: '#fff' }}>
        <h3 style={{ margin: 0 }}>Contribute Your Matching Capital Stake</h3>
        <p style={{ margin: '4px 0 0', fontSize: '0.85rem', opacity: 0.85 }}>₹2,50,000 registration stake unlocks the ₹50,00,000 venture fund</p>
      </div>
      <div style={{ padding: '24px' }}>
        <form onSubmit={handleSubmit}>
          <Field label="PAN Number" value={formData.panCard} onChange={handleChange('panCard')} placeholder="e.g. ABCDE1234F" />
          <Field label="Bank Account Number" value={formData.bankAccount} onChange={handleChange('bankAccount')} placeholder="9-18 digits" />
          {error && <p style={{ color: '#dc2626', fontSize: '0.85rem' }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '13px', background: loading ? '#94a3b8' : '#1e293b', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', marginTop: '6px' }}>
            {loading ? 'Processing…' : 'Contribute & Finalize JV'}
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
