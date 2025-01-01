import { z } from 'zod';

  
  export const adminSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    phone: z
      .string()
      .min(10, 'Phone number must be at least 10 digits')
      .max(15, 'Phone number cannot exceed 15 digits')
      .regex(/^\d+$/, 'Phone number must contain only digits'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    restaurantId: z.string().min(1, 'Restaurant ID is required'),
  });