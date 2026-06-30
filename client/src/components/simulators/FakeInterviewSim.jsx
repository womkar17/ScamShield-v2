import { useState } from 'react';

export default function FakeInterviewSim({ onComplete }) {
  const [stage, setStage] = useState('listing'); // listing | apply | payment
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [error, setError] = useState('');

  const styles = {
    container: {
      maxWidth: 520,
      margin: '0 auto',
      fontFamily: "'Segoe UI', Roboto, Arial, sans-serif",
      background: '#f5f6fa',
      minHeight: '100%',
      borderRadius: 12,
      overflow: 'hidden',
      boxShadow: '0 2px 16px rgba(0,0,0,0.10)',
    },
    header: {
      background: '#1a73e8',
      color: '#fff',
      padding: '14px 20px',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
    },
    logo: {
      width: 36,
      height: 36,
      borderRadius: 8,
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 800,
      fontSize: 16,
      color: '#1a73e8',
      flexShrink: 0,
    },
    headerText: {
      fontSize: 17,
      fontWeight: 700,
      letterSpacing: 0.2,
    },
    headerSub: {
      fontSize: 11,
      opacity: 0.85,
      marginTop: 1,
    },
    body: {
      padding: '18px 20px 24px',
    },
    jobCard: {
      background: '#fff',
      borderRadius: 10,
      padding: '18px 18px 14px',
      marginBottom: 14,
      border: '1px solid #e0e4ea',
    },
    jobTitle: {
      fontSize: 17,
      fontWeight: 700,
      color: '#1a237e',
      marginBottom: 2,
    },
    company: {
      fontSize: 14,
      color: '#333',
      fontWeight: 600,
      marginBottom: 6,
    },
    tag: {
      display: 'inline-block',
      background: '#e8f5e9',
      color: '#2e7d32',
      fontSize: 11,
      fontWeight: 700,
      padding: '3px 10px',
      borderRadius: 12,
      marginRight: 6,
      marginBottom: 4,
    },
    tagBlue: {
      display: 'inline-block',
      background: '#e3f2fd',
      color: '#1565c0',
      fontSize: 11,
      fontWeight: 700,
      padding: '3px 10px',
      borderRadius: 12,
      marginRight: 6,
      marginBottom: 4,
    },
    meta: {
      fontSize: 13,
      color: '#555',
      marginTop: 8,
      lineHeight: 1.7,
    },
    hr: {
      border: 'none',
      borderTop: '1px solid #ececec',
      margin: '12px 0',
    },
    btn: {
      width: '100%',
      padding: '13px 0',
      background: '#1a73e8',
      color: '#fff',
      border: 'none',
      borderRadius: 8,
      fontWeight: 700,
      fontSize: 15,
      cursor: 'pointer',
      marginTop: 8,
      letterSpacing: 0.3,
    },
    label: {
      display: 'block',
      fontSize: 13,
      fontWeight: 600,
      color: '#333',
      marginBottom: 5,
      marginTop: 12,
    },
    input: {
      width: '100%',
      padding: '10px 12px',
      fontSize: 14,
      border: '1px solid #ccd1d9',
      borderRadius: 7,
      outline: 'none',
      boxSizing: 'border-box',
      color: '#222',
      background: '#fafbfc',
    },
    successBox: {
      background: '#e8f5e9',
      border: '1px solid #a5d6a7',
      borderRadius: 10,
      padding: '18px 16px',
      textAlign: 'center',
      marginBottom: 16,
    },
    successIcon: {
      fontSize: 38,
      marginBottom: 6,
    },
    successTitle: {
      fontSize: 17,
      fontWeight: 800,
      color: '#2e7d32',
      marginBottom: 4,
    },
    successText: {
      fontSize: 13,
      color: '#333',
      lineHeight: 1.6,
    },
    feeBox: {
      background: '#fff8e1',
      border: '1px solid #ffe082',
      borderRadius: 8,
      padding: '12px 14px',
      marginBottom: 14,
    },
    feeLabel: {
      fontSize: 13,
      color: '#6d4c00',
      fontWeight: 600,
    },
    feeAmount: {
      fontSize: 22,
      fontWeight: 800,
      color: '#e65100',
    },
    starRow: {
      display: 'flex',
      alignItems: 'center',
      gap: 3,
      marginTop: 6,
    },
    star: {
      color: '#fbc02d',
      fontSize: 14,
    },
    ratingText: {
      fontSize: 12,
      color: '#777',
      marginLeft: 4,
    },
    row: {
      display: 'flex',
      gap: 10,
    },
    half: {
      flex: 1,
    },
  };

  if (stage === 'listing') {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.logo}>JB</div>
          <div>
            <div style={styles.headerText}>JobBoard Pro</div>
            <div style={styles.headerSub}>Find your dream job today</div>
          </div>
        </div>
        <div style={styles.body}>
          <div style={{ fontSize: 12, color: '#888', marginBottom: 10 }}>
            🔍 Showing results for "Software Engineer" — 1,247 jobs found
          </div>
          <div style={styles.jobCard}>
            <div style={styles.jobTitle}>Senior Software Engineer</div>
            <div style={styles.company}>
              <span style={{ color: '#4285f4', fontWeight: 700 }}>G</span>
              <span style={{ color: '#ea4335', fontWeight: 700 }}>o</span>
              <span style={{ color: '#fbbc05', fontWeight: 700 }}>o</span>
              <span style={{ color: '#4285f4', fontWeight: 700 }}>g</span>
              <span style={{ color: '#34a853', fontWeight: 700 }}>l</span>
              <span style={{ color: '#ea4335', fontWeight: 700 }}>e</span>
              {' '}<span style={{ color: '#555', fontWeight: 400 }}>• Bengaluru, India</span>
            </div>
            <div style={styles.starRow}>
              {[1,2,3,4,5].map(i => <span key={i} style={styles.star}>★</span>)}
              <span style={styles.ratingText}>4.5 (12,847 reviews)</span>
            </div>
            <div style={{ marginTop: 8 }}>
              <span style={styles.tag}>₹25 LPA</span>
              <span style={styles.tagBlue}>Full-time</span>
              <span style={styles.tagBlue}>Remote</span>
              <span style={styles.tag}>Urgent Hiring</span>
            </div>
            <hr style={styles.hr} />
            <div style={styles.meta}>
              <div><strong>Experience:</strong> 3-7 years</div>
              <div><strong>Skills:</strong> React, Node.js, Python, System Design</div>
              <div><strong>Perks:</strong> Free meals, Gym, RSU, Relocation bonus</div>
              <div style={{ marginTop: 6, color: '#999', fontSize: 12 }}>
                Posted 2 hours ago • 342 applicants
              </div>
            </div>
            <button style={styles.btn} onClick={() => setStage('apply')}>
              Apply Now →
            </button>
          </div>

          <div style={{ ...styles.jobCard, opacity: 0.6 }}>
            <div style={{ ...styles.jobTitle, fontSize: 15 }}>Backend Developer</div>
            <div style={{ fontSize: 13, color: '#555' }}>Microsoft • Hyderabad</div>
            <div style={{ marginTop: 6 }}>
              <span style={styles.tag}>₹18 LPA</span>
              <span style={styles.tagBlue}>Full-time</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (stage === 'apply') {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.logo}>JB</div>
          <div>
            <div style={styles.headerText}>Apply — Senior SWE at Google</div>
            <div style={styles.headerSub}>Step 1 of 2: Your Details</div>
          </div>
        </div>
        <div style={styles.body}>
          <label style={styles.label}>Full Name *</label>
          <input
            style={styles.input}
            placeholder="Enter your full name"
            value={name}
            onChange={e => { setName(e.target.value); if (error) setError(''); }}
          />
          <label style={styles.label}>Email Address *</label>
          <input
            style={styles.input}
            type="email"
            placeholder="you@email.com"
            value={email}
            onChange={e => { setEmail(e.target.value); if (error) setError(''); }}
          />
          <label style={styles.label}>Phone Number *</label>
          <input
            style={styles.input}
            placeholder="+91 98765 43210"
            value={phone}
            onChange={e => { setPhone(e.target.value); if (error) setError(''); }}
          />
          <label style={styles.label}>Upload Resume *</label>
          <div style={{
            border: '2px dashed #b0bec5',
            borderRadius: 8,
            padding: '18px 0',
            textAlign: 'center',
            color: '#888',
            fontSize: 13,
            background: '#fafbfc',
            cursor: 'pointer',
          }}>
            📄 Click to upload PDF / DOCX (max 5MB)
          </div>
          <label style={styles.label}>Years of Experience *</label>
          <select style={{ ...styles.input, appearance: 'auto' }}>
            <option>Select</option>
            <option>1-3 years</option>
            <option>3-5 years</option>
            <option>5-7 years</option>
            <option>7+ years</option>
          </select>
          {error && <p style={{ color: '#e53935', fontSize: 13, margin: '14px 0 0', fontWeight: 600 }}>{error}</p>}
          <button
            style={{ ...styles.btn, marginTop: 18 }}
            onClick={() => {
              if (name.length < 2) { setError('Please enter your full name'); return; }
              if (email.length < 2 || !email.includes('@')) { setError('Please enter a valid email address'); return; }
              if (phone.length < 2) { setError('Please enter your phone number'); return; }
              setError('');
              setStage('payment');
            }}
          >
            Submit Application →
          </button>
        </div>
      </div>
    );
  }

  // payment stage
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.logo}>JB</div>
        <div>
          <div style={styles.headerText}>Application Status</div>
          <div style={styles.headerSub}>Step 2 of 2: Confirm Interview Slot</div>
        </div>
      </div>
      <div style={styles.body}>
        <div style={styles.successBox}>
          <div style={styles.successIcon}>🎉</div>
          <div style={styles.successTitle}>Congratulations!</div>
          <div style={styles.successText}>
            You have been <strong>shortlisted</strong> for the Senior Software Engineer
            role at <strong>Google, Bengaluru</strong>.<br />
            Interview Date: <strong>July 8, 2026 — 11:00 AM IST</strong>
          </div>
        </div>
        <div style={styles.feeBox}>
          <div style={styles.feeLabel}>
            ⚠️ To confirm your interview slot, a one-time non-refundable booking fee is required:
          </div>
          <div style={styles.feeAmount}>₹4,999</div>
          <div style={{ fontSize: 11, color: '#8d6e00', marginTop: 2 }}>
            This fee covers background verification, ID badge, and meeting room booking.
            100% refundable after interview completion.
          </div>
        </div>
        <label style={styles.label}>Cardholder Name</label>
        <input style={styles.input} placeholder="Name on card" value={cardholderName} onChange={e => { setCardholderName(e.target.value); if (error) setError(''); }} />
        <label style={styles.label}>Card Number *</label>
        <input
          style={styles.input}
          placeholder="1234 5678 9012 3456"
          value={cardNumber}
          onChange={e => { setCardNumber(e.target.value); if (error) setError(''); }}
          maxLength={19}
        />
        <div style={styles.row}>
          <div style={styles.half}>
            <label style={styles.label}>Expiry</label>
            <input
              style={styles.input}
              placeholder="MM/YY"
              value={expiry}
              onChange={e => { setExpiry(e.target.value); if (error) setError(''); }}
              maxLength={5}
            />
          </div>
          <div style={styles.half}>
            <label style={styles.label}>CVV</label>
            <input
              style={styles.input}
              placeholder="•••"
              type="password"
              value={cvv}
              onChange={e => { setCvv(e.target.value); if (error) setError(''); }}
              maxLength={4}
            />
          </div>
        </div>
        {error && <p style={{ color: '#e53935', fontSize: 13, margin: '14px 0 0', fontWeight: 600 }}>{error}</p>}
        <button
          style={{ ...styles.btn, background: '#e65100', marginTop: 18 }}
          onClick={() => {
            if (cardNumber.replace(/\s/g, '').length < 4) { setError('Please enter a valid card number'); return; }
            if (expiry.length < 4) { setError('Please enter card expiry date'); return; }
            if (cvv.length < 3) { setError('Please enter CVV'); return; }
            setError('');
            const exposed = [];
            if (name) exposed.push('Full Name');
            if (email) exposed.push('Email Address');
            if (phone) exposed.push('Phone Number');
            exposed.push('Resume (uploaded)');
            if (cardholderName) exposed.push('Cardholder Name');
            if (cardNumber) exposed.push('Debit/Credit Card Number');
            if (expiry) exposed.push('Card Expiry Date');
            if (cvv) exposed.push('CVV Security Code');
            onComplete(exposed);
          }}
        >
          🔒 Pay ₹4,999 & Confirm Slot
        </button>
        <div style={{ textAlign: 'center', fontSize: 11, color: '#aaa', marginTop: 8 }}>
          🔒 Secured by 256-bit SSL Encryption • PCI-DSS Compliant
        </div>
      </div>
    </div>
  );
}
