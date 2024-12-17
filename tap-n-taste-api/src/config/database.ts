import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const connectDB = async () => {
  const DATABASE_URL = process.env.DATABASE_URL;

  if (!DATABASE_URL) {
    console.error('DATABASE_URL is not defined in the environment variables.');
    process.exit(1);
  }

  try {
    await mongoose.connect(DATABASE_URL, {
      dbName: 'tap-n-taste-unfetch-ai'
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
};

export default connectDB;
