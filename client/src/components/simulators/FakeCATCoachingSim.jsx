import React, { useState } from 'react';

export default function FakeCATCoachingSim({ onComplete }) {
  const [formData, setFormData] = useState({});
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const fields = [{"n":"phone","p":"10-Digit Student Mobile Number","t":"tel","max":10},{"n":"upi_id","p":"Your UPI ID (for instant deposit receipt)","t":"text","max":40}];

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
    
    <div style={{ background: '#1e1b4b', border: '1px solid #312e81', borderRadius: '18px', overflow: 'hidden', fontFamily: 'var(--font-sans, sans-serif)', color: '#f5f3ff', boxShadow: '0 16px 40px rgba(0,0,0,0.6)' }}>
      {/* Education / Coaching Header */}
      <div style={{ background: 'linear-gradient(135deg, #4338ca, #1e1b4b)', padding: '1.4rem 2rem', borderBottom: '1px solid #4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '1.8rem' }}>🎓</span>
          <div>
            <h3 style={{ margin: 0, color: '#fff', fontSize: '1.2rem', fontWeight: 'bold' }}>{"🎓 Elite IIM Aspirants Coaching — Scholarship Seat Lock"}</h3>
            <span style={{ fontSize: '0.85rem', color: '#c7d2fe' }}>Merit Scholarship & Admission Desk</span>
          </div>
        </div>
        <span style={{ background: 'rgba(236, 72, 153, 0.2)', color: '#f472b6', padding: '0.35rem 0.9rem', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 'bold', border: '1px solid rgba(236, 72, 153, 0.4)' }}>LIMITED SEATS</span>
      </div>
      <div style={{ padding: '2.2rem' }}>
        <p style={{ color: '#ddd6fe', fontSize: '1rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
          {"You scored in the top tier of our online aptitude test! You have been awarded the Merit Scholarship for our All-India CAT Crash Course. Only 2 scholarship seats remain."}
        </p>
        <div style={{ background: '#312e81', border: '1px solid #4338ca', padding: '1.4rem', borderRadius: '12px', color: '#fbcfe8', fontSize: '0.95rem', marginBottom: '2rem', whiteSpace: 'pre-wrap' }}>
          {"Total Fee: ₹45,000 -> Your Price: ₹8,999\nUrgency: Pay ₹2,000 non-refundable seat booking deposit via UPI within 15:00 minutes."}
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
              <span>{"Verify Institute Address & Accreditation First"}</span>
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
              <span>{"Transfer ₹2,000 Seat Booking Fee Immediately"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
