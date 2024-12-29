import axios from 'axios';

// Create the axios instance with a base URL and any other global configurations
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api', // API Base URL
  withCredentials: true, // Send cookies with requests (if needed for authentication)
  headers: {
    'Content-Type': 'application/json', // Default content type for JSON requests
  },
});

export default axiosInstance;
