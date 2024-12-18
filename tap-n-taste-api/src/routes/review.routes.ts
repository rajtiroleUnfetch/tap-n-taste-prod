import express from 'express';
import {
  createReview,
  getAllReviewsForRestaurant,
  getReviewById,
  updateReview,
  deleteReview,
} from '../controllers/review.controller';
import { authenticate } from '../middlewares/auth.middleware';

const reviewRoutes = express.Router({ mergeParams: true });

// Public Routes
reviewRoutes.get('/', getAllReviewsForRestaurant); // Get all reviews
reviewRoutes.get('/:reviewId', getReviewById); // Get specific review

// Protected Routes (Only logged-in users)
reviewRoutes.post('/', authenticate, createReview); // Create a review
reviewRoutes.put('/:reviewId', authenticate, updateReview); // Update a review
reviewRoutes.delete('/:reviewId', authenticate, deleteReview); // Delete a review

export default reviewRoutes;
