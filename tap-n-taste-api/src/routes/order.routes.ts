import express from 'express';
import { createOrder, updateOrderStatus } from '../controllers/order.controller';

const orderRoutes = express.Router();

// POST route for creating an order
orderRoutes.post('/', createOrder); // Create a new order

// PATCH route for updating the order status
orderRoutes.patch('/:orderId/status', updateOrderStatus); // Update order status by order ID

export default orderRoutes;
