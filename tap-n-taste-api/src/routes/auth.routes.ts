import express from 'express';
import {
  signup,
  verifySignupOTP,
  login,
  sendLoginOTP,
  verifyLoginOTP,
  requestAdminSignup,
  approveAdmin,
  googleAuth,
  googleAuthCallback,
} from '../controllers/auth.controller';
import { authenticate, authorize } from '../middlewares/auth.middleware';

const router = express.Router();

// Public routes
router.post('/signup', signup);
router.post('/signup/verify', verifySignupOTP);
router.post('/login', login);
router.post('/otp/login', sendLoginOTP);
router.post('/otp/login/verify', verifyLoginOTP);

// Google Auth routes
router.get('/auth/google', googleAuth);
router.get('/auth/google/callback', googleAuthCallback);

// Protected routes
router.post('/admin/signup', requestAdminSignup);
router.put('/admin/approve/:adminId', authenticate, authorize('SuperAdmin'), approveAdmin);

export default router;
