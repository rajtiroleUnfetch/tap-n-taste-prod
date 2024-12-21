import express from 'express';
import { authenticate, authorize } from '../middlewares/auth.middleware';
import {
  createMenuItem,
  getAllMenuItemsForRestaurant,
  getMenuItemById,
  updateMenuItem,
  deleteMenuItem
} from '../controllers/menu.controller';

const menuRoutes = express.Router({ mergeParams: true });

// Create a new menu item - Admin and SuperAdmin
menuRoutes.post('/', authenticate, authorize('Admin', 'SuperAdmin'), createMenuItem);

// Get all menu items - All users can access
menuRoutes.get('/', getAllMenuItemsForRestaurant);

// Get a specific menu item by ID - All users can access
menuRoutes.get('/:menuId', getMenuItemById);

// Update a menu item - Admin and SuperAdmin
menuRoutes.put('/:menuId', authenticate, authorize('Admin', 'SuperAdmin'), updateMenuItem);

// Delete a menu item - Admin and SuperAdmin
menuRoutes.delete('/:menuId', authenticate, authorize('Admin', 'SuperAdmin'), deleteMenuItem);

export default menuRoutes;
