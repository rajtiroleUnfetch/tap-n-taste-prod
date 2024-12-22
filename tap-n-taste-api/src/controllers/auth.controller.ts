import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import User from '../models/user.model';
import { sendSignupOTPEmail, sendLoginOTPEmail } from '../utils/otpService';

const OTP_EXPIRY = 5 * 60 * 1000; // OTP expires in 5 minutes
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
const JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';

// Google Auth Logic
export const googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] });

export const googleAuthCallback = (req: Request, res: Response) => {
  passport.authenticate('google', { session: false }, async (err, user) => {
    console.log('Error:', err);
    console.log('User:', user);

    if (err || !user) {
      return res.status(401).json({ error: 'Google authentication failed' });
    }

    try {
      let existingUser = await User.findOne({ email: user.email });

      if (!existingUser) {
        existingUser = new User({
          name: user.name,
          email: user.email,
          role: user.role,
          status: user.status,
          password: user.password,
          profileImage: user.profileImage,
        });

        await existingUser.save();
      }

      const token = jwt.sign(
        { id: existingUser._id, email: existingUser.email, role: existingUser.role },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRY }
      );

      res.status(200).json({ token, user: existingUser });
    } catch (error) {
      console.error('Error during callback processing:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  })(req, res);
};


// Regular User Signup
export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password, phone } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
    if (existingUser) {
      return res.status(400).json({ error: 'Email or Phone already registered' });
    }

    // Generate OTP
    // const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Send OTP to email
    // await sendSignupOTPEmail('rajtirole23454@gmail.com', otp);

    // Create new user and save with status 'pending'
    const user = new User({
      name,
      email,
      password,
      phone,
      // otp,
      // otpExpiry: Date.now() + OTP_EXPIRY, // Set OTP expiry time
      role: 'User',
      status: 'verified',
    });
    await user.save();

    res.status(200).json({ message: 'User created successfully', user });
  } catch (error) {
    res.status(500).json({ error: 'Signup failed' });
  }
};

// OTP Verification for Signup
export const verifySignupOTP = async (req: Request, res: Response) => {
  try {
    const { email, otp } = req.body;

    // Find user by email and check OTP validity
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: 'User not found' });
    if (user.status !== 'pending') {
      return res.status(400).json({ error: 'User is already verified' });
    }
    if (user.otp !== otp) return res.status(400).json({ error: 'Invalid OTP' });

    // Check if OTP has expired
    if (Date.now() > user.otpExpiry) {
      return res.status(400).json({ error: 'OTP has expired' });
    }

    user.status = 'verified';
    await user.save();

    res.status(200).json({ message: 'Email verified successfully' });
  } catch (error) {
    res.status(500).json({ error: 'OTP verification failed' });
  }
};

// Login (Using Email or Phone and Password)
export const login = async (req: Request, res: Response) => {
  try {
    const { email, phone, password } = req.body;

    // Find user by email or phone
    const user = await User.findOne({ $or: [{ email }, { phone }] });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Check password match
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Admin check: Only active admins can login
    if (user.role === 'Admin' && user.status !== 'verified') {
      return res.status(401).json({ error: 'Admin account pending approval' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: JWT_EXPIRY });

    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
};

// Send OTP for Login
export const sendLoginOTP = async (req: Request, res: Response) => {
  try {
    const { email, phone } = req.body;

    // Find user
    const user = await User.findOne({ $or: [{ email }, { phone }] });
    if (!user) return res.status(404).json({ error: 'User not found' });

    // Generate and send OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    user.otp = otp;
    user.otpExpiry = Date.now() + OTP_EXPIRY;
    await user.save();

    // Send OTP via email
    if (email) await sendLoginOTPEmail(email, otp);
    res.status(200).json({ message: 'OTP sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send OTP' });
  }
};

// Verify Login OTP
export const verifyLoginOTP = async (req: Request, res: Response) => {
  try {
    const { email, otp } = req.body;

    const user = await User.findOne({ email });
    if (!user || user.otp !== otp) return res.status(400).json({ error: 'Invalid OTP' });
    if (Date.now() > user.otpExpiry) return res.status(400).json({ error: 'OTP expired' });

    const token = jwt.sign({ id: user._id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: JWT_EXPIRY });
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ error: 'OTP verification failed' });
  }
};

// Admin Signup Request (Pending Approval)
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
      status: 'pending', // Status will be updated once approved
    });

    await admin.save();
    res.status(201).json({ message: 'Admin registration request submitted for approval' });
  } catch (error) {
    res.status(500).json({ error: 'Registration request failed' });
  }
};

// Super Admin Approving Admin Signup
export const approveAdmin = async (req: Request, res: Response) => {
  try {
    const { adminId } = req.params;

    // Verify the requester is a super admin
    if (req.user?.role !== 'SuperAdmin') {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    const admin = await User.findById(adminId);
    if (!admin || admin.role !== 'Admin' || admin.status !== 'pending') {
      return res.status(404).json({ error: 'Invalid admin request' });
    }

    admin.status = 'verified';
    await admin.save();

    res.status(200).json({ message: 'Admin approved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Approval failed' });
  }
};
