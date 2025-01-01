import express from 'express';
import {
  signup,
  verifySignupOTP,
  login,
  sendLoginOTP,
  verifyLoginOTP,
  requestAdminSignup,
  approveAdmin,
  googleAuthCallback,
} from '../controllers/auth.controller';
import { authenticate, authorize } from '../middlewares/auth.middleware';
import passport from '../utils/googleAuth';

const router = express.Router();

// Public routes
router.post('/signup', signup);
router.post('/signup/verify', verifySignupOTP);
router.post('/login', login);
router.post('/otp/login', sendLoginOTP);
router.post('/otp/login/verify', verifyLoginOTP);
console.log('fasd');

// Google Auth routes
// router.get('/auth/google', googleAuth);
// router.get('/google',googleAuth);
// auth.routes.ts
router.get('/google', (req, res, next) => {
  const redirect = req.query.redirect; // Default to '/landing' if not provided
  const fullRedirectUrl = `${redirect}`;
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    state: encodeURIComponent(fullRedirectUrl), // Pass redirect path as state
  })(req, res, next);
});


// router.get('/google/callback', (req, res) => {
//   console.log('Google Auth Route Hit');
//   googleAuthCallback(req, res);
// });
router.get('/google/callback', googleAuthCallback);

// Protected routes
router.post('/admin/signup', requestAdminSignup);
router.put('/admin/approve/:adminId', authenticate, authorize('SuperAdmin'), approveAdmin);

export default router;
