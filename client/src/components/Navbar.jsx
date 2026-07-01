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
        <div className="navbar-brand" onClick={() => navigate('/dashboard')} title="Home">
          <span className="navbar-logo" style={{ fontSize: '1.5rem' }}>🛡️</span>
        </div>

        {/* Center: Gamification Stats */}
        <div className="navbar-center">
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
