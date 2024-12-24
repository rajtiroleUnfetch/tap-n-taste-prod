import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import {AdminHomepage,AdminDashboard} from '@tap-n-taste/admin';

export const RestaurantAdminPage = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<AdminHomepage/>}>
        <Route path="dashboard" element={<AdminDashboard/>} />
        <Route path="orders" element={<div>orders</div>} />
        <Route path="payments" element={<div>payments</div>} />
        <Route path="notifications" element={<div>notification</div>} />
        <Route path="settings" element={<div>setting</div>} />
        <Route path="logout" element={<div>logout</div>} />
        <Route path="user/:userId/profile" element={<div>Profile Page</div>} />
        </Route>
        <Route path="login" element={<div>login page</div>} />
        <Route path="sign-up" element={<div>sign up</div>} />
        <Route path="menu" element={<div>Menu Page</div>} />
        <Route path="user/:userId/profile" element={<div>Profile Page</div>} />
        <Route path="user/:userId/cart" element={<div>Cart Page</div>} />
        <Route path="user/:userId/order" element={<div>Order Page</div>} />
        <Route path="user/:userId/notification" element={<div>Notification Page</div>} />
      </Routes>
    </Box>
  );
};
