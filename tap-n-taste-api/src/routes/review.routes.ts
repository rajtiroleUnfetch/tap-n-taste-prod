import express from 'express';
import {
  createReview,
  getAllReviewsForRestaurant,
  getReviewById,
  updateReview,
  deleteReview,
} from '../controllers/review.controller.js';

const reviewRoutes = express.Router({ mergeParams: true }); // Enable access to `:id` parameter from parent route

// Create a new review
reviewRoutes.post('/', createReview);

// Get all reviews for a restaurant
reviewRoutes.get('/', getAllReviewsForRestaurant);

// Get a specific review by ID
reviewRoutes.get('/:reviewId', getReviewById);

// Update a specific review by ID
reviewRoutes.put('/:reviewId', updateReview);

// Delete a specific review by ID
reviewRoutes.delete('/:reviewId', deleteReview);

export default reviewRoutes;
