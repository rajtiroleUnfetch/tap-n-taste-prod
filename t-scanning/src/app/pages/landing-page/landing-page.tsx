import { Box, BottomNavigation } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import HomePage from "./landing-page/home-page";
import { LoginSignUp } from "@tap-n-taste/ui";
import {TSubmit} from "@tap-n-taste/ui";
import {TFaq} from "@tap-n-taste/ui";
import MenuPage from '../menu-page/menu-page';
export const LandingPage = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginSignUp type="login" />} />
        <Route path="sign-up" element={<LoginSignUp type="signup" />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="user/:userId/profile" element={<div>Profile Page</div>} />
        <Route path="user/:userId/cart" element={<div>Cart Page</div>} />
        <Route path="user/:userId/order" element={<div>Order Page</div>} />
        <Route path="user/:userId/notification" element={<div>Notification Page</div>} />
        <Route path="faq" element={<TFaq/>} />
        <Route path="login/otp" element={<TSubmit />} />
      </Routes>
    </Box>
  );
};
