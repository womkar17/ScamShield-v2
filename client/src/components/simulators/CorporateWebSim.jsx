import React, { useState } from 'react';

// Master configuration for all Web/Browser-Based Scams
const WEB_PROFILES = {
  72: { 
    type: 'job', themeColor: '#0A66C2', icon: '💼',
    url: 'linkedin-careers-portal.net/secure-apply', secure: false,
    title: 'Senior Software Engineer (Remote)', 
    subtitle: 'Google India • Actively Recruiting',
    price: '₹25,00,000 / year',
    content: 'We are looking for talented developers to join our remote team. Note: Due to high volume, a refundable registration fee is required to secure your interview slot.',
    action: 'Apply Now (Pay ₹500 Fee)',
    fields: [
      { name: 'name', label: 'Full Name', type: 'text' },
      { name: 'upi', label: 'UPI ID for ₹500 Payment', type: 'text' },
      { name: 'pin', label: 'UPI PIN', type: 'password' }
    ],
    exposed: ['Financial Details', 'UPI PIN', 'Registration Fee']
  },
  73: { 
    type: 'crypto', themeColor: '#1DA1F2', icon: '₿',
    url: 'x-official-crypto-giveaway.org/claim-btc', secure: false,
    title: 'Elon Musk 5000 BTC Giveaway!', 
    subtitle: 'Verified Event • Live Now',
    price: 'Send 0.1 BTC -> Receive 0.2 BTC',
    content: 'To verify your address, send between 0.1 to 5 BTC to the contribution address below. We will immediately send back DOUBLE the amount to your wallet!',
    action: 'Verify & Claim Crypto',
    fields: [
      { name: 'wallet', label: 'Your Wallet Address', type: 'text' },
      { name: 'seed', label: 'Wallet Seed Phrase (12 Words)', type: 'password' }
    ],
    exposed: ['Crypto Wallet Access', 'Seed Phrase', 'All Funds']
  },
  74: { 
    type: 'ecommerce', themeColor: '#FF9900', icon: '🛒',
    url: 'amazon-deals-india.shop/iphone15', secure: false,
    title: 'Apple iPhone 15 Pro Max (256GB)', 
    subtitle: 'Sold by: AppIe Official (0 reviews)',
    price: '₹12,999', originalPrice: '₹1,59,900',
    content: 'Flash Sale! 92% OFF for the next 10 minutes only. Limited stock available. Free delivery tomorrow.',
    action: 'Buy Now',
    fields: [
      { name: 'address', label: 'Delivery Address', type: 'text' },
      { name: 'card', label: 'Credit Card Number', type: 'text' },
      { name: 'cvv', label: 'CVV', type: 'password' }
    ],
    exposed: ['Full Credit Card Details', 'Home Address']
  },
  62: { 
    type: 'crypto', themeColor: '#10b981', icon: '📈',
    url: 'ai-wealth-growth.com/dashboard', secure: false,
    title: 'AI Trading Bot Beta', 
    subtitle: 'Guaranteed 12% Daily Returns',
    price: 'Minimum Deposit: ₹10,000',
    content: 'Our proprietary AI trading algorithm executes high-frequency trades. Connect your account now to start earning risk-free daily profits.',
    action: 'Initialize AI Bot',
    fields: [
      { name: 'name', label: 'Full Name', type: 'text' },
      { name: 'amount', label: 'Amount to Invest (₹)', type: 'number' }
    ],
    exposed: ['Financial Data', 'Investment Funds']
  }
};

export default function CorporateWebSim({ onComplete, moduleId }) {
  const [phase, setPhase] = useState('view'); // 'view' | 'form'
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});
  
  // Default to ID 74 if not found
  const profile = WEB_PROFILES[moduleId] || WEB_PROFILES[74];

  const handleInputChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      onComplete(profile.exposed);
    }, 1500);
  };

  return (
    <div style={{
      maxWidth: '500px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden',
      boxShadow: '0 15px 50px rgba(0,0,0,0.5)', display: 'flex', flexDirection: 'column',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      background: '#fff', border: '1px solid #333'
    }}>
      {/* Fake Browser Toolbar */}
      <div style={{ background: '#2d2d2d', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
        </div>
        <div style={{
          flex: 1, background: '#1e1e1e', borderRadius: '6px', padding: '8px 12px',
          display: 'flex', alignItems: 'center', gap: '8px', color: '#aaa', fontSize: '0.85rem'
        }}>
          <span style={{ color: profile.secure ? '#2ecc71' : '#e74c3c' }}>
            {profile.secure ? '🔒' : '⚠️'}
          </span>
          <span style={{ color: profile.secure ? '#fff' : '#e74c3c' }}>{profile.url}</span>
        </div>
      </div>

      {/* Website Content */}
      <div style={{ padding: '24px', background: '#f8f9fa', flex: 1 }}>
        
        {/* Site Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px solid #e0e0e0' }}>
          <div style={{ width: '50px', height: '50px', borderRadius: '8px', background: profile.themeColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: '#fff' }}>
            {profile.icon}
          </div>
          <div>
            <h2 style={{ margin: '0 0 4px', fontSize: '1.2rem', color: '#111' }}>{profile.title}</h2>
            <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>{profile.subtitle}</p>
          </div>
        </div>

        {/* Product/Job Details */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <h3 style={{ margin: 0, fontSize: '1.6rem', color: '#111', fontWeight: 'bold' }}>{profile.price}</h3>
            {profile.originalPrice && (
              <span style={{ textDecoration: 'line-through', color: '#999', fontSize: '1.1rem' }}>{profile.originalPrice}</span>
            )}
          </div>
          <p style={{ color: '#444', lineHeight: '1.6', fontSize: '0.95rem' }}>
            {profile.content}
          </p>
        </div>

        {/* Action Area */}
        {phase === 'view' ? (
          <button 
            onClick={() => setPhase('form')}
            style={{
              width: '100%', padding: '14px', background: profile.themeColor,
              color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1.05rem',
              fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }}
          >
            {profile.action}
          </button>
        ) : (
          <div style={{ background: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #ddd', boxShadow: '0 8px 24px rgba(0,0,0,0.05)' }}>
            <h4 style={{ margin: '0 0 16px', color: '#111', fontSize: '1.1rem', borderBottom: '1px solid #eee', paddingBottom: '12px' }}>
              Complete Your Request
            </h4>
            <form onSubmit={handleSubmit}>
              {profile.fields.map((field, i) => (
                <div key={i} style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', marginBottom: '6px', color: '#555', fontSize: '0.85rem', fontWeight: '600' }}>
                    {field.label}
                  </label>
                  <input 
                    type={field.type} 
                    required 
                    value={formData[field.name] || ''}
                    onChange={(e) => handleInputChange(e, field.name)}
                    style={{
                      width: '100%', padding: '10px 12px', background: '#f5f5f5',
                      border: '1px solid #ccc', borderRadius: '6px', color: '#111',
                      fontSize: '0.95rem', boxSizing: 'border-box'
                    }} 
                  />
                </div>
              ))}
              <button 
                type="submit" 
                disabled={loading}
                style={{
                  width: '100%', padding: '14px', background: loading ? '#999' : profile.themeColor,
                  color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1rem',
                  fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer', marginTop: '8px'
                }}
              >
                {loading ? 'Processing Securely...' : 'Confirm Submission'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}