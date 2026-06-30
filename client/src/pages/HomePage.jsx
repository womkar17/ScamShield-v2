import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import StatsBar from '../components/StatsBar';
import ProgressMap from '../components/ProgressMap';
import BadgeGrid from '../components/BadgeGrid';
import { AuthContext } from '../context/AuthContext';
import { AppContext } from '../context/AppContext';

export default function HomePage() {
  const { currentUser, userProfile } = useContext(AuthContext);
  const { connectionStatus } = useContext(AppContext);
  const navigate = useNavigate();
  
  const displayName = userProfile?.username || userProfile?.email?.split('@')[0] || currentUser?.email?.split('@')[0] || 'Defender';

  return (
    <div className="app-container">
      <Navbar />
      
      <main className="main-content layout-home">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              Welcome to ScamShield, <span style={styles.usernameHighlight}>{displayName}</span>!
            </h1>
            <p className="hero-subtitle">
              Learn to spot, avoid, and report the latest digital scams through interactive simulations.
            </p>
          </div>
          {/* AI Generated Hero Illustration will go here */}
          <div className="hero-illustration-placeholder">
            <span className="hero-shield-icon">🛡️</span>
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
            
            {/* Practice area removed, accessed via Sidebar Arcade */}
            
            {connectionStatus === 'err' && (
              <div className="sidebar-widget bg-glass warning-widget">
                <h3>⚠️ Offline Mode</h3>
                <p>Your progress is being saved locally. It will sync when the server connects.</p>
              </div>
            )}
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
