import mongoose, { Document } from 'mongoose';
import bcrypt from 'bcrypt';

// Define the User interface extending Document
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: 'User' | 'Admin' | 'SuperAdmin';
  restaurantId: mongoose.Types.ObjectId | null;
  comparePassword: (candidatePassword: string) => Promise<boolean>; // Add comparePassword method type
}

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['User', 'Admin', 'SuperAdmin'],
      default: 'User',
    },
    restaurantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Restaurant',
      default: null, // Only for Admins
    },
  },
  { timestamps: true }
);

// Password hashing before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Method to compare passwords
userSchema.methods.comparePassword = async function (candidatePassword: string) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Define and export the model with the IUser interface
const User = mongoose.model<IUser>('User', userSchema);
export default User;
