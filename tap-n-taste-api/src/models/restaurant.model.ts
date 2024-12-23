import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    slug: { type: String, unique: true, lowercase: true, trim: true },
    location: { type: mongoose.Schema.Types.ObjectId, ref: 'Location', required: true },
    contact: { type: mongoose.Schema.Types.ObjectId, ref: 'Contact', required: true },
    tagline: { type: String },
    description: { type: String, maxlength: 1000 },
    openHours: { type: mongoose.Schema.Types.ObjectId, ref: 'OpenHours', required: true },
    status: {
      type: String,
      enum: ['Open', 'Closed', 'Temporarily Closed'],
      default: 'Open',
    },
    distance: { type: Number },
    cuisine: { type: [String], required: true },
    features: { type: [String] },
    facilities: { type: [String] },
    categories: { type: [String] },
    averageRating: { type: Number, default: 0, min: 0, max: 5 },
    totalReviews: { type: Number, default: 0 },
    offers: { type: [String] },
    media: { type: mongoose.Schema.Types.ObjectId, ref: 'Media' },
    socialLinks: { type: mongoose.Schema.Types.ObjectId, ref: 'SocialLinks' },
    recommendations: { type: mongoose.Schema.Types.ObjectId, ref: 'Recommendations' },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
    events: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }],
    faq: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FAQ' }],
  },
  { timestamps: true }
);

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
export default Restaurant;
