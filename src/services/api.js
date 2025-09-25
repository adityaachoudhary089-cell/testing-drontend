import axios from 'axios';

const API_BASE_URL = import.meta.env.PROD 
  ? import.meta.env.VITE_API_URL || 'http://localhost:5000'
  : 'https://backend1-rexi.onrender.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle token expiration
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken');
      // Don't auto redirect, let components handle it
    }
    return Promise.reject(error);
  }
);

// API functions for your Linux app
export const authAPI = {
  signup: (userData) => api.post('/api/auth/signup', userData),
  login: (credentials) => api.post('/api/auth/login', credentials),
  testConnection: () => api.get('/api/test')
};

export default api;
