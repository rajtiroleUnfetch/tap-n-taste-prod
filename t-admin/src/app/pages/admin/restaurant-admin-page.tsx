import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import {
  AdminHomepage,
  AdminDashboard,
  AdminOrderPage,
  AdminOrderViews,
  AdminPaymentPage,
  AdminMenuPage,
  
} from '@tap-n-taste/admin';
import { LoginSignUp, Navbar } from '@tap-n-taste/ui';

export const RestaurantAdminPage = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
      {/* <Route path="/auth/google/callback" element={<GoogleAuthCallback />} /> */}
        <Route path="/" element={<AdminHomepage />}>
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          {/* Main Orders Route with Child Routes */}
          <Route path="orders" element={<AdminOrderPage />}>
            <Route index element={<div>Select an Order</div>} />
            <Route path="details" element={<div>Order Details</div>} />
            <Route path="views" element={<AdminOrderViews/>} />
          </Route>
          {/* Main Orders Route with Child Routes */}
          <Route path="menu" element={<AdminMenuPage />}>
          </Route>
          <Route path="payments" element={<AdminPaymentPage/>} />
          <Route path="notifications" element={<div>notification</div>} />
          <Route path="settings" element={<div>setting</div>} />
          <Route path="logout" element={<div>logout</div>} />
          <Route
            path="user/:userId/profile"
            element={<div>Profile Page</div>}
          />
        </Route>
        <Route path="login" element={<div>login page</div>} />
        <Route path="sign-up" element={<div>sign up</div>} />
        <Route path="menu" element={<div>Menu Page</div>} />
        <Route path="user/:userId/profile" element={<div>Profile Page</div>} />
        <Route path="user/:userId/cart" element={<div>Cart Page</div>} />
        <Route path="user/:userId/order" element={<div>Order Page</div>} />
        <Route
          path="user/:userId/notification"
          element={<div>Notification Page</div>}
        />
      </Routes>
    </Box>
  );
};
