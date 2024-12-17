import jwt from 'jsonwebtoken';
import User, { IUser } from '../models/user.model.js';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
const JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';

// User Signup
export const signup = async (req, res) => {
  try {
    const { name, email, password, role, restaurantId } = req.body;

    // Ensure role is valid
    if (role && !['User', 'Admin', 'SuperAdmin'].includes(role)) {
      return res.status(400).json({ error: 'Invalid role specified.' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email is already in use.' });
    }

    // Create user
    const user = new User({ name, email, password, role, restaurantId });
    await user.save();

    res.status(201).json({ message: 'User created successfully.', user: { id: user._id, name, email, role } });
  } catch (error) {
    res.status(500).json({ error: 'Signup failed.', details: error.message });
  }
};
// User Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    // TypeScript now knows that comparePassword exists
    const isMatch = await (user as IUser).comparePassword(password); // Cast to IUser
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: JWT_EXPIRY });

    res.status(200).json({ message: 'Login successful.', token, user: { id: user._id, name: user.name, role: user.role } });
  } catch (error) {
    res.status(500).json({ error: 'Login failed.', details: error.message });
  }
};
