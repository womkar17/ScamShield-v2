/**
 * Shared Camera Manager — singleton pattern.
 * 
 * Problem: Multiple hooks (useFaceDetection, useEyeTracking) each calling
 * getUserMedia independently causes Chrome to throttle/conflict the streams.
 * Only ONE stream can be reliably active per camera at a time.
 * 
 * Solution: This module provides a single shared camera stream that any
 * consumer can subscribe to. The stream is started once and shared.
 */

let sharedStream = null;
let consumerCount = 0;
let streamPromise = null;

/**
 * Get the shared camera stream. Starts the camera if not already started.
 * Each caller should call releaseCamera() when done.
 */
export async function getSharedCamera() {
  consumerCount++;
  
  // If a request is already in flight, wait for it
  if (streamPromise) {
    return streamPromise;
  }
  
  // If stream already exists and is active, return it
  if (sharedStream && sharedStream.active) {
    return sharedStream;
  }
  
  // Start new stream
  streamPromise = navigator.mediaDevices.getUserMedia({ 
    video: { width: { ideal: 640 }, height: { ideal: 480 }, facingMode: 'user' } 
  }).then(stream => {
    sharedStream = stream;
    streamPromise = null;
    console.log('[SharedCamera] Camera started, tracks:', stream.getVideoTracks().length);
    return stream;
  }).catch(err => {
    streamPromise = null;
    consumerCount--;
    throw err;
  });
  
  return streamPromise;
}

/**
 * Release your reference to the shared camera.
 * Stream is only stopped when ALL consumers have released.
 */
export function releaseCamera() {
  consumerCount = Math.max(0, consumerCount - 1);
  
  if (consumerCount === 0 && sharedStream) {
    console.log('[SharedCamera] All consumers released, stopping camera.');
    sharedStream.getTracks().forEach(t => t.stop());
    sharedStream = null;
  }
}

/**
 * Check if camera is currently active.
 */
export function isCameraActive() {
  return sharedStream !== null && sharedStream.active;
}
