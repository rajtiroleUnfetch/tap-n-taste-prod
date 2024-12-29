import { useState } from 'react';
import {axiosInstance} from '@tap-n-taste/hooks';

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);

  const signupOrLogin = async (
    endpoint: string,
    payload?: Record<string, any>,
    isLogin?: boolean,
  ) => {
    console.log(endpoint, payload, isLogin);
    
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.post( endpoint, payload);
      setData(response.data);
      return response.data;
    } catch (err: any) {
      setError(err.response?.data?.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    data,
    signupOrLogin,
  };
}
