import express from 'express';
import connectDB from './config/database';
import restaurantRoutes from './routes/restaurant.routes';
import authRoutes from './routes/auth.routes';
import dotenv from 'dotenv';
import errorHandler from './middlewares/errorHandler';
import { handleFileUpload } from './middlewares/uploadMiddleware';
import passport from './utils/googleAuth';
import http from 'http';  // Import HTTP to create server
import socketIo from 'socket.io';  // Import Socket.IO
import cors from 'cors';  // Import CORS for cross-origin handling

// Load environment variables from .env file
dotenv.config();

const app = express();
const server = http.createServer(app);  // Create an HTTP server from Express
export const io = new socketIo.Server(server, {  // Initialize Socket.IO
  
});

const PORT = process.env.PORT || 3000;

// CORS Configuration
const corsOptions = {
  origin:[ 'http://localhost:4200', 'http://localhost:4300'],  // Allow both frontend URLs
  credentials: true,  // Allow cookies to be sent with requests
};


// Enable CORS with the specified options
app.use(cors(corsOptions));

// Middleware 
app.use(express.json());

// Database Connection
connectDB();

// Middleware to parse JSON and handle file upload
app.use(express.urlencoded({ extended: true }));
app.use(handleFileUpload);  // Global file upload middleware

// Initialize Passport
app.use(passport.initialize());

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
server.listen(PORT, () => {  // Use the `server` object to listen instead of `app.listen()`
  console.log(`Server running on http://localhost:${PORT}`);
});

// Socket.IO Logic: Listen for connections
io.on('connection', (socket) => {
  console.log('A user connected');
  
  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Helper function to check database connection
async function checkDatabaseConnection() {
  // Implement database health check logic here
  // Example (for MongoDB):
  const mongoose = require('mongoose');
  return mongoose.connection.readyState === 1;  // Check if DB is connected
}
