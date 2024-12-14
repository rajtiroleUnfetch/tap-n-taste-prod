import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";

export const RestaurantAdminPage = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<div>HomePage</div>} />
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
