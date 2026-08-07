import { useState, useEffect, useCallback } from 'react';

export const useExamTimer = ({ initialMinutes = 40, isActive, onExpire }) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);
  const [isUrgent, setIsUrgent] = useState(false);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    if (!isActive || isExpired) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsExpired(true);
          if (onExpire) onExpire();
          return 0;
        }
        
        if (prev <= 300) { // 5 minutes remaining
          setIsUrgent(true);
        }
        
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, isExpired, onExpire]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return { 
    timeLeft, 
    formatted: formatTime(timeLeft), 
    isUrgent, 
    isExpired 
  };
};
