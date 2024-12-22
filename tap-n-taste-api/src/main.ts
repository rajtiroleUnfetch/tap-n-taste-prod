import express from 'express';
import connectDB from './config/database';
import restaurantRoutes from './routes/restaurant.routes';
import authRoutes from './routes/auth.routes';
import dotenv from 'dotenv';
import errorHandler from './middlewares/errorHandler';
import { handleFileUpload } from './middlewares/uploadMiddleware';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Database Connection
connectDB();

//  Middleware to parse JSON and handle file upload
app.use(express.urlencoded({ extended: true }));
app.use(handleFileUpload); // Global file upload middleware

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/restaurants', restaurantRoutes);
// Error Handler
app.use(errorHandler);

// Health Route
app.get('/health', async (req, res) => {
  const healthReport = {
    status: 'OK',
    uptime: process.uptime(),
    timestamp: new Date(),
    database: 'Unknown',
    memoryUsage: process.memoryUsage(),
    // loadAverage: process.loadavg(),
  };

  try {
    // Check database connection
    // (Replace `checkConnection` with a valid DB health check function)
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

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Helper function to check database connection
async function checkDatabaseConnection() {
  // Implement database health check logic here
  // Example (for MongoDB):
  const mongoose = require('mongoose');
  return mongoose.connection.readyState === 1;
}
