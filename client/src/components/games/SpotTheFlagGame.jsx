import React, { useState, useRef } from 'react';
import { soundEffects } from '../../utils/soundEffects';

const SpotTheFlagGame = ({ game, onComplete }) => {
  const [foundFlags, setFoundFlags] = useState([]);
  const [showTooltip, setShowTooltip] = useState(null);
  const [showAnalysis, setShowAnalysis] = useState(false);

  // Magnifier state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, w: 0, h: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const areaRef = useRef(null);

  const rawData = typeof game.data === 'string'
    ? (() => { try { return JSON.parse(game.data); } catch (e) { return {}; } })()
    : (game.data || {});

  const fallbackContent = `<div style="font-family:Arial,sans-serif;padding:24px;background:#ffffff;color:#222222;border-radius:12px;border:1px solid #e2e8f0;box-shadow:0 4px 6px rgba(0,0,0,0.05)"><div style="background:#1a73e8;color:white;padding:16px;border-radius:8px 8px 0 0;margin:-24px -24px 20px -24px"><strong>From:</strong> security@g00gle-verify.net</div><p>Dear Valued Custmer,</p><p>We detected unusual login activity. Your account will be <b style="color:#dc2626">PERMANENTLY BLOCKED</b> within 24 hours.</p><p style="margin:20px 0"><a style="background:#1a73e8;color:white;padding:10px 20px;border-radius:6px;text-decoration:none;display:inline-block">Verify Identity Now</a></p><p style="font-size:12px;color:#64748b">Link target: http://g00gle-verify.net/login.php</p></div>`;

  const fallbackFlags = [
    { id: 'f1', text: 'Custmer', hint: 'Spelling typo in customer greeting.' },
    { id: 'f2', text: 'PERMANENTLY BLOCKED', hint: 'Artificial extreme urgency language.' },
    { id: 'f3', text: 'g00gle-verify.net', hint: 'Fake lookalike domain with zeros instead of o\'s.' }
  ];

  const content = rawData.content || rawData.html || rawData.emailContent || game.content || fallbackContent;
  const flags = (Array.isArray(rawData.flags) && rawData.flags.length > 0)
    ? rawData.flags
    : (Array.isArray(game.flags) && game.flags.length > 0 ? game.flags : fallbackFlags);
  const isImage = typeof content === 'string' && (content.startsWith('http') || content.startsWith('/'));

  const handleFlagClick = (flag) => {
    if (!foundFlags.includes(flag.id)) {
      soundEffects.play('success');
      const newFound = [...foundFlags, flag.id];
      setFoundFlags(newFound);
      setShowTooltip(flag.id);
      
      // Hide tooltip after a bit
      setTimeout(() => {
        setShowTooltip(null);
        if (newFound.length === flags.length && flags.length > 0) {
          soundEffects.play('win');
          setTimeout(() => {
            setShowAnalysis(true);
          }, 1000);
        }
      }, 2500);
    }
  };

  const handleMouseMove = (e) => {
    if (!areaRef.current) return;
    const { left, top, width, height } = areaRef.current.getBoundingClientRect();
    setMousePos({ 
      x: e.clientX - left, 
      y: e.clientY - top,
      w: width,
      h: height
    });
  };

  if (showAnalysis) {
    const analysis = rawData.threatAnalysis || game.threatAnalysis || {};
    return (
      <div style={styles.analysisOverlay}>
        <div style={styles.analysisCard}>
          <h2 style={styles.analysisTitle}>Threat Analysis Complete</h2>
          <div style={styles.analysisScore}>Flags Identified: {foundFlags.length} / {flags.length}</div>
          
          <div style={styles.analysisSection}>
            <h3 style={styles.analysisSubtitle}>Psychology</h3>
            <p style={styles.analysisText}>{analysis.psychology || 'Deception techniques identified.'}</p>
          </div>
          <div style={styles.analysisSection}>
            <h3 style={styles.analysisSubtitle}>Payload</h3>
            <p style={styles.analysisText}>{analysis.payload || 'Malicious intent verified.'}</p>
          </div>
          <div style={styles.analysisSection}>
            <h3 style={styles.analysisSubtitle}>Defense</h3>
            <p style={styles.analysisText}>{analysis.defense || 'Vigilance maintained.'}</p>
          </div>
          <button 
            style={styles.continueBtn} 
            onClick={() => onComplete(foundFlags.length, flags.length)}
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  const magnifierSize = 160;
  const zoomLevel = 2;

  const getProcessedHtml = () => {
    if (isImage || !content || typeof content !== 'string') return content;
    let processed = content;
    flags.forEach(flag => {
      if (flag.text && flag.top === undefined) {
        const isFound = foundFlags.includes(flag.id);
        const bg = isFound ? 'rgba(245, 101, 101, 0.3)' : 'transparent';
        const border = isFound ? '2px solid #f56565' : '2px solid transparent';
        const shadow = isFound ? '0 0 10px rgba(245, 101, 101, 0.5)' : 'none';
        const esc = flag.text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`(${esc})`, 'g');
        processed = processed.replace(regex, `<span class="spot-target-span" data-flag-id="${flag.id}" style="background-color: ${bg}; border-bottom: ${border}; box-shadow: ${shadow}; border-radius: 4px; padding: 2px 6px; cursor: pointer; transition: all 0.2s; display: inline; line-height: inherit; vertical-align: baseline; word-break: break-word;">$1</span>`);
      }
    });
    return processed;
  };

  const handleAreaClick = (e) => {
    const target = e.target.closest('.spot-target-span');
    if (target) {
      const flagId = target.getAttribute('data-flag-id');
      const flag = flags.find(f => f.id === flagId);
      if (flag) handleFlagClick(flag);
    }
  };

  return (
    <div style={styles.container}>
      <style>{`
        @keyframes redPulse {
          0% { box-shadow: 0 0 0 0 rgba(245, 101, 101, 0.7); }
          70% { box-shadow: 0 0 0 15px rgba(245, 101, 101, 0); }
          100% { box-shadow: 0 0 0 0 rgba(245, 101, 101, 0); }
        }
      `}</style>
      <div style={styles.header}>
        <div style={styles.scoreBoard}>
          <span style={styles.statText}>
            Flags Found: {foundFlags.length} / {flags.length}
          </span>
        </div>
        <p style={styles.instructions}>Use the magnifying glass to find and click all the suspicious elements (red flags)!</p>
      </div>

      <div 
        ref={areaRef}
        style={styles.gameArea}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={handleAreaClick}
      >
        {isImage ? (
          <img src={content} alt="Spot the flags" style={styles.contentImg} />
        ) : (
          <div style={styles.contentHtml} dangerouslySetInnerHTML={{ __html: getProcessedHtml() }} />
        )}

        {/* Magnifier */}
        {isHovering && (
          <div style={{
            position: 'absolute',
            pointerEvents: 'none',
            zIndex: 100,
            width: magnifierSize,
            height: magnifierSize,
            borderRadius: '50%',
            border: '3px solid #4299e1',
            boxShadow: '0 0 15px rgba(0,0,0,0.2)',
            backgroundColor: '#fff',
            left: mousePos.x - magnifierSize / 2,
            top: mousePos.y - magnifierSize / 2,
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              width: mousePos.w,
              height: mousePos.h,
              transform: `scale(${zoomLevel})`,
              transformOrigin: '0 0',
              left: -mousePos.x * zoomLevel + magnifierSize / 2,
              top: -mousePos.y * zoomLevel + magnifierSize / 2,
            }}>
              {isImage ? (
                <img src={content} alt="Magnified content" style={styles.contentImg} />
              ) : (
                <div style={styles.contentHtml} dangerouslySetInnerHTML={{ __html: getProcessedHtml() }} />
              )}
            </div>
          </div>
        )}

        {/* Overlays for flags that have explicit top/left coordinates */}
        {flags.filter(flag => flag.top !== undefined && flag.left !== undefined).map(flag => {
          const isFound = foundFlags.includes(flag.id);
          return (
            <div
              key={flag.id}
              onClick={(e) => { e.stopPropagation(); handleFlagClick(flag); }}
              style={{
                ...styles.flagOverlay,
                top: flag.top,
                left: flag.left,
                width: flag.width,
                height: flag.height,
                border: isFound ? '2px solid #f56565' : '2px dashed transparent',
                backgroundColor: isFound ? 'rgba(245, 101, 101, 0.2)' : 'transparent',
                cursor: isFound ? 'default' : 'pointer',
                animation: isFound ? 'redPulse 1.5s infinite' : 'none',
                zIndex: 110 // Ensures we can always click flags, even over magnifier
              }}
            >
              {isFound && showTooltip === flag.id && (
                <div style={styles.tooltip}>
                  {flag.description || 'Red Flag Found!'}
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      {foundFlags.length === flags.length && (
        <div style={styles.successMessage}>
          Great job! You found all the red flags.
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: '"Inter", sans-serif',
  },
  header: {
    width: '100%',
    marginBottom: '20px',
    textAlign: 'center'
  },
  scoreBoard: {
    marginBottom: '10px'
  },
  statText: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    color: '#2d3748',
    backgroundColor: '#edf2f7',
    padding: '8px 16px',
    borderRadius: '20px'
  },
  instructions: {
    color: '#718096',
    fontSize: '1rem',
    marginTop: '15px'
  },
  gameArea: {
    position: 'relative',
    width: '100%',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    border: '1px solid #e2e8f0',
    cursor: 'crosshair'
  },
  contentImg: {
    width: '100%',
    height: 'auto',
    display: 'block'
  },
  contentHtml: {
    width: '100%',
    minHeight: '400px',
    padding: '20px',
    boxSizing: 'border-box',
    lineHeight: '1.6',
    fontSize: '16px'
  },
  flagOverlay: {
    position: 'absolute',
    transition: 'background-color 0.3s ease, border 0.3s ease',
    borderRadius: '4px'
  },
  tooltip: {
    position: 'absolute',
    bottom: '110%',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#2d3748',
    color: '#fff',
    padding: '8px 12px',
    borderRadius: '6px',
    fontSize: '0.85rem',
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
    zIndex: 120,
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  successMessage: {
    marginTop: '20px',
    padding: '15px 25px',
    backgroundColor: '#c6f6d5',
    color: '#276749',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    animation: 'pulse 2s infinite'
  },
  analysisOverlay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '20px',
    boxSizing: 'border-box',
    fontFamily: '"Inter", sans-serif'
  },
  analysisCard: {
    backgroundColor: '#fff',
    borderRadius: '16px',
    padding: '30px',
    maxWidth: '500px',
    width: '100%',
    boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  analysisTitle: {
    margin: '0',
    color: '#2d3748',
    fontSize: '1.5rem',
    textAlign: 'center'
  },
  analysisScore: {
    textAlign: 'center',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#4299e1',
    marginBottom: '10px'
  },
  analysisSection: {
    backgroundColor: '#f7fafc',
    padding: '15px',
    borderRadius: '8px'
  },
  analysisSubtitle: {
    margin: '0 0 5px 0',
    fontSize: '1.1rem',
    color: '#4a5568'
  },
  analysisText: {
    margin: '0',
    color: '#2d3748',
    lineHeight: '1.5'
  },
  continueBtn: {
    marginTop: '15px',
    padding: '15px',
    backgroundColor: '#4299e1',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer'
  }
};

export default SpotTheFlagGame;
