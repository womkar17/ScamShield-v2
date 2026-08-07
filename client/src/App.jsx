import { useEffect, useContext } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import ModulePage from './pages/ModulePage';
import GamesPage from './pages/GamesPage';
import ExamPage from './pages/ExamPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import AdminPage from './pages/AdminPage';
import SettingsPage from './pages/SettingsPage';
import BadgesPage from './pages/BadgesPage';
import PhishingAlertPage from './pages/PhishingAlertPage';
import LevelUpModal from './components/LevelUpModal';
import { GamificationContext } from './context/GamificationContext';
import { AppContext } from './context/AppContext';
import { AuthContext } from './context/AuthContext';
import Sidebar from './components/Sidebar';
import AICopilot from './components/AICopilot';
import LiveThreatBanner from './components/LiveThreatBanner';
import { useState } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);
  return null;
}

function ProtectedRoute({ children, isSidebarOpen, setIsSidebarOpen }) {
  const { isLoggedIn, loading, userProfile, currentUser } = useContext(AuthContext);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'var(--text)' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛡️</div>
          <p>Loading ScamShield...</p>
        </div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="app-root-layout" style={{ display: 'flex' }}>
      {isSidebarOpen && window.innerWidth <= 768 && (
        <div
          className="mobile-sidebar-overlay"
          onClick={() => setIsSidebarOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(3px)',
            zIndex: 1900
          }}
        />
      )}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className={`app-main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`} style={{ flex: 1, transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column' }}>
        <header className="mobile-topheader" style={{
          display: 'none',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 16px',
          background: 'var(--bg2)',
          borderBottom: '1px solid var(--border)',
          position: 'sticky',
          top: 0,
          zIndex: 85,
          width: '100%',
          boxSizing: 'border-box'
        }}>
          <button
            onClick={() => setIsSidebarOpen(true)}
            style={{
              background: 'var(--social-bg)',
              border: '1px solid var(--border)',
              color: 'var(--text-h)',
              padding: '8px 12px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.95rem',
              fontWeight: '700',
              cursor: 'pointer'
            }}
          >
            <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>☰</span> Menu
          </button>
          <div style={{ fontSize: '1.2rem', fontWeight: '900', paddingBottom: '0.1em', background: 'linear-gradient(90deg, #a855f7, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            🛡️ ScamShield
          </div>
          <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'var(--bg3)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(102, 126, 234, 0.4)', overflow: 'hidden' }}>
            <img 
              src={`https://api.dicebear.com/7.x/bottts/svg?seed=${userProfile?.avatar || 'Felix'}`} 
              alt="Avatar" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
        </header>
        <LiveThreatBanner />
        {children}
      </div>
    </div>
  );
}

export default function App() {
  const { checkBadges } = useContext(GamificationContext);
  const { completedModules } = useContext(AppContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => window.innerWidth >= 768);

  useEffect(() => {
    checkBadges({ completedModules });
  }, [completedModules, checkBadges]);

  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/phishing-warning" element={<PhishingAlertPage />} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={
          <ProtectedRoute isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}><HomePage /></ProtectedRoute>
        } />
        <Route path="/module/:id" element={
          <ProtectedRoute isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}><ModulePage /></ProtectedRoute>
        } />
        <Route path="/games" element={
          <ProtectedRoute isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}><GamesPage /></ProtectedRoute>
        } />
        <Route path="/exam" element={
          <ProtectedRoute isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}><ExamPage /></ProtectedRoute>
        } />
        <Route path="/case-studies" element={
          <ProtectedRoute isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}><CaseStudiesPage /></ProtectedRoute>
        } />
        <Route path="/badges" element={
          <ProtectedRoute isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}><BadgesPage /></ProtectedRoute>
        } />
        <Route path="/admin" element={
          <ProtectedRoute isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}><AdminPage /></ProtectedRoute>
        } />
        <Route path="/settings" element={
          <ProtectedRoute isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}><SettingsPage /></ProtectedRoute>
        } />
      </Routes>
      <LevelUpModal />
      <AICopilot />
    </>
  );
}
