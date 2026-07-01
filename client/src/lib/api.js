export function getApiUrl() {
  if (import.meta.env.VITE_API_URL !== undefined && import.meta.env.VITE_API_URL !== '') {
    return import.meta.env.VITE_API_URL;
  }
  return import.meta.env.PROD ? '' : 'http://localhost:5000';
}
