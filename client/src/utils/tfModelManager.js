/**
 * Singleton model manager for ML models used in the proctored exam.
 * 
 * Models loaded:
 * - COCO-SSD (via CDN globals): Object detection for phones, people, etc.
 * 
 * All models are loaded once and cached as singleton promises to avoid
 * duplicate downloads (~7MB for COCO-SSD, ~4MB for Face Landmarker).
 */

let cocoSsdPromise = null;

/**
 * Load the COCO-SSD object detection model (singleton).
 * Requires tf and cocoSsd globals from CDN scripts in index.html.
 */
export const loadCocoSsd = async () => {
  if (cocoSsdPromise) return cocoSsdPromise;

  cocoSsdPromise = new Promise(async (resolve, reject) => {
    try {
      const tf = window.tf;
      const cocoSsd = window.cocoSsd;
      if (!tf || !cocoSsd) {
        throw new Error("TensorFlow.js or COCO-SSD not loaded from CDN.");
      }
      await tf.ready();
      const model = await cocoSsd.load();
      console.log('tfModelManager: COCO-SSD model loaded successfully.');
      resolve(model);
    } catch (error) {
      cocoSsdPromise = null; // Allow retry on failure
      reject(error);
    }
  });

  return cocoSsdPromise;
};

/**
 * Check if MediaPipe Vision tasks are available from CDN.
 * Returns the vision module or null.
 */
export const getMediaPipeVision = () => {
  return window.vision || null;
};
