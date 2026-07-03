import React, { useState, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { GamificationContext } from '../context/GamificationContext';
import { MINIGAMES } from '../data/minigames';
import { soundEffects } from '../utils/soundEffects';
import SwipeGame from '../components/games/SwipeGame';
import SpotTheFlagGame from '../components/games/SpotTheFlagGame';
import PasswordGame from '../components/games/PasswordGame';
import QuizGame from '../components/games/QuizGame';
import ChatGame from '../components/games/ChatGame';
import AudioScamGame from '../components/games/AudioScamGame';
import VisualScamGame from '../components/games/VisualScamGame';

const GamesPage = () => {
  const navigate = useNavigate();
  const { logAttempt } = useContext(AppContext);
  const { addXP } = useContext(GamificationContext);
  const [activeGame, setActiveGame] = useState(null);
  const [completedModal, setCompletedModal] = useState(null);
  const [generatingAi, setGeneratingAi] = useState(false);

  const [customGames, setCustomGames] = useState(() => {
    try {
      const saved = localStorage.getItem('ss_custom_games');
      return saved ? JSON.parse(saved) : [];
    } catch (e) { return []; }
  });

  const normalizeGame = (g) => {
    if (g.data && g.data.threatAnalysis) return g;
    const desc = g.description || "Can you spot the social engineering manipulation in this scenario?";
    return {
      ...g,
      thumbnail: g.thumbnail || '🎯',
      data: g.data || {
        scenario: desc,
        question: `Why is "${g.title}" suspicious and potentially dangerous?`,
        options: [
          { text: "It uses urgent language and demands immediate action without verification.", isCorrect: true },
          { text: "It is from an internal domain with a valid certificate.", isCorrect: false },
          { text: "It offers a standard company benefit through normal HR portals.", isCorrect: false }
        ],
        threatAnalysis: {
          psychology: "Scammers rely on authority and artificial urgency to trigger impulse reactions without double-checking.",
          payload: "May lead to credential theft, ransomware download, or financial wire fraud.",
          defense: "Always verify unexpected requests via a separate communication channel before acting."
        }
      }
    };
  };

  const handleAIGenerateGame = async () => {
    setGeneratingAi(true);
    try {
      const apiUrl = window.location.hostname === 'localhost' ? 'http://localhost:5000' : '';
      const prompt = `Generate an innovative, fun cybersecurity scam awareness mini-game challenge.
Return ONLY a JSON object with this exact schema:
{
  "title": "Short catchy game title",
  "description": "2 sentence scenario describing an attempted social engineering scam",
  "difficulty": "Medium",
  "xpReward": 100,
  "type": "quiz",
  "thumbnail": "🤖",
  "data": {
    "scenario": "Detailed scenario context",
    "question": "What is the critical red flag in this situation?",
    "options": [
      { "text": "The correct red flag identification", "isCorrect": true },
      { "text": "Plausible incorrect assumption A", "isCorrect": false },
      { "text": "Plausible incorrect assumption B", "isCorrect": false }
    ],
    "threatAnalysis": {
      "psychology": "Psychological manipulation technique used",
      "payload": "Consequences if user falls for it",
      "defense": "Best defensive action to take"
    }
  }
}`;
      const res = await fetch(`${apiUrl}/api/ai/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [{ role: 'user', content: prompt }] })
      });
      const data = await res.json();
      if (data.ok && data.reply) {
        let parsed = null;
        try {
          const match = data.reply.match(/\{[\s\S]*\}/);
          if (match) parsed = JSON.parse(match[0]);
        } catch (e) {}
        if (parsed && parsed.title) {
          const newGame = { ...parsed, id: Date.now() };
          const updated = [newGame, ...customGames];
          setCustomGames(updated);
          localStorage.setItem('ss_custom_games', JSON.stringify(updated));
          soundEffects.play('success');
          alert(`✨ AI Generated a brand new game: "${newGame.title}"! It is now playable below in the Community Games section!`);
        } else {
          alert("AI generated a scenario, but JSON formatting was slightly off. Please try again!");
        }
      }
    } catch (err) {
      alert("AI Game Generation failed: " + err.message);
    } finally {
      setGeneratingAi(false);
    }
  };

  const dailyGames = useMemo(() => {
    const today = new Date().toISOString().split('T')[0];
    let seed = parseInt(today.replace(/-/g, ''));
    
    const random = () => {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };

    // Shuffle and pick 10
    const shuffled = [...MINIGAMES].sort(() => random() - 0.5);
    return shuffled.slice(0, 10);
  }, []);

  const handleGameComplete = (success) => {
    if (success && activeGame) {
      const xp = activeGame.xpReward || 50;
      if (addXP) {
        addXP(xp);
      }
      soundEffects.play('win');
      setCompletedModal({ title: activeGame.title, xp, success: true });
    } else if (activeGame) {
      soundEffects.play('gameover');
      setCompletedModal({ title: activeGame.title, xp: 0, success: false });
    }
    setActiveGame(null);
  };

  const renderActiveGame = () => {
    if (!activeGame) return null;
    let GameComponent;
    switch (activeGame.type) {
      case 'swipe':
        GameComponent = SwipeGame;
        break;
      case 'spot-flag':
        GameComponent = SpotTheFlagGame;
        break;
      case 'password':
        GameComponent = PasswordGame;
        break;
      case 'quiz':
        GameComponent = QuizGame;
        break;
      case 'chat':
        GameComponent = ChatGame;
        break;
      case 'audio':
        GameComponent = AudioScamGame;
        break;
      case 'visual':
        GameComponent = VisualScamGame;
        break;
      // New engines go here
      default:
        return <div>Unknown game type: {activeGame.type}</div>;
    }
    return (
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, overflow: 'auto', padding: '2rem' }}>
        <div style={{ background: '#1e1e1e', padding: '2rem', borderRadius: '12px', position: 'relative', width: '100%', maxWidth: '800px', maxHeight: '90vh', overflowY: 'auto' }}>
          <button onClick={() => setActiveGame(null)} style={{ position: 'absolute', top: '10px', right: '10px', background: 'transparent', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer' }}>×</button>
          <GameComponent game={normalizeGame(activeGame)} onComplete={handleGameComplete} />
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <header className="page-header" style={{ position: 'relative', textAlign: 'center', marginBottom: '3rem', paddingTop: '2rem' }}>
        <button 
          onClick={() => navigate('/dashboard')}
          style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)', border: 'none', color: '#fff', padding: '0.6rem 1.4rem', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)', transition: 'all 0.2s', zIndex: 100 }}
        >
          ← Back to Dashboard
        </button>
        <h1 style={{ fontSize: '3rem', color: 'var(--blue)', marginBottom: '1rem' }}>Cyber Arcade</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text2)', maxWidth: '600px', margin: '0 auto' }}>
          Test your instincts with interactive challenges. Earn XP, unlock badges, and sharpen your scam-spotting skills.
        </p>
        <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center' }}>
          <button
            onClick={handleAIGenerateGame}
            disabled={generatingAi}
            style={{
              background: 'linear-gradient(135deg, #a855f7, #ec4899)',
              border: 'none',
              color: '#fff',
              padding: '0.8rem 1.8rem',
              borderRadius: '20px',
              fontWeight: 'bold',
              cursor: generatingAi ? 'wait' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 15px rgba(168, 85, 247, 0.4)',
              fontSize: '1rem'
            }}
          >
            <span>{generatingAi ? '🤖 AI is inventing a new scam scenario...' : '✨ AI Generate Custom Game Challenge (Groq/Gemini)'}</span>
          </button>
        </div>
      </header>

      {customGames.length > 0 && (
        <div style={{ marginBottom: '3rem', background: 'rgba(59, 130, 246, 0.05)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
          <h2 style={{ color: '#38bdf8', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>🌟</span>
            <span>Admin & Community Custom Games ({customGames.length})</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
            {customGames.map(game => (
              <div key={game.id} onClick={() => { soundEffects.play('click'); setActiveGame(normalizeGame(game)); }} style={{ background: 'var(--card-bg, #2a2a2a)', padding: '1.5rem', borderRadius: '12px', cursor: 'pointer', transition: 'transform 0.2s', border: '1px solid #38bdf8', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 12px rgba(56, 189, 248, 0.1)' }}>
                <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1rem' }}>{game.thumbnail || '🎯'}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <h3 style={{ margin: 0, color: 'var(--text)' }}>{game.title}</h3>
                  <span style={{ background: 'rgba(168, 85, 247, 0.2)', color: '#d8b4fe', padding: '2px 8px', borderRadius: '8px', fontSize: '11px', fontWeight: 'bold' }}>{game.type?.toUpperCase()}</span>
                </div>
                <p style={{ color: 'var(--text2)', flex: 1, fontSize: '0.9rem' }}>{game.description}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', fontSize: '0.8rem', fontWeight: 'bold' }}>
                  <span style={{ color: game.difficulty === 'Easy' ? '#00C851' : game.difficulty === 'Medium' ? '#ffbb33' : '#ff4444' }}>{game.difficulty || 'Medium'}</span>
                  <span style={{ color: 'var(--blue)' }}>+{game.xpReward || 50} XP</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <h2 style={{ color: 'var(--text)', marginBottom: '1.5rem' }}>🎯 Today's Daily 10 Challenge</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem', padding: '1rem' }}>
        {dailyGames.map(game => (
          <div key={game.id} onClick={() => { soundEffects.play('click'); setActiveGame(normalizeGame(game)); }} style={{ background: 'var(--card-bg, #2a2a2a)', padding: '1.5rem', borderRadius: '12px', cursor: 'pointer', transition: 'transform 0.2s', border: '1px solid var(--border-color, #444)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1rem' }}>{game.thumbnail}</div>
            <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--text)' }}>{game.title}</h3>
            <p style={{ color: 'var(--text2)', flex: 1, fontSize: '0.9rem' }}>{game.description}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', fontSize: '0.8rem', fontWeight: 'bold' }}>
              <span style={{ color: game.difficulty === 'Easy' ? '#00C851' : game.difficulty === 'Medium' ? '#ffbb33' : '#ff4444' }}>{game.difficulty}</span>
              <span style={{ color: 'var(--blue)' }}>+{game.xpReward} XP</span>
            </div>
          </div>
        ))}
      </div>
      {renderActiveGame()}
      {completedModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1100 }}>
          <div style={{ background: 'var(--bg2, #1e1e24)', padding: '2.5rem', borderRadius: '16px', border: '1px solid var(--border)', textAlign: 'center', maxWidth: '420px', width: '90%', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{completedModal.success ? '🏆' : '⚠️'}</div>
            <h2 style={{ color: completedModal.success ? '#22c55e' : '#ef4444', fontSize: '1.8rem', marginBottom: '0.5rem' }}>
              {completedModal.success ? 'Challenge Conquered!' : 'Mission Failed'}
            </h2>
            <p style={{ color: 'var(--text2)', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              {completedModal.success ? `You successfully spotted the scam in "${completedModal.title}"!` : `You fell for the scam tactics in "${completedModal.title}". Stay sharp next time!`}
            </p>
            {completedModal.success && (
              <div style={{ background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)', padding: '12px', borderRadius: '12px', marginBottom: '1.5rem' }}>
                <span style={{ color: '#22c55e', fontWeight: 'bold', fontSize: '1.3rem' }}>+{completedModal.xp} XP Earned!</span>
              </div>
            )}
            <button
              onClick={() => { soundEffects.play('click'); setCompletedModal(null); }}
              style={{ padding: '14px 28px', background: completedModal.success ? 'linear-gradient(135deg, #22c55e, #16a34a)' : '#64748b', color: 'white', border: 'none', borderRadius: '10px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', width: '100%' }}
            >
              Continue Arcade
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GamesPage;
