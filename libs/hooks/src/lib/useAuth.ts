import { useState } from 'react';
import {axiosInstance} from '@tap-n-taste/hooks';
import { useNavigate, useParams } from 'react-router-dom';
import {T_ADMIN_FRONTEND_URL,T_SCANNING_FRONTEND_URL} from '@tap-n-taste/constant'
export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);
  const navigate = useNavigate();
  const signupOrLogin = async (
    endpoint: string,
    payload?: Record<string, any>,
    isLogin?: boolean,
    isAdminSignUpLogin?: boolean,
    type?:string,
  ) => {
    console.log(endpoint, payload, isLogin,isAdminSignUpLogin,type);
    
    setLoading(true);
    setError(null);
    try {
      // const response = await axiosInstance.post( endpoint, payload);
      const response = await axiosInstance.post(
        endpoint,
        payload
      );
      setData(response.data);
      console.log(response.status===200);
      if (response?.status === 200) {
        
        const restaurantId = response?.data?.restaurantId||'1';
        const userId = response?.data?.id;
        console.log('response',response,isLogin);
      
        if (response?.data?.role==='Admin') {
              window.location.href = `${T_ADMIN_FRONTEND_URL}/restaurant/${restaurantId}/admin/${userId}`;
        } else if(response?.data?.role==='User'){
              window.location.href = `${T_SCANNING_FRONTEND_URL}/restaurant/${restaurantId}/user/${userId}`;
        }
      }
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
