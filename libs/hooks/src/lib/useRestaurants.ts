import { useEffect, useState } from 'react';
import api from '../../../services/api/src/lib/api';

interface Restaurant {
  id: string;
  name: string;
  location: string;
  cuisine: string;
  image: string; // Adjust fields based on your API response
}

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await api.get('/restaurants'); // Replace with your actual endpoint
        setRestaurants(response.data); // Adjust based on your API's response shape
      } catch (err: any) {
        setError(err.message || 'Failed to fetch restaurants');
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  return { restaurants, loading, error };
};

export default useRestaurants;
