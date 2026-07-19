import React, { useState } from 'react';

export default function RealEstatePreLaunchScamSim({ onComplete }) {
  const [view, setView] = useState('listing'); // 'listing' | 'checkout'
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', panCard: '', bankAccount: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setFormData((p) => ({ ...p, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.panCard || !formData.bankAccount) {
      setError('Please fill in all required fields.');
      return;
    }
    setLoading(true);
    const exposedArray = ['Full Name', 'Phone Number', 'Email', 'PAN Number', 'Bank Account Number', 'Token Payment'];
    setTimeout(() => onComplete && onComplete(exposedArray), 1500);
  };

  if (view === 'listing') {
    return (
      <div style={{ maxWidth: '600px', margin: '0 auto', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', fontFamily: '"Segoe UI", Roboto, Arial, sans-serif', color: '#1e293b', overflow: 'hidden' }}>
        <div style={{ background: '#f0fdf4', padding: '10px 16px', borderBottom: '1px solid #dcfce7', fontSize: '0.8rem', color: '#166534', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>🔒</span><span>premiumplots-auroraheights.in/pre-launch</span>
        </div>
        <div style={{ height: '180px', background: 'linear-gradient(135deg,#065f46,#059669)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
          <h2 style={{ margin: 0, fontSize: '1.6rem', textAlign: 'center' }}>Aurum Heights — Pre-Launch Plots</h2>
        </div>
        <div style={{ padding: '22px' }}>
          <div style={{ background: '#fef2f2', color: '#b91c1c', padding: '10px 14px', borderRadius: '6px', fontWeight: 600, fontSize: '0.85rem', marginBottom: '16px' }}>
            ⏳ Only 3 plots left at pre-launch price — offer ends in 02:14:09
          </div>
          <p style={{ margin: '0 0 6px' }}><span style={{ textDecoration: 'line-through', color: '#94a3b8' }}>₹18,50,000</span> <strong style={{ color: '#059669', fontSize: '1.3rem' }}> ₹9,25,000</strong></p>
          <p style={{ color: '#475569', fontSize: '0.9rem', marginBottom: '20px' }}>200 sq.yd corner plot • Gated township • "RERA approval in process"</p>

          <form onSubmit={(e) => { e.preventDefault(); if (!formData.name || !formData.phone) { setError('Enter your name and phone to continue.'); return; } setError(''); setView('checkout'); }}>
            <div style={{ marginBottom: '12px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '5px' }}>Full Name</label>
              <input value={formData.name} onChange={handleChange('name')} style={inputStyle} />
            </div>
            <div style={{ marginBottom: '12px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '5px' }}>Mobile Number</label>
              <input value={formData.phone} onChange={handleChange('phone')} style={inputStyle} placeholder="+91 98765 43210" />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '5px' }}>Email</label>
              <input value={formData.email} onChange={handleChange('email')} style={inputStyle} />
            </div>
            {error && <p style={{ color: '#dc2626', fontSize: '0.85rem' }}>{error}</p>}
            <button type="submit" style={btnStyle('#059669')}>Reserve My Plot →</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '480px', margin: '0 auto', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', fontFamily: '"Segoe UI", Roboto, Arial, sans-serif', color: '#1e293b', overflow: 'hidden' }}>
      <div style={{ background: '#065f46', padding: '18px 22px', color: '#fff' }}>
        <h3 style={{ margin: 0 }}>Confirm Booking with Token Amount</h3>
        <p style={{ margin: '4px 0 0', fontSize: '0.85rem', opacity: 0.85 }}>Pay ₹4,999 refundable token to lock today's price</p>
      </div>
      <div style={{ padding: '24px' }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '5px' }}>PAN Number</label>
            <input value={formData.panCard} onChange={handleChange('panCard')} style={inputStyle} placeholder="ABCDE1234F" />
          </div>
          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '5px' }}>Bank Account Number (for refund)</label>
            <input value={formData.bankAccount} onChange={handleChange('bankAccount')} style={inputStyle} />
          </div>
          {error && <p style={{ color: '#dc2626', fontSize: '0.85rem' }}>{error}</p>}
          <button type="submit" disabled={loading} style={btnStyle(loading ? '#94a3b8' : '#059669')}>
            {loading ? 'Processing…' : 'Pay Token & Confirm'}
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = { width: '100%', padding: '11px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', boxSizing: 'border-box', fontSize: '0.92rem', outline: 'none' };
const btnStyle = (bg) => ({ width: '100%', padding: '13px', background: bg, color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', marginTop: '6px' });
