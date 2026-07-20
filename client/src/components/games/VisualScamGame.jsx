import React, { useState } from 'react';
import ThreatAnalysis from './ThreatAnalysis';
import { soundEffects } from '../../utils/soundEffects';

export default function VisualScamGame({ game, onComplete }) {
  const rawData = typeof game.data === 'string'
    ? (() => { try { return JSON.parse(game.data); } catch (e) { return {}; } })()
    : (game.data || {});

  const content = rawData.content || `<div style="background:#1a1a2e;padding:30px;border-radius:12px;text-align:center;color:white;border:2px solid #e94560"><div style="background:#16213e;padding:20px;border-radius:8px;margin-bottom:15px"><h3 style="color:#e94560">EMERGENCY WIRE REQUEST</h3><p>CEO Executive Office</p><p style="font-size:12px;color:#888">Server connection: meet-secure-external.io</p></div><p style="color:#e94560;font-size:14px">Notice: Deepfake artifacts and latency mismatch detected</p></div>`;
  const isFake = rawData.isFake !== false;
  
  const [filterActive, setFilterActive] = useState(false);
  const [showThreat, setShowThreat] = useState(false);
  const [score, setScore] = useState(0);
  const [scanned, setScanned] = useState(false);

  const toggleFilter = () => {
    soundEffects.play('click');
    setFilterActive(!filterActive);
  };

  const handleScanComplete = (userSaidFake) => {
    setScanned(true);
    const correct = userSaidFake === isFake;
    if (correct) {
      soundEffects.play('success');
      setScore(1);
    } else {
      soundEffects.play('error');
      setScore(0);
    }
    setTimeout(() => {
      if (correct) soundEffects.play('win');
      setShowThreat(true);
    }, 1500);
  };

  const handleComplete = () => {
    onComplete(score, 1);
  };

  return (
    <div style={{ 
      position: 'relative', width: '100%', maxWidth: '800px', margin: '0 auto', 
      backgroundColor: '#1e293b', borderRadius: '16px', overflow: 'hidden', 
      display: 'flex', flexDirection: 'column', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      
      {/* Toolbar */}
      <div style={{ backgroundColor: '#0f172a', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #334155' }}>
        <div>
          <h3 style={{ margin: '0 0 4px 0', color: 'white', fontSize: '18px' }}>Forensic Scanner</h3>
          <p style={{ margin: 0, color: '#94a3b8', fontSize: '13px' }}>Scan the content for hidden artifacts or manipulations.</p>
        </div>
        <button 
          onClick={toggleFilter}
          style={{
            padding: '10px 18px',
            backgroundColor: filterActive ? '#3b82f6' : 'transparent',
            border: '2px solid #3b82f6',
            color: filterActive ? 'white' : '#3b82f6',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '14px',
            transition: 'all 0.2s',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
          onMouseOver={e => !filterActive && (e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.1)')}
          onMouseOut={e => !filterActive && (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          <span>🔍</span> {filterActive ? 'Disable Contrast Filter' : 'Enable Contrast Filter'}
        </button>
      </div>

      {/* Main Content Area */}
      <div style={{ 
        position: 'relative', padding: '32px', display: 'flex', justifyContent: 'center', 
        alignItems: 'center', backgroundColor: '#f1f5f9', minHeight: '400px',
        backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}>
        
        <div style={{
          position: 'relative',
          transition: 'all 0.4s ease',
          filter: filterActive ? 'contrast(300%) brightness(85%) saturate(150%) hue-rotate(90deg)' : 'none',
          boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
          borderRadius: '12px',
          overflow: 'hidden',
          backgroundColor: 'white',
          maxWidth: '100%'
        }}>
          {rawData.contentType === 'html' ? (
            <div dangerouslySetInnerHTML={{ __html: content }} style={{ padding: '24px', pointerEvents: 'none' }} />
          ) : (
            <img src={content || 'https://via.placeholder.com/600x400/e2e8f0/64748b?text=Suspicious+Content'} alt="Scan Target" style={{ maxWidth: '100%', display: 'block', pointerEvents: 'none' }} />
          )}
          
          {/* Artifact overlay that reveals when filtered */}
          {filterActive && isFake && (
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              pointerEvents: 'none',
              background: 'radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.4) 0%, transparent 40%)',
              opacity: 0.8,
              mixBlendMode: 'multiply'
            }}>
              {/* Optional region highlights */}
              {rawData.artifactRegions?.map((region, i) => (
                <div key={i} style={{
                  position: 'absolute',
                  top: region.top, left: region.left, width: region.width, height: region.height,
                  border: '3px dashed #ef4444',
                  backgroundColor: 'rgba(239, 68, 68, 0.1)'
                }} />
              ))}
            </div>
          )}
        </div>

      </div>

      {/* Action Footer */}
      {!scanned ? (
        <div style={{ padding: '24px', backgroundColor: '#1e293b', borderTop: '1px solid #334155', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <p style={{ color: '#e2e8f0', margin: 0, fontSize: '16px', fontWeight: '500' }}>Did you find evidence of manipulation in this content?</p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <button onClick={() => handleScanComplete(true)} style={{
              padding: '12px 32px', backgroundColor: '#ef4444', border: 'none', borderRadius: '8px', color: 'white', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer', transition: 'background-color 0.2s, transform 0.1s', boxShadow: '0 4px 6px rgba(239, 68, 68, 0.2)'
            }} 
            onMouseOver={e=>e.currentTarget.style.backgroundColor='#dc2626'} 
            onMouseOut={e=>e.currentTarget.style.backgroundColor='#ef4444'}
            onMouseDown={e=>e.currentTarget.style.transform='scale(0.97)'}
            onMouseUp={e=>e.currentTarget.style.transform='scale(1)'}>
              Yes, it's fake
            </button>
            <button onClick={() => handleScanComplete(false)} style={{
              padding: '12px 32px', backgroundColor: '#22c55e', border: 'none', borderRadius: '8px', color: 'white', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer', transition: 'background-color 0.2s, transform 0.1s', boxShadow: '0 4px 6px rgba(34, 197, 94, 0.2)'
            }} 
            onMouseOver={e=>e.currentTarget.style.backgroundColor='#16a34a'} 
            onMouseOut={e=>e.currentTarget.style.backgroundColor='#22c55e'}
            onMouseDown={e=>e.currentTarget.style.transform='scale(0.97)'}
            onMouseUp={e=>e.currentTarget.style.transform='scale(1)'}>
              No, looks authentic
            </button>
          </div>
        </div>
      ) : (
        <div style={{ padding: '24px', backgroundColor: '#1e293b', borderTop: '1px solid #334155', textAlign: 'center' }}>
          <p style={{ color: score > 0 ? '#4ade80' : '#ef4444', margin: 0, fontSize: '18px', fontWeight: 'bold' }}>
            {score > 0 ? '✓ Correct Diagnosis' : '✗ Incorrect Diagnosis'}
          </p>
        </div>
      )}

      {showThreat && (
        <ThreatAnalysis data={rawData.threatAnalysis} onProceed={handleComplete} />
      )}
    </div>
  );
}
