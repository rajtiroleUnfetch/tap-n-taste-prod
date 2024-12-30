import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database';
import restaurantRoutes from './routes/restaurant.routes';
import authRoutes from './routes/auth.routes';
import googleAuthRoutes from './routes/googleAuthRoutes';
import passport from 'passport';
import './config/passport';
import errorHandler from './middlewares/errorHandler';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(passport.initialize());

// Database Connection
connectDB();

// Routes
app.use('/api/auth', authRoutes); // Email/Phone & Password Authentication
app.use('/api/auth', googleAuthRoutes); // Google Authentication
app.use('/api/restaurants', restaurantRoutes);

// Health Route
app.get('/health', async (req, res) => {
  const healthReport = {
    status: 'OK',
    uptime: process.uptime(),
    timestamp: new Date(),
    database: 'Unknown',
    memoryUsage: process.memoryUsage(),
  };

  try {
    // Check database connection
    const isDatabaseConnected = await checkDatabaseConnection();
    healthReport.database = isDatabaseConnected ? 'Connected' : 'Disconnected';
  } catch (err) {
    healthReport.database = 'Error';
  }

  res.status(200).json(healthReport);
});

// Test Route
app.get('/test', (req, res) => {
  res.status(200).json({ message: 'API Test Route is working!' });
});

// Root Route
app.get('/', (req, res) => {
  res.send({ message: 'Welcome to the Tap-n-Taste API!' });
});

// Error Handler Middleware
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Helper function to check database connection
async function checkDatabaseConnection() {
  const mongoose = require('mongoose');
  return mongoose.connection.readyState === 1;
}
