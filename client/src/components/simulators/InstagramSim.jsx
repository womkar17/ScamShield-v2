import React, { useState } from 'react';

export default function InstagramSim({ onComplete }) {
  const [view, setView] = useState('dm'); // 'dm' | 'login'
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLinkClick = (e) => {
    e.preventDefault();
    setView('login');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim() || !phone.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      const exposedArray = ['Username', 'Password', 'Phone Number'];
      onComplete(exposedArray);
    }, 1500);
  };

  if (view === 'dm') {
    return (
      <div style={{
        maxWidth: '380px', margin: '0 auto', borderRadius: '32px', overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)', height: '680px', display: 'flex',
        flexDirection: 'column', background: '#fff',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        {/* Status bar */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', padding: '12px 20px',
          color: '#333', fontSize: '0.8rem', background: '#fafafa'
        }}>
          <span style={{ fontWeight: '600' }}>9:41</span>
          <div style={{ display: 'flex', gap: '5px' }}><span>📶</span><span>🔋</span></div>
        </div>

        {/* DM header */}
        <div style={{
          padding: '10px 16px 14px', borderBottom: '1px solid #efefef',
          display: 'flex', alignItems: 'center', gap: '12px'
        }}>
          <span style={{ fontSize: '1.2rem', cursor: 'pointer' }}>←</span>
          <div style={{
            width: '36px', height: '36px', borderRadius: '50%',
            background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <div style={{
              width: '32px', height: '32px', borderRadius: '50%', background: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem'
            }}>📷</div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ fontWeight: '600', fontSize: '0.92rem', color: '#262626' }}>instagram.verified.support</span>
              <span style={{ color: '#3897f0', fontSize: '0.85rem' }}>✓</span>
            </div>
            <span style={{ fontSize: '0.75rem', color: '#8e8e8e' }}>Instagram • Active now</span>
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span style={{ fontSize: '1.1rem' }}>📞</span>
            <span style={{ fontSize: '1.1rem' }}>📹</span>
          </div>
        </div>

        {/* DM content */}
        <div style={{ flex: 1, padding: '20px 14px', overflowY: 'auto', background: '#fff' }}>
          {/* Warning icon message */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', alignItems: 'flex-end' }}>
            <div style={{
              width: '28px', height: '28px', borderRadius: '50%',
              background: 'linear-gradient(45deg, #f09433, #dc2743)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.7rem', flexShrink: 0
            }}>📷</div>
            <div style={{
              background: '#efefef', borderRadius: '18px 18px 18px 6px', padding: '12px 16px',
              maxWidth: '80%'
            }}>
              <p style={{ margin: 0, color: '#262626', fontSize: '0.9rem', lineHeight: '1.5' }}>
                ⚠️ <strong>IMPORTANT NOTICE</strong>
              </p>
              <p style={{ margin: '8px 0 0', color: '#262626', fontSize: '0.9rem', lineHeight: '1.5' }}>
                Dear User, your Instagram account has been flagged for <strong>copyright violation</strong> (Report #IG-2026-48291).
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', alignItems: 'flex-end' }}>
            <div style={{ width: '28px', flexShrink: 0 }} />
            <div style={{
              background: '#efefef', borderRadius: '18px 18px 18px 6px', padding: '12px 16px',
              maxWidth: '80%'
            }}>
              <p style={{ margin: 0, color: '#262626', fontSize: '0.9rem', lineHeight: '1.5' }}>
                Multiple posts on your account have been reported for using copyrighted content without authorization.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', alignItems: 'flex-end' }}>
            <div style={{ width: '28px', flexShrink: 0 }} />
            <div style={{
              background: '#efefef', borderRadius: '18px 18px 18px 6px', padding: '12px 16px',
              maxWidth: '80%'
            }}>
              <p style={{ margin: 0, color: '#262626', fontSize: '0.9rem', lineHeight: '1.5' }}>
                You must verify your identity within <strong style={{ color: '#ed4956' }}>24 hours</strong> or your account will be <strong style={{ color: '#ed4956' }}>permanently deleted</strong>.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', alignItems: 'flex-end' }}>
            <div style={{ width: '28px', flexShrink: 0 }} />
            <div style={{
              background: '#efefef', borderRadius: '18px 18px 18px 6px', padding: '12px 16px',
              maxWidth: '80%'
            }}>
              <p style={{ margin: '0 0 8px', color: '#262626', fontSize: '0.9rem', lineHeight: '1.5' }}>
                Verify your account here to prevent deletion:
              </p>
              <a href="#" onClick={handleLinkClick} style={{
                color: '#00376b', fontSize: '0.88rem', textDecoration: 'underline',
                wordBreak: 'break-all'
              }}>
                https://instagram-identity-verify.com/appeal
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', alignItems: 'flex-end' }}>
            <div style={{ width: '28px', flexShrink: 0 }} />
            <div style={{
              background: '#efefef', borderRadius: '18px 18px 18px 6px', padding: '12px 16px',
              maxWidth: '80%'
            }}>
              <p style={{ margin: 0, color: '#8e8e8e', fontSize: '0.82rem' }}>
                This is an automated message from Instagram Trust & Safety Team. Do not share this link publicly.
              </p>
            </div>
          </div>

          {/* Time stamp */}
          <p style={{ textAlign: 'center', color: '#8e8e8e', fontSize: '0.75rem', marginTop: '6px' }}>
            Today 11:14 AM • Seen
          </p>
        </div>

        {/* Message input */}
        <div style={{
          padding: '10px 14px', borderTop: '1px solid #efefef', display: 'flex', alignItems: 'center', gap: '10px'
        }}>
          <div style={{
            flex: 1, background: '#fafafa', border: '1px solid #dbdbdb', borderRadius: '22px',
            padding: '10px 16px', display: 'flex', alignItems: 'center'
          }}>
            <span style={{ color: '#8e8e8e', fontSize: '0.9rem' }}>Message...</span>
          </div>
          <span style={{ fontSize: '1.2rem' }}>❤️</span>
          <span style={{ fontSize: '1.2rem' }}>📷</span>
        </div>
      </div>
    );
  }

  // Fake Instagram login page
  return (
    <div style={{
      maxWidth: '420px', margin: '0 auto', background: '#fafafa', borderRadius: '8px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.12)', overflow: 'hidden',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', color: '#262626'
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
          <span style={{ color: '#555' }}>https://instagram-identity-verify.com/login</span>
        </div>
      </div>

      {/* Login form */}
      <div style={{ padding: '40px 30px 30px' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          {/* Instagram-style wordmark */}
          <h1 style={{
            fontFamily: "'Segoe Script', 'Brush Script MT', cursive",
            fontSize: '2.5rem', fontWeight: '400', color: '#262626', margin: '0 0 8px'
          }}>Instagram</h1>
          <p style={{ color: '#8e8e8e', fontSize: '0.9rem', margin: 0, lineHeight: '1.4', padding: '0 10px' }}>
            Verify your identity to appeal the copyright violation report
          </p>
        </div>

        <div style={{
          background: '#fff', border: '1px solid #dbdbdb', borderRadius: '4px', padding: '24px 20px'
        }}>
          {/* Warning */}
          <div style={{
            background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '4px',
            padding: '10px 14px', marginBottom: '20px', textAlign: 'center'
          }}>
            <p style={{ margin: 0, color: '#dc2626', fontSize: '0.82rem' }}>
              ⚠️ Account deletion in <strong>23h 46m</strong>. Verify now.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '10px' }}>
              <input type="text" value={username} onChange={e => { setUsername(e.target.value); setError(''); }}
                placeholder="Phone number, username, or email"
                style={{
                  width: '100%', padding: '10px 12px', background: '#fafafa', border: '1px solid #dbdbdb',
                  borderRadius: '3px', fontSize: '0.88rem', boxSizing: 'border-box', outline: 'none', color: '#262626'
                }} />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <input type="password" value={password} onChange={e => { setPassword(e.target.value); setError(''); }}
                placeholder="Password"
                style={{
                  width: '100%', padding: '10px 12px', background: '#fafafa', border: '1px solid #dbdbdb',
                  borderRadius: '3px', fontSize: '0.88rem', boxSizing: 'border-box', outline: 'none', color: '#262626'
                }} />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <input type="tel" value={phone} onChange={e => { setPhone(e.target.value); setError(''); }}
                placeholder="Phone number (for verification)"
                style={{
                  width: '100%', padding: '10px 12px', background: '#fafafa', border: '1px solid #dbdbdb',
                  borderRadius: '3px', fontSize: '0.88rem', boxSizing: 'border-box', outline: 'none', color: '#262626'
                }} />
            </div>

            {error && <p style={{ color: '#ed4956', fontSize: '0.82rem', margin: '0 0 10px', textAlign: 'center' }}>{error}</p>}
            <button type="submit" disabled={loading} style={{
              width: '100%', padding: '8px', background: loading ? '#a5d8ff' : '#0095f6',
              color: '#fff', border: 'none', borderRadius: '4px', fontSize: '0.9rem',
              fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer'
            }}>
              {loading ? 'Verifying...' : 'Log In & Verify Identity'}
            </button>
          </form>

          <div style={{ display: 'flex', alignItems: 'center', margin: '18px 0' }}>
            <div style={{ flex: 1, height: '1px', background: '#dbdbdb' }} />
            <span style={{ padding: '0 16px', color: '#8e8e8e', fontSize: '0.8rem', fontWeight: '600' }}>OR</span>
            <div style={{ flex: 1, height: '1px', background: '#dbdbdb' }} />
          </div>

          <button style={{
            width: '100%', padding: '8px', background: 'none', border: 'none',
            color: '#385185', fontSize: '0.88rem', fontWeight: '600', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'
          }}>
            <span>📘</span> Log in with Facebook
          </button>

          <p style={{ textAlign: 'center', color: '#00376b', fontSize: '0.78rem', marginTop: '16px', cursor: 'pointer' }}>
            Forgot password?
          </p>
        </div>

        <div style={{
          background: '#fff', border: '1px solid #dbdbdb', borderRadius: '4px',
          padding: '16px', marginTop: '12px', textAlign: 'center'
        }}>
          <span style={{ fontSize: '0.88rem', color: '#262626' }}>
            Don't have an account? <span style={{ color: '#0095f6', fontWeight: '600', cursor: 'pointer' }}>Sign up</span>
          </span>
        </div>

        <div style={{ textAlign: 'center', marginTop: '18px' }}>
          <p style={{ color: '#8e8e8e', fontSize: '0.78rem', margin: '0 0 10px' }}>Get the app.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
            <div style={{ background: '#000', color: '#fff', padding: '6px 12px', borderRadius: '6px', fontSize: '0.7rem' }}>
              🍎 App Store
            </div>
            <div style={{ background: '#000', color: '#fff', padding: '6px 12px', borderRadius: '6px', fontSize: '0.7rem' }}>
              ▶️ Google Play
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
