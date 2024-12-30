import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  email?: string;
  phone?: string;
  password: string;
  comparePassword(candidatePassword: string): boolean;
}

const userSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      unique: true,
      sparse: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      unique: true,
      sparse: true,
    },
    password: {
      type: String,
      required: false,
      default: null,
    },
  },
  { timestamps: true }
);

// Remove the password hashing logic
// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password') || !this.password) return next();
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

// Direct password comparison (no hashing)
userSchema.methods.comparePassword = function (candidatePassword: string) {
  return this.password === candidatePassword;
};

const User = mongoose.model<IUser>('User', userSchema);
export default User;
