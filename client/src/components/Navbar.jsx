import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { GamificationContext } from '../context/GamificationContext';
import { AppContext } from '../context/AppContext';

export default function Navbar() {
  const navigate = useNavigate();
  const { currentUser, userProfile, isLoggedIn, isAdmin, logout } = useContext(AuthContext);
  const { xp, level, streak, getProgress } = useContext(GamificationContext);

  const progress = getProgress();

  const displayName = userProfile?.email?.split('@')[0] || currentUser?.email?.split('@')[0] || 'User';

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <div className="navbar-brand" onClick={() => navigate('/dashboard')}>
          <span className="navbar-logo" style={{ fontSize: '1.5rem' }}>🛡️</span>
          <span className="navbar-title" style={{ fontSize: '1.3rem' }}>ScamShield</span>
        </div>

        {/* Center: Gamification Stats */}
        <div className="navbar-center">
          {/* XP Bar */}
          <div className="xp-bar-container" title={`${xp} / ${level.maxXp} XP`}>
            <div className="xp-level-badge">{level.name}</div>
            <div className="xp-bar-track">
              <div
                className="xp-bar-fill"
                style={{ width: `${progress.percentToNextLevel}%` }}
              />
            </div>
            <span className="xp-label">{xp} XP</span>
          </div>

          {/* Streak */}
          <div className={`streak-counter ${streak.isActive ? 'streak-active' : ''}`} title={`${streak.count} day streak`}>
            <span className="streak-fire">🔥</span>
            <span className="streak-num">{streak.count}</span>
          </div>
        </div>

        {/* Right: User Menu */}
        <div className="navbar-right">
          {!isLoggedIn && (
            <button className="auth-trigger-btn" onClick={() => navigate('/auth')}>
              Log In / Sign Up
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
