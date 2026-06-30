import { useState, useEffect, useCallback, createContext, useContext } from 'react';

// Toast context so any component can trigger toasts
export const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = 'info', duration = 3000) => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, message, type, duration }]);

    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, duration);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer toasts={toasts} onDismiss={(id) => setToasts(prev => prev.filter(t => t.id !== id))} />
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}

function ToastContainer({ toasts, onDismiss }) {
  return (
    <div className="toast-container">
      {toasts.map(toast => (
        <Toast key={toast.id} toast={toast} onDismiss={() => onDismiss(toast.id)} />
      ))}
    </div>
  );
}

function Toast({ toast, onDismiss }) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExiting(true);
      setTimeout(onDismiss, 300);
    }, toast.duration - 300);

    return () => clearTimeout(timer);
  }, [toast.duration, onDismiss]);

  const icons = {
    info: 'ℹ️',
    ok: '✅',
    err: '❌',
    warn: '⚠️',
    badge: '🏆',
    xp: '⭐',
  };

  return (
    <div className={`toast toast-${toast.type} ${exiting ? 'toast-exit' : ''}`}>
      <span className="toast-icon">{icons[toast.type] || 'ℹ️'}</span>
      <span className="toast-msg">{toast.message}</span>
      <button className="toast-close" onClick={() => { setExiting(true); setTimeout(onDismiss, 300); }}>×</button>
    </div>
  );
}
