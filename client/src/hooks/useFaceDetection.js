import { useState, useEffect, useRef, useCallback } from 'react';

export const useFaceDetection = ({ isActive, onMiss }) => {
  const [isFacePresent, setIsFacePresent] = useState(true);
  const [missedCount, setMissedCount] = useState(0);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const startDetection = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (err) {
      console.error('Failed to start face detection stream:', err);
    }
  }, []);

  const stopDetection = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
  }, []);

  useEffect(() => {
    if (!isActive) {
      stopDetection();
      return;
    }

    startDetection();

    // Fallback face detection using canvas brightness if FaceDetector API is unavailable
    const checkFaceFallback = (video) => {
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      
      let r, g, b, avg;
      let colorSum = 0;
      
      for (let x = 0, len = data.length; x < len; x += 4) {
        r = data[x];
        g = data[x + 1];
        b = data[x + 2];
        avg = Math.floor((r + g + b) / 3);
        colorSum += avg;
      }
      
      const brightness = Math.floor(colorSum / (video.videoWidth * video.videoHeight));
      // Very crude heuristic: if brightness is extremely low, user might have covered the webcam
      return brightness > 10; 
    };

    const interval = setInterval(async () => {
      if (!videoRef.current || videoRef.current.readyState < 2) return;

      let faceFound = false;

      if ('FaceDetector' in window) {
        try {
          const faceDetector = new window.FaceDetector({ maxDetectedFaces: 1 });
          const faces = await faceDetector.detect(videoRef.current);
          faceFound = faces.length > 0;
        } catch (e) {
          faceFound = checkFaceFallback(videoRef.current);
        }
      } else {
        faceFound = checkFaceFallback(videoRef.current);
      }

      setIsFacePresent(faceFound);

      if (!faceFound) {
        setMissedCount(prev => {
          const count = prev + 1;
          if (count >= 2 && onMiss) {
            onMiss('Face not detected or webcam covered');
            return 0; // Reset after triggering
          }
          return count;
        });
      } else {
        setMissedCount(0); // Reset if face found
      }

    }, 10000); // Check every 10 seconds

    return () => {
      clearInterval(interval);
      stopDetection();
    };
  }, [isActive, onMiss, startDetection, stopDetection]);

  return { isFacePresent, missedCount, videoRef };
};
