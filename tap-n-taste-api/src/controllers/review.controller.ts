<<<<<<< Updated upstream
import Review from '../models/review.model.js';
import Restaurant from '../models/restaurant.model.js';
=======
import { Request, Response } from 'express';
import Review from '../models/review.model';
import Restaurant from '../models/restaurant.model';

export {};

declare module 'express' {
  export interface Request {
    user: {
      role: string;
      id: string;
      // Add other user properties if needed
    }
  }
}
>>>>>>> Stashed changes

// Create a new review
export const createReview = async (req, res) => {
  try {
    const { id: restaurantId } = req.params;
    const { user, rating, review, images } = req.body;

    if (!user || !rating || !review) {
      return res.status(400).json({ error: 'User, rating, and review are required.' });
    }

    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found.' });
    }

    const newReview = new Review({ restaurant: restaurantId, user, rating, review, images });
    const savedReview = await newReview.save();

    res.status(201).json({ message: 'Review created successfully.', data: savedReview });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create review.', details: error.message });
  }
};

// Get all reviews for a restaurant
export const getAllReviewsForRestaurant = async (req, res) => {
  try {
    const { id: restaurantId } = req.params;

    const reviews = await Review.find({ restaurant: restaurantId });
    res.status(200).json({ data: reviews });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch reviews.', details: error.message });
  }
};

// Get a specific review by ID
export const getReviewById = async (req, res) => {
  try {
    const { id: restaurantId, reviewId } = req.params;

    const review = await Review.findOne({ _id: reviewId, restaurant: restaurantId });
    if (!review) {
      return res.status(404).json({ error: 'Review not found.' });
    }

    res.status(200).json({ data: review });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch review.', details: error.message });
  }
};

// Update a specific review by ID
export const updateReview = async (req, res) => {
  try {
    const { id: restaurantId, reviewId } = req.params;

    const updatedReview = await Review.findOneAndUpdate(
      { _id: reviewId, restaurant: restaurantId },
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedReview) {
      return res.status(404).json({ error: 'Review not found.' });
    }

    res.status(200).json({ message: 'Review updated successfully.', data: updatedReview });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update review.', details: error.message });
  }
};

// Delete a specific review by ID
export const deleteReview = async (req, res) => {
  try {
    const { id: restaurantId, reviewId } = req.params;

    const deletedReview = await Review.findOneAndDelete({ _id: reviewId, restaurant: restaurantId });

    if (!deletedReview) {
      return res.status(404).json({ error: 'Review not found.' });
    }

    res.status(200).json({ message: 'Review deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete review.', details: error.message });
  }
};
