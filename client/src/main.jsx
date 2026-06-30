import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { AppProvider } from './context/AppContext.jsx';
import { GamificationProvider } from './context/GamificationContext.jsx';
import { ToastProvider } from './components/Toast.jsx';

import './styles/main.css';
import './styles/gamification.css';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <AuthProvider>
          <AppProvider>
            <GamificationProvider>
              <App />
            </GamificationProvider>
          </AppProvider>
        </AuthProvider>
      </ToastProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
