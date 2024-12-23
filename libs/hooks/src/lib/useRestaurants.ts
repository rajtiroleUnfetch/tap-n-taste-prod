import { useState, useEffect } from 'react';
import { getAllRestaurants } from '../../../services/api/src/lib/restaurants';

export const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getAllRestaurants();
        setRestaurants(data);
      } catch (err: any) {
        setError('Failed to fetch restaurants');
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  return { restaurants, loading, error };
};
