import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api', // API Base URL
  withCredentials: true, // Send cookies with requests
});
export default axiosInstance;
