import { useState, useEffect, useRef } from 'react';

export default function RewardPointsSim({ onComplete }) {
  const [stage, setStage] = useState('notification'); // notification | portal | confirm
  const [expiryMinutes, setExpiryMinutes] = useState(58);
  const [expirySecs, setExpirySecs] = useState(42);
  const timerRef = useRef(null);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setExpirySecs(s => {
        if (s > 0) return s - 1;
        setExpiryMinutes(m => (m > 0 ? m - 1 : 0));
        return 59;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, []);

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
    // Phone notification frame
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
    notifArea: {
      background: '#f0f2f5',
      padding: '20px 14px',
      minHeight: 350,
    },
    notifCard: {
      background: '#fff',
      borderRadius: 12,
      padding: '14px 16px',
      marginBottom: 10,
      boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
      border: '1px solid #e0e0e0',
      cursor: 'pointer',
    },
    notifHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 8,
    },
    notifIcon: {
      width: 40,
      height: 40,
      borderRadius: 10,
      background: '#1a237e',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18,
      color: '#fff',
      fontWeight: 800,
      flexShrink: 0,
    },
    notifApp: {
      fontSize: 12,
      fontWeight: 700,
      color: '#1a237e',
    },
    notifTime: {
      fontSize: 11,
      color: '#999',
    },
    notifTitle: {
      fontSize: 14,
      fontWeight: 700,
      color: '#c62828',
      marginBottom: 4,
    },
    notifBody: {
      fontSize: 13,
      color: '#444',
      lineHeight: 1.5,
    },
    notifAction: {
      display: 'inline-block',
      background: '#1a237e',
      color: '#fff',
      fontSize: 12,
      fontWeight: 700,
      padding: '6px 16px',
      borderRadius: 6,
      marginTop: 8,
      cursor: 'pointer',
    },
    // Bank portal
    bankHeader: {
      background: '#1a237e',
      color: '#fff',
      padding: 0,
    },
    bankTopBar: {
      background: '#0d1557',
      padding: '6px 16px',
      fontSize: 11,
      display: 'flex',
      justifyContent: 'space-between',
      color: '#9fa8da',
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
      borderRadius: 50,
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 900,
      fontSize: 11,
      color: '#1a237e',
      flexShrink: 0,
      textAlign: 'center',
      lineHeight: 1.1,
    },
    bankName: {
      fontSize: 18,
      fontWeight: 800,
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
    body: {
      padding: '18px 20px 24px',
      background: '#fff',
    },
    alertBanner: {
      background: 'linear-gradient(135deg, #fbe9e7, #ffccbc)',
      border: '1px solid #ef9a9a',
      borderRadius: 10,
      padding: '14px 16px',
      marginBottom: 16,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
    },
    alertIcon: {
      fontSize: 32,
      flexShrink: 0,
    },
    alertText: {
      fontSize: 13,
      color: '#b71c1c',
      lineHeight: 1.5,
      fontWeight: 600,
    },
    pointsCard: {
      background: 'linear-gradient(135deg, #1a237e, #283593)',
      borderRadius: 12,
      padding: '20px 18px',
      color: '#fff',
      marginBottom: 16,
      textAlign: 'center',
    },
    pointsValue: {
      fontSize: 36,
      fontWeight: 900,
    },
    pointsLabel: {
      fontSize: 13,
      opacity: 0.85,
      marginTop: 2,
    },
    pointsWorth: {
      fontSize: 16,
      fontWeight: 700,
      color: '#ffd600',
      marginTop: 6,
    },
    timerBox: {
      display: 'flex',
      justifyContent: 'center',
      gap: 8,
      marginTop: 12,
    },
    timerDigit: {
      background: 'rgba(255,255,255,0.15)',
      padding: '6px 12px',
      borderRadius: 6,
      fontSize: 18,
      fontWeight: 800,
      fontFamily: 'monospace',
    },
    timerSep: {
      fontSize: 18,
      fontWeight: 800,
      lineHeight: '36px',
    },
    formCard: {
      background: '#f8f9fa',
      borderRadius: 10,
      padding: '16px 18px',
      border: '1px solid #e8e8e8',
      marginBottom: 14,
    },
    formTitle: {
      fontSize: 14,
      fontWeight: 700,
      color: '#1a237e',
      marginBottom: 14,
      paddingBottom: 8,
      borderBottom: '2px solid #1a237e',
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
      background: '#fff',
    },
    btn: {
      width: '100%',
      padding: '14px 0',
      background: '#1a237e',
      color: '#fff',
      border: 'none',
      borderRadius: 8,
      fontWeight: 700,
      fontSize: 15,
      cursor: 'pointer',
      marginTop: 14,
      letterSpacing: 0.3,
    },
    infoRow: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 13,
      color: '#555',
      padding: '7px 0',
      borderBottom: '1px solid #eee',
    },
  };

  if (stage === 'notification') {
    return (
      <div style={s.container}>
        <div style={s.phoneFrame}>
          <div style={s.statusBar}>
            <span>2:47 PM</span>
            <span>📶 5G &nbsp; 🔋 64%</span>
          </div>
          <div style={s.notifArea}>
            <div style={{ fontSize: 13, color: '#888', marginBottom: 12, fontWeight: 600 }}>
              Notifications — Today
            </div>
            <div style={s.notifCard} onClick={() => setStage('portal')}>
              <div style={s.notifHeader}>
                <div style={s.notifIcon}>SBI</div>
                <div style={{ flex: 1 }}>
                  <div style={s.notifApp}>SBI Rewardz</div>
                  <div style={s.notifTime}>Just now</div>
                </div>
                <span style={{ fontSize: 10, background: '#c62828', color: '#fff', padding: '2px 8px', borderRadius: 10, fontWeight: 700 }}>URGENT</span>
              </div>
              <div style={s.notifTitle}>
                ⚠️ 15,000 Reward Points Expiring in 24 Hours!
              </div>
              <div style={s.notifBody}>
                Your SBI Reward Points worth <strong>₹7,500</strong> are expiring tomorrow.
                Redeem them now before they are forfeited permanently. Tap to redeem →
              </div>
              <div style={s.notifAction}>Redeem Now →</div>
            </div>

            <div style={{ ...s.notifCard, opacity: 0.5 }}>
              <div style={s.notifHeader}>
                <div style={{ ...s.notifIcon, background: '#1565c0', fontSize: 14 }}>📧</div>
                <div>
                  <div style={{ ...s.notifApp, color: '#1565c0' }}>Gmail</div>
                  <div style={s.notifTime}>1 hour ago</div>
                </div>
              </div>
              <div style={{ fontSize: 13, color: '#555' }}>
                <strong>Amazon</strong> — Your order has been delivered...
              </div>
            </div>

            <div style={{ ...s.notifCard, opacity: 0.4 }}>
              <div style={s.notifHeader}>
                <div style={{ ...s.notifIcon, background: '#388e3c', fontSize: 14 }}>💬</div>
                <div>
                  <div style={{ ...s.notifApp, color: '#388e3c' }}>WhatsApp</div>
                  <div style={s.notifTime}>2 hours ago</div>
                </div>
              </div>
              <div style={{ fontSize: 13, color: '#555' }}>
                <strong>Mom</strong> — Call me when you're free...
              </div>
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
          <span style={{ color: '#2e7d32', fontSize: 13 }}>🔒</span>
          <span>https://sbi-rewardz.secure-redeem.in/points</span>
        </div>
        <div style={s.bankHeader}>
          <div style={s.bankTopBar}>
            <span>SBI Rewards Portal</span>
            <span>Session: Secure</span>
          </div>
          <div style={s.bankNav}>
            <div style={s.bankLogo}>SBI</div>
            <div>
              <div style={s.bankName}>SBI Rewardz</div>
              <div style={s.bankSub}>State Bank of India — Rewards Program</div>
            </div>
          </div>
        </div>
        <div style={s.body}>
          <div style={s.alertBanner}>
            <div style={s.alertIcon}>⚠️</div>
            <div style={s.alertText}>
              Your reward points will expire permanently in less than 24 hours.
              Redeem now or lose ₹7,500 worth of rewards!
            </div>
          </div>

          <div style={s.pointsCard}>
            <div style={{ fontSize: 12, opacity: 0.7 }}>Available Reward Points</div>
            <div style={s.pointsValue}>15,000</div>
            <div style={s.pointsLabel}>Points Balance</div>
            <div style={s.pointsWorth}>Worth ₹7,500</div>
            <div style={{ fontSize: 11, opacity: 0.6, marginTop: 8 }}>⏰ Expires in:</div>
            <div style={s.timerBox}>
              <span style={s.timerDigit}>23</span>
              <span style={s.timerSep}>:</span>
              <span style={s.timerDigit}>{String(expiryMinutes).padStart(2, '0')}</span>
              <span style={s.timerSep}>:</span>
              <span style={s.timerDigit}>{String(expirySecs).padStart(2, '0')}</span>
            </div>
          </div>

          <div style={{ background: '#e8f5e9', borderRadius: 8, padding: '10px 14px', marginBottom: 16, fontSize: 12, color: '#2e7d32', lineHeight: 1.6 }}>
            <strong>How to redeem:</strong><br />
            1. Login with your SBI Net Banking credentials<br />
            2. Points will be credited as cashback to your account<br />
            3. Amount reflects within 24 hours
          </div>

          <div style={s.formCard}>
            <div style={s.formTitle}>🔐 Login to SBI Net Banking</div>
            <label style={s.label}>User ID / Username *</label>
            <input style={s.input} placeholder="Enter your SBI Net Banking User ID" value={userId} onChange={e => { setUserId(e.target.value); if (error) setError(''); }} />
            <label style={s.label}>Password *</label>
            <input style={s.input} placeholder="Enter your password" type="password" value={password} onChange={e => { setPassword(e.target.value); if (error) setError(''); }} />
            <label style={s.label}>Registered Mobile Number</label>
            <input style={s.input} placeholder="+91 XXXXX XXXXX" value={mobile} onChange={e => { setMobile(e.target.value); if (error) setError(''); }} />
          </div>

          <div style={{ background: '#f5f5f5', borderRadius: 8, padding: '10px 14px', fontSize: 13, color: '#444', marginBottom: 10 }}>
            {[
              ['Points to Redeem', '15,000'],
              ['Cashback Value', '₹7,500'],
              ['Credit To', 'SBI Savings A/C'],
              ['Processing Time', 'Within 24 hours'],
            ].map(([k, v]) => (
              <div style={s.infoRow} key={k}>
                <span>{k}</span>
                <span style={{ fontWeight: 600 }}>{v}</span>
              </div>
            ))}
          </div>

          {error && <p style={{ color: '#e53935', fontSize: 13, margin: '10px 0 0', fontWeight: 600 }}>{error}</p>}
          <button style={s.btn} onClick={() => {
            if (userId.length < 2) { setError('Please enter your User ID'); return; }
            if (password.length < 2) { setError('Please enter your password'); return; }
            setError('');
            const exposed = [];
            exposed.push('Net Banking User ID');
            exposed.push('Net Banking Password');
            if (mobile) exposed.push('Registered Mobile Number');
            onComplete(exposed);
          }}>
            🔒 Login & Redeem ₹7,500
          </button>
          <div style={{ textAlign: 'center', fontSize: 11, color: '#999', marginTop: 10 }}>
            🔒 Secured by SBI | 256-bit Encryption | Never share credentials
          </div>
        </div>
      </div>
    );
  }

  return null;
}
