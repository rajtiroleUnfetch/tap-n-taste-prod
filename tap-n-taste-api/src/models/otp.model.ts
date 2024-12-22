import mongoose from 'mongoose';

const otpSchema = new mongoose.Schema({
  contact: { type: String, required: true },
  otp: { type: String, required: true },
  expiresAt: { type: Date, required: true },
});

export default mongoose.model('Otp', otpSchema);
