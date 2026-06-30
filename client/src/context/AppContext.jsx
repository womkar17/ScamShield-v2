import { createContext, useState, useEffect } from 'react';
import { localSessionStart, localLogAttempt, getAllAttempts } from '../utils/storage';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [sessionId, setSessionId] = useState(null);
  const [completedModules, setCompletedModules] = useState([]);
  const [connectionStatus, setConnectionStatus] = useState('loading');
  const [connectionMessage, setConnectionMessage] = useState('Connecting...');

  useEffect(() => {
    initSession();
    // Load completed modules from attempts
    const attempts = getAllAttempts();
    const completed = [...new Set(attempts.filter(a => a.submitted).map(a => a.module_id))];
    setCompletedModules(completed);
  }, []);

  const initSession = async () => {
    setConnectionStatus('loading');
    setConnectionMessage('Connecting...');
    
    const res = await localSessionStart(localStorage.getItem('ss_session'));
    setSessionId(res.session_id);
    localStorage.setItem('ss_session', res.session_id);
    
    if (res.from_api) {
      setConnectionStatus('ok');
      setConnectionMessage('Backend Connected ✓');
    } else {
      setConnectionStatus('err');
      setConnectionMessage('Offline Mode (localStorage)');
    }
  };

  const markModuleCompleted = (moduleId) => {
    if (!completedModules.includes(moduleId)) {
      setCompletedModules(prev => [...prev, moduleId]);
    }
  };

  const logAttempt = async (data) => {
    return await localLogAttempt(sessionId, data);
  };

  return (
    <AppContext.Provider value={{ 
      sessionId, 
      completedModules, 
      connectionStatus, 
      connectionMessage,
      initSession,
      markModuleCompleted,
      logAttempt
    }}>
      {children}
    </AppContext.Provider>
  );
}
