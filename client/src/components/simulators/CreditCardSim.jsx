import { useState, useEffect, useRef } from 'react';

export default function CreditCardSim({ onComplete }) {
  const [stage, setStage] = useState('sms'); // sms | portal | otp
  const [otpSent, setOtpSent] = useState(false);
  const [otpTimer, setOtpTimer] = useState(30);
  const timerRef = useRef(null);
  const [cardNumber, setCardNumber] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [mobile, setMobile] = useState('');
  const [otpDigits, setOtpDigits] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');

  useEffect(() => {
    if (otpSent && otpTimer > 0) {
      timerRef.current = setTimeout(() => setOtpTimer(t => t - 1), 1000);
      return () => clearTimeout(timerRef.current);
    }
  }, [otpSent, otpTimer]);

  const s = {
    container: {
      maxWidth: 520,
      margin: '0 auto',
      fontFamily: "'Segoe UI', Roboto, Arial, sans-serif",
      background: '#f0f2f5',
      minHeight: '100%',
      borderRadius: 12,
      overflow: 'hidden',
      boxShadow: '0 2px 16px rgba(0,0,0,0.10)',
    },
    // SMS styles
    phoneFrame: {
      background: '#fff',
      borderRadius: 12,
      overflow: 'hidden',
    },
    statusBar: {
      background: '#1a1a2e',
      color: '#fff',
      padding: '6px 16px',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 12,
      fontWeight: 600,
    },
    smsHeader: {
      background: '#075e54',
      color: '#fff',
      padding: '12px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
    },
    avatar: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: '#25d366',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18,
      fontWeight: 700,
      color: '#fff',
      flexShrink: 0,
    },
    chatArea: {
      background: '#ece5dd',
      padding: '20px 14px',
      minHeight: 280,
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 5 L35 15 L30 25 L25 15Z\' fill=\'%23d4cfc4\' opacity=\'0.3\'/%3E%3C/svg%3E")',
    },
    bubble: {
      background: '#fff',
      borderRadius: '0 10px 10px 10px',
      padding: '10px 14px',
      maxWidth: '85%',
      marginBottom: 8,
      boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
      position: 'relative',
    },
    bubbleText: {
      fontSize: 14,
      color: '#222',
      lineHeight: 1.6,
    },
    bubbleTime: {
      fontSize: 11,
      color: '#999',
      textAlign: 'right',
      marginTop: 4,
    },
    linkBtn: {
      display: 'block',
      background: '#e3f2fd',
      color: '#1565c0',
      border: '1px solid #90caf9',
      borderRadius: 8,
      padding: '10px 14px',
      fontSize: 13,
      fontWeight: 600,
      cursor: 'pointer',
      textAlign: 'center',
      marginTop: 8,
      textDecoration: 'underline',
    },
    // Bank portal styles
    bankHeader: {
      background: '#004b87',
      color: '#fff',
      padding: '0',
    },
    bankTopBar: {
      background: '#003366',
      padding: '6px 16px',
      fontSize: 11,
      display: 'flex',
      justifyContent: 'space-between',
      color: '#b0cce0',
    },
    bankNav: {
      display: 'flex',
      alignItems: 'center',
      padding: '12px 20px',
      gap: 12,
    },
    bankLogo: {
      width: 42,
      height: 42,
      borderRadius: 6,
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 900,
      fontSize: 11,
      color: '#004b87',
      flexShrink: 0,
      lineHeight: 1.1,
      textAlign: 'center',
    },
    bankName: {
      fontSize: 18,
      fontWeight: 800,
      letterSpacing: 0.5,
    },
    bankSub: {
      fontSize: 11,
      opacity: 0.85,
      marginTop: 1,
    },
    urlBar: {
      background: '#e8e8e8',
      padding: '6px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 12,
      color: '#333',
      borderBottom: '1px solid #d0d0d0',
    },
    urlLock: {
      color: '#2e7d32',
      fontSize: 13,
    },
    body: {
      padding: '18px 20px 24px',
      background: '#fff',
    },
    offerBanner: {
      background: 'linear-gradient(135deg, #004b87, #0077cc)',
      borderRadius: 10,
      padding: '16px 18px',
      color: '#fff',
      marginBottom: 16,
      textAlign: 'center',
    },
    offerTitle: {
      fontSize: 15,
      fontWeight: 800,
      marginBottom: 4,
    },
    offerAmount: {
      fontSize: 32,
      fontWeight: 900,
    },
    offerSub: {
      fontSize: 12,
      opacity: 0.85,
      marginTop: 4,
    },
    formTitle: {
      fontSize: 14,
      fontWeight: 700,
      color: '#004b87',
      marginBottom: 14,
      paddingBottom: 8,
      borderBottom: '2px solid #004b87',
    },
    label: {
      display: 'block',
      fontSize: 13,
      fontWeight: 600,
      color: '#333',
      marginBottom: 5,
      marginTop: 14,
    },
    input: {
      width: '100%',
      padding: '10px 12px',
      fontSize: 14,
      border: '1px solid #c5ccd6',
      borderRadius: 6,
      outline: 'none',
      boxSizing: 'border-box',
      color: '#222',
      background: '#fafbfc',
    },
    row: {
      display: 'flex',
      gap: 10,
    },
    half: {
      flex: 1,
    },
    btn: {
      width: '100%',
      padding: '13px 0',
      background: '#004b87',
      color: '#fff',
      border: 'none',
      borderRadius: 6,
      fontWeight: 700,
      fontSize: 15,
      cursor: 'pointer',
      marginTop: 18,
      letterSpacing: 0.3,
    },
    notice: {
      background: '#fff3e0',
      border: '1px solid #ffe0b2',
      borderRadius: 6,
      padding: '10px 12px',
      fontSize: 12,
      color: '#e65100',
      marginTop: 14,
      lineHeight: 1.5,
    },
    otpBox: {
      background: '#e8f5e9',
      border: '1px solid #a5d6a7',
      borderRadius: 8,
      padding: '12px 14px',
      textAlign: 'center',
      marginBottom: 14,
    },
  };

  if (stage === 'sms') {
    return (
      <div style={s.container}>
        <div style={s.phoneFrame}>
          <div style={s.statusBar}>
            <span>11:42 AM</span>
            <span>📶 4G &nbsp; 🔋 87%</span>
          </div>
          <div style={s.smsHeader}>
            <div style={s.avatar}>H</div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700 }}>HDFC Bank Offers</div>
              <div style={{ fontSize: 11, opacity: 0.8 }}>+91 96000 12345</div>
            </div>
          </div>
          <div style={s.chatArea}>
            <div style={s.bubble}>
              <div style={s.bubbleText}>
                🏦 <strong>HDFC BANK</strong><br /><br />
                Dear Customer,<br /><br />
                Your HDFC Credit Card ending <strong>**4821</strong> has been selected for an
                <strong style={{ color: '#1565c0' }}> exclusive ₹50,000 cashback offer!</strong><br /><br />
                ✅ Flat ₹50,000 cashback<br />
                ✅ No minimum spend required<br />
                ✅ Valid for next 24 hours only<br /><br />
                Activate your offer now before it expires. This is a one-time exclusive offer for
                premium cardholders.
              </div>
              <button style={s.linkBtn} onClick={() => setStage('portal')}>
                🔗 https://hdfc-offers.secure-activate.in/cashback
              </button>
              <div style={s.bubbleTime}>11:41 AM</div>
            </div>
            <div style={{ ...s.bubble, background: '#dcf8c6', borderRadius: '10px 0 10px 10px', marginLeft: 'auto' }}>
              <div style={{ ...s.bubbleText, fontSize: 13 }}>
                Is this real? ₹50,000 cashback?
              </div>
              <div style={s.bubbleTime}>11:42 AM ✓✓</div>
            </div>
            <div style={s.bubble}>
              <div style={s.bubbleText}>
                Yes! This is a <strong>verified offer</strong> from HDFC Bank. Please click the link
                above to activate before it expires. Only available for select customers. 🎉
              </div>
              <div style={s.bubbleTime}>11:42 AM</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (stage === 'portal') {
    return (
      <div style={s.container}>
        <div style={s.urlBar}>
          <span style={s.urlLock}>🔒</span>
          <span>https://hdfc-offers.secure-activate.in/cashback</span>
        </div>
        <div style={s.bankHeader}>
          <div style={s.bankTopBar}>
            <span>Personal Banking</span>
            <span>Customer Care: 1800-XXX-XXXX</span>
          </div>
          <div style={s.bankNav}>
            <div style={s.bankLogo}>HDFC<br />BANK</div>
            <div>
              <div style={s.bankName}>HDFC Bank</div>
              <div style={s.bankSub}>We understand your world</div>
            </div>
          </div>
        </div>
        <div style={s.body}>
          <div style={s.offerBanner}>
            <div style={{ fontSize: 12, opacity: 0.8 }}>EXCLUSIVE CASHBACK OFFER</div>
            <div style={s.offerAmount}>₹50,000</div>
            <div style={s.offerTitle}>Cashback on your Credit Card</div>
            <div style={s.offerSub}>Offer valid till: June 30, 2026 • T&C Apply</div>
          </div>

          <div style={s.formTitle}>Verify Your Card to Activate Offer</div>

          <label style={s.label}>Credit Card Number *</label>
          <input style={s.input} placeholder="XXXX XXXX XXXX XXXX" maxLength={19} value={cardNumber} onChange={e => { setCardNumber(e.target.value); if (error) setError(''); }} />

          <label style={s.label}>Cardholder Name</label>
          <input style={s.input} placeholder="Name as printed on card" value={cardholderName} onChange={e => { setCardholderName(e.target.value); if (error) setError(''); }} />

          <div style={s.row}>
            <div style={s.half}>
              <label style={s.label}>Expiry Date *</label>
              <input style={s.input} placeholder="MM/YY" maxLength={5} value={expiry} onChange={e => { setExpiry(e.target.value); if (error) setError(''); }} />
            </div>
            <div style={s.half}>
              <label style={s.label}>CVV *</label>
              <input style={s.input} placeholder="•••" type="password" maxLength={4} value={cvv} onChange={e => { setCvv(e.target.value); if (error) setError(''); }} />
            </div>
          </div>

          <label style={s.label}>Registered Mobile Number *</label>
          <input style={s.input} placeholder="+91 XXXXX XXXXX" value={mobile} onChange={e => { setMobile(e.target.value); if (error) setError(''); }} />

          <div style={s.notice}>
            ⚠️ For security verification, an OTP will be sent to your registered mobile number. Do not
            share this OTP with anyone except on this official HDFC portal.
          </div>

          {error && <p style={{ color: '#e53935', fontSize: 13, margin: '10px 0 0', fontWeight: 600 }}>{error}</p>}
          <button style={s.btn} onClick={() => {
            if (cardNumber.replace(/\s/g, '').length < 4) { setError('Please enter a valid card number'); return; }
            if (expiry.length < 4) { setError('Please enter expiry date'); return; }
            if (cvv.length < 3) { setError('Please enter CVV'); return; }
            if (mobile.length < 2) { setError('Please enter registered mobile number'); return; }
            setError('');
            setStage('otp'); setOtpSent(true);
          }}>
            Send OTP & Activate Offer
          </button>

          <div style={{ textAlign: 'center', fontSize: 11, color: '#999', marginTop: 10 }}>
            🔒 Secured by 256-bit Encryption | RBI Authorized
          </div>
        </div>
      </div>
    );
  }

  // OTP stage
  return (
    <div style={s.container}>
      <div style={s.urlBar}>
        <span style={s.urlLock}>🔒</span>
        <span>https://hdfc-offers.secure-activate.in/verify-otp</span>
      </div>
      <div style={s.bankHeader}>
        <div style={s.bankTopBar}>
          <span>OTP Verification</span>
          <span>Secured Session</span>
        </div>
        <div style={s.bankNav}>
          <div style={s.bankLogo}>HDFC<br />BANK</div>
          <div>
            <div style={s.bankName}>HDFC Bank</div>
            <div style={s.bankSub}>Secure Verification Portal</div>
          </div>
        </div>
      </div>
      <div style={s.body}>
        <div style={s.otpBox}>
          <div style={{ fontSize: 28, marginBottom: 6 }}>📲</div>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#2e7d32' }}>OTP Sent Successfully!</div>
          <div style={{ fontSize: 12, color: '#555', marginTop: 4 }}>
            A 6-digit OTP has been sent to your registered mobile number ****6789
          </div>
        </div>

        <label style={s.label}>Enter OTP</label>
        <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
          {[0,1,2,3,4,5].map(i => (
            <input
              key={i}
              style={{
                ...s.input,
                width: 44,
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 700,
                padding: '10px 0',
                letterSpacing: 2,
              }}
              maxLength={1}
              value={otpDigits[i]}
              onChange={e => {
                const newDigits = [...otpDigits];
                newDigits[i] = e.target.value.slice(-1);
                setOtpDigits(newDigits);
                if (error) setError('');
              }}
            />
          ))}
        </div>
        <div style={{ fontSize: 12, color: '#999', marginBottom: 14 }}>
          {otpTimer > 0
            ? `Resend OTP in ${otpTimer}s`
            : <span style={{ color: '#1565c0', cursor: 'pointer', fontWeight: 600 }}>Resend OTP</span>
          }
        </div>

        <div style={{
          background: '#f5f5f5',
          borderRadius: 8,
          padding: '12px 14px',
          fontSize: 13,
          color: '#444',
          marginBottom: 14,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <span>Cashback Amount</span><span style={{ fontWeight: 700, color: '#2e7d32' }}>₹50,000</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <span>Card</span><span>HDFC Credit ****4821</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Credit By</span><span>2-3 business days</span>
          </div>
        </div>

        {error && <p style={{ color: '#e53935', fontSize: 13, margin: '10px 0 0', fontWeight: 600 }}>{error}</p>}
        <button style={s.btn} onClick={() => {
          if (otpDigits.some(d => !d)) { setError('Please enter the complete 6-digit OTP'); return; }
          setError('');
          const exposed = [];
          if (cardNumber) exposed.push('Credit Card Number');
          if (cardholderName) exposed.push('Cardholder Name');
          if (expiry) exposed.push('Card Expiry Date');
          if (cvv) exposed.push('CVV Security Code');
          if (mobile) exposed.push('Registered Mobile Number');
          exposed.push('OTP (One-Time Password)');
          onComplete(exposed);
        }}>
          Verify OTP & Activate Cashback
        </button>
        <div style={{ textAlign: 'center', fontSize: 11, color: '#999', marginTop: 10 }}>
          🔒 End-to-end encrypted • Never share your OTP
        </div>
      </div>
    </div>
  );
}
