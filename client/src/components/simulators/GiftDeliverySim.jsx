import { useState } from 'react';

export default function GiftDeliverySim({ onComplete }) {
  const [stage, setStage] = useState('tracking'); // tracking | payment
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [pin, setPin] = useState('');
  const [phone, setPhone] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardName, setCardName] = useState('');
  const [error, setError] = useState('');

  const s = {
    container: {
      maxWidth: 520,
      margin: '0 auto',
      fontFamily: "'Segoe UI', Roboto, Arial, sans-serif",
      background: '#f8f9fa',
      minHeight: '100%',
      borderRadius: 12,
      overflow: 'hidden',
      boxShadow: '0 2px 16px rgba(0,0,0,0.10)',
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
    header: {
      background: '#ff6f00',
      color: '#fff',
      padding: '14px 20px',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
    },
    logo: {
      width: 38,
      height: 38,
      borderRadius: 8,
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 900,
      fontSize: 14,
      color: '#ff6f00',
      flexShrink: 0,
    },
    headerText: {
      fontSize: 17,
      fontWeight: 700,
    },
    headerSub: {
      fontSize: 11,
      opacity: 0.85,
      marginTop: 1,
    },
    body: {
      padding: '18px 20px 24px',
    },
    giftBanner: {
      background: 'linear-gradient(135deg, #fff3e0, #ffe0b2)',
      border: '2px solid #ffb74d',
      borderRadius: 12,
      padding: '18px 16px',
      textAlign: 'center',
      marginBottom: 16,
    },
    giftIcon: {
      fontSize: 48,
      marginBottom: 6,
    },
    giftTitle: {
      fontSize: 17,
      fontWeight: 800,
      color: '#e65100',
      marginBottom: 4,
    },
    giftSub: {
      fontSize: 13,
      color: '#555',
      lineHeight: 1.5,
    },
    trackingId: {
      display: 'inline-block',
      background: '#fff',
      color: '#333',
      fontSize: 13,
      fontWeight: 700,
      padding: '6px 14px',
      borderRadius: 6,
      marginTop: 8,
      border: '1px solid #e0e0e0',
      fontFamily: 'monospace',
    },
    card: {
      background: '#fff',
      borderRadius: 10,
      padding: '16px 18px',
      marginBottom: 14,
      border: '1px solid #e8e8e8',
    },
    cardTitle: {
      fontSize: 14,
      fontWeight: 700,
      color: '#333',
      marginBottom: 14,
    },
    // Timeline styles
    timelineItem: (isActive, isDone) => ({
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      marginBottom: 0,
      paddingBottom: 20,
      position: 'relative',
    }),
    timelineDot: (isActive, isDone) => ({
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: isDone ? '#4caf50' : isActive ? '#ff6f00' : '#e0e0e0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 11,
      color: '#fff',
      fontWeight: 700,
      flexShrink: 0,
      position: 'relative',
      zIndex: 1,
      boxShadow: isActive ? '0 0 0 4px rgba(255,111,0,0.2)' : 'none',
    }),
    timelineLine: (isDone) => ({
      position: 'absolute',
      left: 9,
      top: 20,
      bottom: 0,
      width: 2,
      background: isDone ? '#4caf50' : '#e0e0e0',
    }),
    timelineTitle: (isActive) => ({
      fontSize: 14,
      fontWeight: isActive ? 700 : 600,
      color: isActive ? '#e65100' : '#333',
    }),
    timelineSub: {
      fontSize: 12,
      color: '#888',
      marginTop: 2,
    },
    infoRow: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 13,
      color: '#555',
      padding: '7px 0',
      borderBottom: '1px solid #f0f0f0',
    },
    feeBox: {
      background: '#fff3e0',
      border: '1px solid #ffcc80',
      borderRadius: 8,
      padding: '14px 16px',
      marginBottom: 14,
      textAlign: 'center',
    },
    feeLabel: {
      fontSize: 13,
      color: '#e65100',
      fontWeight: 600,
    },
    feeAmount: {
      fontSize: 28,
      fontWeight: 900,
      color: '#bf360c',
    },
    btn: {
      width: '100%',
      padding: '14px 0',
      background: '#ff6f00',
      color: '#fff',
      border: 'none',
      borderRadius: 8,
      fontWeight: 700,
      fontSize: 15,
      cursor: 'pointer',
      marginTop: 6,
      letterSpacing: 0.3,
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
      border: '1px solid #ccd1d9',
      borderRadius: 7,
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
    section: {
      background: '#fff',
      borderRadius: 10,
      padding: '14px 18px',
      marginTop: 14,
      border: '1px solid #e8e8e8',
    },
    sectionTitle: {
      fontSize: 14,
      fontWeight: 700,
      color: '#333',
      marginBottom: 10,
    },
  };

  const timeline = [
    { title: 'Order Placed', sub: 'June 26, 2026 — 3:14 PM', icon: '✓', done: true },
    { title: 'Package Picked Up', sub: 'June 27, 2026 — 10:22 AM', icon: '✓', done: true },
    { title: 'In Transit — Mumbai Hub', sub: 'June 28, 2026 — 6:45 PM', icon: '✓', done: true },
    { title: 'Out for Delivery', sub: 'Today — Arriving by 8 PM', icon: '🚚', done: false, active: true },
    { title: 'Delivered', sub: 'Pending delivery fee payment', icon: '', done: false },
  ];

  if (stage === 'tracking') {
    return (
      <div style={s.container}>
        <div style={s.urlBar}>
          <span style={{ color: '#2e7d32', fontSize: 13 }}>🔒</span>
          <span>https://track.express-delivery.in/package/IND2847361</span>
        </div>
        <div style={s.header}>
          <div style={s.logo}>ED</div>
          <div>
            <div style={s.headerText}>Express Delivery</div>
            <div style={s.headerSub}>Package Tracking Portal</div>
          </div>
        </div>
        <div style={s.body}>
          <div style={s.giftBanner}>
            <div style={s.giftIcon}>🎁</div>
            <div style={s.giftTitle}>You have a surprise gift package!</div>
            <div style={s.giftSub}>
              Someone special has sent you a gift. The package is out for delivery!
            </div>
            <div style={s.trackingId}>📦 Tracking ID: #IND2847361</div>
          </div>

          <div style={s.card}>
            <div style={s.cardTitle}>📍 Delivery Timeline</div>
            {timeline.map((item, i) => (
              <div key={i} style={s.timelineItem(item.active, item.done)}>
                {i < timeline.length - 1 && <div style={s.timelineLine(item.done)} />}
                <div style={s.timelineDot(item.active, item.done)}>
                  {item.done ? '✓' : item.icon}
                </div>
                <div>
                  <div style={s.timelineTitle(item.active)}>{item.title}</div>
                  <div style={s.timelineSub}>{item.sub}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={s.card}>
            <div style={s.cardTitle}>📋 Package Details</div>
            {[
              ['Sender', 'Anonymous (Gift)'],
              ['Weight', '1.2 kg'],
              ['Dimensions', '30 × 20 × 15 cm'],
              ['Courier', 'Express Delivery India'],
              ['Origin', 'Delhi, India'],
              ['Destination', 'Your Address'],
            ].map(([k, v]) => (
              <div style={s.infoRow} key={k}>
                <span style={{ color: '#888' }}>{k}</span>
                <span style={{ fontWeight: 600 }}>{v}</span>
              </div>
            ))}
          </div>

          <div style={s.feeBox}>
            <div style={s.feeLabel}>
              ⚠️ Customs & Delivery Charges Required
            </div>
            <div style={s.feeAmount}>₹499</div>
            <div style={{ fontSize: 11, color: '#8d6e00', marginTop: 4 }}>
              As per customs policy, a small delivery fee is required to release your package.
              Pay now to receive your gift today!
            </div>
          </div>

          <button style={s.btn} onClick={() => setStage('payment')}>
            Pay ₹499 & Schedule Delivery →
          </button>
        </div>
      </div>
    );
  }

  // Payment stage
  return (
    <div style={s.container}>
      <div style={s.urlBar}>
        <span style={{ color: '#2e7d32', fontSize: 13 }}>🔒</span>
        <span>https://track.express-delivery.in/payment</span>
      </div>
      <div style={s.header}>
        <div style={s.logo}>ED</div>
        <div>
          <div style={s.headerText}>Payment — Delivery Charges</div>
          <div style={s.headerSub}>Package #IND2847361</div>
        </div>
      </div>
      <div style={s.body}>
        <div style={{ background: '#e8f5e9', border: '1px solid #a5d6a7', borderRadius: 8, padding: '10px 14px', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 22 }}>🚚</span>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#2e7d32' }}>Delivery boy is waiting!</div>
            <div style={{ fontSize: 12, color: '#555' }}>Pay now to receive your surprise gift within 30 minutes</div>
          </div>
        </div>

        <div style={s.section}>
          <div style={s.sectionTitle}>📦 Delivery Address</div>
          <label style={s.label}>Full Name *</label>
          <input style={s.input} placeholder="Your full name" value={name} onChange={e => { setName(e.target.value); if (error) setError(''); }} />
          <label style={s.label}>Address *</label>
          <input style={s.input} placeholder="House no., Street, Locality" value={address} onChange={e => { setAddress(e.target.value); if (error) setError(''); }} />
          <div style={s.row}>
            <div style={s.half}>
              <label style={s.label}>City</label>
              <input style={s.input} placeholder="City" value={city} onChange={e => { setCity(e.target.value); if (error) setError(''); }} />
            </div>
            <div style={s.half}>
              <label style={s.label}>PIN Code</label>
              <input style={s.input} placeholder="560001" maxLength={6} value={pin} onChange={e => { setPin(e.target.value); if (error) setError(''); }} />
            </div>
          </div>
          <label style={s.label}>Phone Number *</label>
          <input style={s.input} placeholder="+91 98765 43210" value={phone} onChange={e => { setPhone(e.target.value); if (error) setError(''); }} />
        </div>

        <div style={s.section}>
          <div style={s.sectionTitle}>💳 Payment Details</div>
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
          <label style={s.label}>Name on Card</label>
          <input style={s.input} placeholder="Cardholder name" value={cardName} onChange={e => { setCardName(e.target.value); if (error) setError(''); }} />
        </div>

        <div style={{ background: '#f5f5f5', borderRadius: 8, padding: '10px 14px', marginTop: 14, fontSize: 13, color: '#444' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <span>Customs Charges</span><span>₹299</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <span>Delivery Fee</span><span>₹150</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <span>GST (18%)</span><span>₹50</span>
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '6px 0' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 800, fontSize: 16, color: '#bf360c' }}>
            <span>Total</span><span>₹499</span>
          </div>
        </div>

        {error && <p style={{ color: '#e53935', fontSize: 13, margin: '10px 0 0', fontWeight: 600 }}>{error}</p>}

        <button style={s.btn} onClick={() => {
          if (name.length < 2) { setError('Please enter your full name'); return; }
          if (address.length < 2) { setError('Please enter your address'); return; }
          if (phone.length < 2) { setError('Please enter your phone number'); return; }
          if (cardNumber.replace(/\s/g, '').length < 4) { setError('Please enter a valid card number'); return; }
          if (expiry.length < 4) { setError('Please enter card expiry date'); return; }
          if (cvv.length < 3) { setError('Please enter CVV'); return; }
          setError('');
          const exposed = [];
          if (name) exposed.push('Full Name');
          if (address) exposed.push('Delivery Address');
          if (city) exposed.push('City');
          if (pin) exposed.push('PIN Code');
          if (phone) exposed.push('Phone Number');
          if (cardNumber) exposed.push('Debit/Credit Card Number');
          if (expiry) exposed.push('Card Expiry Date');
          if (cvv) exposed.push('CVV Security Code');
          if (cardName) exposed.push('Cardholder Name');
          onComplete(exposed);
        }}>
          🔒 Pay ₹499 & Receive Gift
        </button>
        <div style={{ textAlign: 'center', fontSize: 11, color: '#aaa', marginTop: 8 }}>
          🔒 Secured Payment Gateway • PCI-DSS Compliant
        </div>
      </div>
    </div>
  );
}
