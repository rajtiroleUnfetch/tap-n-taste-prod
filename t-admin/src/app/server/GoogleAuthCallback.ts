import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from './axiosInstance';

export const GoogleAuthCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get('code');
    const redirectPath = queryParams.get('redirect') || '/landing';
    

    const fetchToken = async () => {
      try {
        const response = await axiosInstance.post('/auth/google/callback', { code });
        const { token } = response.data;

        localStorage.setItem('token', token);

        navigate(redirectPath);
      } catch (error) {
        console.error('Error in Google Login:', error);
        navigate('/login');
      }
    };

    if (code) {
      fetchToken();
    } else {
      alert('Authentication failed. Please try again.');
      navigate('/login');
    }
  }, [location.search, navigate]);

  return null; // Render nothing
};

export default GoogleAuthCallback;
