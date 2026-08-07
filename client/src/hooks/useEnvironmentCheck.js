import { useState, useCallback } from 'react';

// Common VM strings found in WebGL Renderer
const VM_STRINGS = [
  'vmware', 'virtualbox', 'llvmpipe', 'microsoft basic render',
  'qemu', 'swiftshader', 'parallels', 'hyper-v', 'svga'
];

export const useEnvironmentCheck = () => {
  const [isChecking, setIsChecking] = useState(false);
  const [checks, setChecks] = useState({
    browser: { label: 'Browser Compatibility', status: 'pending', error: null },
    webcam: { label: 'Webcam Access', status: 'pending', error: null },
    vm: { label: 'Virtual Machine Check', status: 'pending', error: null },
    monitors: { label: 'Single Monitor Check', status: 'pending', error: null },
    devtools: { label: 'Developer Tools', status: 'pending', error: null },
    incognito: { label: 'Private Browsing', status: 'pending', error: null, isWarning: true }
  });

  const allPassed = Object.entries(checks).every(([key, check]) => 
    check.status === 'pass' || (check.status === 'fail' && check.isWarning)
  );

  const updateCheck = useCallback((key, status, error = null) => {
    setChecks(prev => ({ ...prev, [key]: { ...prev[key], status, error } }));
  }, []);

  const checkBrowser = useCallback(() => {
    const hasFullscreen = document.documentElement.requestFullscreen !== undefined;
    const hasMedia = navigator.mediaDevices && navigator.mediaDevices.getUserMedia !== undefined;
    
    if (hasFullscreen && hasMedia) {
      updateCheck('browser', 'pass');
      return true;
    } else {
      updateCheck('browser', 'fail', 'Unsupported browser. Please use a modern version of Chrome, Edge, or Firefox.');
      return false;
    }
  }, [updateCheck]);

  const checkWebcam = useCallback(async () => {
    // First check if permission is already granted, denied, or needs prompting
    let permState = null;
    try {
      const perm = await navigator.permissions.query({ name: 'camera' });
      permState = perm.state; // 'granted', 'denied', or 'prompt'
    } catch (e) {
      // permissions.query not supported for camera in some browsers — proceed to getUserMedia
    }

    if (permState === 'denied') {
      updateCheck('webcam', 'fail', 
        'Camera access is blocked. Please click the camera icon in the address bar → Allow → then click "Re-Check Environment".');
      return false;
    }

    // Try to acquire camera with timeout
    try {
      const streamPromise = navigator.mediaDevices.getUserMedia({ 
        video: { width: { ideal: 640 }, height: { ideal: 480 } } 
      });
      
      // Add a 10-second timeout in case the permission dialog hangs
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('timeout')), 10000)
      );
      
      const stream = await Promise.race([streamPromise, timeoutPromise]);
      
      // Verify the stream is actually producing video
      const videoTrack = stream.getVideoTracks()[0];
      if (!videoTrack || videoTrack.readyState !== 'live') {
        stream.getTracks().forEach(t => t.stop());
        updateCheck('webcam', 'fail', 'Camera stream is not active. Please ensure your camera is not in use by another application.');
        return false;
      }

      // Quick check: create a video element and ensure frames are coming through
      const video = document.createElement('video');
      video.srcObject = stream;
      video.setAttribute('playsinline', '');
      video.muted = true;
      
      await new Promise((resolve, reject) => {
        video.onloadeddata = resolve;
        video.onerror = reject;
        setTimeout(reject, 5000); // 5s timeout for video to start
        video.play().catch(reject);
      });

      // Verify we get actual pixel data (not a black frame)
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 48;
      const ctx = canvas.getContext('2d');
      
      // Wait a moment for camera to warm up (some cameras start with black frames)
      await new Promise(r => setTimeout(r, 500));
      ctx.drawImage(video, 0, 0, 64, 48);
      const imgData = ctx.getImageData(0, 0, 64, 48).data;
      
      let brightness = 0;
      for (let i = 0; i < imgData.length; i += 16) {
        brightness += (imgData[i] + imgData[i+1] + imgData[i+2]) / 3;
      }
      brightness /= (imgData.length / 16);

      // Clean up
      video.pause();
      video.srcObject = null;
      stream.getTracks().forEach(t => t.stop());

      if (brightness < 3) {
        updateCheck('webcam', 'fail', 'Camera appears to be producing black frames. Please ensure your camera lens is not covered and try again.');
        return false;
      }

      updateCheck('webcam', 'pass');
      return true;
    } catch (err) {
      if (err.message === 'timeout') {
        updateCheck('webcam', 'fail', 'Camera request timed out. Please allow camera access when prompted, then click "Re-Check Environment".');
      } else if (err.name === 'NotAllowedError') {
        updateCheck('webcam', 'fail', 'Camera access denied. Please allow camera permissions in your browser settings, then click "Re-Check Environment".');
      } else if (err.name === 'NotFoundError') {
        updateCheck('webcam', 'fail', 'No camera detected. Please connect a webcam and try again.');
      } else if (err.name === 'NotReadableError') {
        updateCheck('webcam', 'fail', 'Camera is in use by another application. Please close other apps using the camera (e.g., Zoom, Teams) and try again.');
      } else {
        updateCheck('webcam', 'fail', `Camera error: ${err.message || 'Unknown error'}. Please try again.`);
      }
      return false;
    }
  }, [updateCheck]);

  const checkVM = useCallback(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (gl) {
        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        const renderer = debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL).toLowerCase() : '';
        const vendor = debugInfo ? gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL).toLowerCase() : '';
        const isVM = VM_STRINGS.some(str => renderer.includes(str) || vendor.includes(str));
        if (isVM) {
          updateCheck('vm', 'fail', `Virtual Machine detected (${renderer || vendor}). Exams must be taken on bare-metal OS.`);
          return false;
        }
      }
      if (navigator.hardwareConcurrency < 2) {
        updateCheck('vm', 'fail', 'Insufficient CPU cores detected (possible VM).');
        return false;
      }
      updateCheck('vm', 'pass');
      return true;
    } catch (e) {
      updateCheck('vm', 'pass');
      return true;
    }
  }, [updateCheck]);

  const checkMonitors = useCallback(async () => {
    try {
      if ('getScreenDetails' in window) {
        const screens = await window.getScreenDetails();
        if (screens.screens.length > 1) {
          updateCheck('monitors', 'fail', 'Multiple monitors detected. Please disconnect extra displays.');
          return false;
        }
      } else {
        if (window.screenX < 0 || window.screenX > window.screen.width) {
          updateCheck('monitors', 'fail', 'Window appears to be on a secondary monitor.');
          return false;
        }
      }
      updateCheck('monitors', 'pass');
      return true;
    } catch (e) {
      updateCheck('monitors', 'pass');
      return true;
    }
  }, [updateCheck]);

  const checkDevTools = useCallback(() => {
    const threshold = 160;
    const isDevToolsOpen = (window.outerWidth - window.innerWidth > threshold) || 
                           (window.outerHeight - window.innerHeight > threshold);
    if (isDevToolsOpen) {
      updateCheck('devtools', 'fail', 'Developer Tools are open. Please close them.');
      return false;
    }
    updateCheck('devtools', 'pass');
    return true;
  }, [updateCheck]);

  const checkIncognito = useCallback(async () => {
    if ('storage' in navigator && 'estimate' in navigator.storage) {
      try {
        const estimate = await navigator.storage.estimate();
        if (estimate.quota < 300000000) {
          updateCheck('incognito', 'fail', 'Private browsing mode detected. We recommend normal mode to prevent data loss.');
          return false;
        }
      } catch (e) {}
    }
    updateCheck('incognito', 'pass');
    return true;
  }, [updateCheck]);

  const runChecks = useCallback(async () => {
    setIsChecking(true);
    
    // Reset all to pending
    setChecks(prev => {
      const reset = {};
      Object.keys(prev).forEach(k => { reset[k] = { ...prev[k], status: 'pending', error: null }; });
      return reset;
    });
    
    // Run non-async checks first
    const b = checkBrowser();
    checkVM();
    checkDevTools();
    await checkMonitors();
    await checkIncognito();
    
    // Webcam check last — it prompts the user
    if (b) {
      await checkWebcam();
    } else {
      updateCheck('webcam', 'fail', 'Browser does not support webcam requirements.');
    }
    
    setIsChecking(false);
  }, [checkBrowser, checkWebcam, checkVM, checkMonitors, checkDevTools, checkIncognito, updateCheck]);

  return { checks, allPassed, runChecks, isChecking };
};
