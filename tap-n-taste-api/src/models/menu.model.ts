import mongoose from 'mongoose';

const MenuItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    price: {
      type: Number,
      required: true,
      min: 0
    },
    category: {
      type: String,
      required: true,
    //   enum: [
    //     'Starter',
    //     'Main Course',
    //     'Dessert',
    //     'Beverage',
    //     'Side Dish',
    //     'Salad'
    //   ]
    },
    isAvailable: {
      type: Boolean,
      default: true
    },
    preparationTime: {
      type: Number,
      required: true,
      min: 1, // Time in minutes
    },
    ratings: {
      averageRating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
      },
      totalRatings: {
        type: Number,
        default: 0
      }
    },
    ingredients: [
      {
        type: String,
        trim: true
      }
    ],
    tags: [
      {
        type: String,
        trim: true // e.g., Vegan, Spicy, Gluten-Free
      }
    ],
    images: [
      {
        url: {
          type: String,
          trim: true
        },
        altText: {
          type: String,
          trim: true
        }
      }
    ],
    isChefSpecial: {
      type: Boolean,
      default: false
    },
    isMostLiked: {
      type: Boolean,
      default: false
    },
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Restaurant',
      required: true
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    //   required: true
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
);

const MenuItem = mongoose.model('MenuItem', MenuItemSchema);
export default MenuItem;
