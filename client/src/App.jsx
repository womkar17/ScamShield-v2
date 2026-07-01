import { useEffect, useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import ModulePage from './pages/ModulePage';
import GamesPage from './pages/GamesPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import AdminPage from './pages/AdminPage';
import SettingsPage from './pages/SettingsPage';
import LevelUpModal from './components/LevelUpModal';
import { GamificationContext } from './context/GamificationContext';
import { AppContext } from './context/AppContext';
import { AuthContext } from './context/AuthContext';
import Sidebar from './components/Sidebar';
import AICopilot from './components/AICopilot';
import LiveThreatBanner from './components/LiveThreatBanner';
import { useState } from 'react';

function ProtectedRoute({ children, isSidebarOpen, setIsSidebarOpen }) {
  const { isLoggedIn, loading } = useContext(AuthContext);

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
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="app-root-layout" style={{ display: 'flex' }}>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className={`app-main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`} style={{ flex: 1, transition: 'all 0.3s ease' }}>
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
      <LiveThreatBanner />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />

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
        <Route path="/case-studies" element={
          <ProtectedRoute isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}><CaseStudiesPage /></ProtectedRoute>
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
