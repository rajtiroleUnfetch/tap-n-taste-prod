import express from 'express';
<<<<<<< HEAD
<<<<<<< Updated upstream
import { signup, login } from '../controllers/auth.controller.js';
=======
=======
>>>>>>> 30f794ba4720a7171c6262cbd08210541ea8594f
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
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> 30f794ba4720a7171c6262cbd08210541ea8594f

const router = express.Router();

// Public routes
router.post('/signup', signup);
router.post('/signup/verify', verifySignupOTP);
router.post('/login', login);
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
router.post('/otp/login', sendLoginOTP);
router.post('/otp/login/verify', verifyLoginOTP);

// Google Auth routes
router.get('/auth/google', googleAuth);
router.get('/auth/google/callback', googleAuthCallback);
=======
router.post('/otp/login', sendLoginOTP);
router.post('/otp/login/verify', verifyLoginOTP);
console.log('fasd');

// Google Auth routes
// router.get('/auth/google', googleAuth);
router.get('/google', (req, res) => {
  console.log('Google Auth Route Hit');
  googleAuth(req, res);
});

// router.get('/google/callback', (req, res) => {
//   console.log('Google Auth Route Hit');
//   googleAuthCallback(req, res);
// });
router.get('/google/callback', googleAuthCallback);
>>>>>>> 30f794ba4720a7171c6262cbd08210541ea8594f

// Protected routes
router.post('/admin/signup', requestAdminSignup);
router.put('/admin/approve/:adminId', authenticate, authorize('SuperAdmin'), approveAdmin);
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> 30f794ba4720a7171c6262cbd08210541ea8594f

export default router;
