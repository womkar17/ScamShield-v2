import { useContext, useState, useRef, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function LoginModal() {
  const { showLoginModal, closeLogin, sendOtp, verifyOtp } = useContext(AuthContext);
  
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  
  const otpRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];

  // Reset state when modal opens/closes
  useEffect(() => {
    if (showLoginModal) {
      setStep(1);
      setEmail('');
      setOtp(['', '', '', '', '', '']);
      setError('');
      setSuccess(false);
    }
  }, [showLoginModal]);

  if (!showLoginModal) return null;

  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email.');
      return;
    }
    setLoading(true);
    setError('');
    
    const res = await sendOtp(email);
    setLoading(false);
    
    if (res.ok) {
      setStep(2);
      // Auto-focus first OTP input after a tiny delay to allow render
      setTimeout(() => otpRefs[0].current?.focus(), 100);
    } else {
      setError(res.err || 'Failed to send code. Please try again.');
    }
  };

  const handleOtpChange = async (index, value) => {
    if (value.length > 1) {
      // Handle paste
      const pastedData = value.replace(/\D/g, '').slice(0, 6).split('');
      const newOtp = [...otp];
      for (let i = 0; i < pastedData.length; i++) {
        if (index + i < 6) newOtp[index + i] = pastedData[i];
      }
      setOtp(newOtp);
      // Focus the next empty input, or the last one
      const nextEmpty = newOtp.findIndex(val => val === '');
      if (nextEmpty !== -1) otpRefs[nextEmpty].current?.focus();
      else otpRefs[5].current?.focus();
      return;
    }

    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-advance focus
    if (value && index < 5) {
      otpRefs[index + 1].current?.focus();
    }

    // Auto-verify when all 6 digits are entered
    if (newOtp.every(digit => digit !== '')) {
      setLoading(true);
      setError('');
      const code = newOtp.join('');
      const res = await verifyOtp(email, code);
      setLoading(false);
      
      if (res.ok) {
        setSuccess(true);
        setTimeout(() => closeLogin(), 1500);
      } else {
        setError(res.err || 'Invalid code.');
      }
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs[index - 1].current?.focus();
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={{...styles.card, ...(success ? styles.cardSuccess : {})}}>
        <button style={styles.closeButton} onClick={closeLogin}>✕</button>
        
        <div style={styles.header}>
          <div style={styles.icon}>🛡️</div>
          <h2 style={styles.title}>Secure Access</h2>
          <p style={styles.subtitle}>
            {step === 1 ? 'Authenticate to sync your progress.' : `Code sent to ${email}`}
          </p>
        </div>

        {error && <div style={styles.error}>{error}</div>}

        {step === 1 ? (
          <form onSubmit={handleSendOtp} style={styles.form}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              disabled={loading}
              autoFocus
            />
            <button type="submit" style={styles.submitBtn} disabled={loading}>
              {loading ? <span style={styles.spinner}></span> : 'Send Verification Code'}
            </button>
          </form>
        ) : (
          <div style={styles.form}>
            {success ? (
              <div style={styles.successMessage}>
                ✓ Access Granted
              </div>
            ) : (
              <>
                <div style={styles.otpContainer}>
                  {otp.map((digit, idx) => (
                    <input
                      key={idx}
                      ref={otpRefs[idx]}
                      type="text"
                      inputMode="numeric"
                      maxLength={6}
                      value={digit}
                      onChange={(e) => handleOtpChange(idx, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                      style={styles.otpInput}
                      disabled={loading}
                    />
                  ))}
                </div>
                {loading && <div style={{textAlign: 'center', marginTop: '1rem'}}><span style={styles.spinner}></span></div>}
                
                <div style={styles.actions}>
                  <button type="button" onClick={() => setStep(1)} style={styles.linkBtn} disabled={loading}>
                    ← Back
                  </button>
                  <button type="button" onClick={handleSendOtp} style={styles.linkBtn} disabled={loading}>
                    Resend Code
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    backdropFilter: 'blur(10px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    padding: '1rem',
  },
  card: {
    backgroundColor: 'rgba(20, 20, 30, 0.7)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '24px',
    padding: '2.5rem 2rem',
    width: '100%',
    maxWidth: '420px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(102, 126, 234, 0.1)',
    position: 'relative',
    transition: 'all 0.3s ease',
  },
  cardSuccess: {
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(72, 187, 120, 0.3)',
    border: '1px solid rgba(72, 187, 120, 0.5)',
  },
  closeButton: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    background: 'none',
    border: 'none',
    color: 'var(--text-muted)',
    fontSize: '1.2rem',
    cursor: 'pointer',
    padding: '0.5rem',
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  icon: {
    fontSize: '3rem',
    marginBottom: '1rem',
    animation: 'pulse 2s infinite',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'var(--text)',
    margin: '0 0 0.5rem 0',
  },
  subtitle: {
    color: 'var(--text-muted)',
    fontSize: '0.9rem',
    margin: 0,
  },
  error: {
    backgroundColor: 'rgba(229, 62, 62, 0.1)',
    color: '#fc8181',
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid rgba(229, 62, 62, 0.2)',
    marginBottom: '1.5rem',
    fontSize: '0.85rem',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    width: '100%',
    padding: '1rem 1.2rem',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    color: 'white',
    fontSize: '1rem',
    transition: 'all 0.3s',
    outline: 'none',
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'transform 0.2s, opacity 0.2s',
  },
  otpContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '0.5rem',
  },
  otpInput: {
    width: '3rem',
    height: '3.5rem',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    color: 'white',
    fontSize: '1.5rem',
    textAlign: 'center',
    fontWeight: 'bold',
    outline: 'none',
    transition: 'all 0.2s',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '1.5rem',
  },
  linkBtn: {
    background: 'none',
    border: 'none',
    color: 'var(--blue)',
    cursor: 'pointer',
    fontSize: '0.9rem',
    padding: '0.5rem',
  },
  spinner: {
    width: '20px',
    height: '20px',
    border: '2px solid rgba(255,255,255,0.3)',
    borderTop: '2px solid white',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    display: 'inline-block',
  },
  successMessage: {
    textAlign: 'center',
    color: '#48bb78',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    padding: '2rem 0',
  }
};
