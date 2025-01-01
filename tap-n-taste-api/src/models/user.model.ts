import mongoose, { Document } from 'mongoose';
import bcrypt from 'bcrypt';

// Define the User interface extending Document
export interface IUser extends Document {
  name: string;
  email?: string;
  password: string;
  phone?: string;
  profileImage?: string;
  otp: string;
  otpExpiry?: number; // Add OTP expiry date
  role: 'User' | 'Admin' | 'SuperAdmin';
  restaurantId?: mongoose.Schema.Types.ObjectId; // Admin only, linking to restaurant
  status: 'pending' | 'verified'; // Status after email verification
  comparePassword: (candidatePassword: string) => Promise<boolean>;

  // New fields
  lastLogin?: Date;
  preferences?: {
    language: string;
    currency: string;
    notificationsEnabled: boolean;
    dietaryPreferences: string[]; // User's dietary preferences e.g., Vegan, Gluten-Free, etc.
    favoriteCuisine?: string; // User's favorite cuisine e.g., Italian, Chinese, etc.
  };
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  dateOfBirth?: Date;
  gender?: 'Male' | 'Female' | 'Other';
  socialLinks?: mongoose.Schema.Types.ObjectId; // Reference to SocialLinks schema
  referralCode?: string; // For referral program
  referredBy?: mongoose.Schema.Types.ObjectId; // Referrer (if applicable)
  isVerified?: boolean; // For email/phone verification
  twoFactorAuthEnabled?: boolean; // Two-factor authentication enabled or not
  resetPasswordToken?: string; // Token for password reset
  resetPasswordExpiry?: Date; // Expiry date for password reset token
  isBlocked?: boolean; // Block user from login if true
  favoriteRestaurants?: mongoose.Schema.Types.ObjectId[]; // List of restaurants the user prefers
  orderHistory?: mongoose.Schema.Types.ObjectId[]; // List of past orders by user
}

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, unique: true, lowercase: true, default: null },
    password: { type: String, required: true },
    otp: { type: String },
    profileImage: { type: String },
    otpExpiry: { type: Date },
    phone: { type: String, unique: true, default: null },
    restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' }, // Only for Admin
    role: {
      type: String,
      enum: ['User', 'Admin', 'SuperAdmin'],
      default: 'User',
    },
    status: { type: String, enum: ['pending', 'verified'], default: 'pending' },
    accessToken: { type: String },
    refreshToken: { type: String },
    GAccessToken: { type: String },
    GRefreshToken: { type: String },

    // New fields
    lastLogin: { type: Date },
    preferences: {
      language: { type: String, default: 'English' },
      currency: { type: String, default: 'USD' },
      notificationsEnabled: { type: Boolean, default: true },
      dietaryPreferences: { 
        type: [String], 
        default: [], // e.g., Vegan, Gluten-Free, Dairy-Free
      },
      favoriteCuisine: { type: String, default: null }, // e.g., Italian, Chinese, etc.
    },
    address: {
      street: { type: String, trim: true },
      city: { type: String, trim: true },
      state: { type: String, trim: true },
      zipCode: { type: String, trim: true },
      country: { type: String, trim: true },
    },
    dateOfBirth: { type: Date },
    gender: { type: String, enum: ['Male', 'Female', 'Other'] },
    socialLinks: { type: mongoose.Schema.Types.ObjectId, ref: 'SocialLinks' }, // Reference to SocialLinks schema
    referralCode: { type: String },
    referredBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    isVerified: { type: Boolean, default: false },
    twoFactorAuthEnabled: { type: Boolean, default: false },
    resetPasswordToken: { type: String },
    resetPasswordExpiry: { type: Date },
    isBlocked: { type: Boolean, default: false }, // Blocked users cannot log in
    favoriteRestaurants: [{ 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Restaurant' 
    }], // List of restaurants the user prefers
    orderHistory: [{ 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Order' 
    }], // List of past orders by the user
  },
  { timestamps: true }
);

// Password hashing before saving
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Method to compare passwords
userSchema.methods.comparePassword = async function (
  candidatePassword: string
) {
  return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model<IUser>('User', userSchema);
export default User;
