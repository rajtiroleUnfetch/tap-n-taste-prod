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

// Create a new review
export const createReview = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // Restaurant ID from URL
    const { rating, review, images } = req.body;

    const userId = req.user.id; // Authenticated user's ID (from middleware)

    // Ensure restaurant exists
    const restaurantExists = await Restaurant.findById(id);
    if (!restaurantExists) {
      return res.status(404).json({ error: 'Restaurant not found.' });
    }

    // Create and save the review
    const newReview = await Review.create({
      restaurant: id,
      user: userId,
      rating,
      review,
      images,
    });

    res.status(201).json({
      message: 'Review created successfully.',
      review: newReview,
    });
  } catch (error) {
    res.status(500).json({
      error: 'Failed to create review.',
      details: error.message,
    });
  }
};

// Get all reviews for a restaurant
export const getAllReviewsForRestaurant = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const reviews = await Review.find({ restaurant: id })
      .populate('user', 'name email') // Populate user details
      .sort({ createdAt: -1 }); // Sort by latest reviews

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({
      error: 'Failed to fetch reviews.',
      details: error.message,
    });
  }
};

// Get a specific review by ID
export const getReviewById = async (req: Request, res: Response) => {
  try {
    const { reviewId } = req.params;

    const review = await Review.findById(reviewId).populate('user', 'name email');
    if (!review) {
      return res.status(404).json({ error: 'Review not found.' });
    }

    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({
      error: 'Failed to fetch review.',
      details: error.message,
    });
  }
};

// Update a review
export const updateReview = async (req: Request, res: Response) => {
  try {
    const { reviewId } = req.params;
    const { rating, review, images } = req.body;

    const userId = req.user.id; // Authenticated user

    const updatedReview = await Review.findOneAndUpdate(
      { _id: reviewId, user: userId }, // Only review owner can update
      { rating, review, images },
      { new: true, runValidators: true }
    );

    if (!updatedReview) {
      return res.status(404).json({ error: 'Review not found or unauthorized.' });
    }

    res.status(200).json({
      message: 'Review updated successfully.',
      review: updatedReview,
    });
  } catch (error) {
    res.status(500).json({
      error: 'Failed to update review.',
      details: error.message,
    });
  }
};

// Delete a review
export const deleteReview = async (req: Request, res: Response) => {
  try {
    const { reviewId } = req.params;
    const userId = req.user.id;

    const deletedReview = await Review.findOneAndDelete({
      _id: reviewId,
      user: userId, // Ensure only review owner can delete
    });

    if (!deletedReview) {
      return res.status(404).json({ error: 'Review not found or unauthorized.' });
    }

    res.status(200).json({ message: 'Review deleted successfully.' });
  } catch (error) {
    res.status(500).json({
      error: 'Failed to delete review.',
      details: error.message,
    });
  }
};
