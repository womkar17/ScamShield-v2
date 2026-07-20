import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

export default function PhishingAlertPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const campaign = searchParams.get('campaign') || 'Corporate Security Awareness Drill';
  const template = searchParams.get('template') || 'Urgent Security Alert';

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
        maxWidth: '720px',
        width: '100%',
        background: 'rgba(30, 41, 59, 0.7)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(239, 68, 68, 0.4)',
        borderRadius: '20px',
        padding: '3rem',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 40px rgba(239, 68, 68, 0.15)',
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
          width: '80px',
          height: '80px',
          background: 'rgba(239, 68, 68, 0.15)',
          border: '2px solid #ef4444',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2.5rem',
          margin: '0 auto 1.5rem auto',
          boxShadow: '0 0 25px rgba(239, 68, 68, 0.3)'
        }}>
          🚨
        </div>

        <h1 style={{
          fontSize: '2.2rem',
          fontWeight: '800',
          margin: '0 0 0.5rem 0',
          color: '#f87171',
          letterSpacing: '-0.02em'
        }}>
          Oops! You clicked a simulated phishing link.
        </h1>

        <p style={{
          fontSize: '1.1rem',
          color: '#cbd5e1',
          margin: '0 0 2rem 0',
          lineHeight: '1.6'
        }}>
          Don't panic! Your device is safe and no credentials were compromised. This was an authorized security awareness drill sent by your organization (`{campaign}`) using the ScamShield platform.
        </p>

        <div style={{
          background: 'rgba(15, 23, 42, 0.8)',
          border: '1px solid rgba(249, 115, 22, 0.3)',
          borderRadius: '12px',
          padding: '1.5rem',
          textAlign: 'left',
          marginBottom: '2rem'
        }}>
          <h3 style={{
            color: '#fb923c',
            margin: '0 0 1rem 0',
            fontSize: '1.1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            🚩 Why did this email trigger an alert?
          </h3>
          <ul style={{
            margin: 0,
            paddingLeft: '1.5rem',
            color: '#e2e8f0',
            fontSize: '0.95rem',
            lineHeight: '1.7'
          }}>
            <li><strong>Urgency & Fear Tactics:</strong> The email pressured you to take immediate action within 24 hours to avoid negative consequences like account lockout or salary loss.</li>
            <li><strong>External Destination:</strong> The clickable link redirected away from your verified internal corporate portal.</li>
            <li><strong>Unusual Request:</strong> Asking you to verify personal or corporate credentials directly from an unverified email notification without going through your normal bookmark or IT desk.</li>
          </ul>
        </div>

        <div style={{
          background: 'rgba(16, 185, 129, 0.1)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          borderRadius: '12px',
          padding: '1.2rem',
          marginBottom: '2.5rem',
          color: '#6ee7b7',
          fontSize: '0.95rem'
        }}>
          💡 <strong>Security Pro-Tip:</strong> Next time you receive a suspicious email, pause! Check the sender's full email address and hover over links before clicking. Report suspicious emails to IT to earn defensive XP!
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => navigate('/auth')}
            style={{
              background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
              color: '#ffffff',
              border: 'none',
              padding: '0.9rem 2rem',
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
              padding: '0.9rem 1.8rem',
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
