import express from 'express';
import { signup, login, requestAdminSignup, approveAdmin } from '../controllers/auth.controller';
import { authenticate, authorize } from '../middlewares/auth.middleware';

const router = express.Router();

// Public routes
router.post('/signup', signup);
router.post('/login', login);
router.post('/admin/signup', requestAdminSignup);

// Protected routes
router.put('/admin/approve/:adminId', authenticate, authorize('SuperAdmin'), approveAdmin);

export default router;
