import express from 'express';
import {
  createMenuItem,
  getAllMenuItemsForRestaurant,
  getMenuItemById,
  updateMenuItem,
  deleteMenuItem
} from '../controllers/menu.controller.js';

const menuRoutes = express.Router({ mergeParams: true }); // Enable access to `:id` parameter from parent route

// Route to create a new menu item for a restaurant
menuRoutes.post('/', createMenuItem);

// Route to get all menu items for a restaurant
menuRoutes.get('/', getAllMenuItemsForRestaurant);

// Route to get a specific menu item by ID for a restaurant
menuRoutes.get('/:menuId', getMenuItemById);

// Route to update a specific menu item by ID for a restaurant
menuRoutes.put('/:menuId', updateMenuItem);

// Route to delete a specific menu item by ID for a restaurant
menuRoutes.delete('/:menuId', deleteMenuItem);

export default menuRoutes;
