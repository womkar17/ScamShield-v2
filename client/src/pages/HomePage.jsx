import { useContext, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import StatsBar from '../components/StatsBar';
import ProgressMap from '../components/ProgressMap';
import BadgeGrid from '../components/BadgeGrid';
import NetworkBackground from '../components/NetworkBackground';
import { AuthContext } from '../context/AuthContext';
import { GamificationContext } from '../context/GamificationContext';

const styles = {
  usernameHighlight: {
    color: '#a855f7',
    textShadow: '0 0 15px rgba(168, 85, 247, 0.4)',
    fontWeight: '900',
  }
};



export default function HomePage() {
  const { currentUser, userProfile } = useContext(AuthContext);
  const { xp, getLevelInfo } = useContext(GamificationContext);
  const navigate = useNavigate();

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const displayName = userProfile?.username || userProfile?.email?.split('@')[0] || currentUser?.email?.split('@')[0] || 'Defender';

  return (
    <div className="app-container">
      <NetworkBackground />
      {/* Spotlight Overlay */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(168, 85, 247, 0.08), transparent 40%)`,
          zIndex: 1
        }}
      />
      <main className="main-content layout-home" style={{ paddingTop: '1rem' }}>
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content" style={{ width: '100%' }}>
            <h1 className="hero-title" style={{ marginTop: 0, marginBottom: '2.5rem' }}>
              Welcome to ScamShield, <span style={styles.usernameHighlight}>{displayName}</span>!
            </h1>
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
