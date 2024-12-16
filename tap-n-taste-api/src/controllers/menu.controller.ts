import MenuItem from '../models/menu.model.js';
import Restaurant from '../models/restaurant.model.js';

// Controller to create a menu item for a restaurant
export const createMenuItem = async (req, res) => {
  try {
    const restaurantId = req.params.id;
    const { name, price, category, createdBy } = req.body;

    // Validate required fields
    if (!name || !price || !category) {
      return res.status(400).json({ error: 'Required fields are missing' });
    }

    // Ensure the restaurant exists
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }

    const menuItem = new MenuItem({ ...req.body, restaurant: restaurantId });
    const savedMenuItem = await menuItem.save();

    res.status(201).json({ message: 'Menu item created successfully', data: savedMenuItem });
  } catch (error) {
    res.status(500).json({ error: 'Error creating menu item', details: error.message });
  }
};

// Controller to get all menu items for a restaurant
export const getAllMenuItemsForRestaurant = async (req, res) => {
  try {
    const restaurantId = req.params.id;

    // Ensure the restaurant exists
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }

    const menuItems = await MenuItem.find({ restaurant: restaurantId });
    res.status(200).json({ data: menuItems });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching menu items', details: error.message });
  }
};

// Controller to get a specific menu item by ID for a restaurant
export const getMenuItemById = async (req, res) => {
  try {
    const { id: restaurantId, menuId } = req.params;

    const menuItem = await MenuItem.findOne({ _id: menuId, restaurant: restaurantId });
    if (!menuItem) {
      return res.status(404).json({ error: 'Menu item not found' });
    }

    res.status(200).json({ data: menuItem });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching menu item', details: error.message });
  }
};

// Controller to update a specific menu item by ID for a restaurant
export const updateMenuItem = async (req, res) => {
  try {
    const { id: restaurantId, menuId } = req.params;

    const updatedMenuItem = await MenuItem.findOneAndUpdate(
      { _id: menuId, restaurant: restaurantId },
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedMenuItem) {
      return res.status(404).json({ error: 'Menu item not found' });
    }

    res.status(200).json({ message: 'Menu item updated successfully', data: updatedMenuItem });
  } catch (error) {
    res.status(500).json({ error: 'Error updating menu item', details: error.message });
  }
};

// Controller to delete a specific menu item by ID for a restaurant
export const deleteMenuItem = async (req, res) => {
  try {
    const { id: restaurantId, menuId } = req.params;

    const deletedMenuItem = await MenuItem.findOneAndDelete({ _id: menuId, restaurant: restaurantId });

    if (!deletedMenuItem) {
      return res.status(404).json({ error: 'Menu item not found' });
    }

    res.status(200).json({ message: 'Menu item deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting menu item', details: error.message });
  }
};
