import Restaurant from '../models/restaurant.model';

// Create a restaurant
export const createRestaurant = async (req, res, next) => {
  try {
    const newRestaurant = new Restaurant(req.body);
    const savedRestaurant = await newRestaurant.save();
    res.status(201).json(savedRestaurant);
  } catch (error) {
    next(error); // Pass to error handler middleware
  }
};

// Get all restaurants
export const getRestaurants = async (req, res, next) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json(restaurants);
  } catch (error) {
    next(error);
  }
};

// Get a single restaurant
export const getRestaurantById = async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) return res.status(404).json({ message: 'Restaurant not found' });
    res.status(200).json(restaurant);
  } catch (error) {
    next(error);
  }
};

// Update a restaurant
export const updateRestaurant = async (req, res, next) => {
  try {
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedRestaurant) return res.status(404).json({ message: 'Restaurant not found' });
    res.status(200).json(updatedRestaurant);
  } catch (error) {
    next(error);
  }
};

// Delete a restaurant
export const deleteRestaurant = async (req, res, next) => {
  try {
    const deletedRestaurant = await Restaurant.findByIdAndDelete(req.params.id);
    if (!deletedRestaurant) return res.status(404).json({ message: 'Restaurant not found' });
    res.status(200).json({ message: 'Restaurant deleted successfully' });
  } catch (error) {
    next(error);
  }
};
