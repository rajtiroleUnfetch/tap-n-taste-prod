import { Box, BottomNavigation } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { LoginSignUp } from '@tap-n-taste/ui';
import { TSubmit } from '@tap-n-taste/ui';
export const AdminLandingPage = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<div>Admin Home Page</div>} />
        <Route path="login" element={<LoginSignUp type="login" />} />
        <Route path="sign-up" element={<LoginSignUp type="signup" />} />
        <Route path="menu" element={<div>Admin Menu Page</div>} />
        <Route path="user/:userId/profile" element={<div>Profile Page</div>} />
        <Route path="user/:userId/cart" element={<div>Cart Page</div>} />
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
