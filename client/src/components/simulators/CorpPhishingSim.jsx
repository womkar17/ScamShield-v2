import React, { useState } from 'react';

export default function CorpPhishingSim({ onComplete }) {
  const [view, setView] = useState('email'); // 'email' | 'login'
  const [corpEmail, setCorpEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLinkClick = (e) => {
    e.preventDefault();
    setView('login');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!corpEmail.trim() || !password.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    setLoading(true);
    const exposedArray = ['Corporate Email', 'Password'];
    setTimeout(() => onComplete(exposedArray), 1500);
  };

  if (view === 'email') {
    return (
      <div style={{
        maxWidth: '700px', margin: '0 auto', background: '#fff', border: '1px solid #e0e0e0',
        borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        fontFamily: '"Segoe UI", Arial, sans-serif', color: '#333'
      }}>
        {/* Email toolbar */}
        <div style={{
          padding: '12px 20px', borderBottom: '1px solid #e0e0e0', background: '#f8f9fa',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center'
        }}>
          <div style={{ display: 'flex', gap: '15px' }}>
            <span style={{ color: '#5f6368', cursor: 'pointer', fontSize: '0.9rem' }}>← Back</span>
            <span style={{ color: '#5f6368', cursor: 'pointer', fontSize: '0.9rem' }}>Archive</span>
            <span style={{ color: '#5f6368', cursor: 'pointer', fontSize: '0.9rem' }}>Report spam</span>
            <span style={{ color: '#5f6368', cursor: 'pointer', fontSize: '0.9rem' }}>Delete</span>
          </div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span style={{ fontSize: '0.8rem', color: '#5f6368' }}>1 of 3</span>
          </div>
        </div>

        <div style={{ padding: '28px 30px' }}>
          {/* Subject */}
          <h2 style={{ margin: '0 0 20px', fontSize: '1.35rem', fontWeight: 'normal', color: '#202124' }}>
            🔒 URGENT: Security Breach Detected — Immediate Password Reset Required
            <span style={{
              background: '#fce4e4', color: '#c62828', padding: '3px 10px', borderRadius: '4px',
              fontSize: '0.75rem', marginLeft: '10px', fontWeight: '600', verticalAlign: 'middle'
            }}>
              Important
            </span>
          </h2>

          {/* Sender info */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '28px' }}>
            <div style={{
              width: '42px', height: '42px', background: '#0078d4', borderRadius: '50%',
              color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 'bold', fontSize: '0.9rem', marginRight: '14px', flexShrink: 0
            }}>IT</div>
            <div style={{ flex: 1 }}>
              <div>
                <strong style={{ color: '#202124' }}>IT Security Team </strong>
                <span style={{ color: '#5f6368', fontSize: '0.88rem' }}>&lt;security@your-company.com&gt;</span>
              </div>
              <div style={{ fontSize: '0.82rem', color: '#5f6368' }}>to me ▾</div>
            </div>
            <div style={{ color: '#5f6368', fontSize: '0.85rem', flexShrink: 0 }}>
              2:14 PM (35 min ago)
            </div>
          </div>

          {/* Email body */}
          <div style={{ lineHeight: '1.7', fontSize: '0.98rem', color: '#333' }}>
            <div style={{
              background: '#fff3e0', border: '1px solid #ffcc80', borderRadius: '4px',
              padding: '14px 18px', marginBottom: '20px', display: 'flex', alignItems: 'flex-start', gap: '10px'
            }}>
              <span style={{ fontSize: '1.3rem' }}>⚠️</span>
              <div>
                <strong style={{ color: '#e65100' }}>Critical Security Alert</strong>
                <p style={{ margin: '4px 0 0', color: '#bf360c', fontSize: '0.9rem' }}>
                  Unauthorized access attempt detected on your account. Immediate action required.
                </p>
              </div>
            </div>

            <p>Dear Employee,</p>

            <p>
              Our security monitoring system has detected <strong>multiple unauthorized login attempts</strong> on
              your Microsoft 365 account from the following IP addresses:
            </p>

            <div style={{
              background: '#f5f5f5', padding: '12px 18px', borderRadius: '4px', marginBottom: '16px',
              fontFamily: 'Consolas, monospace', fontSize: '0.85rem', color: '#444'
            }}>
              • 185.234.72.19 (Moscow, Russia) — 14 attempts<br />
              • 103.41.167.8 (Lagos, Nigeria) — 8 attempts<br />
              • 91.243.80.112 (Bucharest, Romania) — 5 attempts
            </div>

            <p>
              As a precautionary measure, your password <strong>must be reset within 2 hours</strong> to prevent
              account compromise. This is mandatory under our organization's Information Security Policy (ISP-2026-04).
            </p>

            <div style={{ textAlign: 'center', margin: '28px 0' }}>
              <a href="#" onClick={handleLinkClick} style={{
                background: '#0078d4', color: '#fff', padding: '12px 32px',
                textDecoration: 'none', borderRadius: '4px', fontWeight: '600',
                display: 'inline-block', fontSize: '0.95rem'
              }}>
                Reset Password Now →
              </a>
            </div>

            <p style={{ color: '#c62828', fontSize: '0.88rem' }}>
              ⏰ <strong>Deadline:</strong> Your account will be temporarily locked if the password is not
              reset by 4:14 PM today.
            </p>

            <p style={{ marginTop: '24px', color: '#5f6368', fontSize: '0.88rem', lineHeight: '1.5' }}>
              Regards,<br />
              IT Security Team<br />
              Corporate Information Security Division<br />
              <em style={{ fontSize: '0.82rem' }}>This is an automated alert. Do not reply to this email.</em>
            </p>
          </div>

          {/* Signature banner */}
          <div style={{
            borderTop: '1px solid #e0e0e0', marginTop: '20px', paddingTop: '16px',
            display: 'flex', alignItems: 'center', gap: '10px'
          }}>
            <div style={{
              width: '32px', height: '32px', background: '#f25022', borderRadius: '4px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontWeight: 'bold', fontSize: '0.7rem'
            }}>M</div>
            <span style={{ color: '#5f6368', fontSize: '0.8rem' }}>
              Secured by Microsoft 365 Enterprise Security
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Fake Microsoft 365 Login
  return (
    <div style={{
      maxWidth: '440px', margin: '0 auto', background: '#fff', borderRadius: '8px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.15)', overflow: 'hidden',
      fontFamily: '"Segoe UI", Arial, sans-serif', color: '#333'
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
          <span style={{ color: '#2ecc71' }}>🔒</span>
          <span style={{ color: '#555' }}>https://login.microsoft365-security.com/reset</span>
        </div>
      </div>

      <div style={{ padding: '40px 36px' }}>
        {/* Microsoft logo */}
        <div style={{ marginBottom: '28px' }}>
          <div style={{ display: 'flex', gap: '3px', marginBottom: '20px' }}>
            <div style={{ width: '18px', height: '18px', background: '#f25022' }} />
            <div style={{ width: '18px', height: '18px', background: '#7fba00' }} />
            <div style={{ width: '18px', height: '18px', background: '#00a4ef' }} />
            <div style={{ width: '18px', height: '18px', background: '#ffb900' }} />
          </div>
          <h2 style={{ margin: 0, fontSize: '1.3rem', fontWeight: '600', color: '#1b1b1b' }}>
            Emergency Password Reset
          </h2>
          <p style={{ margin: '6px 0 0', color: '#666', fontSize: '0.88rem' }}>
            Microsoft 365 — Account Security
          </p>
        </div>

        {/* Security alert */}
        <div style={{
          background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '4px',
          padding: '12px 16px', marginBottom: '24px'
        }}>
          <p style={{ margin: 0, color: '#991b1b', fontSize: '0.85rem' }}>
            🛡️ <strong>Security breach detected.</strong> Verify your identity and create a new password to secure your account.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.9rem', color: '#1b1b1b' }}>
              Corporate Email
            </label>
            <input type="email" value={corpEmail} onChange={e => setCorpEmail(e.target.value)} required
              placeholder="you@company.com"
              style={{
                width: '100%', padding: '10px 12px', border: '1px solid #8c8c8c', borderRadius: '2px',
                fontSize: '0.92rem', boxSizing: 'border-box', outline: 'none', color: '#333'
              }} />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.9rem', color: '#1b1b1b' }}>
              Current Password
            </label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required
              placeholder="Enter your current password"
              style={{
                width: '100%', padding: '10px 12px', border: '1px solid #8c8c8c', borderRadius: '2px',
                fontSize: '0.92rem', boxSizing: 'border-box', outline: 'none', color: '#333'
              }} />
          </div>

          {error && <p style={{ color: '#c62828', fontSize: '0.85rem', margin: '0 0 10px', textAlign: 'center' }}>{error}</p>}

          <button type="submit" disabled={loading} style={{
            width: '100%', padding: '10px', background: loading ? '#a0a0a0' : '#0067b8',
            color: '#fff', border: 'none', fontSize: '0.95rem', fontWeight: '600',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}>
            {loading ? 'Verifying...' : 'Sign in'}
          </button>
        </form>

        <div style={{ marginTop: '20px' }}>
          <p style={{ color: '#0067b8', fontSize: '0.85rem', cursor: 'pointer', margin: '6px 0' }}>
            Forgot my password
          </p>
          <p style={{ color: '#0067b8', fontSize: '0.85rem', cursor: 'pointer', margin: '6px 0' }}>
            Sign in with a security key
          </p>
        </div>

        <div style={{ borderTop: '1px solid #e0e0e0', marginTop: '28px', paddingTop: '16px' }}>
          <p style={{ color: '#666', fontSize: '0.82rem', margin: 0 }}>
            Can't access your account? Contact your IT administrator.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        padding: '16px 36px', borderTop: '1px solid #e8e8e8', display: 'flex',
        justifyContent: 'space-between', fontSize: '0.75rem', color: '#999'
      }}>
        <span>Terms of use</span>
        <span>Privacy & cookies</span>
        <span>© Microsoft 2026</span>
      </div>
    </div>
  );
}
