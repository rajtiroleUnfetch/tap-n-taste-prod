import mongoose from "mongoose";

const faqSchema = new mongoose.Schema(
  {
    question: { 
      type: String, 
      required: true, 
      trim: true 
    }, // The question asked in the FAQ

    answer: { 
      type: String, 
      required: true, 
      trim: true 
    }, // The answer to the FAQ

    restaurantId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Restaurant', 
      required: true 
    }, // Reference to the restaurant related to the FAQ (if applicable)

    userId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User', 
      required: true 
    }, // Reference to the user who created or updated the FAQ

    status: { 
      type: String, 
      enum: ['active', 'archived'], 
      default: 'active' 
    }, // Status to determine if the FAQ is active or archived

    category: { 
      type: String, 
      enum: ['general', 'menu', 'order', 'delivery', 'other'], 
      default: 'general' 
    }, // Category to classify the FAQ (e.g., menu, order-related, general)

    createdAt: { 
      type: Date, 
      default: Date.now 
    }, // Timestamp when the FAQ was created

    updatedAt: { 
      type: Date 
    }, // Timestamp when the FAQ was last updated

  },
  { timestamps: true }
);

// Create the FAQ model
const FAQ = mongoose.model('FAQ', faqSchema);
export default FAQ;
