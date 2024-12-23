import api from './api';

export const getAllRestaurants = async () => {
  const response = await api.get('/restaurants');
  return response.data;
};

export const getRestaurantById = async (id: string) => {
  const response = await api.get(`/restaurants/${id}`);
  return response.data;
};

export const createRestaurant = async (restaurant: {
  name: string;
  description: string;
  location: string;
  image?: string;
}) => {
  const response = await api.post('/restaurants', restaurant);
  return response.data;
};

export const updateRestaurant = async (id: string, updatedData: object) => {
  const response = await api.put(`/restaurants/${id}`, updatedData);
  return response.data;
};

export const deleteRestaurant = async (id: string) => {
  const response = await api.delete(`/restaurants/${id}`);
  return response.data;
};
