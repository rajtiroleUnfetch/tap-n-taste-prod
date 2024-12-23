import mongoose from "mongoose";

const socialLinksSchema = new mongoose.Schema({
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant', // Link to the restaurant document
    required: true, // This is a mandatory field
  },
  facebook: {
    type: String,
    trim: true,
    default: null,
  },
  instagram: {
    type: String,
    trim: true,
    default: null,
  },
  twitter: {
    type: String,
    trim: true,
    default: null,
  },
  website: {
    type: String,
    trim: true,
    default: null,
  },
  linkedin: {
    type: String,
    trim: true,
    default: null,
  },
  youtube: {
    type: String,
    trim: true,
    default: null,
  },
  snapchat: {
    type: String,
    trim: true,
    default: null,
  },
  tiktok: {
    type: String,
    trim: true,
    default: null,
  },
  pinterest: {
    type: String,
    trim: true,
    default: null,
  },

  // Verification statuses for social media profiles
  isFacebookVerified: {
    type: Boolean,
    default: false,
  },
  isInstagramVerified: {
    type: Boolean,
    default: false,
  },
  isTwitterVerified: {
    type: Boolean,
    default: false,
  },
  isLinkedinVerified: {
    type: Boolean,
    default: false,
  },
  isYoutubeVerified: {
    type: Boolean,
    default: false,
  },
  isSnapchatVerified: {
    type: Boolean,
    default: false,
  },
  isTiktokVerified: {
    type: Boolean,
    default: false,
  },
  isPinterestVerified: {
    type: Boolean,
    default: false,
  },

}, { timestamps: true });

const SocialLinks = mongoose.model("SocialLinks", socialLinksSchema);
export default SocialLinks;
