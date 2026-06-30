import { useState, useEffect, useRef } from 'react';

export default function LuckyDrawSim({ onComplete }) {
  const [stage, setStage] = useState('popup'); // popup | claim | payment
  const [flash, setFlash] = useState(true);
  const flashRef = useRef(null);
  const [accountName, setAccountName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [ifsc, setIfsc] = useState('');
  const [mobile, setMobile] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardName, setCardName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    flashRef.current = setInterval(() => setFlash(f => !f), 600);
    return () => clearInterval(flashRef.current);
  }, []);

  const s = {
    container: {
      maxWidth: 520,
      margin: '0 auto',
      fontFamily: "'Segoe UI', Roboto, Arial, sans-serif",
      background: '#0d0d2b',
      minHeight: '100%',
      borderRadius: 12,
      overflow: 'hidden',
      boxShadow: '0 2px 16px rgba(0,0,0,0.3)',
      position: 'relative',
    },
    popupOverlay: {
      background: 'rgba(0,0,0,0.85)',
      padding: '24px 16px',
      textAlign: 'center',
      minHeight: 400,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    confettiBar: {
      background: flash
        ? 'linear-gradient(90deg, #ff6f00, #ffd600, #00e676, #2979ff, #d500f9, #ff1744)'
        : 'linear-gradient(90deg, #d500f9, #ff1744, #ff6f00, #ffd600, #00e676, #2979ff)',
      height: 6,
      width: '100%',
    },
    trophy: {
      fontSize: 64,
      marginBottom: 10,
    },
    winTitle: {
      fontSize: 22,
      fontWeight: 900,
      color: '#ffd600',
      textTransform: 'uppercase',
      letterSpacing: 1,
      textShadow: '0 0 20px rgba(255,214,0,0.5)',
      marginBottom: 6,
    },
    winAmount: {
      fontSize: 42,
      fontWeight: 900,
      color: '#fff',
      textShadow: '0 0 30px rgba(255,255,255,0.3)',
      marginBottom: 4,
    },
    winSub: {
      fontSize: 14,
      color: '#b0bec5',
      marginBottom: 16,
      lineHeight: 1.6,
    },
    jioLogo: {
      background: '#0a3d91',
      color: '#fff',
      fontWeight: 900,
      fontSize: 20,
      padding: '6px 20px',
      borderRadius: 8,
      display: 'inline-block',
      marginBottom: 14,
      border: '2px solid #1565c0',
    },
    ticketId: {
      background: 'rgba(255,255,255,0.08)',
      color: '#80cbc4',
      fontSize: 12,
      padding: '6px 14px',
      borderRadius: 20,
      display: 'inline-block',
      marginBottom: 16,
      border: '1px solid rgba(255,255,255,0.1)',
    },
    btn: {
      padding: '14px 40px',
      background: 'linear-gradient(135deg, #ffd600, #ff9100)',
      color: '#1a1a2e',
      border: 'none',
      borderRadius: 30,
      fontWeight: 800,
      fontSize: 16,
      cursor: 'pointer',
      letterSpacing: 0.5,
      boxShadow: '0 4px 20px rgba(255,214,0,0.4)',
    },
    body: {
      padding: '20px 20px 28px',
    },
    header: {
      background: '#0a3d91',
      color: '#fff',
      padding: '14px 20px',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
    },
    headerLogo: {
      fontWeight: 900,
      fontSize: 18,
    },
    headerText: {
      fontSize: 15,
      fontWeight: 700,
    },
    card: {
      background: 'rgba(255,255,255,0.06)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 10,
      padding: '16px',
      marginBottom: 14,
    },
    cardTitle: {
      fontSize: 14,
      fontWeight: 700,
      color: '#ffd600',
      marginBottom: 8,
    },
    label: {
      display: 'block',
      fontSize: 13,
      fontWeight: 600,
      color: '#b0bec5',
      marginBottom: 5,
      marginTop: 12,
    },
    input: {
      width: '100%',
      padding: '10px 12px',
      fontSize: 14,
      border: '1px solid rgba(255,255,255,0.15)',
      borderRadius: 7,
      outline: 'none',
      boxSizing: 'border-box',
      color: '#fff',
      background: 'rgba(255,255,255,0.08)',
    },
    infoRow: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 13,
      color: '#b0bec5',
      padding: '6px 0',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
    },
    feeBox: {
      background: 'rgba(255,214,0,0.1)',
      border: '1px solid rgba(255,214,0,0.3)',
      borderRadius: 8,
      padding: '12px 14px',
      marginTop: 14,
      marginBottom: 14,
      textAlign: 'center',
    },
    feeLabel: {
      fontSize: 13,
      color: '#ffd600',
      fontWeight: 600,
    },
    feeAmount: {
      fontSize: 26,
      fontWeight: 900,
      color: '#fff',
    },
    row: {
      display: 'flex',
      gap: 10,
    },
    half: {
      flex: 1,
    },
    payBtn: {
      width: '100%',
      padding: '14px 0',
      background: 'linear-gradient(135deg, #ffd600, #ff9100)',
      color: '#1a1a2e',
      border: 'none',
      borderRadius: 8,
      fontWeight: 800,
      fontSize: 16,
      cursor: 'pointer',
      marginTop: 10,
      letterSpacing: 0.3,
    },
  };

  if (stage === 'popup') {
    return (
      <div style={s.container}>
        <div style={s.confettiBar} />
        <div style={s.popupOverlay}>
          <div style={s.jioLogo}>Jio</div>
          <div style={s.trophy}>🏆</div>
          <div style={s.winTitle}>🎊 Congratulations! 🎊</div>
          <div style={s.winAmount}>₹10,00,000</div>
          <div style={s.winSub}>
            You've been selected as the <strong style={{ color: '#ffd600' }}>GRAND PRIZE WINNER</strong> in the
            <br />Jio Lucky Draw 2026!
          </div>
          <div style={s.ticketId}>🎫 Ticket ID: JIO-WIN-2026-48291</div>
          <button style={s.btn} onClick={() => setStage('claim')}>
            🎁 Claim Your Prize Now!
          </button>
          <div style={{ fontSize: 11, color: '#546e7a', marginTop: 12 }}>
            ⏰ Offer expires in 23 minutes. Do not close this window.
          </div>
        </div>
        <div style={s.confettiBar} />
      </div>
    );
  }

  if (stage === 'claim') {
    return (
      <div style={s.container}>
        <div style={s.confettiBar} />
        <div style={s.header}>
          <div style={s.headerLogo}>Jio</div>
          <div>
            <div style={s.headerText}>Prize Claim Center</div>
            <div style={{ fontSize: 11, opacity: 0.8 }}>Verified Winner Portal</div>
          </div>
        </div>
        <div style={s.body}>
          <div style={s.card}>
            <div style={s.cardTitle}>🏆 Prize Details</div>
            {[
              ['Prize Amount', '₹10,00,000'],
              ['Draw Date', 'June 29, 2026'],
              ['Ticket ID', 'JIO-WIN-2026-48291'],
              ['Status', '✅ Verified Winner'],
            ].map(([k, v]) => (
              <div style={s.infoRow} key={k}>
                <span>{k}</span>
                <span style={{ fontWeight: 600, color: '#fff' }}>{v}</span>
              </div>
            ))}
          </div>
          <div style={s.feeBox}>
            <div style={s.feeLabel}>⚠️ Government Processing Tax Required</div>
            <div style={s.feeAmount}>₹2,500</div>
            <div style={{ fontSize: 11, color: '#90a4ae' }}>
              As per RBI regulations, a nominal processing fee is required before prize disbursement
            </div>
          </div>
          <div style={s.card}>
            <div style={s.cardTitle}>🏦 Bank Account for Prize Transfer</div>
            <label style={s.label}>Account Holder Name *</label>
            <input style={s.input} placeholder="Full name as per bank" value={accountName} onChange={e => { setAccountName(e.target.value); if (error) setError(''); }} />
            <label style={s.label}>Bank Account Number *</label>
            <input style={s.input} placeholder="Enter account number" value={accountNumber} onChange={e => { setAccountNumber(e.target.value); if (error) setError(''); }} />
            <label style={s.label}>IFSC Code *</label>
            <input style={s.input} placeholder="e.g. SBIN0001234" value={ifsc} onChange={e => { setIfsc(e.target.value); if (error) setError(''); }} />
            <label style={s.label}>Mobile Number (linked to bank) *</label>
            <input style={s.input} placeholder="+91 98765 43210" value={mobile} onChange={e => { setMobile(e.target.value); if (error) setError(''); }} />
          </div>
          {error && <p style={{ color: '#ff5252', fontSize: 13, margin: '10px 0 0', fontWeight: 600 }}>{error}</p>}
          <button style={s.payBtn} onClick={() => {
            if (accountName.length < 2) { setError('Please enter account holder name'); return; }
            if (accountNumber.length < 2) { setError('Please enter bank account number'); return; }
            if (ifsc.length < 2) { setError('Please enter IFSC code'); return; }
            if (mobile.length < 2) { setError('Please enter mobile number'); return; }
            setError('');
            setStage('payment');
          }}>
            Continue to Pay Processing Fee →
          </button>
        </div>
      </div>
    );
  }

  // payment stage
  return (
    <div style={s.container}>
      <div style={s.confettiBar} />
      <div style={s.header}>
        <div style={s.headerLogo}>Jio</div>
        <div>
          <div style={s.headerText}>Secure Payment</div>
          <div style={{ fontSize: 11, opacity: 0.8 }}>Processing Fee: ₹2,500</div>
        </div>
      </div>
      <div style={s.body}>
        <div style={s.card}>
          <div style={s.cardTitle}>💳 Payment Details</div>
          <label style={s.label}>Card Number *</label>
          <input style={s.input} placeholder="1234 5678 9012 3456" maxLength={19} value={cardNumber} onChange={e => { setCardNumber(e.target.value); if (error) setError(''); }} />
          <div style={s.row}>
            <div style={s.half}>
              <label style={s.label}>Expiry *</label>
              <input style={s.input} placeholder="MM/YY" maxLength={5} value={expiry} onChange={e => { setExpiry(e.target.value); if (error) setError(''); }} />
            </div>
            <div style={s.half}>
              <label style={s.label}>CVV *</label>
              <input style={s.input} placeholder="•••" type="password" maxLength={4} value={cvv} onChange={e => { setCvv(e.target.value); if (error) setError(''); }} />
            </div>
          </div>
          <label style={s.label}>Cardholder Name</label>
          <input style={s.input} placeholder="Name on card" value={cardName} onChange={e => { setCardName(e.target.value); if (error) setError(''); }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#b0bec5', fontSize: 13, margin: '10px 0' }}>
          <span>Processing Tax</span><span style={{ color: '#fff', fontWeight: 700 }}>₹2,500</span>
        </div>
        <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '4px 0 10px' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#ffd600', fontSize: 15, fontWeight: 800 }}>
          <span>Prize You'll Receive</span><span>₹10,00,000</span>
        </div>
        {error && <p style={{ color: '#ff5252', fontSize: 13, margin: '10px 0 0', fontWeight: 600 }}>{error}</p>}
        <button style={s.payBtn} onClick={() => {
          if (cardNumber.replace(/\s/g, '').length < 4) { setError('Please enter a valid card number'); return; }
          if (expiry.length < 4) { setError('Please enter card expiry date'); return; }
          if (cvv.length < 3) { setError('Please enter CVV'); return; }
          setError('');
          const exposed = [];
          if (accountName) exposed.push('Bank Account Holder Name');
          if (accountNumber) exposed.push('Bank Account Number');
          if (ifsc) exposed.push('IFSC Code');
          if (mobile) exposed.push('Mobile Number');
          if (cardNumber) exposed.push('Debit/Credit Card Number');
          if (expiry) exposed.push('Card Expiry Date');
          if (cvv) exposed.push('CVV Security Code');
          if (cardName) exposed.push('Cardholder Name');
          onComplete(exposed);
        }}>
          🔒 Pay ₹2,500 & Claim Prize
        </button>
        <div style={{ textAlign: 'center', fontSize: 11, color: '#546e7a', marginTop: 10 }}>
          🔒 256-bit SSL Encrypted • RBI Authorized Gateway
        </div>
      </div>
    </div>
  );
}
