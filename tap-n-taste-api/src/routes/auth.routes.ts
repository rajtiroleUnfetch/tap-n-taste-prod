
import express, { Request, Response } from 'express';
import passport from'../config/passport';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.model';

const router = express.Router();

// Google Auth Route
router.get('/Google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google Auth Callback
router.get('/Google/callback', passport.authenticate('google', { session: false }), (req: any, res: Response) => {
    try {
        if (!req.user) {
            return res.status(401).json({ error: 'User not authenticated' });
        }
        const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET!, { expiresIn: process.env.JWT_EXPIRY });
        res.json({ message: 'Google Auth successful', token });
    } catch (error) {
        console.error('Error during token generation:', error);
        res.status(500).json({ error: 'Google Auth failed' });
    }
});


// Signup Route
router.post('/signup', async (req: Request, res: Response) => {
    const { email, phone, password } = req.body;

    if (!password || (!email && !phone)) {
        return res.status(400).json({ message: 'Password and at least one of Email or Phone are required' });
    }

    try {
        let userExists = null;
        if (email) {
            userExists = await User.findOne({ email });
        } else if (phone) {
            userExists = await User.findOne({ phone });
        }

        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        console.log('Hashed Password for Signup:', hashedPassword); // Debug log for hashed password

        const newUser = new User({
            email: email || null,
            phone: phone || null,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Signup Error:', error);
        res.status(500).json({ error: error.message });
    }
});

// Login Route
router.post('/login', async (req: Request, res: Response) => {
    const { email, phone, password } = req.body;

    if (!password || (!email && !phone)) {
        return res.status(400).json({ message: 'Password and either Email or Phone are required' });
    }

    try {
        const userQuery: any = {};
        if (email) {
            userQuery.email = email;
        } else if (phone) {
            userQuery.phone = phone.trim();
        }

        const user = await User.findOne(userQuery);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        console.log('Password from Request:', password); // Debug log for password coming from request
        console.log('Stored Hashed Password:', user.password); // Debug log for stored hashed password

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, { expiresIn: process.env.JWT_EXPIRY });
        res.json({ message: 'Login successful', token });
    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({ error: error.message });
    }
});

export default router;