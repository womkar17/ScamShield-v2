import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getApiUrl } from '../lib/api';

export default function LiveThreatBanner() {
  const navigate = useNavigate();
  const [broadcast, setBroadcast] = useState(null);
  const [dismissed, setDismissed] = useState(false);

  const checkBroadcast = async () => {
    try {
      // 1. Check global server backend first so all users see broadcasts
      try {
        const apiUrl = getApiUrl();
        const res = await fetch(`${apiUrl}/api/broadcast`);
        if (res.ok) {
          const data = await res.json();
          if (data && data.broadcast && data.broadcast.active) {
            setBroadcast(data.broadcast);
            return;
          }
        }
      } catch (err) { /* ignore network error, fallback to localStorage */ }

      // 2. Fallback to localStorage for single-browser offline tests
      const saved = localStorage.getItem('ss_live_threat_broadcast');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.active) {
          setBroadcast(parsed);
        } else {
          setBroadcast(null);
        }
      } else {
        setBroadcast(null);
      }
    } catch (e) {
      setBroadcast(null);
    }
  };

  useEffect(() => {
    checkBroadcast();
    // Listen for storage events (when admin broadcasts from another tab or screen)
    window.addEventListener('storage', checkBroadcast);
    const interval = setInterval(checkBroadcast, 2000); // Check every 2s
    return () => {
      window.removeEventListener('storage', checkBroadcast);
      clearInterval(interval);
    };
  }, []);

  if (!broadcast || !broadcast.active || dismissed) return null;

  let bgGradient = 'linear-gradient(90deg, #991b1b 0%, #ef4444 50%, #991b1b 100%)';
  let border = '2px solid #f87171';
  let icon = '🚨';

  if (broadcast.level === 'WARNING') {
    bgGradient = 'linear-gradient(90deg, #854d0e 0%, #eab308 50%, #854d0e 100%)';
    border = '2px solid #fde047';
    icon = '⚠️';
  } else if (broadcast.level === 'INFO') {
    bgGradient = 'linear-gradient(90deg, #1e40af 0%, #3b82f6 50%, #1e40af 100%)';
    border = '2px solid #93c5fd';
    icon = 'ℹ️';
  }

  return (
    <div style={{
      background: bgGradient,
      borderBottom: border,
      color: '#fff',
      padding: '12px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '12px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
      position: 'sticky',
      top: 0,
      zIndex: 999999,
      fontFamily: "'Inter', sans-serif",
      animation: 'pulse 3s infinite'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: '1 1 300px' }}>
        <span style={{ fontSize: '24px' }}>{icon}</span>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ background: 'rgba(0,0,0,0.3)', padding: '2px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: '900', letterSpacing: '0.05em' }}>
              {broadcast.level || 'URGENT'}
            </span>
            <strong style={{ fontSize: '15px' }}>{broadcast.title || 'Live Threat Alert'}</strong>
          </div>
          <p style={{ margin: '2px 0 0 0', fontSize: '13.5px', opacity: 0.95, lineHeight: '1.4' }}>
            {broadcast.message}
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {broadcast.actionText && (
          <button
            onClick={() => {
              if (broadcast.actionText.toLowerCase().includes('case')) {
                navigate('/case-studies');
              } else if (broadcast.actionText.toLowerCase().includes('game') || broadcast.actionText.toLowerCase().includes('quiz')) {
                navigate('/games');
              } else {
                navigate('/case-studies');
              }
            }}
            style={{
              padding: '6px 14px',
              background: '#fff',
              color: '#0f172a',
              border: 'none',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: '800',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
            }}
          >
            {broadcast.actionText} →
          </button>
        )}
        <button
          onClick={() => setDismissed(true)}
          title="Dismiss banner for now"
          style={{
            background: 'rgba(0,0,0,0.2)',
            border: '1px solid rgba(255,255,255,0.3)',
            color: '#fff',
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px'
          }}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
