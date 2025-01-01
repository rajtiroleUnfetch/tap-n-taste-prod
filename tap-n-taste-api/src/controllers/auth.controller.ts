import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import User from '../models/user.model';
import { v4 as uuidv4 } from 'uuid';
import {
  T_ADMIN_FRONTEND_URL,
  T_SCANNING_FRONTEND_URL,
} from '../constant/route.constant';

const OTP_EXPIRY = 5 * 60 * 1000; // OTP expires in 5 minutes
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
const JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';

export const googleAuthCallback = (req: Request, res: Response) => {
  passport.authenticate('google', { session: false }, async (err, user) => {
    console.log('Error:', err);
    console.log('User:', user);

    if (err || !user) {
      return res.status(401).json({ message: 'Google authentication failed' });
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
          phone: user.email,
          profileImage: user.profileImage,
          GAccessToken: user.GAccessToken,
          GRefreshToken: user.GRefreshToken,
        });

        await existingUser.save();
      }

      const token = jwt.sign(
        {
          id: existingUser._id,
          email: existingUser.email,
          role: existingUser.role,
        },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRY }
      );
      // Set token in cookies
      res.cookie('token', token, {
        httpOnly: true, // Prevents client-side JS from accessing the cookie
        secure: process.env.NODE_ENV === 'production', // Send only over HTTPS in production
        sameSite: 'none', // Mitigate CSRF attacks
      });
      // Extract restaurant ID from the request if provided
      const providedRestaurantId = req.query.restaurantId;
      // Determine the restaurant ID to use based on the role
      let restaurantId;
      if (existingUser.role === 'Admin') {
        // For admin, always use the restaurant ID from the user model
        restaurantId = existingUser.restaurantId;
      } else if (existingUser.role === 'User') {
        // For user, prefer the provided restaurant ID; otherwise, use the model
        restaurantId = providedRestaurantId || existingUser.restaurantId || '1';
      }

      // Determine redirect URL based on role
      let redirectUrl = '';
      if (existingUser.role === 'User') {
        redirectUrl = `${T_SCANNING_FRONTEND_URL}/restaurant/${restaurantId}/user/${existingUser.id}/`;
      } else if (existingUser.role === 'Admin') {
        redirectUrl = `${T_ADMIN_FRONTEND_URL}/restaurant/${restaurantId}/admin/${existingUser.id}/`;
      }

      // Redirect the user
      res.redirect(redirectUrl);
    } catch (error) {
      console.error('Error during callback processing:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  })(req, res);
};

// Regular User Signup
// export const signup = async (req: Request, res: Response) => {
//   try {
//     const { name, email, password, phone } = req.body;

//     // Check if user exists
//     const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
//     if (existingUser) {
//       return res.status(400).json({ existingUser,error: 'Email or Phone already registered' });
//     }

//     // Generate OTP
//     // const otp = Math.floor(100000 + Math.random() * 900000).toString();

//     // Send OTP to email
//     // await sendSignupOTPEmail('rajtirole23454@gmail.com', otp);

//     // Create new user and save with status 'pending'
//     const user = new User({
//       name,
//       email,
//       password,
//       phone,
//       // otp,
//       // otpExpiry: Date.now() + OTP_EXPIRY, // Set OTP expiry time
//       role: 'User',
//       status: 'verified',
//     });
//     await user.save();

//     res.status(200).json({ message: 'User created successfully', user });
//   } catch (error) {
//     res.status(500).json({ error: 'Signup failed' });
//   }
// };
// export const signup = async (req: Request, res: Response) => {
//   try {
//     const { name, email, password, phone } = req.body;

//     // Validate inputs
//     if (!name || !password || (!email && !phone)) {
//       return res.status(400).json({ error: 'Name, password, and either email or phone are required' });
//     }

//     const query=email ? { email } : { phone };

//     // Check if user with the same email or phone already exists
//     const existingUser = await User.findOne({
//       query
//     });
//     if (existingUser) {
//       return res
//         .status(400)
//         .json({ error: 'Email or Phone already registered', existingUser });
//     }

//     // Create new user
//     const user = new User({
//       name,
//       email: email || null, // Set to null if not provided
//       phone: phone || null, // Set to null if not provided
//       password,
//       role: 'User', // Default role
//       status: 'verified', // Directly set status as verified for signup
//     });

//     await user.save();

//     // Return success response
//     res.status(201).json({
//       message: 'User created successfully',
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         phone: user.phone,
//         role: user.role,
//         status: user.status,
//       },
//     });
//   } catch (error) {
//     console.error('Signup error:', error);
//     res.status(500).json({ error: 'Signup failed' });
//   }
// };

// export const login = async (req: Request, res: Response) => {
//   try {
//     const { email, phone, password } = req.body;

//     // Find user by email or phone
//     const user = await User.findOne({ $or: [{ email }, { phone }] });
//     if (!user) {
//       return res.status(401).json({ user,error: 'Invalid credentials' });
//     }

//     // Check password match
//     const isMatch = await user.comparePassword(password);
//     if (!isMatch) {
//       return res.status(401).json({ user,error: 'Invalid credentials' });
//     }

//     // Admin check: Only active admins can login
//     if (user.role === 'Admin' && user.status !== 'verified') {
//       return res.status(401).json({ error: 'Admin account pending approval' });
//     }

//     // Generate JWT token
//     const token = jwt.sign({ id: user._id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: JWT_EXPIRY });

//     res.status(200).json({ token, user });
//   } catch (error) {
//     res.status(500).json({ error: 'Login failed' });
//   }
// };
export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password, phone } = req.body;

    // Validate inputs
    if (!name || !password || (!email && !phone)) {
      return res.status(400).json({
        message: 'Name, password, and either email or phone are required',
      });
    }

    // Build query conditionally
    const query: any = {};
    if (email) query.email = email;
    if (phone) query.phone = phone;

    // Check if user with the same email or phone already exists
    const existingUser = await User.findOne({ email });
    const existingUserPhone = await User.findOne({ phone });

    if (existingUser || existingUserPhone) {
      return res
        .status(400)
        .json({
          message: 'Email or Phone already registered',
          user: existingUser || existingUserPhone,
        });
    }

    // Create new user
    const user = new User({
      name,
      email: email || phone || uuidv4(), // Set to null if not provided
      phone: phone || email || uuidv4(), // Set to null if not provided
      password,
      role: 'User', // Default role
      status: 'verified', // Directly set status as verified for signup
    });

    await user.save();

    // Return success response
    res.status(201).json({
      message: 'User created successfully',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        status: user.status,
      },
    });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Signup failed' });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, phone, password } = req.body;

    if (!password || (!email && !phone)) {
      return res
        .status(400)
        .json({ message: 'Password and either email or phone are required' });
    }

    // Build query conditionally
    const query: any = {};
    if (email) query.email = email;
    if (phone) query.phone = phone;

    // Find user by email or phone
    const user = await User.findOne({
      $or: Object.keys(query).map((key) => ({ [key]: query[key] })),
    });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check password match
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Admin check: Only active admins can login
    if (user.role === 'Admin' && user.status !== 'verified') {
      return res
        .status(401)
        .json({ message: 'Admin account pending approval' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRY }
    );

    res
      .setHeader('token', token)
      .status(200)
      .cookie('token', token, {
        httpOnly: true, // Prevents client-side JS from accessing the cookie
        secure: true, // Send only over HTTPS in production
        sameSite: 'none', // For cross-origin requests, SameSite must be 'None'
      })
      .json({
        token,
        user,
        message: 'Login successful',
        id: user?.id,
        restaurantId: user?.restaurantId,
        role: user?.role,
      })
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Login failed' });
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
    // if (email) await sendLoginOTPEmail(email, otp);
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
    if (!user || user.otp !== otp)
      return res.status(400).json({ error: 'Invalid OTP' });
    if (Date.now() > user.otpExpiry)
      return res.status(400).json({ error: 'OTP expired' });

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRY }
    );
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ error: 'OTP verification failed' });
  }
};

// Admin Signup Request (Pending Approval)
export const requestAdminSignup = async (req: Request, res: Response) => {
  try {
    const { name, email, password, restaurantId, phone } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Create admin with pending status
    const admin = new User({
      name,
      email,
      phone: phone || email,
      password,
      role: 'Admin',
      restaurantId,
      status: 'pending', // Status will be updated once approved
    });

    await admin.save();
    res
      .status(201)
      .json({
        message: 'Admin registration request submitted for approval',
        admin,
      });
  } catch (error) {
    res
      .status(500)
      .json({ errorMessage: 'Registration request failed', error });
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
