import React, { useState } from 'react';

export default function CharityScamSim({ onComplete }) {
  const [view, setView] = useState('social'); // 'social' | 'charity'
  const [donationAmount, setDonationAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', upiId: '', cardNumber: '', cardExpiry: '', cardCvv: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => setFormData(prev => ({ ...prev, [field]: e.target.value }));

  const handleDonateClick = (e) => {
    e.preventDefault();
    setView('charity');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!donationAmount || !paymentMethod || !formData.name.trim() || !formData.email.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    if (paymentMethod === 'upi' && !formData.upiId.trim()) {
      setError('Please enter your UPI ID.');
      return;
    }
    if (paymentMethod === 'card' && (!formData.cardNumber.trim() || !formData.cardExpiry.trim() || !formData.cardCvv.trim())) {
      setError('Please fill in all card details.');
      return;
    }
    setLoading(true);
    const exposedArray = ['Full Name', 'Email', 'Donation Amount'];
    if (paymentMethod === 'upi') exposedArray.push('UPI ID');
    if (paymentMethod === 'card') exposedArray.push('Card Number', 'Card Expiry', 'CVV');
    setTimeout(() => onComplete(exposedArray), 1500);
  };

  if (view === 'social') {
    return (
      <div style={{
        maxWidth: '550px', margin: '0 auto', background: '#fff', borderRadius: '10px', overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.12)', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', color: '#1c1e21'
      }}>
        {/* Facebook-like header */}
        <div style={{ background: '#fff', padding: '12px 16px', borderBottom: '1px solid #e4e6eb' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '44px', height: '44px', background: '#e74c3c', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: '700', fontSize: '1rem' }}>HI</div>
            <div>
              <p style={{ margin: 0, fontWeight: '600', fontSize: '0.95rem' }}>
                HelpIndia Foundation
                <span style={{ color: '#1877f2', marginLeft: '4px', fontSize: '0.85rem' }}>●</span>
              </p>
              <p style={{ margin: '2px 0 0', fontSize: '0.78rem', color: '#65676b' }}>
                Sponsored · 🌍
              </p>
            </div>
            <div style={{ marginLeft: 'auto', cursor: 'pointer', fontSize: '1.3rem', color: '#65676b' }}>···</div>
          </div>
        </div>

        {/* Post content */}
        <div style={{ padding: '12px 16px' }}>
          <p style={{ margin: '0 0 12px', fontSize: '0.95rem', lineHeight: '1.6', color: '#1c1e21' }}>
            🚨🚨 <strong>URGENT APPEAL</strong> 🚨🚨<br /><br />
            Devastating 7.2 magnitude earthquake hit Uttarakhand yesterday. Over 2,500 people are still trapped under debris. 😢💔<br /><br />
            Entire villages have been destroyed. Children are separated from families. No food, no water, no shelter. 🏚️<br /><br />
            We are on the ground providing immediate relief — food packets, medical aid, and rescue operations. 🏥🍲<br /><br />
            🙏 <strong>Every ₹500 can feed a family for a week.</strong><br />
            🙏 <strong>₹2,000 provides emergency medical supplies.</strong><br />
            🙏 <strong>₹5,000 sets up a temporary shelter.</strong><br /><br />
            <strong>DONATE NOW</strong> and save lives. Time is running out! ⏰<br /><br />
            #UttarakhandEarthquake #DisasterRelief #HelpIndia #DonateNow #SaveLives
          </p>
        </div>

        {/* Fake disaster images area */}
        <div style={{
          background: 'linear-gradient(135deg, #4a3728, #6d4c41)', padding: '40px 20px',
          textAlign: 'center', position: 'relative'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '10px' }}>🏚️ 💔 🆘</div>
          <p style={{ color: '#fff', margin: 0, fontSize: '0.9rem', fontWeight: '600' }}>Uttarakhand Earthquake 2024</p>
          <p style={{ color: '#ffcdd2', margin: '5px 0 0', fontSize: '0.82rem' }}>2,500+ trapped | 15,000+ displaced</p>
          <div style={{
            position: 'absolute', bottom: '8px', right: '12px', background: 'rgba(0,0,0,0.6)',
            padding: '3px 8px', borderRadius: '4px', fontSize: '0.7rem', color: '#fff'
          }}>📷 1/4</div>
        </div>

        {/* Engagement stats */}
        <div style={{ padding: '8px 16px', borderBottom: '1px solid #e4e6eb', display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: '#65676b' }}>
          <span>❤️ 😢 🙏 12.4K</span>
          <span>3,847 shares · 892 comments</span>
        </div>

        {/* Action buttons */}
        <div style={{ padding: '4px 16px', borderBottom: '1px solid #e4e6eb', display: 'flex' }}>
          {['👍 Like', '💬 Comment', '↗️ Share'].map((action, i) => (
            <button key={i} style={{
              flex: 1, padding: '10px', background: 'none', border: 'none', cursor: 'pointer',
              fontSize: '0.88rem', color: '#65676b', fontWeight: '600'
            }}>{action}</button>
          ))}
        </div>

        {/* Top comment */}
        <div style={{ padding: '12px 16px' }}>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
            <div style={{ width: '32px', height: '32px', background: '#1877f2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.7rem', fontWeight: '700' }}>AS</div>
            <div style={{ background: '#f0f2f5', padding: '8px 12px', borderRadius: '18px', flex: 1 }}>
              <p style={{ margin: 0, fontWeight: '600', fontSize: '0.82rem' }}>Anita Singh</p>
              <p style={{ margin: '2px 0 0', fontSize: '0.85rem', color: '#333' }}>Just donated ₹5,000! Please help them 🙏🙏 Their website looks genuine.</p>
            </div>
          </div>
        </div>

        {/* Donate button */}
        <div style={{ padding: '12px 16px' }}>
          <button onClick={handleDonateClick} style={{
            width: '100%', padding: '14px', background: '#e74c3c', color: '#fff', border: 'none',
            borderRadius: '8px', fontSize: '1rem', fontWeight: '700', cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(231,76,60,0.3)'
          }}>
            ❤️ Donate Now — Save Lives
          </button>
        </div>
      </div>
    );
  }

  // Fake charity website
  return (
    <div style={{
      maxWidth: '650px', margin: '0 auto', background: '#fff', borderRadius: '8px', overflow: 'hidden',
      boxShadow: '0 8px 24px rgba(0,0,0,0.15)', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', color: '#1c1e21'
    }}>
      {/* Browser bar */}
      <div style={{ background: '#f5f5f5', padding: '8px 15px', borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem' }}>
        <span style={{ color: '#34a853' }}>🔒</span>
        <span style={{ color: '#555' }}>https://helpindiafoundation.org/donate/earthquake-relief</span>
      </div>

      {/* Charity header */}
      <div style={{ background: 'linear-gradient(135deg, #c0392b, #e74c3c)', padding: '20px 25px', color: '#fff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <div style={{ width: '50px', height: '50px', background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>🤝</div>
          <div>
            <h2 style={{ margin: 0, fontSize: '1.2rem' }}>HelpIndia Foundation</h2>
            <p style={{ margin: '3px 0 0', fontSize: '0.78rem', opacity: 0.8 }}>Serving Humanity Since 2024</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '20px', fontSize: '0.8rem' }}>
          {['Home', 'About Us', 'Campaigns', 'Donate', 'Contact'].map((item, i) => (
            <span key={i} style={{ cursor: 'pointer', opacity: i === 3 ? 1 : 0.7, borderBottom: i === 3 ? '2px solid #fff' : 'none', paddingBottom: '3px' }}>{item}</span>
          ))}
        </div>
      </div>

      {/* Campaign info */}
      <div style={{ padding: '20px 25px' }}>
        <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ margin: '0 0 8px', fontSize: '1.1rem', color: '#c0392b' }}>🆘 Uttarakhand Earthquake Relief Fund</h3>
            <p style={{ margin: '0 0 12px', fontSize: '0.88rem', color: '#555', lineHeight: '1.5' }}>
              Help us provide food, shelter, and medical aid to 15,000+ displaced families. Every rupee counts.
            </p>

            {/* Progress bar */}
            <div style={{ background: '#f0f0f0', borderRadius: '20px', height: '12px', marginBottom: '8px', overflow: 'hidden' }}>
              <div style={{ background: 'linear-gradient(90deg, #e74c3c, #c0392b)', width: '67%', height: '100%', borderRadius: '20px' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#666' }}>
              <span><strong style={{ color: '#c0392b' }}>₹33,50,000</strong> raised</span>
              <span>Goal: ₹50,00,000</span>
            </div>
          </div>
        </div>

        {/* Subtle red flags */}
        <div style={{ background: '#fafafa', borderRadius: '8px', padding: '12px 15px', marginBottom: '18px', border: '1px solid #eee', fontSize: '0.78rem', color: '#888' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
            <span>🏢 Established: January 2024</span>
            <span>📍 Mumbai, Maharashtra</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>📋 Reg. No: Applied / Pending</span>
            <span>👥 2,145 donors</span>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '0 0 18px' }} />

        {/* Donation form */}
        <h4 style={{ margin: '0 0 12px', fontSize: '1rem', color: '#333' }}>Make a Donation</h4>

        <form onSubmit={handleSubmit}>
          {/* Amount selection */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '15px', flexWrap: 'wrap' }}>
            {['500', '1000', '2000', '5000'].map(amt => (
              <button key={amt} type="button" onClick={() => setDonationAmount(amt)} style={{
                flex: '1 1 calc(25% - 10px)', padding: '10px', border: donationAmount === amt ? '2px solid #c0392b' : '1px solid #ddd',
                borderRadius: '8px', background: donationAmount === amt ? '#fef2f2' : '#fff', cursor: 'pointer',
                fontWeight: '600', fontSize: '0.9rem', color: donationAmount === amt ? '#c0392b' : '#333'
              }}>₹{amt}</button>
            ))}
          </div>
          <div style={{ marginBottom: '15px' }}>
            <input type="number" placeholder="Or enter custom amount (₹)" value={donationAmount} required
              onChange={(e) => setDonationAmount(e.target.value)}
              style={{ width: '100%', padding: '11px', border: '1px solid #ddd', borderRadius: '8px', boxSizing: 'border-box', fontSize: '0.9rem' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '15px' }}>
            <div>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', fontSize: '0.85rem', color: '#333' }}>Full Name *</label>
              <input type="text" required value={formData.name} onChange={handleChange('name')}
                style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '8px', boxSizing: 'border-box', fontSize: '0.88rem' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', fontSize: '0.85rem', color: '#333' }}>Email *</label>
              <input type="email" required value={formData.email} onChange={handleChange('email')}
                style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '8px', boxSizing: 'border-box', fontSize: '0.88rem' }} />
            </div>
          </div>

          {/* Payment method */}
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '0.85rem', color: '#333' }}>Payment Method *</label>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button type="button" onClick={() => setPaymentMethod('upi')} style={{
                flex: 1, padding: '10px', border: paymentMethod === 'upi' ? '2px solid #c0392b' : '1px solid #ddd',
                borderRadius: '8px', background: paymentMethod === 'upi' ? '#fef2f2' : '#fff', cursor: 'pointer',
                fontSize: '0.85rem', fontWeight: '600', color: paymentMethod === 'upi' ? '#c0392b' : '#555'
              }}>📱 UPI</button>
              <button type="button" onClick={() => setPaymentMethod('card')} style={{
                flex: 1, padding: '10px', border: paymentMethod === 'card' ? '2px solid #c0392b' : '1px solid #ddd',
                borderRadius: '8px', background: paymentMethod === 'card' ? '#fef2f2' : '#fff', cursor: 'pointer',
                fontSize: '0.85rem', fontWeight: '600', color: paymentMethod === 'card' ? '#c0392b' : '#555'
              }}>💳 Card</button>
            </div>
          </div>

          {paymentMethod === 'upi' && (
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', fontSize: '0.85rem', color: '#333' }}>UPI ID *</label>
              <input type="text" required value={formData.upiId} onChange={handleChange('upiId')} placeholder="yourname@upi"
                style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '8px', boxSizing: 'border-box', fontSize: '0.88rem' }} />
            </div>
          )}

          {paymentMethod === 'card' && (
            <div style={{ marginBottom: '15px' }}>
              <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', fontSize: '0.85rem', color: '#333' }}>Card Number *</label>
                <input type="text" required maxLength="19" value={formData.cardNumber} onChange={handleChange('cardNumber')} placeholder="XXXX XXXX XXXX XXXX"
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '8px', boxSizing: 'border-box', fontSize: '0.88rem' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', fontSize: '0.85rem', color: '#333' }}>Expiry *</label>
                  <input type="text" required maxLength="5" value={formData.cardExpiry} onChange={handleChange('cardExpiry')} placeholder="MM/YY"
                    style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '8px', boxSizing: 'border-box', fontSize: '0.88rem' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', fontSize: '0.85rem', color: '#333' }}>CVV *</label>
                  <input type="password" required maxLength="3" value={formData.cardCvv} onChange={handleChange('cardCvv')} placeholder="***"
                    style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '8px', boxSizing: 'border-box', fontSize: '0.88rem' }} />
                </div>
              </div>
            </div>
          )}

          {error && <p style={{ color: '#c62828', fontSize: '0.85rem', margin: '0 0 10px', textAlign: 'center' }}>{error}</p>}

          <button type="submit" disabled={loading || !paymentMethod || !donationAmount} style={{
            width: '100%', padding: '14px', background: (loading || !paymentMethod || !donationAmount) ? '#ccc' : '#c0392b', color: '#fff', border: 'none',
            borderRadius: '8px', fontSize: '1rem', fontWeight: '700', cursor: (loading || !paymentMethod || !donationAmount) ? 'not-allowed' : 'pointer'
          }}>
            {loading ? 'Processing Donation...' : `Donate ₹${donationAmount || '—'} Now`}
          </button>

          <p style={{ margin: '12px 0 0', fontSize: '0.75rem', color: '#aaa', textAlign: 'center' }}>
            🔒 100% Secure | Tax exemption receipt will be emailed
          </p>
        </form>
      </div>

      {/* Footer */}
      <div style={{ background: '#2c2c2c', padding: '12px 25px', textAlign: 'center', fontSize: '0.72rem', color: '#888' }}>
        © 2024 HelpIndia Foundation | helpindiafoundation.org | Contact: info@helpindiafoundation.org
      </div>
    </div>
  );
}
