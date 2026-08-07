import React, { useEffect } from 'react';
import { useEnvironmentCheck } from '../../hooks/useEnvironmentCheck';

const EnvironmentCheck = ({ onComplete }) => {
  const { checks, allPassed, runChecks, isChecking } = useEnvironmentCheck();

  useEffect(() => {
    // Run checks automatically on mount
    runChecks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getStatusIcon = (status, isWarning) => {
    if (status === 'pending') return '⏳';
    if (status === 'pass') return '✅';
    if (status === 'fail' && isWarning) return '⚠️';
    return '❌';
  };

  const getStatusColor = (status, isWarning) => {
    if (status === 'pass') return '#22c55e'; // green
    if (status === 'fail' && isWarning) return '#f59e0b'; // amber
    if (status === 'fail') return '#ef4444'; // red
    return 'var(--text2)'; // pending/gray
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🔒 Pre-Exam System Check</h2>
      <p style={styles.subtitle}>
        Your environment must meet all security requirements before you can begin the Proctored Exam.
      </p>

      <div style={styles.list}>
        {Object.entries(checks).map(([key, check]) => (
          <div key={key} style={styles.checkItem}>
            <div style={styles.checkHeader}>
              <div style={styles.checkLabel}>
                <span style={styles.icon}>{getStatusIcon(check.status, check.isWarning)}</span>
                <span style={{ color: getStatusColor(check.status, check.isWarning), fontWeight: 'bold' }}>
                  {check.label}
                </span>
              </div>
              <div style={styles.statusText}>
                {check.status === 'pending' && 'Checking...'}
                {check.status === 'pass' && 'Passed'}
                {check.status === 'fail' && (check.isWarning ? 'Warning' : 'Failed')}
              </div>
            </div>
            {check.error && (
              <div style={{ ...styles.errorText, color: check.isWarning ? '#f59e0b' : '#ef4444' }}>
                {check.error}
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={styles.actions}>
        <button 
          onClick={runChecks} 
          disabled={isChecking}
          style={{ ...styles.button, background: 'var(--bg3)', color: 'var(--text)' }}
        >
          {isChecking ? 'Checking...' : 'Re-Check Environment'}
        </button>
        <button 
          onClick={onComplete}
          disabled={!allPassed || isChecking}
          style={{ 
            ...styles.button, 
            background: allPassed && !isChecking ? 'linear-gradient(135deg, #3b82f6, #1d4ed8)' : '#475569',
            cursor: allPassed && !isChecking ? 'pointer' : 'not-allowed',
            opacity: allPassed && !isChecking ? 1 : 0.6
          }}
        >
          Proceed to Room Scan ➔
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: 'var(--bg2)',
    padding: '2.5rem',
    borderRadius: '16px',
    border: '1px solid var(--border)',
    maxWidth: '600px',
    width: '100%',
    margin: '0 auto',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
  },
  title: {
    margin: '0 0 0.5rem 0',
    color: 'var(--text)',
    fontSize: '1.8rem',
    textAlign: 'center'
  },
  subtitle: {
    margin: '0 0 2rem 0',
    color: 'var(--text2)',
    textAlign: 'center',
    fontSize: '0.95rem'
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '2rem'
  },
  checkItem: {
    background: 'var(--bg)',
    padding: '1rem',
    borderRadius: '10px',
    border: '1px solid var(--border)'
  },
  checkHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  checkLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '1.1rem'
  },
  icon: {
    fontSize: '1.2rem'
  },
  statusText: {
    color: 'var(--text2)',
    fontSize: '0.9rem',
    fontWeight: 'bold'
  },
  errorText: {
    marginTop: '0.8rem',
    fontSize: '0.9rem',
    padding: '0.5rem',
    background: 'rgba(0,0,0,0.2)',
    borderRadius: '6px'
  },
  actions: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center'
  },
  button: {
    padding: '0.8rem 1.5rem',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export default EnvironmentCheck;
