import React, { useState } from 'react';

export default function FakeDarkbloodSim({ onComplete }) {
  const [formData, setFormData] = useState({});
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const fields = [];

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
    
    <div style={{ background: '#0d1117', border: '1px solid #30363d', borderRadius: '14px', overflow: 'hidden', fontFamily: "'Fira Code', 'Courier New', monospace", color: '#c9d1d9', boxShadow: '0 12px 36px rgba(0,0,0,0.6)' }}>
      {/* Hacker / Terminal Header */}
      <div style={{ background: '#161b22', padding: '1rem 1.5rem', borderBottom: '1px solid #30363d', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }} />
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f', display: 'inline-block' }} />
          </div>
          <span style={{ color: '#58a6ff', fontWeight: 'bold', fontSize: '1rem' }}>{"📦 PyPI Package Registry — darkblood-engine v1.0.4"}</span>
        </div>
        <span style={{ background: 'rgba(238, 79, 77, 0.15)', color: '#ff7b72', padding: '0.25rem 0.7rem', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 'bold', border: '1px solid #f85149' }}>SECURITY AUDIT REQUIRED</span>
      </div>
      <div style={{ padding: '1.8rem' }}>
        <div style={{ color: '#8b949e', fontSize: '0.88rem', marginBottom: '1rem' }}>
          // System Analysis Report — Package dependency check initiated by developer
        </div>
        <p style={{ color: '#e6edf3', fontSize: '0.98rem', lineHeight: '1.6', marginBottom: '1.4rem' }}>
          {"You installed \"darkblood-engine\" to build a terminal game. When imported, the library initiates a background thread that scans local browser storage for Discord session tokens and stored passwords."}
        </p>
        <pre style={{ background: '#010409', border: '1px solid #21262d', borderRadius: '8px', padding: '1.2rem', color: '#7ee787', fontSize: '0.9rem', overflowX: 'auto', whiteSpace: 'pre-wrap', lineHeight: '1.6', marginBottom: '1.8rem' }}>
          {"$ python -c \"import darkblood\"\n--> Scanning %APPDATA%\\Discord\\Local Storage\\leveldb for authorization tokens..."}
        </pre>
  
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
              <span>{"Uninstall Package immediately & Reset Discord/Browser Passwords"}</span>
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
              <span>{"Import Library & Run Game Engine Script"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
