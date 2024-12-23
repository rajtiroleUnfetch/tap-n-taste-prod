import mongoose from "mongoose";

const recommendationsSchema = new mongoose.Schema(
  {
    restaurantId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Restaurant', 
      required: true 
    }, // Reference to the Restaurant that this recommendation belongs to
    
    chefSpecials: { 
      type: [String], 
      default: [] 
    }, // List of chef specials

    mostLiked: { 
      type: [String], 
      default: [] 
    }, // List of most liked dishes or items

    recommendationType: { 
      type: String, 
      enum: ['Popular', 'Seasonal', 'Limited-time', 'Featured', 'Chef\'s Special'], 
      default: 'Popular' 
    }, // Type of recommendation

    createdBy: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User' 
    }, // Reference to the User who created the recommendation (could be an admin or chef)

    isActive: { 
      type: Boolean, 
      default: true 
    }, // Whether the recommendation is active or not

    validFrom: { 
      type: Date 
    }, // Start date for validity (e.g., for seasonal recommendations)

    validTo: { 
      type: Date 
    }, // End date for validity

    priority: { 
      type: Number, 
      default: 1 
    }, // Priority level for the recommendation (higher numbers mean higher priority)

    images: [
      {
        url: { type: String, required: true }, 
        altText: { type: String, default: '' } // URL and optional alt text for recommendation images
      }
    ],

    tags: [
      {
        type: String, 
        trim: true 
      } // Tags for filtering (e.g., "gluten-free", "vegan", "spicy")
    ],

    rating: { 
      type: Number, 
      default: 0, 
      min: 0, 
      max: 5 
    }, // Average rating for the recommendation

    feedback: [
      {
        user: { 
          type: mongoose.Schema.Types.ObjectId, 
          ref: 'User' 
        }, // Reference to the user who gave the feedback
        rating: { 
          type: Number, 
          required: true, 
          min: 0, 
          max: 5 
        }, // Rating given by the user
        comment: { 
          type: String, 
          trim: true 
        }, // Optional comment by the user
        createdAt: { 
          type: Date, 
          default: Date.now 
        }, // Timestamp for feedback
      }
    ],

    updatedBy: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User' 
    }, // Reference to the user who last updated the recommendation
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

const Recommendations = mongoose.model('Recommendations', recommendationsSchema);
export default Recommendations;
