import axios, { AxiosInstance } from 'axios';

// Create an Axios instance with default configurations
const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api', // Replace with your backend base URL
  timeout: 10000, // Optional: Set a timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
