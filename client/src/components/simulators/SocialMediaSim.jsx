import React, { useState, useEffect } from 'react';

// Master configuration for all Social Media Scams
const SOCIAL_PROFILES = {
  65: { 
    platform: 'Marketplace', type: 'post', color: '#1877F2', icon: '🛒',
    name: 'Electronics Resale Hub', handle: '@cheap_deals_india', verified: false, 
    content: '🚨 FLASH SALE! 🚨 Selling brand new sealed iPhone 15 Pro for just ₹25,000! Need cash urgently for medical reasons. Only 1 left. Click below to pay and secure it before it is gone.', 
    action: 'Pay Advance to Reserve', 
    exposed: ['Card Details', 'UPI PIN', 'Home Address'] 
  },
  66: { 
    platform: 'Instagram', type: 'dm', color: '#E1306C', icon: '📸',
    name: 'IG.Support.Team', handle: '@ig.verify.badge_official', verified: false, 
    content: 'Hello! Your account has been reviewed and is eligible for the Blue Verification Badge ✔️. Please click the secure link below to login and confirm your identity within 24 hours to claim your badge.', 
    action: 'Verify Account Details', 
    exposed: ['Instagram Username', 'Instagram Password', 'Email Credentials'] 
  },
  67: { 
    platform: 'X (Twitter)', type: 'dm', color: '#1DA1F2', icon: '🐦',
    name: 'X Premium Support', handle: '@premium_billing_update', verified: false, 
    content: '⚠️ Action Required: Your X Premium (Blue Tick) subscription payment failed. Your verification badge will be removed in 2 hours unless you update your billing information immediately.', 
    action: 'Update Billing Info', 
    exposed: ['Credit Card Number', 'CVV', 'Billing Address'] 
  },
  68: { 
    platform: 'Instagram', type: 'post', color: '#E1306C', icon: '📸',
    name: 'Crypto King 👑', handle: '@cryptoking_real123', verified: false, 
    content: '🎉 HUGE GIVEAWAY TIME! 🎉 I am giving away 1 Bitcoin (₹50 Lakhs) to the first 100 people who link their wallet to our smart contract! Do not miss out on free money! 🚀💸', 
    action: 'Connect Crypto Wallet', 
    exposed: ['Crypto Wallet Address', 'Seed Phrase', 'Wallet Balance'] 
  },
  70: { 
    platform: 'Discord', type: 'dm', color: '#5865F2', icon: '🎮',
    name: 'GamerFriend09', handle: '@gamerfriend09#1234', verified: false, 
    content: 'Hey man! I accidentally bought an extra Discord Nitro 1-Year subscription. Don\'t really need it, so here you go! Claim it before someone else does! discord-gift.net/claim-nitro-free', 
    action: 'Claim Free Nitro', 
    exposed: ['Discord Credentials', 'Auth Token', 'Saved Payment Methods'] 
  }
};

export default function SocialMediaSim({ onComplete, moduleId }) {
  const [loading, setLoading] = useState(false);
  const [likes, setLikes] = useState(1243);
  const [isLiked, setIsLiked] = useState(false);
  
  // Default to ID 66 if somehow loaded without an ID
  const profile = SOCIAL_PROFILES[moduleId] || SOCIAL_PROFILES[66];

  const handleAction = () => {
    setLoading(true);
    // Simulate API delay before revealing the scam
    setTimeout(() => {
      onComplete(profile.exposed);
    }, 1500);
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <div style={{
      maxWidth: '400px', margin: '0 auto', borderRadius: '24px', overflow: 'hidden',
      boxShadow: '0 10px 40px rgba(0,0,0,0.5)', display: 'flex', flexDirection: 'column',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      background: '#121212', border: '1px solid #2a2a2a'
    }}>
      {/* App Header */}
      <div style={{
        background: '#1e1e1e', padding: '16px 20px', borderBottom: '1px solid #2a2a2a',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'
      }}>
        <span style={{ fontSize: '1.2rem' }}>{profile.icon}</span>
        <h3 style={{ color: '#fff', margin: 0, fontSize: '1rem', fontWeight: '600' }}>{profile.platform}</h3>
      </div>

      <div style={{ padding: '20px' }}>
        {/* Profile Info Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{
            width: '48px', height: '48px', borderRadius: '50%', background: `linear-gradient(135deg, ${profile.color}, #2a2a2a)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0
          }}>
            👤
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ color: '#fff', fontWeight: '600', fontSize: '1rem' }}>{profile.name}</span>
              {profile.verified && <span style={{ color: '#1DA1F2', fontSize: '0.9rem' }}>✔️</span>}
            </div>
            <span style={{ color: '#888', fontSize: '0.85rem' }}>{profile.handle}</span>
          </div>
          <button style={{
            marginLeft: 'auto', background: 'transparent', color: profile.color,
            border: `1px solid ${profile.color}`, borderRadius: '6px', padding: '6px 12px',
            fontSize: '0.8rem', fontWeight: 'bold', cursor: 'pointer'
          }}>
            Follow
          </button>
        </div>

        {/* Dynamic Content: DM vs Post */}
        <div style={{
          background: profile.type === 'dm' ? '#1e1e1e' : 'transparent',
          padding: profile.type === 'dm' ? '16px' : '0',
          borderRadius: profile.type === 'dm' ? '12px' : '0',
          marginBottom: '20px',
          border: profile.type === 'dm' ? '1px solid #2a2a2a' : 'none'
        }}>
          {profile.type === 'dm' && (
            <p style={{ color: '#666', fontSize: '0.75rem', textAlign: 'center', margin: '0 0 12px' }}>Today, 10:42 AM</p>
          )}
          <p style={{ 
            color: '#e4e4e4', lineHeight: '1.5', fontSize: '0.95rem', margin: 0,
            background: profile.type === 'dm' ? '#2a2a2a' : 'transparent',
            padding: profile.type === 'dm' ? '12px' : '0',
            borderRadius: profile.type === 'dm' ? '12px 12px 12px 2px' : '0',
          }}>
            {profile.content}
          </p>
        </div>

        {/* Post Engagements (Only show if it's a feed post) */}
        {profile.type === 'post' && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px', color: '#888' }}>
            <span onClick={toggleLike} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', color: isLiked ? '#E1306C' : '#888' }}>
              {isLiked ? '❤️' : '🤍'} {likes}
            </span>
            <span>💬 84</span>
            <span>🔁 12</span>
          </div>
        )}

        {/* The Phishing Link / Action Button */}
        <div style={{
          background: 'rgba(255,107,107,0.05)', border: '1px dashed rgba(255,107,107,0.3)',
          borderRadius: '12px', padding: '16px', textAlign: 'center'
        }}>
          <p style={{ color: '#888', fontSize: '0.8rem', margin: '0 0 12px' }}>
            🔗 external link attachment
          </p>
          <button 
            onClick={handleAction} 
            disabled={loading} 
            style={{
              width: '100%', padding: '12px', background: loading ? '#555' : profile.color,
              color: '#fff', border: 'none', borderRadius: '8px', fontSize: '0.95rem',
              fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'background 0.2s ease'
            }}
          >
            {loading ? 'Redirecting...' : profile.action}
          </button>
        </div>
      </div>
    </div>
  );
}