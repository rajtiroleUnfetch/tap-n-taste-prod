import express from 'express';
<<<<<<< Updated upstream
import { signup, login } from '../controllers/auth.controller.js';
=======
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
>>>>>>> Stashed changes

const router = express.Router();

// Routes
router.post('/signup', signup);
router.post('/signup/verify', verifySignupOTP);
router.post('/login', login);
<<<<<<< Updated upstream
=======
router.post('/otp/login', sendLoginOTP);
router.post('/otp/login/verify', verifyLoginOTP);

// Google Auth routes
router.get('/auth/google', googleAuth);
router.get('/auth/google/callback', googleAuthCallback);

// Protected routes
router.post('/admin/signup', requestAdminSignup);
router.put('/admin/approve/:adminId', authenticate, authorize('SuperAdmin'), approveAdmin);
>>>>>>> Stashed changes

export default router;
