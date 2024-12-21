import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IReview extends Document {
  restaurant: Types.ObjectId; // Reference to Restaurant
  user: Types.ObjectId; // Reference to User
  rating: number;
  review: string;
  images?: string[]; // Optional array of image URLs
}

const reviewSchema = new Schema<IReview>(
  {
    restaurant: {
      type: Schema.Types.ObjectId,
      ref: 'Restaurant',
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: [true, 'Rating is required'],
    },
    review: {
      type: String,
      required: [true, 'Review text is required'],
      trim: true,
    },
    images: [
      {
        type: String,
        validate: {
          validator: (v: string) => /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/.test(v),
          message: 'Image URL must be valid and point to an image file.',
        },
      },
    ],
  },
  { timestamps: true }
);

const Review = mongoose.model<IReview>('Review', reviewSchema);
export default Review;
