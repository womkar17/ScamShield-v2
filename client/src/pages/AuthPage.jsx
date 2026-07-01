import { useContext, useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function AuthPage() {
  const navigate = useNavigate();
  const { isLoggedIn, sendOtp, verifyOtp, loginWithGoogle } = useContext(AuthContext);

  const [step, setStep] = useState(1); // 1: Email, 2: OTP
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  
  const otpRefs = useRef([]);

  const handleGoogleLogin = async () => {
    setError('');
    setLoading(true);
    const res = await loginWithGoogle();
    if (!res?.ok) {
      setError(res?.err || 'Failed to start Google Sign In');
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/dashboard');
    }
  }, [isLoggedIn, navigate]);

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    const res = await sendOtp(email);
    setLoading(false);

    if (res.ok) {
      setStep(2);
      // Auto focus first OTP box
      setTimeout(() => otpRefs.current[0]?.focus(), 100);
    } else {
      setError(res.err);
    }
  };

  const handleVerifyOtp = async (e, directToken = null) => {
    e?.preventDefault();
    const tokenStr = directToken || otp.join('');
    
    if (tokenStr.length < 6) {
      setError('Please enter all 6 digits.');
      return;
    }

    setError('');
    setLoading(true);
    const res = await verifyOtp(email, tokenStr);
    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      if (res.isNewUser) {
        setSuccessMessage('Successfully signed up!');
      } else {
        const name = res.profile?.username || res.profile?.email?.split('@')[0] || 'User';
        setSuccessMessage(`Welcome back, ${name}!`);
      }
      setTimeout(() => navigate('/dashboard'), 1500);
    } else {
      setError(res.err);
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return; // Prevent multiple chars
    
    const newOtp = [...otp];
    newOtp[index] = value.replace(/[^0-9]/g, '');
    setOtp(newOtp);

    // Auto-advance
    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
    
    // Auto-submit if last digit is filled
    if (value && index === 5) {
      const fullCode = newOtp.join('');
      if (fullCode.length === 6) {
        setTimeout(() => handleVerifyOtp(null, fullCode), 50);
      }
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').replace(/[^0-9]/g, '').slice(0, 6);
    if (pastedData) {
      const newOtp = [...otp];
      for (let i = 0; i < pastedData.length; i++) {
        newOtp[i] = pastedData[i];
      }
      setOtp(newOtp);
      if (pastedData.length === 6) {
        otpRefs.current[5]?.focus();
        setTimeout(() => handleVerifyOtp(null, pastedData), 50);
      } else {
        otpRefs.current[pastedData.length]?.focus();
      }
    }
  };

  const goBack = () => {
    setStep(1);
    setOtp(['', '', '', '', '', '']);
    setError('');
  };

  return (
    <div style={styles.page}>
      <div style={styles.bgGlow1} />
      <div style={styles.bgGlow2} />

      <button style={styles.backBtn} onClick={() => navigate('/')}>
        ← Back to Home
      </button>

      <div className="auth-card" style={{
        ...styles.card,
        ...(success ? styles.cardSuccess : {}),
      }}>
        {/* Header */}
        <div style={styles.header}>
          <span style={styles.shieldIcon}>🛡️</span>
          
          {step === 1 && (
            <>
              <h2 style={styles.title}>Secure Access</h2>
              <p style={styles.subtitle}>Enter your email to receive a secure login code.</p>
            </>
          )}

          {step === 2 && (
            !success ? (
              <>
                <h2 style={styles.title}>Enter Code</h2>
                <p style={styles.subtitle}>
                  We sent a 6-digit code to <br />
                  <strong style={{ color: 'white' }}>{email}</strong>
                </p>
              </>
            ) : (
              <>
                <h2 style={{ ...styles.title, color: '#10b981' }}>{successMessage || 'Access Granted'}</h2>
                <p style={styles.subtitle}>Redirecting to your dashboard...</p>
              </>
            )
          )}
        </div>

        {/* Error Banner */}
        {error && <div style={styles.errorBanner}>{error}</div>}

        {/* Success State */}
        {success && (
          <div style={styles.successBox}>
            <div style={styles.successCircle}>✓</div>
          </div>
        )}

        {/* Step 1: Email Form */}
        {!success && step === 1 && (
          <div style={{ width: '100%' }}>
            <button
              type="button"
              onClick={handleGoogleLogin}
              style={styles.googleBtn}
              disabled={loading}
            >
              <svg style={{ width: '20px', height: '20px', marginRight: '10px' }} viewBox="0 0 24 24">
                <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.8C6.2 7.1 8.9 5 12 5z"/>
                <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.7-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z"/>
                <path fill="#FBBC05" d="M5.3 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.6 7.4C.6 9.4 0 11.6 0 14c0 2.4.6 4.6 1.6 6.6l3.7-2.9z"/>
                <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.1 0-5.8-2.1-6.7-5.2L1.6 15.9C3.5 19.7 7.4 23 12 23z"/>
              </svg>
              Continue with Google
            </button>

            <div style={styles.divider}>
              <span style={styles.dividerLine} />
              <span style={styles.dividerText}>or continue with email</span>
              <span style={styles.dividerLine} />
            </div>

            <form onSubmit={handleSendOtp} style={styles.form}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(''); }}
                  style={styles.input}
                  disabled={loading}
                  autoFocus
                />
              </div>
              
              <button 
                type="submit" 
                style={{ ...styles.submitBtn, opacity: loading ? 0.7 : 1 }}
                disabled={loading}
              >
                {loading ? 'Sending Code...' : 'Continue with Email'}
              </button>
            </form>
          </div>
        )}

        {/* Step 2: OTP Form */}
        {!success && step === 2 && (
          <form onSubmit={handleVerifyOtp} style={styles.form}>
            <div className="otp-container" style={styles.otpContainer}>
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={el => otpRefs.current[index] = el}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(index, e)}
                  onPaste={handlePaste}
                  className="otp-input"
                  style={styles.otpInput}
                  disabled={loading}
                />
              ))}
            </div>

            <button 
              type="submit" 
              style={{ ...styles.submitBtn, opacity: loading ? 0.7 : 1 }}
              disabled={loading}
            >
              {loading ? 'Verifying...' : 'Verify Code'}
            </button>

            <button type="button" onClick={goBack} style={styles.switchBtn} disabled={loading}>
              Wrong email? Go back
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    background: '#0a0a1a',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
  },
  bgGlow1: {
    position: 'absolute',
    top: '10%',
    left: '20%',
    width: '500px',
    height: '500px',
    background: 'radial-gradient(circle, rgba(102,126,234,0.12) 0%, transparent 70%)',
    borderRadius: '50%',
    pointerEvents: 'none',
  },
  bgGlow2: {
    position: 'absolute',
    bottom: '10%',
    right: '15%',
    width: '400px',
    height: '400px',
    background: 'radial-gradient(circle, rgba(118,75,162,0.1) 0%, transparent 70%)',
    borderRadius: '50%',
    pointerEvents: 'none',
  },
  backBtn: {
    position: 'absolute',
    top: '2rem',
    left: '2rem',
    background: 'none',
    border: 'none',
    color: 'rgba(255,255,255,0.5)',
    fontSize: '0.95rem',
    cursor: 'pointer',
    zIndex: 10,
  },
  card: {
    backgroundColor: 'rgba(15,15,30,0.85)',
    backdropFilter: 'blur(25px)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '24px',
    padding: '3rem 2.5rem',
    width: '100%',
    maxWidth: '440px',
    boxShadow: '0 25px 60px -15px rgba(0,0,0,0.5), 0 0 50px rgba(102,126,234,0.08)',
    position: 'relative',
    zIndex: 2,
    transition: 'all 0.4s ease',
  },
  cardSuccess: {
    boxShadow: '0 25px 60px -15px rgba(0,0,0,0.5), 0 0 50px rgba(72,187,120,0.25)',
    border: '1px solid rgba(72,187,120,0.4)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '2.5rem',
  },
  shieldIcon: {
    fontSize: '3.5rem',
    marginBottom: '0.8rem',
    display: 'block',
  },
  title: {
    fontSize: '1.6rem',
    fontWeight: '800',
    color: 'white',
    margin: '0 0 0.5rem 0',
  },
  subtitle: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: '0.9rem',
    margin: 0,
    lineHeight: 1.5,
  },
  errorBanner: {
    backgroundColor: 'rgba(229,62,62,0.1)',
    color: '#fc8181',
    padding: '0.75rem 1rem',
    borderRadius: '10px',
    border: '1px solid rgba(229,62,62,0.2)',
    marginBottom: '1.5rem',
    fontSize: '0.85rem',
    textAlign: 'center',
  },
  googleBtn: {
    width: '100%',
    padding: '0.9rem 1rem',
    backgroundColor: '#ffffff',
    color: '#3c4043',
    border: '1px solid #dadce0',
    borderRadius: '12px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.2rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'background-color 0.2s, box-shadow 0.2s',
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    margin: '1.2rem 0',
  },
  dividerLine: {
    flex: 1,
    height: '1px',
    backgroundColor: 'rgba(255,255,255,0.15)',
  },
  dividerText: {
    padding: '0 12px',
    color: 'rgba(255,255,255,0.5)',
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  label: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: '0.85rem',
    fontWeight: '600',
  },
  input: {
    width: '100%',
    padding: '1rem 1.2rem',
    backgroundColor: 'rgba(0,0,0,0.3)',
    border: '2px solid rgba(255,255,255,0.1)',
    borderRadius: '12px',
    color: 'white',
    fontSize: '1rem',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s',
  },
  otpContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '8px',
    marginBottom: '1rem',
  },
  otpInput: {
    width: '45px',
    height: '55px',
    backgroundColor: 'rgba(0,0,0,0.3)',
    border: '2px solid rgba(255,255,255,0.1)',
    borderRadius: '12px',
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  submitBtn: {
    width: '100%',
    padding: '1rem',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    border: 'none',
    borderRadius: '12px',
    color: 'white',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'opacity 0.2s, transform 0.1s',
  },
  switchBtn: {
    background: 'none',
    border: 'none',
    color: 'rgba(255,255,255,0.5)',
    cursor: 'pointer',
    fontSize: '0.9rem',
    padding: '0.5rem',
    textAlign: 'center',
    textDecoration: 'underline',
  },
  successBox: {
    textAlign: 'center',
    padding: '1rem 0',
  },
  successCircle: {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #48bb78, #38a169)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    fontSize: '2rem',
    color: 'white',
    fontWeight: 'bold',
    boxShadow: '0 0 40px rgba(72,187,120,0.3)',
  },
};
