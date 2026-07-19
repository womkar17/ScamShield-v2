import React, { useState } from 'react';
import { validateFields } from './scamFieldValidators';

export default function WorkFromHomeTaskScamSim({ onComplete }) {
  const [view, setView] = useState('chat'); // 'chat' | 'kit'
  const [formData, setFormData] = useState({ fullName: '', phone: '', age: '', bankAccount: '', ifsc: '', aadhaar: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setFormData((p) => ({ ...p, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = validateFields(formData, { fullName: 'name', phone: 'phone', age: 'age', bankAccount: 'bankAccount', ifsc: 'ifsc', aadhaar: 'aadhaar' });
    if (msg) { setError(msg); return; }
    setError('');
    setLoading(true);
    const exposedArray = ['Full Name', 'WhatsApp Number', 'Age', 'Bank Account Number', 'IFSC Code', 'Aadhaar Number'];
    setTimeout(() => onComplete && onComplete(exposedArray), 1500);
  };

  if (view === 'chat') {
    return (
      <div style={{ maxWidth: '400px', margin: '0 auto', background: '#e5ddd5', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.25)', fontFamily: '"Segoe UI", Roboto, Arial, sans-serif' }}>
        <div style={{ background: '#075e54', padding: '14px 18px', color: '#fff', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#25d366', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>EJ</div>
          <div>
            <p style={{ margin: 0, fontWeight: 600 }}>EarnEasy Jobs HR</p>
            <p style={{ margin: 0, fontSize: '0.75rem', opacity: 0.8 }}>online</p>
          </div>
        </div>
        <div style={{ padding: '18px', minHeight: '220px' }}>
          <ChatBubble>Hi! 👋 Earn ₹3,000/Day doing simple data entry. No experience needed, just 2 hours a day.</ChatBubble>
          <ChatBubble>💰 Only 15 slots left today! Reply to get started.</ChatBubble>
        </div>
        <div style={{ padding: '14px 18px', background: '#f0f0f0' }}>
          <button onClick={() => setView('kit')} style={{ width: '100%', padding: '12px', background: '#25d366', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 700, cursor: 'pointer' }}>
            Get Job Details →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '460px', margin: '0 auto', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', fontFamily: '"Segoe UI", Roboto, Arial, sans-serif', color: '#1e293b', overflow: 'hidden' }}>
      <div style={{ background: '#075e54', padding: '20px 22px', color: '#fff' }}>
        <h3 style={{ margin: 0 }}>Buy the Starter Kit to Begin</h3>
        <p style={{ margin: '4px 0 0', fontSize: '0.85rem', opacity: 0.85 }}>One-time ₹1,499 kit fee covers training and software login</p>
      </div>
      <div style={{ padding: '24px' }}>
        <form onSubmit={handleSubmit}>
          <Field label="Full Name" value={formData.fullName} onChange={handleChange('fullName')} placeholder="As per ID" />
          <Field label="WhatsApp Number" value={formData.phone} onChange={handleChange('phone')} placeholder="10-digit mobile number" />
          <Field label="Age" value={formData.age} onChange={handleChange('age')} placeholder="18-99" />
          <Field label="Bank Account Number" value={formData.bankAccount} onChange={handleChange('bankAccount')} placeholder="9-18 digits" />
          <Field label="IFSC Code" value={formData.ifsc} onChange={handleChange('ifsc')} placeholder="e.g. SBIN0001234" />
          <Field label="Aadhaar Number" value={formData.aadhaar} onChange={handleChange('aadhaar')} placeholder="12-digit Aadhaar" />
          {error && <p style={{ color: '#dc2626', fontSize: '0.85rem' }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '13px', background: loading ? '#94a3b8' : '#075e54', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', marginTop: '6px' }}>
            {loading ? 'Processing…' : 'Pay Kit Fee'}
          </button>
        </form>
      </div>
    </div>
  );
}

function ChatBubble({ children }) {
  return (
    <div style={{ background: '#fff', borderRadius: '8px', padding: '10px 12px', marginBottom: '10px', maxWidth: '85%', fontSize: '0.9rem', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
      {children}
    </div>
  );
}

function Field({ label, value, onChange, placeholder }) {
  return (
    <div style={{ marginBottom: '12px' }}>
      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '5px' }}>{label}</label>
      <input value={value} onChange={onChange} placeholder={placeholder} style={{ width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', boxSizing: 'border-box', fontSize: '0.9rem', outline: 'none' }} />
    </div>
  );
}
