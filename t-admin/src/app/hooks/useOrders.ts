import { useState, useEffect } from 'react';
import axiosInstance from '../server/axiosInstance'; // Import your axios instance
import socket from '../socket/socket'; // Import socket instance

// Define types for the order data structure (same as before)
interface MenuItem {
  _id: string;
  name: string;
  price: number;
}

interface Order {
  _id: string;
  user: string;
  restaurant: string;
  items: {
    menuItem: MenuItem;
    quantity: number;
    price: number;
  }[];
  totalPrice: number;
  paymentStatus: 'Pending' | 'Paid' | 'Failed';
  orderStatus: 'Placed' | 'Confirmed' | 'In Preparation' | 'Ready for Pickup' | 'Out for Delivery' | 'Completed' | 'Cancelled';
  customerNote?: string;
  adminNote?: string;
  deliveryAddress: {
    street: string;
    city: string;
    zipCode: string;
    country: string;
  };
  deliveryMethod: 'Pickup' | 'Delivery';
  createdAt: string;
  updatedAt: string;
}

const useOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Create a new order
  const createOrder = async (orderData: Omit<Order, '_id' | 'createdAt' | 'updatedAt'>) => {
    try {
      setLoading(true);
      const response = await axiosInstance.post<Order>('/orders', orderData); // Make API call to create order
      setOrders((prevOrders) => [...prevOrders, response.data]); // Update orders list with the new order
    } catch (err) {
      setError('Error creating order');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch orders (if needed for admin panel) orders page that we have in figma
  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get<Order[]>('/orders'); // Get all orders
      setOrders(response.data);
    } catch (err) {
      setError('Error fetching orders');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Socket.io logic for receiving new order notifications in real-time
  useEffect(() => {
    // Listen for the new order notification
    socket.on('new-order', (order: Order) => {
      setOrders((prevOrders) => [order, ...prevOrders]); // Prepend the new order to the list
    });

    // Clean up the socket connection on component unmount
    return () => {
      socket.off('new-order'); // Unsubscribe from the event
    };
  }, []);

  return { orders, loading, error, createOrder, fetchOrders };
};

export default useOrders;
