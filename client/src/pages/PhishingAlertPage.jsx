import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

export default function PhishingAlertPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const campaign = searchParams.get('campaign') || 'Corporate Security Awareness Drill';

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #311042 100%)',
      color: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: "'Inter', sans-serif"
    }}>
      <div style={{
        maxWidth: '580px',
        width: '100%',
        background: 'rgba(30, 41, 59, 0.85)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(239, 68, 68, 0.4)',
        borderRadius: '20px',
        padding: '3rem 2.5rem',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 40px rgba(239, 68, 68, 0.2)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Top Glowing Accent */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '6px',
          background: 'linear-gradient(90deg, #ef4444, #f97316, #eab308)'
        }} />

        <div style={{
          width: '84px',
          height: '84px',
          background: 'rgba(239, 68, 68, 0.15)',
          border: '2px solid #ef4444',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2.6rem',
          margin: '0 auto 1.5rem auto',
          boxShadow: '0 0 25px rgba(239, 68, 68, 0.3)'
        }}>
          🚨
        </div>

        <h1 style={{
          fontSize: '2.3rem',
          fontWeight: '800',
          margin: '0 0 1rem 0',
          color: '#f87171',
          letterSpacing: '-0.02em'
        }}>
          Oops! You Got Scammed!
        </h1>

        <p style={{
          fontSize: '1.15rem',
          color: '#e2e8f0',
          margin: '0 0 1.5rem 0',
          lineHeight: '1.6',
          fontWeight: '500'
        }}>
          Don't worry, your device is totally safe and no sensitive credentials or data were exposed.
        </p>

        <div style={{
          background: 'rgba(15, 23, 42, 0.8)',
          border: '1px solid rgba(251, 146, 60, 0.3)',
          borderRadius: '14px',
          padding: '1.4rem',
          marginBottom: '2.5rem',
          color: '#cbd5e1',
          fontSize: '1rem',
          lineHeight: '1.6'
        }}>
          This was an authorized corporate security awareness drill (<strong style={{ color: '#fb923c' }}>{campaign}</strong>) sent by your organization to test and strengthen our cyber defenses against phishing attacks.
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => navigate('/auth')}
            style={{
              background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
              color: '#ffffff',
              border: 'none',
              padding: '0.95rem 2rem',
              borderRadius: '10px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.3)',
              transition: 'transform 0.2s'
            }}
          >
            🛡️ Launch ScamShield Training & Earn XP
          </button>

          <button
            onClick={() => navigate('/')}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              padding: '0.95rem 1.8rem',
              borderRadius: '10px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Return to Homepage
          </button>
        </div>
      </div>
    </div>
  );
}
