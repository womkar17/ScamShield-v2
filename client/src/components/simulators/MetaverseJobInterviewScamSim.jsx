import React, { useState } from 'react';
import { validateFields } from './scamFieldValidators';

export default function MetaverseJobInterviewScamSim({ onComplete }) {
  const [view, setView] = useState('invite'); // 'invite' | 'kit'
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', avatarHandle: '', bankAccount: '', upiId: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setFormData((p) => ({ ...p, [field]: e.target.value }));

  const handleInviteStep = (e) => {
    e.preventDefault();
    const msg = validateFields(formData, { fullName: 'name', email: 'email', phone: 'phone', avatarHandle: 'nonEmpty' });
    if (msg) { setError(msg); return; }
    setError('');
    setView('kit');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = validateFields(formData, { bankAccount: 'bankAccount', upiId: 'upiId' });
    if (msg) { setError(msg); return; }
    setError('');
    setLoading(true);
    const exposedArray = ['Full Name', 'Email', 'Phone Number', 'Avatar/Metaverse Handle', 'Bank Account Number', 'UPI ID', 'VR Kit Deposit'];
    setTimeout(() => onComplete && onComplete(exposedArray), 1500);
  };

  if (view === 'invite') {
    return (
      <div style={{ maxWidth: '600px', margin: '0 auto', background: 'linear-gradient(160deg,#0f0c29,#302b63,#24243e)', border: '1px solid #4c3f91', borderRadius: '12px', boxShadow: '0 10px 30px rgba(76,63,145,0.4)', fontFamily: '"Segoe UI", Roboto, Arial, sans-serif', color: '#e8e6ff', overflow: 'hidden' }}>
        <div style={{ padding: '20px 24px', borderBottom: '1px solid #4c3f91' }}>
          <h2 style={{ margin: 0, background: 'linear-gradient(90deg,#a78bfa,#60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>NexaVerse Careers</h2>
          <p style={{ margin: '6px 0 0', color: '#c4b5fd', fontSize: '0.88rem' }}>You're Invited: Final Interview in Our Metaverse Office</p>
        </div>
        <div style={{ padding: '22px' }}>
          <div style={{ background: '#1e1b4b', borderRadius: '8px', padding: '12px 16px', marginBottom: '18px', fontSize: '0.85rem', color: '#93c5fd' }}>
            🕶️ Step into our VR headquarters for a live interview with our HR avatar — no travel needed.
          </div>
          <p style={{ color: '#c4b5fd', fontSize: '0.88rem', marginBottom: '16px' }}>Role: Remote Community Manager • ₹65,000/month • Immediate joining</p>
          <form onSubmit={handleInviteStep}>
            <Field label="Full Name" value={formData.fullName} onChange={handleChange('fullName')} placeholder="As per ID" />
            <Field label="Email" value={formData.email} onChange={handleChange('email')} placeholder="you@email.com" />
            <Field label="Phone Number" value={formData.phone} onChange={handleChange('phone')} placeholder="10-digit mobile number" />
            <Field label="Preferred Avatar/Metaverse Handle" value={formData.avatarHandle} onChange={handleChange('avatarHandle')} placeholder="e.g. Nexa_Alex" />
            {error && <p style={{ color: '#fca5a5', fontSize: '0.85rem' }}>{error}</p>}
            <button type="submit" style={{ width: '100%', padding: '14px', background: 'linear-gradient(90deg,#a78bfa,#60a5fa)', color: '#1e1b4b', border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer' }}>
              Confirm Interview Slot
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '460px', margin: '0 auto', background: 'linear-gradient(160deg,#0f0c29,#302b63,#24243e)', border: '1px solid #4c3f91', borderRadius: '12px', boxShadow: '0 10px 30px rgba(76,63,145,0.4)', fontFamily: '"Segoe UI", Roboto, Arial, sans-serif', color: '#e8e6ff', overflow: 'hidden' }}>
      <div style={{ padding: '20px 24px', borderBottom: '1px solid #4c3f91' }}>
        <h3 style={{ margin: 0 }}>Reserve Your VR Interview Kit</h3>
        <p style={{ margin: '4px 0 0', color: '#c4b5fd', fontSize: '0.85rem' }}>₹3,499 refundable deposit — headset kit shipped to your address</p>
      </div>
      <div style={{ padding: '24px' }}>
        <form onSubmit={handleSubmit}>
          <Field label="Bank Account Number" value={formData.bankAccount} onChange={handleChange('bankAccount')} placeholder="9-18 digits" />
          <Field label="UPI ID for Deposit" value={formData.upiId} onChange={handleChange('upiId')} placeholder="name@bank" />
          {error && <p style={{ color: '#fca5a5', fontSize: '0.85rem' }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '14px', background: loading ? '#4c3f91' : 'linear-gradient(90deg,#a78bfa,#60a5fa)', color: loading ? '#c4b5fd' : '#1e1b4b', border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', marginTop: '6px' }}>
            {loading ? 'Processing…' : 'Pay Deposit & Ship Kit'}
          </button>
        </form>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, placeholder }) {
  return (
    <div style={{ marginBottom: '14px' }}>
      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '5px', color: '#ddd6fe' }}>{label}</label>
      <input value={value} onChange={onChange} placeholder={placeholder} style={{ width: '100%', padding: '11px 12px', border: '1px solid #4c3f91', borderRadius: '6px', boxSizing: 'border-box', fontSize: '0.92rem', outline: 'none', background: '#1e1b4b', color: '#e8e6ff' }} />
    </div>
  );
}
