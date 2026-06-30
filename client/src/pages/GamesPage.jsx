import React, { useState, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { GamificationContext } from '../context/GamificationContext';
import { MINIGAMES } from '../data/minigames';
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
      if (addXP) {
        addXP(activeGame.xpReward || 50);
      }
      alert(`Game Completed! You earned ${activeGame.xpReward || 50} XP!`);
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
          <GameComponent game={activeGame} onComplete={handleGameComplete} />
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <header className="page-header" style={{ position: 'relative', textAlign: 'center', marginBottom: '3rem', paddingTop: '2rem' }}>
        <button 
          onClick={() => navigate('/dashboard')}
          style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'transparent', border: '1px solid var(--border-color, #444)', color: 'var(--text, #fff)', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          ← Back to Dashboard
        </button>
        <h1 style={{ fontSize: '3rem', color: 'var(--blue)', marginBottom: '1rem' }}>Cyber Arcade</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text2)', maxWidth: '600px', margin: '0 auto' }}>
          Test your instincts with today's <strong>Daily 10</strong> challenges. Earn XP, unlock badges, and sharpen your scam-spotting skills.
        </p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem', padding: '1rem' }}>
        {dailyGames.map(game => (
          <div key={game.id} onClick={() => setActiveGame(game)} style={{ background: 'var(--card-bg, #2a2a2a)', padding: '1.5rem', borderRadius: '12px', cursor: 'pointer', transition: 'transform 0.2s', border: '1px solid var(--border-color, #444)', display: 'flex', flexDirection: 'column' }}>
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
    </div>
  );
};

export default GamesPage;
