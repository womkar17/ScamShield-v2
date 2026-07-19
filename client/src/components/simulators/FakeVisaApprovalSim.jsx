import React, { useState } from 'react';

export default function FakeVisaApprovalSim({ onComplete }) {
  const [formData, setFormData] = useState({});
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const fields = [{"n":"passport_number","p":"Your Alphanumeric Passport Number","t":"text","max":15},{"n":"card_details","p":"Card Number & CVV (for $250 Consular Fee)","t":"password","max":25}];

  const handleInputChange = (name, value, maxLen, type) => {
    setErrorMsg('');
    let val = value;
    if (type === 'tel' || name.toLowerCase().includes('phone') || name.toLowerCase().includes('mobile') || name.toLowerCase().includes('otp') || name.toLowerCase().includes('pin')) {
      val = val.replace(/\D/g, '');
    }
    if (maxLen && val.length > maxLen) {
      val = val.slice(0, maxLen);
    }
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  const handleAction = (isSafeAction) => {
    if (!isSafeAction && fields.length > 0) {
      for (const f of fields) {
        const val = formData[f.n] || '';
        if (!val.trim()) {
          setErrorMsg(`Please enter valid data for ${f.p} before submitting.`);
          return;
        }
        if ((f.t === 'tel' || f.n.includes('phone') || f.n.includes('mobile')) && val.length < 10) {
          setErrorMsg('Mobile number must strictly contain exactly 10 numeric digits.');
          return;
        }
      }
    }
    setSubmitted(true);
    if (onComplete) {
      const data = isSafeAction ? ['Threat Successfully Avoided & Blocked!'] : (fields && fields.length > 0 ? Object.keys(formData).map(k => `${k}: ${formData[k]}`) : ['Credentials & Device Data Exposed to Attacker']);
      onComplete(data, isSafeAction ? 'safe' : 'scam');
    }
  };

  return (
    
    <div style={{ background: '#18181b', border: '1px solid #27272a', borderRadius: '18px', overflow: 'hidden', fontFamily: 'var(--font-sans, sans-serif)', color: '#f4f4f5', boxShadow: '0 16px 40px rgba(0,0,0,0.6)' }}>
      {/* E-Commerce Booking Header */}
      <div style={{ background: 'linear-gradient(135deg, #1d4ed8, #18181b)', padding: '1.4rem 2rem', borderBottom: '1px solid #2563eb', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '1.8rem' }}>✈️</span>
          <div>
            <h3 style={{ margin: 0, color: '#fff', fontSize: '1.2rem', fontWeight: 'bold' }}>{"🛂 International Consular Facilitation — FastTrack Visa"}</h3>
            <span style={{ fontSize: '0.85rem', color: '#93c5fd' }}>Verified Reservation & Surcharge Portal</span>
          </div>
        </div>
        <span style={{ background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa', padding: '0.35rem 0.9rem', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 'bold', border: '1px solid rgba(59, 130, 246, 0.4)' }}>RESERVATION HOLD</span>
      </div>
      <div style={{ padding: '2.2rem' }}>
        <p style={{ color: '#e4e4e7', fontSize: '1rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
          {"Your international visa appointment and document verification can be expedited with guaranteed consular clearance within 24 hours. No personal interview required."}
        </p>
        <div style={{ background: '#27272a', borderLeft: '4px solid #3b82f6', padding: '1.4rem', borderRadius: '8px', color: '#bfdbfe', fontSize: '0.95rem', marginBottom: '2rem', whiteSpace: 'pre-wrap' }}>
          {"Consular Processing Charge: $250 (₹20,500) advance payment required via online checkout + upload passport front/back copy."}
        </div>
  
        {/* Form Fields if required by simulation */}
        {fields && fields.length > 0 && (
          <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '1.6rem', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '2.2rem' }}>
            <h4 style={{ margin: '0 0 1.2rem', color: '#fff', fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span>📝</span> Required Information / Verification Form
            </h4>
            {errorMsg && (
              <div style={{ background: 'rgba(239, 68, 68, 0.18)', border: '1px solid #ef4444', color: '#fca5a5', padding: '0.8rem 1.2rem', borderRadius: '10px', marginBottom: '1.2rem', fontSize: '0.92rem', fontWeight: '500' }}>
                ⚠️ {errorMsg}
              </div>
            )}
            <div style={{ display: 'grid', gridTemplateColumns: fields.length > 1 ? '1fr 1fr' : '1fr', gap: '1.2rem' }}>
              {fields.map((f, idx) => (
                <div key={idx}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#cbd5e1', fontSize: '0.9rem', fontWeight: '600' }}>
                    {f.p} <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    type={f.t === 'tel' ? 'text' : f.t}
                    placeholder={"Enter " + f.p + "..."}
                    value={formData[f.n] || ''}
                    onChange={(e) => handleInputChange(f.n, e.target.value, f.max || (f.t === 'tel' || f.n.includes('phone') ? 10 : 50), f.t)}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.1rem',
                      borderRadius: '10px',
                      border: '1px solid rgba(255,255,255,0.15)',
                      background: 'rgba(0,0,0,0.4)',
                      color: '#fff',
                      fontSize: '0.96rem',
                      outline: 'none',
                      transition: 'all 0.2s'
                    }}
                  />
                  {(f.t === 'tel' || f.n.includes('phone') || f.n.includes('mobile')) && (
                    <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '0.35rem' }}>
                      Strictly numbers only (max 10 digits).
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Custom Tailored Action Choices */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.8rem' }}>
          <div style={{ fontSize: '0.95rem', color: '#cbd5e1', marginBottom: '1.2rem', textAlign: 'center', fontWeight: '700', letterSpacing: '0.3px' }}>
            ⚡ Select your technical response protocol:
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.4rem' }}>
            <button
              onClick={() => handleAction(true)}
              disabled={submitted}
              style={{
                padding: '1.2rem',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #10b981, #059669)',
                color: '#fff',
                border: 'none',
                fontWeight: 'bold',
                fontSize: '0.98rem',
                cursor: submitted ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.7rem',
                boxShadow: '0 6px 20px rgba(16, 185, 129, 0.35)',
                transition: 'all 0.2s ease',
                opacity: submitted ? 0.6 : 1
              }}
            >
              <span style={{ fontSize: '1.2rem' }}>🛡️</span>
              <span>{"Apply Only via Official Embassy (.gov / .VFS) Websites"}</span>
            </button>

            <button
              onClick={() => handleAction(false)}
              disabled={submitted}
              style={{
                padding: '1.2rem',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                color: '#fff',
                border: 'none',
                fontWeight: 'bold',
                fontSize: '0.98rem',
                cursor: submitted ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.7rem',
                boxShadow: '0 6px 20px rgba(239, 68, 68, 0.35)',
                transition: 'all 0.2s ease',
                opacity: submitted ? 0.6 : 1
              }}
            >
              <span style={{ fontSize: '1.2rem' }}>⚠️</span>
              <span>{"Submit Passport & Pay $250 FastTrack Consular Fee"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
