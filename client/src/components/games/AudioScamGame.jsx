import React, { useState, useEffect, useRef } from 'react';
import ThreatAnalysis from './ThreatAnalysis';
import { soundEffects } from '../../utils/soundEffects';

export default function AudioScamGame({ game, onComplete }) {
  const rawData = typeof game.data === 'string'
    ? (() => { try { return JSON.parse(game.data); } catch (e) { return {}; } })()
    : (game.data || {});

  const script = (Array.isArray(rawData.script) && rawData.script.length > 0)
    ? rawData.script
    : [
        { text: 'Hello, this is the bank security department calling regarding your account.', isRedFlag: false },
        { text: 'We detected an unauthorized transaction attempt.', isRedFlag: false },
        { text: 'Please read out the 6-digit OTP code sent to your phone right now to block it.', isRedFlag: true },
        { text: 'If you hang up, your bank account will be permanently frozen.', isRedFlag: true }
      ]; 
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [showThreat, setShowThreat] = useState(false);
  const [score, setScore] = useState(0);
  const [scriptIndex, setScriptIndex] = useState(0);
  const [hasHungUp, setHasHungUp] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  
  const synth = window.speechSynthesis;
  const timerRef = useRef(null);
  const utteranceRef = useRef(null);

  useEffect(() => {
    return () => {
      if (synth) synth.cancel();
      clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (isPlaying && !hasHungUp && !callEnded) {
      if (scriptIndex < script.length) {
        speakSegment(script[scriptIndex]);
      } else {
        // Script finished naturally without user hanging up
        endCall(false);
      }
    }
  }, [scriptIndex, isPlaying, hasHungUp, callEnded]);

  const speakSegment = (segment) => {
    if (hasHungUp || callEnded) return;
    
    synth.cancel(); // ensure any previous is cleared
    const utterance = new SpeechSynthesisUtterance(segment.text);
    utteranceRef.current = utterance;
    
    // Slight adjustments to sound more like a scammy call
    utterance.rate = 0.95;
    utterance.pitch = 0.9;
    
    utterance.onend = () => {
      setScriptIndex(prev => prev + 1);
    };
    
    synth.speak(utterance);
  };

  const startCall = () => {
    soundEffects.play('click');
    setIsPlaying(true);
    setScore(0);
    timerRef.current = setInterval(() => {
      setCallDuration(prev => prev + 1);
    }, 1000);
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleHangUp = () => {
    setHasHungUp(true);
    if (synth) synth.cancel();
    
    // Evaluate timing
    const currentSegment = script[scriptIndex];
    if (currentSegment && currentSegment.isRedFlag) {
      soundEffects.play('win');
      setScore(1); 
    } else {
      soundEffects.play('error');
      setScore(0); 
    }
    
    endCall(true);
  };

  const endCall = (userHungUp) => {
    setCallEnded(true);
    clearInterval(timerRef.current);
    if (!userHungUp) {
      soundEffects.play('error');
      setScore(0); // missed the red flag entirely
    }
    setTimeout(() => setShowThreat(true), 1200);
  };

  const handleComplete = () => {
    onComplete(score, 1);
  };

  return (
    <div style={{ 
      position: 'relative', width: '100%', maxWidth: '360px', height: '640px', 
      margin: '0 auto', backgroundColor: '#1c1c1e', borderRadius: '32px', 
      overflow: 'hidden', display: 'flex', flexDirection: 'column', 
      color: 'white', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
      fontFamily: '-apple-system, system-ui, sans-serif'
    }}>
      
      {/* Phone UI Header */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', gap: '24px' }}>
        <div style={{ 
          width: '110px', height: '110px', borderRadius: '50%', 
          backgroundColor: '#2c2c2e', display: 'flex', justifyContent: 'center', 
          alignItems: 'center', fontSize: '50px', overflow: 'hidden' 
        }}>
          📱
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ margin: '0 0 12px 0', fontSize: '30px', fontWeight: '300' }}>{data.callerName || 'Unknown Caller'}</h2>
          <p style={{ margin: 0, color: '#98989f', fontSize: '18px', fontVariantNumeric: 'tabular-nums' }}>
            {callEnded ? 'Call Ended' : (isPlaying ? formatTime(callDuration) : 'Incoming Call...')}
          </p>
        </div>
        
        {!isPlaying && !callEnded && (
          <div style={{ 
            marginTop: '30px', padding: '16px', backgroundColor: 'rgba(58, 130, 246, 0.1)', 
            borderRadius: '12px', border: '1px solid rgba(58, 130, 246, 0.2)' 
          }}>
            <p style={{ color: '#60a5fa', textAlign: 'center', margin: 0, fontSize: '14px', lineHeight: '1.5' }}>
              <strong>Instructions:</strong> Listen closely. If you hear a verbal red flag (like asking for passwords or payment), tap <strong>HANG UP</strong> immediately!
            </p>
          </div>
        )}
      </div>

      {/* Controls */}
      <div style={{ padding: '40px 20px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px', paddingBottom: '60px' }}>
        {!isPlaying && !callEnded ? (
          <button onClick={startCall} style={{
            width: '76px', height: '76px', borderRadius: '50%', backgroundColor: '#34c759',
            border: 'none', color: 'white', fontSize: '32px', cursor: 'pointer',
            boxShadow: '0 10px 20px rgba(52, 199, 89, 0.3)',
            transition: 'transform 0.2s',
            display: 'flex', justifyContent: 'center', alignItems: 'center'
          }}
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <span style={{ transform: 'rotate(135deg)', display: 'inline-block' }}>📞</span>
          </button>
        ) : (
          <button onClick={handleHangUp} disabled={callEnded} style={{
            width: '76px', height: '76px', borderRadius: '50%', backgroundColor: '#ff3b30',
            border: 'none', color: 'white', fontSize: '32px', cursor: callEnded ? 'default' : 'pointer',
            boxShadow: callEnded ? 'none' : '0 10px 20px rgba(255, 59, 48, 0.3)',
            transition: 'transform 0.2s, opacity 0.3s',
            opacity: callEnded ? 0.5 : 1,
            display: 'flex', justifyContent: 'center', alignItems: 'center'
          }}
          onMouseOver={e => !callEnded && (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={e => !callEnded && (e.currentTarget.style.transform = 'scale(1)')}
          >
            <span style={{ transform: 'rotate(135deg)', display: 'inline-block' }}>📞</span>
          </button>
        )}
      </div>

      {showThreat && (
        <ThreatAnalysis data={data.threatAnalysis} onProceed={handleComplete} />
      )}
    </div>
  );
}
