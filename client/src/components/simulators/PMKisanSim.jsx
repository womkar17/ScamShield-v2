import React, { useState } from 'react';

export default function PMKisanSim({ onComplete }) {
  const [view, setView] = useState('sms'); // 'sms' | 'form'
  const [name, setName] = useState('');
  const [aadhaar, setAadhaar] = useState('');
  const [account, setAccount] = useState('');
  const [ifsc, setIfsc] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLinkClick = (e) => {
    e.preventDefault();
    setView('form');
  };

  const handleSendOtp = () => {
    if (!name.trim() || !aadhaar.trim() || !account.trim() || !ifsc.trim()) {
      setError('Please fill in all fields before requesting OTP.');
      return;
    }
    setError('');
    setOtpSent(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!otp.trim()) {
      setError('Please enter the OTP to verify.');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      onComplete(['Aadhaar Number', 'Bank Account Number', 'OTP', 'Farmer ID']);
    }, 1500);
  };

  if (view === 'sms') {
    return (
      <div style={{
        maxWidth: '380px', margin: '0 auto', borderRadius: '32px', overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)', height: '640px', display: 'flex',
        flexDirection: 'column', background: '#f5f5f5',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 20px', background: '#fff', color: '#333', fontSize: '0.8rem' }}>
          <span style={{ fontWeight: '600' }}>9:41</span>
          <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}><span>📶</span><span>🔋 74%</span></div>
        </div>
        <div style={{ background: '#fff', padding: '8px 16px 14px', borderBottom: '1px solid #e0e0e0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: '#007AFF', fontSize: '1rem' }}>← Messages</span>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <h3 style={{ margin: 0, fontSize: '1rem', color: '#333' }}>PMKISAN-GOV</h3>
              <p style={{ margin: 0, fontSize: '0.75rem', color: '#888' }}>SMS</p>
            </div>
            <span style={{ color: '#007AFF', fontSize: '1rem' }}>ⓘ</span>
          </div>
        </div>
        <div style={{ flex: 1, padding: '20px 16px', overflowY: 'auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
            <span style={{ background: '#e0e0e0', padding: '4px 14px', borderRadius: '12px', fontSize: '0.75rem', color: '#666' }}>Today 8:12 AM</span>
          </div>
          <div style={{ background: '#e8e8e8', borderRadius: '18px 18px 18px 6px', padding: '14px 16px', maxWidth: '92%', boxShadow: '0 1px 2px rgba(0,0,0,0.08)' }}>
            <p style={{ margin: 0, color: '#1a1a1a', fontSize: '0.92rem', lineHeight: '1.5' }}>
              Dear Farmer, your <strong style={{ color: '#2e7d32' }}>PM Kisan 18th Installment of ₹2,000</strong> is pending due to unverified bank details.
            </p>
            <p style={{ margin: '10px 0 0', color: '#1a1a1a', fontSize: '0.92rem', lineHeight: '1.5' }}>
              Verify now to receive your installment:
            </p>
            <a href="#" onClick={handleLinkClick} style={{ display: 'block', marginTop: '10px', color: '#007AFF', fontSize: '0.88rem', wordBreak: 'break-all', textDecoration: 'underline' }}>
              https://pmkisan-installment-status.in/verify
            </a>
            <p style={{ margin: '10px 0 0', color: '#c0392b', fontSize: '0.82rem', fontWeight: '600' }}>
              ⚠️ Payment will be reversed if not verified within 24 hours.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '480px', margin: '0 auto', background: '#fff', borderRadius: '8px', boxShadow: '0 8px 32px rgba(0,0,0,0.15)', overflow: 'hidden', fontFamily: '"Open Sans", Arial, sans-serif', color: '#333' }}>
      <div style={{ background: '#f0f0f0', padding: '10px 14px', borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem' }}>
        <div style={{ display: 'flex', gap: '4px' }}>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#e74c3c', display: 'inline-block' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f39c12', display: 'inline-block' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#2ecc71', display: 'inline-block' }} />
        </div>
        <div style={{ flex: 1, background: '#fff', border: '1px solid #ccc', borderRadius: '4px', padding: '6px 10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ color: '#e74c3c', fontSize: '0.9rem' }}>⚠️</span>
          <span style={{ color: '#555' }}>https://pmkisan-installment-status.in/verify</span>
        </div>
      </div>
      <div style={{ background: 'linear-gradient(135deg, #2e7d32 0%, #43a047 100%)', padding: '18px 24px', display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{ width: '50px', height: '50px', background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>🌾</div>
        <div>
          <h2 style={{ margin: 0, color: '#fff', fontSize: '1.1rem' }}>PM Kisan Samman Nidhi</h2>
          <p style={{ margin: '2px 0 0', color: '#e8f5e9', fontSize: '0.8rem' }}>Installment Verification Portal</p>
        </div>
      </div>
      <div style={{ background: '#fff3e0', padding: '12px 24px', borderBottom: '2px solid #ff9800', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontSize: '1.2rem' }}>⚠️</span>
        <p style={{ margin: 0, color: '#e65100', fontSize: '0.85rem', fontWeight: '600' }}>
          ₹2,000 installment on hold. Verify within <span style={{ color: '#c62828' }}>23 hrs 12 mins</span>.
        </p>
      </div>
      <div style={{ padding: '28px 24px' }}>
        <h3 style={{ margin: '0 0 20px', color: '#2e7d32', fontSize: '1.05rem' }}>Verify Beneficiary Details</h3>
        <form onSubmit={handleSubmit}>
          {[
            { label: 'Registered Farmer Name', value: name, set: setName },
            { label: 'Aadhaar Number', value: aadhaar, set: setAadhaar },
            { label: 'Bank Account Number', value: account, set: setAccount },
            { label: 'IFSC Code', value: ifsc, set: setIfsc },
          ].map((f, i) => (
            <div key={i} style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.88rem', color: '#444' }}>{f.label}</label>
              <input type="text" value={f.value} onChange={e => { f.set(e.target.value); setError(''); }}
                style={{ width: '100%', padding: '11px 14px', border: '1px solid #bbb', borderRadius: '4px', fontSize: '0.92rem', boxSizing: 'border-box', outline: 'none', color: '#333' }} />
            </div>
          ))}
          {error && <p style={{ color: '#e74c3c', fontSize: '0.82rem', margin: '0 0 10px' }}>{error}</p>}
          {!otpSent ? (
            <button type="button" onClick={handleSendOtp} style={{ width: '100%', padding: '12px', background: '#2e7d32', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '0.95rem', fontWeight: '600', cursor: 'pointer', marginBottom: '10px' }}>
              Send OTP to Verify
            </button>
          ) : (
            <>
              <div style={{ background: '#e8f5e9', padding: '10px 14px', borderRadius: '4px', marginBottom: '16px', border: '1px solid #a5d6a7' }}>
                <p style={{ margin: 0, color: '#2e7d32', fontSize: '0.85rem' }}>✅ OTP sent to your Aadhaar-linked mobile number.</p>
              </div>
              <div style={{ marginBottom: '18px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.88rem', color: '#444' }}>Enter OTP</label>
                <input type="text" value={otp} onChange={e => { setOtp(e.target.value); setError(''); }} maxLength={6}
                  style={{ width: '100%', padding: '11px 14px', border: '1px solid #bbb', borderRadius: '4px', fontSize: '1.1rem', boxSizing: 'border-box', outline: 'none', color: '#333', letterSpacing: '8px', textAlign: 'center' }} />
              </div>
              <button type="submit" disabled={loading} style={{ width: '100%', padding: '13px', background: loading ? '#999' : '#2e7d32', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '1rem', fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer' }}>
                {loading ? 'Verifying...' : 'Verify & Release Installment'}
              </button>
            </>
          )}
        </form>
      </div>
      <div style={{ background: '#f5f5f5', padding: '12px 24px', textAlign: 'center', fontSize: '0.75rem', color: '#999', borderTop: '1px solid #e0e0e0' }}>
        © Ministry of Agriculture & Farmers Welfare (Unofficial Lookalike) | Not a Government Site
      </div>
    </div>
  );
}
