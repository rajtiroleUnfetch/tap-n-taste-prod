import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, trim: true },
  slug: { type: String, unique: true, lowercase: true, trim: true },
  location: {
    longitude: { type: Number, required: true },
    latitude: { type: Number, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    zipCode: { type: String },
  },
  phone: { type: String, required: true },
  email: { type: String, unique: true, lowercase: true, trim: true },
  tagline: { type: String },
  description: { type: String, maxlength: 1000 },
  openHours: {
    days: { type: [String], required: true },
    hours: { type: String, required: true },
  },
  status: {
    type: String,
    enum: ['Open', 'Closed', 'Temporarily Closed'],
    default: 'Open',
  },
  features: { type: [String] },
  categories: { type: [String] },
  distance: { type: Number },
  averageRating: { type: Number, default: 0, min: 0, max: 5 },
  totalReviews: { type: Number, default: 0 },
  images: {
    banner: { type: String },
    gallery: { type: [String] },
  },
  videos: { type: [String] },
  facilities: { type: [String] },
  socialLinks: {
    facebook: { type: String },
    instagram: { type: String },
    twitter: { type: String },
    website: { type: String },
  },
  faq: [
    {
      question: { type: String, required: true },
      answer: { type: String, required: true },
    },
  ],
  recommendations: {
    chefSpecials: { type: [String] },
    mostLiked: { type: [String] },
  },
}, { timestamps: true });

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
export default Restaurant;
