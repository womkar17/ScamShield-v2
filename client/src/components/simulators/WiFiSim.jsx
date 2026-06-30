import React, { useState, useEffect } from 'react';

export default function WiFiSim({ onComplete }) {
  const [phase, setPhase] = useState('wifi'); // 'wifi' | 'portal' | 'loading'
  const [connecting, setConnecting] = useState(false);
  const [loginMethod, setLoginMethod] = useState(''); // 'google' | 'facebook'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleConnect = () => {
    setConnecting(true);
    setTimeout(() => {
      setConnecting(false);
      setPhase('portal');
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!email.trim() || !password.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    setLoading(true);
    setPhase('loading');
    const exposedArray = ['Email/Username', 'Password', 'Device Information'];
    setTimeout(() => onComplete(exposedArray), 2500);
  };

  // Wi-Fi selection screen
  if (phase === 'wifi') {
    return (
      <div style={{
        maxWidth: '380px', margin: '0 auto', background: '#f2f2f7', borderRadius: '32px', overflow: 'hidden',
        height: '680px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        display: 'flex', flexDirection: 'column', boxShadow: '0 20px 60px rgba(0,0,0,0.5)', color: '#1c1c1e'
      }}>
        {/* Status bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', padding: '12px 25px', color: '#333' }}>
          <span>3:42 PM</span>
          <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
            <span style={{ opacity: 0.5 }}>No Service</span>
            <span>🔋</span>
          </div>
        </div>

        {/* Header */}
        <div style={{ padding: '0 20px 15px' }}>
          <h2 style={{ margin: '0 0 2px', fontSize: '1.8rem', fontWeight: '700' }}>Wi-Fi</h2>
        </div>

        {/* Wi-Fi toggle */}
        <div style={{ background: '#fff', margin: '0 16px', borderRadius: '12px', overflow: 'hidden', marginBottom: '25px' }}>
          <div style={{ padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: '400', fontSize: '0.95rem' }}>Wi-Fi</span>
            <div style={{ width: '50px', height: '30px', background: '#34c759', borderRadius: '15px', position: 'relative', cursor: 'pointer' }}>
              <div style={{ width: '26px', height: '26px', background: '#fff', borderRadius: '50%', position: 'absolute', top: '2px', right: '2px', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} />
            </div>
          </div>
        </div>

        {/* Networks */}
        <div style={{ padding: '0 16px' }}>
          <p style={{ margin: '0 0 8px', fontSize: '0.78rem', color: '#8e8e93', textTransform: 'uppercase', paddingLeft: '4px' }}>Available Networks</p>
          <div style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden' }}>
            {/* Target network */}
            <div onClick={handleConnect} style={{
              padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              borderBottom: '0.5px solid #e5e5ea', cursor: 'pointer', background: connecting ? '#f0f0f5' : '#fff'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '1.1rem' }}>📶</span>
                <div>
                  <span style={{ fontWeight: '500', fontSize: '0.95rem' }}>Starbucks_Free_WiFi</span>
                  {connecting && <p style={{ margin: '2px 0 0', fontSize: '0.75rem', color: '#007aff' }}>Connecting...</p>}
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '0.7rem', color: '#8e8e93' }}>Open</span>
                <span style={{ color: '#c7c7cc' }}>›</span>
              </div>
            </div>

            {/* Other networks */}
            {[
              { name: 'Starbucks_Staff', locked: true, signal: '📶' },
              { name: 'DIRECT-TV-5G', locked: true, signal: '📶' },
              { name: 'Jio_Fiber_5F', locked: true, signal: '📶' },
              { name: 'Airport_WiFi', locked: false, signal: '📶' },
              { name: 'Hidden_Network', locked: true, signal: '📶' },
            ].map((net, i) => (
              <div key={i} style={{
                padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                borderBottom: i < 4 ? '0.5px solid #e5e5ea' : 'none', opacity: 0.7
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '1.1rem' }}>{net.signal}</span>
                  <span style={{ fontSize: '0.95rem' }}>{net.name}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  {net.locked && <span style={{ fontSize: '0.8rem' }}>🔒</span>}
                  <span style={{ color: '#c7c7cc' }}>›</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom info */}
        <div style={{ marginTop: 'auto', padding: '15px 20px', textAlign: 'center' }}>
          <p style={{ margin: 0, fontSize: '0.75rem', color: '#8e8e93' }}>
            Known networks will be joined automatically.<br />
            Tap a network to connect.
          </p>
        </div>
      </div>
    );
  }

  // Loading screen
  if (phase === 'loading') {
    return (
      <div style={{
        maxWidth: '380px', margin: '0 auto', background: '#fff', borderRadius: '32px', overflow: 'hidden',
        height: '680px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)', color: '#1c1c1e'
      }}>
        <div style={{
          width: '50px', height: '50px', border: '4px solid #e0e0e0', borderTop: '4px solid #34c759',
          borderRadius: '50%', animation: 'spin 1s linear infinite', marginBottom: '20px'
        }} />
        <p style={{ fontSize: '1rem', fontWeight: '600', color: '#333' }}>Connecting to Starbucks_Free_WiFi...</p>
        <p style={{ fontSize: '0.85rem', color: '#8e8e93', marginTop: '5px' }}>Verifying credentials</p>
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  // Captive portal
  return (
    <div style={{
      maxWidth: '380px', margin: '0 auto', background: '#fff', borderRadius: '32px', overflow: 'hidden',
      height: '680px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      display: 'flex', flexDirection: 'column', boxShadow: '0 20px 60px rgba(0,0,0,0.5)', color: '#1c1c1e'
    }}>
      {/* Status bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', padding: '12px 25px', color: '#333' }}>
        <span>3:42 PM</span>
        <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
          <span>📶</span>
          <span>🔋</span>
        </div>
      </div>

      {/* Safari-like top bar */}
      <div style={{ background: '#f2f2f7', padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ color: '#007aff', fontSize: '0.85rem', cursor: 'pointer' }}>Cancel</span>
        <div style={{
          flex: 1, background: '#e8e8ed', borderRadius: '10px', padding: '7px 12px', display: 'flex', alignItems: 'center', gap: '5px',
          fontSize: '0.8rem', color: '#8e8e93'
        }}>
          <span>🔒</span>
          <span>captiveportal.starbucks-wifi.com</span>
        </div>
        <span style={{ color: '#007aff', fontSize: '0.85rem', cursor: 'pointer' }}>Done</span>
      </div>

      <div style={{ flex: 1, overflowY: 'auto' }}>
        {/* Starbucks banner */}
        <div style={{
          background: 'linear-gradient(135deg, #00704a, #1e3932)', padding: '25px 20px', textAlign: 'center', color: '#fff'
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>☕</div>
          <h2 style={{ margin: '0 0 4px', fontSize: '1.2rem', fontWeight: '600' }}>Starbucks Free Wi-Fi</h2>
          <p style={{ margin: 0, fontSize: '0.82rem', opacity: 0.8 }}>Connect & enjoy complimentary internet</p>
        </div>

        <div style={{ padding: '20px' }}>
          {!loginMethod ? (
            <>
              <p style={{ margin: '0 0 20px', textAlign: 'center', fontSize: '0.9rem', color: '#555', lineHeight: '1.5' }}>
                Sign in to access free Wi-Fi. Quick & easy — use your existing account.
              </p>

              {/* Social login buttons */}
              <button onClick={() => setLoginMethod('google')} style={{
                width: '100%', padding: '13px', background: '#fff', border: '1px solid #ddd', borderRadius: '8px',
                fontSize: '0.95rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: '10px', marginBottom: '12px', fontWeight: '500', color: '#333'
              }}>
                <span style={{ fontSize: '1.2rem' }}>🔴</span>
                Sign in with Google
              </button>

              <button onClick={() => setLoginMethod('facebook')} style={{
                width: '100%', padding: '13px', background: '#1877f2', border: 'none', borderRadius: '8px',
                fontSize: '0.95rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: '10px', color: '#fff', fontWeight: '500', marginBottom: '12px'
              }}>
                <span style={{ fontSize: '1.2rem' }}>f</span>
                Sign in with Facebook
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '15px 0' }}>
                <hr style={{ flex: 1, border: 'none', borderTop: '1px solid #e0e0e0' }} />
                <span style={{ fontSize: '0.82rem', color: '#999' }}>or</span>
                <hr style={{ flex: 1, border: 'none', borderTop: '1px solid #e0e0e0' }} />
              </div>

              <button onClick={() => setLoginMethod('google')} style={{
                width: '100%', padding: '13px', background: '#fff', border: '1px solid #ddd', borderRadius: '8px',
                fontSize: '0.95rem', cursor: 'pointer', color: '#555', fontWeight: '500'
              }}>
                Sign in with Email
              </button>

              <p style={{ margin: '18px 0 0', fontSize: '0.72rem', color: '#aaa', textAlign: 'center', lineHeight: '1.5' }}>
                By connecting, you agree to our Terms of Service and Privacy Policy. 
                We collect basic information to provide a better experience.
              </p>
            </>
          ) : (
            <>
              {/* Login form */}
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                {loginMethod === 'google' ? (
                  <>
                    <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🔴🟡🟢🔵</div>
                    <h3 style={{ margin: '0 0 3px', fontSize: '1.1rem', color: '#333' }}>Sign in with Google</h3>
                    <p style={{ margin: 0, fontSize: '0.82rem', color: '#666' }}>to continue to Starbucks Wi-Fi</p>
                  </>
                ) : (
                  <>
                    <div style={{
                      width: '50px', height: '50px', background: '#1877f2', borderRadius: '12px', margin: '0 auto 8px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.5rem', fontWeight: '700'
                    }}>f</div>
                    <h3 style={{ margin: '0 0 3px', fontSize: '1.1rem', color: '#333' }}>Log into Facebook</h3>
                    <p style={{ margin: 0, fontSize: '0.82rem', color: '#666' }}>to continue to Starbucks Wi-Fi</p>
                  </>
                )}
              </div>

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '12px' }}>
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder={loginMethod === 'google' ? 'Email or phone' : 'Email address or phone number'}
                    style={{
                      width: '100%', padding: '13px', border: '1px solid #ddd', borderRadius: '8px',
                      boxSizing: 'border-box', fontSize: '0.95rem', outline: 'none'
                    }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    style={{
                      width: '100%', padding: '13px', border: '1px solid #ddd', borderRadius: '8px',
                      boxSizing: 'border-box', fontSize: '0.95rem', outline: 'none'
                    }} />
                </div>

                {error && <p style={{ color: '#c62828', fontSize: '0.85rem', margin: '0 0 10px', textAlign: 'center' }}>{error}</p>}

                {loginMethod === 'facebook' && (
                  <button type="submit" disabled={loading} style={{
                    width: '100%', padding: '13px', background: loading ? '#a0a0a0' : '#1877f2', color: '#fff', border: 'none',
                    borderRadius: '8px', fontSize: '1rem', fontWeight: '700', cursor: loading ? 'not-allowed' : 'pointer'
                  }}>
                    {loading ? 'Logging in...' : 'Log In'}
                  </button>
                )}

                {loginMethod === 'google' && (
                  <button type="submit" disabled={loading} style={{
                    width: '100%', padding: '13px', background: loading ? '#a0a0a0' : '#1a73e8', color: '#fff', border: 'none',
                    borderRadius: '8px', fontSize: '1rem', fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer'
                  }}>
                    {loading ? 'Signing in...' : 'Next'}
                  </button>
                )}

                <div style={{ textAlign: 'center', marginTop: '12px' }}>
                  <a href="#" onClick={(e) => { e.preventDefault(); setLoginMethod(''); }} style={{ color: loginMethod === 'google' ? '#1a73e8' : '#1877f2', textDecoration: 'none', fontSize: '0.85rem' }}>
                    ← Use a different sign-in method
                  </a>
                </div>
              </form>

              <div style={{ marginTop: '25px', padding: '12px', background: '#f9f9f9', borderRadius: '8px', textAlign: 'center' }}>
                <p style={{ margin: 0, fontSize: '0.72rem', color: '#aaa', lineHeight: '1.4' }}>
                  This Wi-Fi service is provided by Starbucks partner network. Your login credentials are used solely for authentication purposes.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
