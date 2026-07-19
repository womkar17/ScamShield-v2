import React, { useState } from 'react';
import { validateFields } from './scamFieldValidators';

export default function FakeHRInterviewChatSim({ onComplete }) {
  const [view, setView] = useState('chat'); // 'chat' | 'deposit'
  const [formData, setFormData] = useState({ fullName: '', phone: '', email: '', bankAccount: '', upiId: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setFormData((p) => ({ ...p, [field]: e.target.value }));

  const handleChatStep = (e) => {
    e.preventDefault();
    const msg = validateFields(formData, { fullName: 'name', phone: 'phone', email: 'email' });
    if (msg) { setError(msg); return; }
    setError('');
    setView('deposit');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = validateFields(formData, { bankAccount: 'bankAccount', upiId: 'upiId' });
    if (msg) { setError(msg); return; }
    setError('');
    setLoading(true);
    const exposedArray = ['Full Name', 'Phone Number', 'Email', 'Bank Account Number', 'UPI ID', 'Security Deposit'];
    setTimeout(() => onComplete && onComplete(exposedArray), 1500);
  };

  if (view === 'chat') {
    return (
      <div style={{ maxWidth: '540px', margin: '0 auto', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', fontFamily: '"Segoe UI", Roboto, Arial, sans-serif', color: '#1e293b', overflow: 'hidden' }}>
        <div style={{ background: '#111827', padding: '16px 20px', color: '#fff', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>NC</div>
          <div>
            <p style={{ margin: 0, fontWeight: 600 }}>NovaCorp Careers — HR Bot</p>
            <p style={{ margin: 0, fontSize: '0.75rem', opacity: 0.7 }}>Final Round Interview</p>
          </div>
        </div>
        <div style={{ padding: '20px' }}>
          <p style={{ background: '#f1f5f9', padding: '12px 14px', borderRadius: '8px', marginBottom: '12px' }}>🎉 Congratulations! You've been shortlisted for the Software Analyst role. Final round: a quick chat-based HR interview.</p>
          <form onSubmit={handleChatStep}>
            <Field label="Full Name" value={formData.fullName} onChange={handleChange('fullName')} placeholder="As per ID" />
            <Field label="Phone Number" value={formData.phone} onChange={handleChange('phone')} placeholder="10-digit mobile number" />
            <Field label="Email" value={formData.email} onChange={handleChange('email')} placeholder="you@email.com" />
            {error && <p style={{ color: '#dc2626', fontSize: '0.85rem' }}>{error}</p>}
            <button type="submit" style={{ width: '100%', padding: '13px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer' }}>
              Proceed to Interview
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '460px', margin: '0 auto', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', fontFamily: '"Segoe UI", Roboto, Arial, sans-serif', color: '#1e293b', overflow: 'hidden' }}>
      <div style={{ background: '#111827', padding: '20px 22px', color: '#fff' }}>
        <h3 style={{ margin: 0 }}>Pay Refundable Security Deposit</h3>
        <p style={{ margin: '4px 0 0', fontSize: '0.85rem', opacity: 0.8 }}>Required before issuing work laptop/equipment: ₹6,000</p>
      </div>
      <div style={{ padding: '24px' }}>
        <form onSubmit={handleSubmit}>
          <Field label="Bank Account Number" value={formData.bankAccount} onChange={handleChange('bankAccount')} placeholder="9-18 digits" />
          <Field label="UPI ID for Deposit" value={formData.upiId} onChange={handleChange('upiId')} placeholder="name@bank" />
          {error && <p style={{ color: '#dc2626', fontSize: '0.85rem' }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '13px', background: loading ? '#94a3b8' : '#2563eb', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', marginTop: '6px' }}>
            {loading ? 'Processing…' : 'Pay Deposit & Get Offer Letter'}
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
