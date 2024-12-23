import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api', // Replace with your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor (optional)
api.interceptors.request.use(
  (config) => {
    // Add auth token or modify headers if required
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor (optional)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally if needed
    console.error('API Error:', error.response || error.message);
    return Promise.reject(error);
  }
);

export default api;
