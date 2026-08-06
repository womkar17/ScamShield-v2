import React, { useState } from 'react';
import ThreatAnalysis from './ThreatAnalysis';
import { soundEffects } from '../../utils/soundEffects';

export default function PermissionPurgeGame({ game, onComplete }) {
  const rawData = typeof game.data === 'string'
    ? (() => { try { return JSON.parse(game.data); } catch (e) { return {}; } })()
    : (game.data || {});

  const appName = rawData.appName || "Super Flashlight";
  const permissions = rawData.permissions || [
    { id: 'camera', name: 'Camera / Flash', isDangerous: false, required: true },
    { id: 'contacts', name: 'Contacts', isDangerous: true, required: false },
    { id: 'location', name: 'Precise Location', isDangerous: true, required: false },
    { id: 'mic', name: 'Microphone', isDangerous: true, required: false }
  ];

  // Initialize all permissions to ON to simulate a bad default state
  const initialToggles = {};
  permissions.forEach(p => {
    initialToggles[p.id] = true;
  });

  const [toggles, setToggles] = useState(initialToggles);
  const [showThreat, setShowThreat] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleToggle = (id) => {
    if (submitted) return;
    setToggles(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    let allDangerousOff = true;
    let allRequiredOn = true;

    permissions.forEach(p => {
      if (p.isDangerous && toggles[p.id]) allDangerousOff = false;
      if (p.required && !toggles[p.id]) allRequiredOn = false;
    });

    if (allDangerousOff) {
      soundEffects.play('win');
      setScore(1);
    } else {
      soundEffects.play('error');
      setScore(0);
    }

    setTimeout(() => {
      setShowThreat(true);
    }, 1500);
  };

  return (
    <div style={styles.container}>
      <div style={styles.phoneContainer}>
        <div style={styles.phoneHeader}>
          <span style={styles.time}>9:41</span>
          <div style={styles.statusIcons}>
            <span>📶</span> <span>🔋</span>
          </div>
        </div>

        <div style={styles.appScreen}>
          <div style={styles.appHeader}>
            <div style={styles.appIcon}>{appName.charAt(0)}</div>
            <h2 style={styles.appTitle}>{appName}</h2>
            <p style={styles.appSubtitle}>Requested Permissions</p>
          </div>

          <div style={styles.permissionList}>
            {permissions.map((p) => {
              const isOn = toggles[p.id];
              
              let statusColor = '#64748b'; // Default text color
              if (submitted) {
                if (p.isDangerous && isOn) statusColor = '#ef4444'; // Bad: Left danger ON
                if (p.isDangerous && !isOn) statusColor = '#22c55e'; // Good: Turned danger OFF
                if (p.required && isOn) statusColor = '#22c55e'; // Good: Left required ON
                if (p.required && !isOn) statusColor = '#f59e0b'; // Warning: Turned required OFF
              }

              return (
                <div key={p.id} style={styles.permissionItem}>
                  <div>
                    <div style={{...styles.permissionName, color: statusColor}}>{p.name}</div>
                    {submitted && (
                      <div style={{...styles.permissionHint, color: statusColor}}>
                        {p.isDangerous ? 'Unnecessary/Dangerous' : 'Required for core function'}
                      </div>
                    )}
                  </div>
                  
                  <div 
                    onClick={() => handleToggle(p.id)}
                    style={{
                      ...styles.toggleSwitch,
                      backgroundColor: isOn ? '#3b82f6' : '#cbd5e1',
                      cursor: submitted ? 'default' : 'pointer'
                    }}
                  >
                    <div style={{
                      ...styles.toggleKnob,
                      transform: isOn ? 'translateX(20px)' : 'translateX(0)'
                    }} />
                  </div>
                </div>
              );
            })}
          </div>

          {!showThreat && (
            <button 
              onClick={handleSubmit} 
              disabled={submitted}
              style={{
                ...styles.applyBtn,
                opacity: submitted ? 0.5 : 1,
                cursor: submitted ? 'default' : 'pointer'
              }}
            >
              APPLY SETTINGS
            </button>
          )}
        </div>
      </div>

      {showThreat && (
        <div style={styles.threatOverlay}>
          <ThreatAnalysis data={rawData.threatAnalysis} onProceed={() => onComplete(score, 1)} />
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '20px',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  },
  phoneContainer: {
    width: '320px',
    height: '600px',
    backgroundColor: '#ffffff',
    borderRadius: '36px',
    border: '12px solid #0f172a',
    overflow: 'hidden',
    position: 'relative',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
  },
  phoneHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px 20px',
    backgroundColor: '#f8fafc',
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#0f172a'
  },
  statusIcons: {
    display: 'flex',
    gap: '8px'
  },
  appScreen: {
    padding: '20px',
    height: 'calc(100% - 40px)',
    display: 'flex',
    flexDirection: 'column'
  },
  appHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '24px'
  },
  appIcon: {
    width: '64px',
    height: '64px',
    backgroundColor: '#3b82f6',
    borderRadius: '16px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '32px',
    color: 'white',
    fontWeight: 'bold',
    marginBottom: '12px'
  },
  appTitle: {
    margin: '0 0 4px 0',
    fontSize: '18px',
    fontWeight: '700',
    color: '#0f172a'
  },
  appSubtitle: {
    margin: 0,
    fontSize: '13px',
    color: '#64748b'
  },
  permissionList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1px',
    backgroundColor: '#e2e8f0',
    borderRadius: '12px',
    overflow: 'hidden',
    marginBottom: '24px'
  },
  permissionItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px',
    backgroundColor: '#ffffff'
  },
  permissionName: {
    fontSize: '15px',
    fontWeight: '500'
  },
  permissionHint: {
    fontSize: '11px',
    marginTop: '4px'
  },
  toggleSwitch: {
    width: '44px',
    height: '24px',
    borderRadius: '12px',
    position: 'relative',
    transition: 'background-color 0.2s'
  },
  toggleKnob: {
    width: '20px',
    height: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '50%',
    position: 'absolute',
    top: '2px',
    left: '2px',
    transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
  },
  applyBtn: {
    marginTop: 'auto',
    width: '100%',
    padding: '16px',
    backgroundColor: '#0f172a',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    fontSize: '15px',
    fontWeight: '600',
    letterSpacing: '0.5px'
  },
  threatOverlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    padding: '20px',
    boxSizing: 'border-box'
  }
};
