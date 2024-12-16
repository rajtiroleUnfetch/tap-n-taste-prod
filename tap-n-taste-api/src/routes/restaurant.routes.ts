import express from 'express';
import {
  createRestaurant,
  getRestaurants,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant,
} from '../controllers/restaurant.controller.js';
import menuRoutes from './menu.routes.js';
import reviewRoutes from './review.routes.js';

const router = express.Router();

// Nested routes for menus and reviews under a specific restaurant
router.use('/:id/menu', (req, res, next) => {
  req.restaurantId = req.params.id; // Pass the restaurant ID to the nested menu routes
  next();
}, menuRoutes);

router.use('/:id/reviews', (req, res, next) => {
  req.restaurantId = req.params.id; // Pass the restaurant ID to the nested review routes
  next();
}, reviewRoutes);

// Routes for restaurant CRUD operations
router.post('/', createRestaurant); // Create a restaurant
router.get('/', getRestaurants); // Get all restaurants
router.get('/:id', getRestaurantById); // Get a single restaurant by ID
router.put('/:id', updateRestaurant); // Update a restaurant by ID
router.delete('/:id', deleteRestaurant); // Delete a restaurant by ID

export default router;
