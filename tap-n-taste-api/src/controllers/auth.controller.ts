import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user.model';
import { AuthenticatedRequest } from '../middlewares/auth.middleware';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
const JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';

// Regular user signup
export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Create new user with 'User' role
    const user = new User({
      name,
      email,
      password,
      role: 'User'
    });

    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
};

// Admin signup request
export const requestAdminSignup = async (req: Request, res: Response) => {
  try {
    const { name, email, password, restaurantId } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Create admin with pending status
    const admin = new User({
      name,
      email,
      password,
      role: 'Admin',
      restaurantId,
      status: 'pending' // Add this field to user model
    });

    await admin.save();
    res.status(201).json({ message: 'Admin registration request submitted for approval' });
  } catch (error) {
    res.status(500).json({ error: 'Registration request failed' });
  }
};

// Super admin approving admin
export const approveAdmin = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { adminId } = req.params;

    // Verify the requester is a super admin
    if (req.user.role !== 'SuperAdmin') {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    const admin = await User.findById(adminId);
    if (!admin || admin.role !== 'Admin' || admin.status !== 'pending') {
      return res.status(404).json({ error: 'Invalid admin request' });
    }

    admin.status = 'active';
    await admin.save();

    res.status(200).json({ message: 'Admin approved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Approval failed' });
  }
};

// Login for all users
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    console.log(user);
    
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // For admin, check if approved
    if (user.role === 'Admin' && user.status !== 'active') {
      return res.status(401).json({ error: 'Admin account pending approval' });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRY }
    );

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
};
