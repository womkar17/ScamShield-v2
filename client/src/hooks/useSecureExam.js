import { useState, useEffect, useCallback, useRef } from 'react';

export const useSecureExam = ({ isActive, onFail }) => {
  const [strikes, setStrikes] = useState(0);
  const [violationLog, setViolationLog] = useState([]);
  const [isLocked, setIsLocked] = useState(false);
  const examContainerRef = useRef(null);
  
  // Cooldown to prevent multiple events (blur + visibility + fullscreen) 
  // from firing as separate strikes within the same user action
  const lastStrikeTime = useRef(0);
  const STRIKE_COOLDOWN_MS = 5000; // 5-second cooldown between strikes
  
  const addStrike = useCallback((reason) => {
    if (!isActive || isLocked) return;
    
    const now = Date.now();
    if (now - lastStrikeTime.current < STRIKE_COOLDOWN_MS) {
      // Log the violation but DON'T add another strike — cooldown active
      const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      setViolationLog(prev => [...prev, `[${timestamp}] 📝 ${reason} (suppressed — cooldown)`]);
      return;
    }
    
    lastStrikeTime.current = now;
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const logEntry = `[${timestamp}] ⚠️ ${reason}`;
    
    setViolationLog(prev => [...prev, logEntry]);
    
    setStrikes(prev => {
      const newStrikes = prev + 1;
      if (newStrikes >= 1) {
        setIsLocked(true);
        if (onFail) onFail(logEntry);
      }
      return newStrikes;
    });
  }, [isActive, isLocked, onFail]);

  const enterFullscreen = useCallback(async (element) => {
    try {
      if (element.requestFullscreen) {
        await element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) {
        await element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        await element.msRequestFullscreen();
      }
      examContainerRef.current = element;
    } catch (err) {
      console.error("Failed to enter fullscreen:", err);
    }
  }, []);

  useEffect(() => {
    if (!isActive || isLocked) return;

    // 1. Fullscreen Enforcement
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        addStrike('Exited fullscreen mode');
      }
    };

    // 2. Visibility / Tab Switch
    const handleVisibilityChange = () => {
      if (document.hidden) {
        addStrike('Tab switch or minimized window detected');
      }
    };

    // 3. Window Blur (clicking outside) — only fire if not already covered by visibility
    const handleBlur = () => {
      // Skip if the tab is also hidden (visibilitychange already handles it)
      if (document.hidden) return;
      addStrike('Window lost focus');
    };

    // 4 & 5 & 13. Copy/Paste/Right-Click/Select block
    const handleContextMenu = (e) => e.preventDefault();
    const handleCopyPaste = (e) => {
      e.preventDefault();
      addStrike('Attempted clipboard operation');
    };
    const handleSelectStart = (e) => e.preventDefault();

    // 6 & 14. Keyboard Shortcuts
    const handleKeyDown = (e) => {
      if (e.key === 'PrintScreen') {
        e.preventDefault();
        addStrike('Attempted screen capture');
      }
      if (e.ctrlKey || e.metaKey) {
        const forbiddenKeys = ['c', 'v', 'p', 's', 'f', 'r'];
        if (forbiddenKeys.includes(e.key.toLowerCase())) {
          e.preventDefault();
          addStrike('Used forbidden keyboard shortcut');
        }
      }
      if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && ['i', 'j', 'c'].includes(e.key.toLowerCase()))) {
        e.preventDefault();
        addStrike('Attempted to open Developer Tools');
      }
      if (e.key === 'Escape') {
        e.preventDefault();
      }
    };

    // 7. DevTools Live Polling
    const devToolsInterval = setInterval(() => {
      const threshold = 160;
      if (window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold) {
        addStrike('Developer Tools opened during exam');
      }
    }, 2000);

    // 8. Screen Resize Polling
    let initialWidth = window.innerWidth;
    let initialHeight = window.innerHeight;
    const resizeInterval = setInterval(() => {
      if (document.fullscreenElement) return;
      
      const widthDiff = Math.abs(window.innerWidth - initialWidth);
      const heightDiff = Math.abs(window.innerHeight - initialHeight);
      
      if (widthDiff > 100 || heightDiff > 100) {
        addStrike('Window resized significantly');
        initialWidth = window.innerWidth;
        initialHeight = window.innerHeight;
      }
    }, 5000);

    // Register events
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleBlur);
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('copy', handleCopyPaste);
    document.addEventListener('cut', handleCopyPaste);
    document.addEventListener('paste', handleCopyPaste);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleBlur);
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('copy', handleCopyPaste);
      document.removeEventListener('cut', handleCopyPaste);
      document.removeEventListener('paste', handleCopyPaste);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('keydown', handleKeyDown);
      clearInterval(devToolsInterval);
      clearInterval(resizeInterval);
    };
  }, [isActive, isLocked, addStrike]);

  return { strikes, violationLog, isLocked, enterFullscreen, addStrike, examContainerRef };
};
