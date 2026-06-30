import React, { useState } from 'react';

export default function BankKYCSim({ onComplete }) {
  const [view, setView] = useState('sms'); // 'sms' | 'bank'
  const [accountNo, setAccountNo] = useState('');
  const [cardNo, setCardNo] = useState('');
  const [pin, setPin] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState('');

  const handleLinkClick = (e) => {
    e.preventDefault();
    setView('bank');
  };

  const handleSendOtp = () => {
    if (!accountNo.trim() || !cardNo.trim() || !pin.trim()) {
      setError('Please fill in Account Number, Debit Card Number, and ATM PIN.');
      return;
    }
    setError('');
    setOtpSent(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!accountNo.trim() || !cardNo.trim() || !pin.trim() || !otp.trim()) {
      setError('Please fill in all required fields including OTP.');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      const exposedArray = ['Account Number', 'Debit Card Number', 'ATM PIN', 'OTP'];
      onComplete(exposedArray);
    }, 1500);
  };

  if (view === 'sms') {
    return (
      <div style={{
        maxWidth: '380px', margin: '0 auto', borderRadius: '32px', overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)', height: '680px', display: 'flex',
        flexDirection: 'column', background: '#f5f5f5',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        {/* Status bar */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', padding: '12px 20px',
          background: '#fff', color: '#333', fontSize: '0.8rem'
        }}>
          <span style={{ fontWeight: '600' }}>9:41</span>
          <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
            <span>📶</span><span>🔋 87%</span>
          </div>
        </div>

        {/* Messages header */}
        <div style={{
          background: '#fff', padding: '8px 16px 14px', borderBottom: '1px solid #e0e0e0'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: '#007AFF', fontSize: '1rem' }}>← Messages</span>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <h3 style={{ margin: 0, fontSize: '1rem', color: '#333' }}>SBI-ALERTS</h3>
              <p style={{ margin: 0, fontSize: '0.75rem', color: '#888' }}>SMS</p>
            </div>
            <span style={{ color: '#007AFF', fontSize: '1rem' }}>ⓘ</span>
          </div>
        </div>

        {/* SMS content */}
        <div style={{ flex: 1, padding: '20px 16px', overflowY: 'auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
            <span style={{ background: '#e0e0e0', padding: '4px 14px', borderRadius: '12px', fontSize: '0.75rem', color: '#666' }}>
              Today 11:23 AM
            </span>
          </div>

          <div style={{
            background: '#e8e8e8', borderRadius: '18px 18px 18px 6px', padding: '14px 16px',
            maxWidth: '90%', boxShadow: '0 1px 2px rgba(0,0,0,0.08)'
          }}>
            <p style={{ margin: 0, color: '#1a1a1a', fontSize: '0.92rem', lineHeight: '1.5' }}>
              Dear SBI Customer, your account ending XX4829 will be <strong style={{ color: '#c0392b' }}>BLOCKED within 24 hours</strong> due to incomplete KYC verification.
            </p>
            <p style={{ margin: '10px 0 0', color: '#1a1a1a', fontSize: '0.92rem', lineHeight: '1.5' }}>
              Update your KYC immediately to avoid account suspension:
            </p>
            <a href="#" onClick={handleLinkClick} style={{
              display: 'block', marginTop: '10px', color: '#007AFF', fontSize: '0.88rem',
              wordBreak: 'break-all', textDecoration: 'underline'
            }}>
              https://sbi-kyc-update.in/verify
            </a>
            <p style={{ margin: '10px 0 0', color: '#1a1a1a', fontSize: '0.92rem' }}>
              Sincerely, SBI Customer Service
            </p>
            <p style={{ margin: '8px 0 0', color: '#c0392b', fontSize: '0.82rem', fontWeight: '600' }}>
              ⚠️ Failure to update may result in permanent account closure.
            </p>
          </div>

          {/* Fake additional SMS */}
          <div style={{ textAlign: 'center', margin: '16px 0' }}>
            <span style={{ background: '#e0e0e0', padding: '4px 14px', borderRadius: '12px', fontSize: '0.75rem', color: '#666' }}>
              Today 11:25 AM
            </span>
          </div>
          <div style={{
            background: '#e8e8e8', borderRadius: '18px 18px 18px 6px', padding: '14px 16px',
            maxWidth: '90%', boxShadow: '0 1px 2px rgba(0,0,0,0.08)'
          }}>
            <p style={{ margin: 0, color: '#1a1a1a', fontSize: '0.92rem', lineHeight: '1.5' }}>
              REMINDER: 2nd notice — Your SBI account KYC is still pending. Account will be deactivated at 11:23 AM tomorrow. Complete verification NOW.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Fake SBI login page
  return (
    <div style={{
      maxWidth: '480px', margin: '0 auto', background: '#fff', borderRadius: '8px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.15)', overflow: 'hidden',
      fontFamily: '"Open Sans", Arial, sans-serif', color: '#333'
    }}>
      {/* Browser bar */}
      <div style={{
        background: '#f0f0f0', padding: '10px 14px', borderBottom: '1px solid #ddd',
        display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem'
      }}>
        <div style={{ display: 'flex', gap: '4px' }}>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#e74c3c', display: 'inline-block' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f39c12', display: 'inline-block' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#2ecc71', display: 'inline-block' }} />
        </div>
        <div style={{
          flex: 1, background: '#fff', border: '1px solid #ccc', borderRadius: '4px',
          padding: '6px 10px', display: 'flex', alignItems: 'center', gap: '6px'
        }}>
          <span style={{ color: '#2ecc71', fontSize: '0.9rem' }}>🔒</span>
          <span style={{ color: '#555' }}>https://sbi-kyc-update.in/verify/netbanking</span>
        </div>
      </div>

      {/* SBI header */}
      <div style={{
        background: 'linear-gradient(135deg, #1a237e 0%, #283593 100%)',
        padding: '18px 24px', display: 'flex', alignItems: 'center', gap: '14px'
      }}>
        <div style={{
          width: '50px', height: '50px', background: '#fff', borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 'bold', color: '#1a237e', fontSize: '0.75rem'
        }}>SBI</div>
        <div>
          <h2 style={{ margin: 0, color: '#fff', fontSize: '1.15rem' }}>State Bank of India</h2>
          <p style={{ margin: '2px 0 0', color: '#bbdefb', fontSize: '0.8rem' }}>Online SBI — KYC Verification Portal</p>
        </div>
      </div>

      {/* Alert banner */}
      <div style={{
        background: '#fff3e0', padding: '12px 24px', borderBottom: '2px solid #ff9800',
        display: 'flex', alignItems: 'center', gap: '10px'
      }}>
        <span style={{ fontSize: '1.2rem' }}>⚠️</span>
        <p style={{ margin: 0, color: '#e65100', fontSize: '0.85rem', fontWeight: '600' }}>
          Your account will be suspended in <span style={{ color: '#c62828' }}>23 hours 47 minutes</span>. Complete verification now.
        </p>
      </div>

      {/* Form */}
      <div style={{ padding: '28px 24px' }}>
        <h3 style={{ margin: '0 0 20px', color: '#1a237e', fontSize: '1.05rem' }}>
          Re-verify Your Banking Details
        </h3>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.88rem', color: '#444' }}>
              Account Number
            </label>
            <input type="text" value={accountNo} onChange={e => { setAccountNo(e.target.value); setError(''); }}
              placeholder="Enter 11-digit account number"
              style={{
                width: '100%', padding: '11px 14px', border: '1px solid #bbb', borderRadius: '4px',
                fontSize: '0.92rem', boxSizing: 'border-box', outline: 'none', color: '#333'
              }} />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.88rem', color: '#444' }}>
              Debit Card Number
            </label>
            <input type="text" value={cardNo} onChange={e => { setCardNo(e.target.value); setError(''); }}
              placeholder="XXXX XXXX XXXX XXXX" maxLength={19}
              style={{
                width: '100%', padding: '11px 14px', border: '1px solid #bbb', borderRadius: '4px',
                fontSize: '0.92rem', boxSizing: 'border-box', outline: 'none', color: '#333',
                letterSpacing: '1px'
              }} />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.88rem', color: '#444' }}>
              ATM PIN
            </label>
            <input type="password" value={pin} onChange={e => { setPin(e.target.value); setError(''); }}
              placeholder="••••" maxLength={4}
              style={{
                width: '100%', padding: '11px 14px', border: '1px solid #bbb', borderRadius: '4px',
                fontSize: '1rem', boxSizing: 'border-box', outline: 'none', color: '#333',
                letterSpacing: '6px'
              }} />
          </div>

          {error && <p style={{ color: '#e74c3c', fontSize: '0.82rem', margin: '0 0 10px' }}>{error}</p>}
          {!otpSent ? (
            <button type="button" onClick={handleSendOtp} style={{
              width: '100%', padding: '12px', background: '#1a237e', color: '#fff',
              border: 'none', borderRadius: '4px', fontSize: '0.95rem', fontWeight: '600',
              cursor: 'pointer', marginBottom: '10px'
            }}>
              Send OTP
            </button>
          ) : (
            <>
              <div style={{
                background: '#e8f5e9', padding: '10px 14px', borderRadius: '4px',
                marginBottom: '16px', border: '1px solid #a5d6a7'
              }}>
                <p style={{ margin: 0, color: '#2e7d32', fontSize: '0.85rem' }}>
                  ✅ OTP sent to mobile number ending ****48. Valid for 5 minutes.
                </p>
              </div>

              <div style={{ marginBottom: '18px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '0.88rem', color: '#444' }}>
                  Enter OTP
                </label>
                <input type="text" value={otp} onChange={e => { setOtp(e.target.value); setError(''); }}
                  placeholder="Enter 6-digit OTP" maxLength={6}
                  style={{
                    width: '100%', padding: '11px 14px', border: '1px solid #bbb', borderRadius: '4px',
                    fontSize: '1.1rem', boxSizing: 'border-box', outline: 'none', color: '#333',
                    letterSpacing: '8px', textAlign: 'center'
                  }} />
              </div>

              <button type="submit" disabled={loading} style={{
                width: '100%', padding: '13px', background: loading ? '#999' : '#1a237e',
                color: '#fff', border: 'none', borderRadius: '4px', fontSize: '1rem',
                fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer'
              }}>
                {loading ? 'Verifying KYC...' : 'Verify & Update KYC'}
              </button>
            </>
          )}
        </form>

        {/* Trust badges */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px',
          padding: '14px 0', borderTop: '1px solid #eee'
        }}>
          <span style={{ fontSize: '0.75rem', color: '#888' }}>🔒 256-bit SSL</span>
          <span style={{ fontSize: '0.75rem', color: '#888' }}>🏛️ RBI Regulated</span>
          <span style={{ fontSize: '0.75rem', color: '#888' }}>✅ PCIDSS Compliant</span>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        background: '#f5f5f5', padding: '12px 24px', textAlign: 'center', fontSize: '0.75rem',
        color: '#999', borderTop: '1px solid #e0e0e0'
      }}>
        © 2026 State Bank of India. All rights reserved. | Privacy Policy | Terms of Use
      </div>
    </div>
  );
}
