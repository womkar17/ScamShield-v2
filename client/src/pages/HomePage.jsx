import { useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import StatsBar from '../components/StatsBar';
import ProgressMap from '../components/ProgressMap';
import BadgeGrid from '../components/BadgeGrid';
import { AuthContext } from '../context/AuthContext';
import { GamificationContext } from '../context/GamificationContext';

export default function HomePage() {
  const { currentUser, userProfile } = useContext(AuthContext);
  const { xp, getLevelInfo } = useContext(GamificationContext);
  const navigate = useNavigate();

  const displayName = userProfile?.username || userProfile?.email?.split('@')[0] || currentUser?.email?.split('@')[0] || 'Defender';

  return (
    <div className="app-container">
      <main className="main-content layout-home" style={{ paddingTop: '1rem' }}>
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content" style={{ width: '100%' }}>
            <h1 className="hero-title" style={{ marginTop: 0 }}>
              Welcome to ScamShield, <span style={styles.usernameHighlight}>{displayName}</span>!
            </h1>
            <p className="hero-subtitle">
              Learn to spot, avoid, and report the latest digital scams through interactive simulations.
            </p>
          </div>
        </div>

        {/* Stats Dashboard */}
        <StatsBar />

        {/* Main 2-Column Layout */}
        <div className="home-columns">
          {/* Left Column: Progress Map */}
          <div className="home-col-main">
            <ProgressMap />
          </div>

          {/* Right Column: Achievements & Extras */}
          <div className="home-col-sidebar">
            <BadgeGrid />
          </div>
        </div>
      </main>
    </div>
  );
}

const styles = {
  usernameHighlight: {
    color: '#a855f7',
    textShadow: '0 0 15px rgba(168, 85, 247, 0.4)',
    fontWeight: '900',
    display: 'inline-block'
  }
};
