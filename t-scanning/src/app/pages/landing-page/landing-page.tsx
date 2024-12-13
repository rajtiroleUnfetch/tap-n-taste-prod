import { Box, BottomNavigation } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import HomePage from './landing-page/home-page';
import { LoginSignUp } from '@tap-n-taste/ui';
import { TSubmit } from '@tap-n-taste/ui';
import CartPage from '../cart-page/cart-page';
export const LandingPage = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginSignUp type="login" />} />
        <Route path="sign-up" element={<LoginSignUp type="signup" />} />
        <Route path="menu" element={<div>Menu Page</div>} />
        <Route path="user/:userId/profile" element={<div>Profile Page</div>} />
        <Route path="user/:userId/cart" element={<CartPage />} />
        <Route path="user/:userId/order" element={<div>Order Page</div>} />
        <Route
          path="user/:userId/notification"
          element={<div>Notification Page</div>}
        />
        {/* Route for OTP */}
        <Route path="otp" element={<TSubmit />} />
      </Routes>
    </Box>
  );
};
