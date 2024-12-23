<<<<<<< HEAD
<<<<<<< Updated upstream
import jwt from 'jsonwebtoken';
=======
import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
>>>>>>> Stashed changes
=======
import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
>>>>>>> 30f794ba4720a7171c6262cbd08210541ea8594f

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Middleware to verify token
<<<<<<< HEAD
<<<<<<< Updated upstream
export const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
=======
export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  try {
=======
export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  try {
>>>>>>> 30f794ba4720a7171c6262cbd08210541ea8594f
    // Extract token from header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET); // Verify token
    req.user = decoded; // Attach decoded token to request object
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> 30f794ba4720a7171c6262cbd08210541ea8594f
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid or expired token.' });
  }
};

<<<<<<< HEAD
<<<<<<< Updated upstream
// Middleware to authorize based on roles
export const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Access denied. You do not have the required permissions.' });
=======
=======
>>>>>>> 30f794ba4720a7171c6262cbd08210541ea8594f
// Middleware to authorize roles
export const authorize = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user || typeof req.user === 'string' || !roles.includes(req.user['role'])) {
        return res.status(403).json({ error: 'Access denied. You do not have the required permissions.' });
      }
      next();
    } catch (error) {
      return res.status(403).json({ error: 'Authorization failed.' });
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> 30f794ba4720a7171c6262cbd08210541ea8594f
    }
  };
};
