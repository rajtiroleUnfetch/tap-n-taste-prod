import dotenv from 'dotenv';
dotenv.config();



import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import passport from './config/passport';  
import authRoutes from './routes/auth.routes';
import  connectDB  from './config/database'; 

console.log('GOOGLE_CLIENT_ID:', process.env.GOOGLE_CLIENT_ID);
console.log('GOOGLE_CLIENT_SECRET:', process.env.GOOGLE_CLIENT_SECRET);
console.log('JWT_SECRET:', process.env.JWT_SECRET);
console.log('MONGO_URI:', process.env.MONGO_URI);




// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize()); // Use the imported passport

connectDB();

app.use('/api/auth', authRoutes);  

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
