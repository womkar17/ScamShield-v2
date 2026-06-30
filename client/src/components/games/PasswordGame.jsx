import React, { useState, useEffect } from 'react';

const PasswordGame = ({ game, onComplete }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [strengthScore, setStrengthScore] = useState(0);
  const [timeToHack, setTimeToHack] = useState('0.0001s');
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [checks, setChecks] = useState({
    length: false,
    uppercase: false,
    number: false,
    symbol: false
  });

  useEffect(() => {
    let score = 0;
    const newChecks = {
      length: password.length >= 12,
      uppercase: /[A-Z]/.test(password),
      number: /[0-9]/.test(password),
      symbol: /[^A-Za-z0-9]/.test(password)
    };

    if (newChecks.length) score += 25;
    if (newChecks.uppercase) score += 25;
    if (newChecks.number) score += 25;
    if (newChecks.symbol) score += 25;

    setChecks(newChecks);
    setStrengthScore(score);

    if (score === 0) setTimeToHack('0.0001s');
    else if (score === 25) setTimeToHack('12 seconds');
    else if (score === 50) setTimeToHack('45 minutes');
    else if (score === 75) setTimeToHack('14 days');
    else if (score === 100) setTimeToHack('4.2 billion years');

  }, [password]);

  const handleSubmit = () => {
    if (strengthScore === 100) {
      setShowAnalysis(true);
    }
  };

  if (showAnalysis) {
    const analysis = game.data?.threatAnalysis || {};
    return (
      <div style={styles.analysisOverlay}>
        <div style={styles.analysisCard}>
          <h2 style={styles.analysisTitle}>▶ THREAT ANALYSIS LOG</h2>
          
          <div style={styles.analysisSection}>
            <h3 style={styles.analysisSubtitle}>Psychology</h3>
            <p style={styles.analysisText}>{analysis.psychology || 'Brute force algorithms defeated.'}</p>
          </div>
          <div style={styles.analysisSection}>
            <h3 style={styles.analysisSubtitle}>Payload</h3>
            <p style={styles.analysisText}>{analysis.payload || 'Dictionary attacks nullified.'}</p>
          </div>
          <div style={styles.analysisSection}>
            <h3 style={styles.analysisSubtitle}>Defense</h3>
            <p style={styles.analysisText}>{analysis.defense || 'Entropy maximized for optimal defense.'}</p>
          </div>
          <button 
            style={styles.continueBtn} 
            onClick={() => onComplete(100, 100)}
          >
            ▶ CONTINUE
          </button>
        </div>
      </div>
    );
  }

  const isWeak = password.length > 0 && strengthScore < 50;

  return (
    <div style={styles.container}>
      <style>{`
        @keyframes hackingShake {
          0% { transform: translate(1px, 1px) rotate(0deg); }
          10% { transform: translate(-1px, -2px) rotate(-1deg); }
          20% { transform: translate(-3px, 0px) rotate(1deg); }
          30% { transform: translate(3px, 2px) rotate(0deg); }
          40% { transform: translate(1px, -1px) rotate(1deg); }
          50% { transform: translate(-1px, 2px) rotate(-1deg); }
          60% { transform: translate(-3px, 1px) rotate(0deg); }
          70% { transform: translate(3px, 1px) rotate(-1deg); }
          80% { transform: translate(-1px, -1px) rotate(1deg); }
          90% { transform: translate(1px, 2px) rotate(0deg); }
          100% { transform: translate(1px, -2px) rotate(-1deg); }
        }
      `}</style>
      <div style={{...styles.terminal, ...(isWeak ? styles.shake : {})}}>
        <div style={styles.header}>
          <h2 style={styles.title}>▶ HACKER TERMINAL V2.4</h2>
          <p style={styles.subtitle}>// TARGET: GENERATE UNCRACKABLE CIPHER</p>
        </div>

        <div style={styles.inputGroup}>
          <span style={styles.prompt}>▶</span>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            placeholder="ENTER_PASSWORD..."
            spellCheck="false"
          />
          <button 
            type="button" 
            onClick={() => setShowPassword(!showPassword)}
            style={styles.toggleBtn}
          >
            {showPassword ? '[HIDE]' : '[SHOW]'}
          </button>
        </div>

        <div style={styles.meterContainer}>
          <div style={styles.meterBackground}>
            <div 
              style={{
                ...styles.meterFill, 
                width: `${strengthScore}%`,
                backgroundColor: strengthScore === 100 ? '#0f0' : (strengthScore < 50 ? '#f00' : '#ff0')
              }} 
            />
          </div>
          <div style={styles.timeToHack}>
            CRACKING TIME: <span style={{ color: strengthScore === 100 ? '#0f0' : (strengthScore < 50 ? '#f00' : '#ff0') }}>{timeToHack}</span>
          </div>
        </div>

        <div style={styles.checklist}>
          <CheckItem checked={checks.length} text="LENGTH >= 12" />
          <CheckItem checked={checks.uppercase} text="CONTAINS UPPERCASE" />
          <CheckItem checked={checks.number} text="CONTAINS NUMBER" />
          <CheckItem checked={checks.symbol} text="CONTAINS SYMBOL" />
        </div>

        <button 
          onClick={handleSubmit} 
          disabled={strengthScore < 100}
          style={{
            ...styles.submitBtn,
            color: strengthScore === 100 ? '#0f0' : '#050',
            borderColor: strengthScore === 100 ? '#0f0' : '#050',
            cursor: strengthScore === 100 ? 'pointer' : 'not-allowed',
            boxShadow: strengthScore === 100 ? '0 0 10px #0f0' : 'none'
          }}
        >
          {strengthScore === 100 ? '▶ INITIATE SECURE LINK' : '▶ INSUFFICIENT ENTROPY'}
        </button>
      </div>
    </div>
  );
};

const CheckItem = ({ checked, text }) => (
  <div style={styles.checkItem}>
    <span style={{...styles.checkIcon, color: checked ? '#0f0' : '#050'}}>
      {checked ? '[X]' : '[ ]'}
    </span>
    <span style={{...styles.checkText, color: checked ? '#0f0' : '#050'}}>
      {text}
    </span>
  </div>
);

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '20px',
    fontFamily: '"Courier New", Courier, monospace',
    boxSizing: 'border-box'
  },
  terminal: {
    backgroundColor: '#000',
    borderRadius: '8px',
    border: '2px solid #0f0',
    boxShadow: '0 0 20px rgba(0, 255, 0, 0.2)',
    width: '100%',
    maxWidth: '550px',
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
    color: '#0f0'
  },
  shake: {
    animation: 'hackingShake 0.4s infinite'
  },
  header: {
    borderBottom: '1px dashed #0f0',
    paddingBottom: '15px'
  },
  title: {
    margin: '0 0 10px 0',
    fontSize: '1.4rem',
    textShadow: '0 0 5px #0f0'
  },
  subtitle: {
    margin: 0,
    fontSize: '0.9rem',
    opacity: 0.8
  },
  inputGroup: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  },
  prompt: {
    position: 'absolute',
    left: '15px',
    fontSize: '1.2rem'
  },
  input: {
    width: '100%',
    padding: '15px 70px 15px 35px',
    backgroundColor: '#0a0a0a',
    border: '1px solid #0f0',
    color: '#0f0',
    fontSize: '1.2rem',
    fontFamily: '"Courier New", Courier, monospace',
    outline: 'none',
    boxSizing: 'border-box',
    textShadow: '0 0 2px #0f0'
  },
  toggleBtn: {
    position: 'absolute',
    right: '15px',
    background: 'none',
    border: 'none',
    color: '#0f0',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontFamily: '"Courier New", Courier, monospace'
  },
  meterContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  meterBackground: {
    height: '12px',
    width: '100%',
    backgroundColor: '#111',
    border: '1px solid #050'
  },
  meterFill: {
    height: '100%',
    transition: 'width 0.3s ease, background-color 0.3s ease'
  },
  timeToHack: {
    fontSize: '0.95rem',
    textAlign: 'right',
    textTransform: 'uppercase'
  },
  checklist: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    backgroundColor: '#050505',
    padding: '20px',
    border: '1px dashed #050'
  },
  checkItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  checkIcon: {
    fontSize: '1.2rem',
    fontWeight: 'bold'
  },
  checkText: {
    fontSize: '0.95rem',
    textTransform: 'uppercase'
  },
  submitBtn: {
    padding: '16px',
    backgroundColor: 'transparent',
    border: '2px solid',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    fontFamily: '"Courier New", Courier, monospace',
    transition: 'all 0.2s',
    textTransform: 'uppercase'
  },
  analysisOverlay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '20px',
    boxSizing: 'border-box',
    fontFamily: '"Courier New", Courier, monospace'
  },
  analysisCard: {
    backgroundColor: '#000',
    border: '2px solid #0f0',
    boxShadow: '0 0 20px rgba(0, 255, 0, 0.4)',
    padding: '30px',
    maxWidth: '550px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    color: '#0f0'
  },
  analysisTitle: {
    margin: '0 0 10px 0',
    fontSize: '1.5rem',
    borderBottom: '1px dashed #0f0',
    paddingBottom: '10px'
  },
  analysisSection: {
    backgroundColor: '#050505',
    padding: '15px',
    border: '1px dotted #050'
  },
  analysisSubtitle: {
    margin: '0 0 8px 0',
    fontSize: '1.1rem',
    color: '#0a0'
  },
  analysisText: {
    margin: '0',
    lineHeight: '1.5'
  },
  continueBtn: {
    marginTop: '15px',
    padding: '15px',
    backgroundColor: '#0a0',
    color: '#000',
    border: 'none',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontFamily: '"Courier New", Courier, monospace'
  }
};

export default PasswordGame;
