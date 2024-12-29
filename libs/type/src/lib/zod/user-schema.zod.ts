import { z } from 'zod';
export const userSchema = z.object({
    name: z.string().min(1, 'Name is required').optional(),
    phone: z
      .string()
      .min(10, 'Phone number must be at least 10 digits')
      .max(15, 'Phone number cannot exceed 15 digits')
      .regex(/^\d+$/, 'Phone number must contain only digits')
      .optional(),
    email: z.string().email('Invalid email address').optional(),
    emailPhone: z.string().min(1, 'Email/Phone is required').optional(),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    restaurantId: z.string().optional(),
  });