import { Request } from 'express';

declare global {
  namespace Express {
    export interface Request {
      restaurantId?: string; // Add your custom property
    }
  }
}
