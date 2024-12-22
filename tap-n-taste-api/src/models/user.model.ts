import mongoose, { Document } from 'mongoose';
import bcrypt from 'bcrypt';

// Define the User interface extending Document
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  phone?: string;
  profileImage?: string;
  otp: string; 
  otpExpiry?: number; // Add OTP expiry date
  role: 'User' | 'Admin' | 'SuperAdmin';
  restaurantId?: mongoose.Schema.Types.ObjectId; // Admin only, linking to restaurant
  status: 'pending' | 'verified'; // Status after email verification
  comparePassword: (candidatePassword: string) => Promise<boolean>;
}

const userSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      required: true, 
      trim: true 
    },
    email: { 
      type: String, 
      required: true, 
      unique: true, 
      lowercase: true 
    },
    password: { 
      type: String, 
      required: true 
    },
    otp: { 
      type: String 
    },
    profileImage: { 
      type: String 
    },
    otpExpiry: {
      type: Date,
    },
    phone: { 
      type: String, 
      // required: true, 
      unique: true 
    },
    restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' }, // Only for Admin
    role: {
      type: String,
      enum: ['User', 'Admin', 'SuperAdmin'],
      default: 'User',
    },
    status: { 
      type: String, 
      enum: ['pending', 'verified'], 
      default: 'pending' 
    },
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
