import { useState, useEffect, useRef } from 'react';

export default function PhoneDealSim({ onComplete }) {
  const [stage, setStage] = useState('product'); // product | checkout
  const [seconds, setSeconds] = useState(9257); // ~2:34:17
  const timerRef = useRef(null);
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

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSeconds(s => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, []);

  const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');

  const s = {
    container: {
      maxWidth: 520,
      margin: '0 auto',
      fontFamily: "'Segoe UI', Roboto, Arial, sans-serif",
      background: '#fff',
      minHeight: '100%',
      borderRadius: 12,
      overflow: 'hidden',
      boxShadow: '0 2px 16px rgba(0,0,0,0.10)',
    },
    header: {
      background: '#2874f0',
      color: '#fff',
      padding: '10px 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    logoBox: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
    },
    logo: {
      fontWeight: 800,
      fontSize: 18,
      fontStyle: 'italic',
      letterSpacing: -0.5,
    },
    logoSub: {
      fontSize: 10,
      fontStyle: 'italic',
      opacity: 0.85,
    },
    searchBar: {
      background: '#fff',
      borderRadius: 4,
      padding: '7px 14px',
      flex: 1,
      marginLeft: 16,
      fontSize: 13,
      color: '#888',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
    },
    banner: {
      background: 'linear-gradient(90deg, #ff6161, #ff9800)',
      color: '#fff',
      textAlign: 'center',
      padding: '8px 10px',
      fontWeight: 800,
      fontSize: 13,
      letterSpacing: 0.5,
    },
    timerBox: {
      display: 'inline-flex',
      gap: 4,
      marginLeft: 8,
    },
    timerDigit: {
      background: '#000',
      color: '#fff',
      padding: '2px 6px',
      borderRadius: 3,
      fontWeight: 800,
      fontSize: 14,
      fontFamily: 'monospace',
    },
    body: {
      padding: '16px 18px 24px',
    },
    imgBox: {
      background: '#f5f5f5',
      borderRadius: 10,
      padding: '20px 0',
      textAlign: 'center',
      marginBottom: 14,
      fontSize: 80,
      position: 'relative',
    },
    badge: {
      position: 'absolute',
      top: 10,
      left: 10,
      background: '#ff1744',
      color: '#fff',
      fontSize: 11,
      fontWeight: 800,
      padding: '3px 10px',
      borderRadius: 4,
    },
    title: {
      fontSize: 16,
      fontWeight: 700,
      color: '#212121',
      marginBottom: 4,
    },
    ratingRow: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginBottom: 10,
    },
    ratingBadge: {
      background: '#388e3c',
      color: '#fff',
      fontSize: 12,
      fontWeight: 700,
      padding: '2px 8px',
      borderRadius: 4,
      display: 'flex',
      alignItems: 'center',
      gap: 3,
    },
    ratingText: {
      fontSize: 12,
      color: '#777',
    },
    priceRow: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      marginBottom: 4,
    },
    price: {
      fontSize: 28,
      fontWeight: 800,
      color: '#212121',
    },
    originalPrice: {
      fontSize: 16,
      color: '#999',
      textDecoration: 'line-through',
    },
    discount: {
      fontSize: 14,
      fontWeight: 700,
      color: '#388e3c',
    },
    urgency: {
      background: '#fff3e0',
      border: '1px solid #ffe0b2',
      borderRadius: 6,
      padding: '8px 12px',
      fontSize: 13,
      color: '#e65100',
      fontWeight: 600,
      marginTop: 10,
      marginBottom: 10,
    },
    specRow: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 13,
      color: '#444',
      padding: '6px 0',
      borderBottom: '1px solid #f0f0f0',
    },
    specLabel: {
      color: '#888',
    },
    offers: {
      background: '#e8f5e9',
      borderRadius: 6,
      padding: '10px 12px',
      marginTop: 10,
      marginBottom: 14,
    },
    offerItem: {
      fontSize: 12,
      color: '#2e7d32',
      marginBottom: 4,
      lineHeight: 1.5,
    },
    btn: {
      width: '100%',
      padding: '14px 0',
      border: 'none',
      borderRadius: 8,
      fontWeight: 700,
      fontSize: 16,
      cursor: 'pointer',
      marginTop: 6,
      letterSpacing: 0.3,
    },
    buyBtn: {
      background: '#fb641b',
      color: '#fff',
    },
    cartBtn: {
      background: '#ff9f00',
      color: '#fff',
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
      background: '#f5f5f5',
      borderRadius: 8,
      padding: '14px 16px',
      marginTop: 16,
    },
    sectionTitle: {
      fontSize: 14,
      fontWeight: 700,
      color: '#333',
      marginBottom: 10,
    },
  };

  if (stage === 'product') {
    return (
      <div style={s.container}>
        <div style={s.header}>
          <div style={s.logoBox}>
            <div>
              <div style={s.logo}>ShopKart</div>
              <div style={s.logoSub}>Explore <span style={{ color: '#ffe100' }}>Plus</span></div>
            </div>
          </div>
          <div style={s.searchBar}>
            🔍 Search for products, brands…
          </div>
        </div>
        <div style={s.banner}>
          ⚡ MEGA FLASH SALE — Ends in{' '}
          <span style={s.timerBox}>
            <span style={s.timerDigit}>{hrs}</span>:
            <span style={s.timerDigit}>{mins}</span>:
            <span style={s.timerDigit}>{secs}</span>
          </span>
        </div>
        <div style={s.body}>
          <div style={s.imgBox}>
            📱
            <div style={s.badge}>94% OFF</div>
          </div>
          <div style={s.title}>Apple iPhone 15 Pro Max (256 GB) — Natural Titanium</div>
          <div style={s.ratingRow}>
            <span style={s.ratingBadge}>4.6 ★</span>
            <span style={s.ratingText}>1,48,329 Ratings & 9,241 Reviews</span>
          </div>
          <div style={s.priceRow}>
            <span style={s.price}>₹8,999</span>
            <span style={s.originalPrice}>₹1,49,900</span>
            <span style={s.discount}>94% off</span>
          </div>
          <div style={s.urgency}>
            🔥 Only 2 left in stock! 47 people viewing this right now
          </div>
          <div style={s.offers}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#1b5e20', marginBottom: 6 }}>Available Offers</div>
            <div style={s.offerItem}>🏷️ Bank Offer: 10% instant discount on HDFC cards</div>
            <div style={s.offerItem}>🏷️ Special Price: Extra ₹1,000 off (limited period)</div>
            <div style={s.offerItem}>🏷️ Free delivery by Tomorrow, July 1</div>
          </div>
          {[
            ['Brand', 'Apple'],
            ['Model', 'iPhone 15 Pro Max'],
            ['Storage', '256 GB'],
            ['Display', '6.7" Super Retina XDR'],
            ['Camera', '48MP + 12MP + 12MP'],
            ['Warranty', '1 Year Brand Warranty'],
          ].map(([k, v]) => (
            <div style={s.specRow} key={k}>
              <span style={s.specLabel}>{k}</span>
              <span style={{ fontWeight: 600 }}>{v}</span>
            </div>
          ))}
          <button
            style={{ ...s.btn, ...s.buyBtn, marginTop: 16 }}
            onClick={() => setStage('checkout')}
          >
            ⚡ Buy Now
          </button>
          <button style={{ ...s.btn, ...s.cartBtn, marginTop: 8 }}>
            🛒 Add to Cart
          </button>
        </div>
      </div>
    );
  }

  // checkout
  return (
    <div style={s.container}>
      <div style={s.header}>
        <div style={s.logoBox}>
          <div style={s.logo}>ShopKart</div>
        </div>
        <div style={{ fontSize: 14, fontWeight: 600 }}>🔒 Secure Checkout</div>
      </div>
      <div style={s.body}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#f5f5f5', borderRadius: 8, padding: 12, marginBottom: 16 }}>
          <span style={{ fontSize: 36 }}>📱</span>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#212121' }}>iPhone 15 Pro Max (256 GB)</div>
            <div style={{ fontSize: 13, color: '#388e3c', fontWeight: 700 }}>₹8,999 <span style={{ color: '#999', fontWeight: 400, textDecoration: 'line-through', fontSize: 12 }}>₹1,49,900</span></div>
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

        <div style={{ background: '#f5f5f5', borderRadius: 8, padding: '10px 14px', marginTop: 16, fontSize: 13, color: '#444' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <span>Price</span><span>₹1,49,900</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, color: '#388e3c' }}>
            <span>Discount</span><span>-₹1,40,901</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <span>Delivery</span><span style={{ color: '#388e3c' }}>FREE</span>
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '6px 0' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 800, fontSize: 16, color: '#212121' }}>
            <span>Total</span><span>₹8,999</span>
          </div>
        </div>

        {error && <p style={{ color: '#e53935', fontSize: 13, margin: '10px 0 0', fontWeight: 600 }}>{error}</p>}

        <button
          style={{ ...s.btn, ...s.buyBtn, marginTop: 16 }}
          onClick={() => {
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
          }}
        >
          Place Order — ₹8,999
        </button>
        <div style={{ textAlign: 'center', fontSize: 11, color: '#aaa', marginTop: 8 }}>
          🔒 Your payment information is encrypted and secure
        </div>
      </div>
    </div>
  );
}
