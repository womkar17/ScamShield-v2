import { useState, useRef, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function AuthForm({ onSuccess }) {
  const { loginWithGoogle, sendOtp, verifyOtp } = useContext(AuthContext);

  const [mode, setMode] = useState('initial'); // 'initial' | 'otp'
  const [email, setEmail] = useState('');
  const [otpDigits, setOtpDigits] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const inputRefs = useRef([]);

  // Auto focus first PIN input when switching to OTP mode
  useEffect(() => {
    if (mode === 'otp' && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [mode]);

  const handleGoogleLogin = async () => {
    setError('');
    setLoading(true);
    const res = await loginWithGoogle();
    if (!res?.ok) {
      setError(res?.err || 'Failed to initialize Google Sign In');
      setLoading(false);
    }
  };

  const handleSendOtp = async (e) => {
    if (e) e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSuccess('');
    setLoading(true);

    const res = await sendOtp(email);
    setLoading(false);

    if (res?.ok) {
      setMode('otp');
      setSuccess(`A 6-digit code was sent to ${email}`);
    } else {
      setError(res?.err || 'Could not send verification code. Please try again.');
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) value = value.slice(-1);
    if (!/^\d*$/.test(value)) return;

    const newDigits = [...otpDigits];
    newDigits[index] = value;
    setOtpDigits(newDigits);
    setError('');

    // Auto-advance to next box
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Check if all 6 digits are entered
    const code = newDigits.join('');
    if (code.length === 6) {
      submitOtp(code);
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (!pastedData) return;

    const newDigits = [...otpDigits];
    for (let i = 0; i < pastedData.length; i++) {
      newDigits[i] = pastedData[i];
    }
    setOtpDigits(newDigits);

    if (pastedData.length === 6) {
      submitOtp(pastedData);
    } else {
      inputRefs.current[pastedData.length]?.focus();
    }
  };

  const submitOtp = async (codeToVerify) => {
    const code = codeToVerify || otpDigits.join('');
    if (code.length !== 6) {
      setError('Please enter all 6 digits of the verification code.');
      return;
    }
    setError('');
    setSuccess('');
    setLoading(true);

    const res = await verifyOtp(email, code);
    setLoading(false);

    if (res?.ok) {
      setSuccess('Access Granted! Redirecting...');
      if (onSuccess) onSuccess();
    } else {
      setError(res?.err || 'Invalid or expired verification code.');
      // Clear OTP on error
      setOtpDigits(['', '', '', '', '', '']);
      inputRefs.current[0]?.focus();
    }
  };

  const handleResend = async () => {
    setError('');
    setSuccess('');
    setLoading(true);
    const res = await sendOtp(email);
    setLoading(false);
    if (res?.ok) {
      setSuccess('A new code has been sent to your inbox!');
      setOtpDigits(['', '', '', '', '', '']);
      inputRefs.current[0]?.focus();
    } else {
      setError(res?.err || 'Failed to resend code.');
    }
  };

  return (
    <div style={styles.wrapper}>
      {error && <div style={styles.error}>{error}</div>}
      {success && <div style={styles.success}>{success}</div>}

      {mode === 'initial' ? (
        <>
          {/* Google OAuth Button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            style={styles.googleBtn}
            disabled={loading}
          >
            {loading ? (
              <span style={styles.spinner}></span>
            ) : (
              <>
                <svg style={{ width: '22px', height: '22px', marginRight: '12px' }} viewBox="0 0 24 24">
                  <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.8C6.2 7.1 8.9 5 12 5z"/>
                  <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.7-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z"/>
                  <path fill="#FBBC05" d="M5.3 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.6 7.4C.6 9.4 0 11.6 0 14c0 2.4.6 4.6 1.6 6.6l3.7-2.9z"/>
                  <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.1 0-5.8-2.1-6.7-5.2L1.6 15.9C3.5 19.7 7.4 23 12 23z"/>
                </svg>
                <span>Continue with Google</span>
              </>
            )}
          </button>

          <div style={styles.divider}>
            <span style={styles.dividerLine}></span>
            <span style={styles.dividerText}>OR SIGN IN WITH EMAIL</span>
            <span style={styles.dividerLine}></span>
          </div>

          {/* Email OTP Form */}
          <form onSubmit={handleSendOtp} style={{ width: '100%' }}>
            <div style={styles.inputGroup}>
              <input
                type="email"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
                disabled={loading}
                required
              />
            </div>
            <button
              type="submit"
              style={styles.submitBtn}
              disabled={loading || !email}
            >
              {loading ? <span style={styles.spinnerWhite}></span> : 'Send Verification Code →'}
            </button>
          </form>
        </>
      ) : (
        /* 6-Digit PIN Pad View */
        <div style={styles.otpContainer}>
          <p style={styles.otpInstruction}>
            Check your inbox! Enter the 6-digit security code sent to <strong>{email}</strong>
          </p>

          <div style={styles.pinGrid} onPaste={handlePaste}>
            {otpDigits.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                style={styles.pinBox}
                disabled={loading}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => submitOtp()}
            style={styles.submitBtn}
            disabled={loading || otpDigits.join('').length !== 6}
          >
            {loading ? <span style={styles.spinnerWhite}></span> : 'Verify & Access Portal'}
          </button>

          <div style={styles.otpActions}>
            <button
              type="button"
              onClick={() => { setMode('initial'); setError(''); setSuccess(''); }}
              style={styles.linkBtn}
            >
              ← Back to login options
            </button>
            <button
              type="button"
              onClick={handleResend}
              style={styles.linkBtn}
              disabled={loading}
            >
              Resend Code
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  error: {
    width: '100%',
    backgroundColor: 'rgba(229, 62, 62, 0.15)',
    color: '#fc8181',
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid rgba(229, 62, 62, 0.3)',
    marginBottom: '1.2rem',
    fontSize: '0.9rem',
    textAlign: 'center',
  },
  success: {
    width: '100%',
    backgroundColor: 'rgba(72, 187, 120, 0.15)',
    color: '#68d391',
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid rgba(72, 187, 120, 0.3)',
    marginBottom: '1.2rem',
    fontSize: '0.9rem',
    textAlign: 'center',
  },
  googleBtn: {
    width: '100%',
    padding: '1rem 1.2rem',
    backgroundColor: '#ffffff',
    color: '#3c4043',
    border: '1px solid #dadce0',
    borderRadius: '14px',
    fontSize: '1.05rem',
    fontWeight: '700',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    margin: '1.75rem 0',
  },
  dividerLine: {
    flex: 1,
    height: '1px',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  dividerText: {
    padding: '0 1rem',
    fontSize: '0.75rem',
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.5)',
    letterSpacing: '1px',
  },
  inputGroup: {
    width: '100%',
    marginBottom: '1rem',
  },
  input: {
    width: '100%',
    padding: '1rem 1.2rem',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '14px',
    color: '#ffffff',
    fontSize: '1rem',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  },
  submitBtn: {
    width: '100%',
    padding: '1rem 1.2rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#ffffff',
    border: 'none',
    borderRadius: '14px',
    fontSize: '1.05rem',
    fontWeight: '700',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(118, 75, 162, 0.3)',
    transition: 'opacity 0.2s, transform 0.2s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  otpContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  otpInstruction: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '0.95rem',
    marginBottom: '1.5rem',
    lineHeight: '1.5',
    textAlign: 'center',
  },
  pinGrid: {
    display: 'flex',
    gap: '0.6rem',
    justifyContent: 'center',
    marginBottom: '1.75rem',
    width: '100%',
  },
  pinBox: {
    width: '46px',
    height: '56px',
    textAlign: 'center',
    fontSize: '1.4rem',
    fontWeight: 'bold',
    fontFamily: 'monospace',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '12px',
    color: '#00ffcc',
    outline: 'none',
    transition: 'all 0.2s',
  },
  otpActions: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '1.5rem',
  },
  linkBtn: {
    background: 'none',
    border: 'none',
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '0.85rem',
    cursor: 'pointer',
    textDecoration: 'underline',
    padding: '0.4rem',
  },
  spinner: {
    width: '22px',
    height: '22px',
    border: '3px solid rgba(0,0,0,0.1)',
    borderTop: '3px solid #4285F4',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    display: 'inline-block',
  },
  spinnerWhite: {
    width: '22px',
    height: '22px',
    border: '3px solid rgba(255,255,255,0.2)',
    borderTop: '3px solid #ffffff',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    display: 'inline-block',
  }
};
