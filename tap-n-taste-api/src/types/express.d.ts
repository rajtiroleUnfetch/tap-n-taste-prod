import { Request } from 'express';

declare global {
  namespace Express {
    export interface Request {
      restaurantId?: string; // Add your custom property
    }
  }
}

declare module 'express-serve-static-core' {
  interface Request {
    user?: JwtPayload | string;
  }
}
