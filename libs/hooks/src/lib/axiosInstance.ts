import axios from 'axios';
import { toast } from 'react-toastify'; // Import toast for notifications
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api', // API Base URL
  withCredentials: true, // Send cookies with requests
  headers: {
    'Content-Type': 'application/json', // Set default content type
  },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    console.log('Request Config:', config); // Log request data
    return config;
  },
  (error) => {
    console.error('Request Error:', error); // Log request errors
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Check if the response status is not 200
    if (response.status !== 200) {
      console.error('Unexpected status code:', response.status);
      console.error('Response Data:', response.data);

      // Log the error and show a toast notification
      const errorMessage = response.data?.message || `Unexpected status code: ${response.status}`;
      toast.error(errorMessage);
      return Promise.reject(new Error(errorMessage));
    }

    // Success response handling
    console.log('Response Data:', response);
    toast.success(response?.data?.message||'Request successful!'); // Default success message
    return response;
  },
  (error) => {
    // Handle errors with non-200 status codes
    console.error('Response Error:', error);

    const status = error?.response?.status;
    const errorMessage = error?.response?.data?.message;

    console.error(`Error Status Code: ${status}`);
    console.error(`Error Message: ${errorMessage}`);

    // Show error toast with a meaningful message
    toast.error(errorMessage || 'Something went wrong!');
    return Promise.reject(error);
  }
);

export default axiosInstance;
