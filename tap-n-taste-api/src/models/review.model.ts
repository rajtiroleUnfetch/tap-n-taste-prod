import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  // Link to the User who created the review
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true
  },

  // Link to the Restaurant to which the review belongs
  restaurant: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Restaurant', 
    required: true 
  },

  // User details (Optional but included for context)
  userDetails: {
    name: { type: String, required: true },
    profileImage: { type: String },
    role: { type: String, enum: ['User', 'Admin', 'SuperAdmin'], default: 'User' },
    phone: { type: String },
  },

  // Review content
  rating: { 
    type: Number, 
    required: true, 
    min: 1, 
    max: 5 
  },
  
  review: { 
    type: String, 
    trim: true,
  },
  
  // Media attached to the review (e.g., images or videos)
  media: { 
    type: [String], 
    default: [] 
  },

  // Timestamps for creation and last update
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  
  updatedAt: { 
    type: Date 
  },
  
}, { timestamps: true });


const Review = mongoose.model('Review', reviewSchema);
export default Review;
