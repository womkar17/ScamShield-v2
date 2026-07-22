import React, { useState } from 'react';

export default function FakeNoxInfluencerSim({ onComplete }) {
  const [step, setStep] = useState('email'); // 'email' or 'oauth'
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleInputChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };

  const handleEmailClick = () => {
    setStep('oauth');
  };

  const handleOAuthSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      onComplete(['YouTube Channel Access', 'Google Session Token']);
    }, 2000);
  };

  return (
    <div style={{
      maxWidth: '750px', height: '550px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden',
      boxShadow: '0 12px 36px rgba(0,0,0,0.15)', display: 'flex', flexDirection: 'column',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      background: '#fff', border: '1px solid #e5e7eb', position: 'relative'
    }}>
      
      {step === 'email' && (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          {/* Fake Email Client Header */}
          <div style={{ background: '#f9fafb', borderBottom: '1px solid #e5e7eb', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '16px', color: '#6b7280', fontSize: '1.2rem' }}>
              <span>☰</span>
              <span style={{ fontWeight: '600', color: '#111827', fontSize: '1.1rem' }}>Inbox</span>
            </div>
            <div style={{ width: '200px', background: '#e5e7eb', height: '30px', borderRadius: '15px' }} />
          </div>
          
          {/* Email Content */}
          <div style={{ padding: '32px', flex: 1, overflowY: 'auto' }}>
            <h2 style={{ margin: '0 0 16px 0', fontSize: '1.4rem', color: '#111827' }}>Sponsorship Offer: Tech Brand Campaign ($5,000)</h2>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', alignItems: 'center' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#f59e0b', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                N
              </div>
              <div>
                <div style={{ fontWeight: '600', color: '#111827' }}>NoxInfluencer Partnerships <span style={{ color: '#6b7280', fontWeight: 'normal', fontSize: '0.9rem' }}>&lt;partners@nox-influencer-media.com&gt;</span></div>
                <div style={{ color: '#6b7280', fontSize: '0.85rem' }}>to me ▾</div>
              </div>
            </div>
            
            <div style={{ color: '#374151', lineHeight: '1.6', fontSize: '0.95rem' }}>
              <p>Hello Creator,</p>
              <p>We are reaching out from <strong>NoxInfluencer</strong> on behalf of a major tech brand for a dedicated video sponsorship.</p>
              <p>Based on your recent YouTube channel analytics, the brand is offering a flat rate of <strong>$5,000 USD</strong> for a 60-second integration.</p>
              <p>To review the contract, campaign brief, and accept the offer, please log in to your NoxInfluencer Creator Dashboard.</p>
              
              <div style={{ margin: '32px 0', textAlign: 'center' }}>
                <button 
                  onClick={handleEmailClick}
                  style={{ 
                    background: '#2563eb', color: '#fff', border: 'none', padding: '14px 28px', 
                    borderRadius: '6px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer',
                    boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.2)'
                  }}
                >
                  View Campaign & Connect YouTube
                </button>
              </div>
              
              <p style={{ color: '#9ca3af', fontSize: '0.85rem' }}>If you have any questions, please reply directly to this email.</p>
            </div>
          </div>
        </div>
      )}

      {step === 'oauth' && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', background: '#f3f4f6' }}>
          
          {/* Fake Google OAuth Popup */}
          <div style={{ 
            background: '#fff', width: '400px', borderRadius: '8px', overflow: 'hidden',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            border: '1px solid #d1d5db'
          }}>
            <div style={{ padding: '24px 32px', textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px', gap: '8px' }}>
                <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#ea4335' }}></div>
                <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#fbbc05' }}></div>
                <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#34a853' }}></div>
                <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#4285f4' }}></div>
              </div>
              <h2 style={{ margin: '0 0 8px 0', fontSize: '1.2rem', fontWeight: '500', color: '#202124' }}>Sign in with Google</h2>
              <p style={{ margin: '0 0 24px 0', fontSize: '0.9rem', color: '#5f6368' }}>to continue to <strong>NoxInfluencer Media</strong></p>
              
              <form onSubmit={handleOAuthSubmit}>
                <div style={{ marginBottom: '16px' }}>
                  <input 
                    type="email" 
                    required 
                    placeholder="Email or phone"
                    value={formData.email}
                    onChange={(e) => handleInputChange(e, 'email')}
                    style={{ 
                      width: '100%', padding: '12px 14px', background: '#fff', border: '1px solid #dadce0', 
                      borderRadius: '4px', color: '#202124', fontSize: '1rem', boxSizing: 'border-box'
                    }} 
                  />
                </div>
                <div style={{ marginBottom: '24px' }}>
                  <input 
                    type="password" 
                    required 
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => handleInputChange(e, 'password')}
                    style={{ 
                      width: '100%', padding: '12px 14px', background: '#fff', border: '1px solid #dadce0', 
                      borderRadius: '4px', color: '#202124', fontSize: '1rem', boxSizing: 'border-box'
                    }} 
                  />
                </div>
                
                <div style={{ background: '#f8f9fa', padding: '12px', borderRadius: '4px', marginBottom: '24px', textAlign: 'left', fontSize: '0.8rem', color: '#5f6368' }}>
                  <strong style={{ color: '#202124' }}>NoxInfluencer Media wants to access your Google Account</strong>
                  <ul style={{ margin: '8px 0 0 0', paddingLeft: '16px' }}>
                    <li>Manage your YouTube account</li>
                    <li>View YouTube Analytics reports</li>
                  </ul>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#1a73e8', fontSize: '0.85rem', fontWeight: '500', cursor: 'pointer' }}>Forgot password?</span>
                  <button 
                    type="submit" 
                    disabled={loading}
                    style={{
                      background: loading ? '#9ca3af' : '#1a73e8',
                      color: '#fff', border: 'none', padding: '10px 24px', 
                      borderRadius: '4px', fontSize: '0.9rem',
                      fontWeight: '500', cursor: loading ? 'not-allowed' : 'pointer'
                    }}
                  >
                    {loading ? 'Authenticating...' : 'Allow'}
                  </button>
                </div>
              </form>
            </div>
          </div>
          
        </div>
      )}
    </div>
  );
}
