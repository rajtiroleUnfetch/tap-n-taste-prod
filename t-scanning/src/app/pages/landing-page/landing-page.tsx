import { Box, BottomNavigation } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import HomePage from "./landing-page/home-page";
import { LoginSignUp } from "@tap-n-taste/ui";
import {TSubmit} from "@tap-n-taste/ui";
import OrderPage from "../order-page/order-page";
import ProfilePage from "../profile-page/profile-page";
import OrderPrepare from "../order-prepare/order-prepare";
import OrderComplete from "../order-complete/order-complete";
import OrderedPage from "../ordered-page/ordered-page";
export const LandingPage = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginSignUp type="login" />} />
        <Route path="sign-up" element={<LoginSignUp type="signup" />} />
        <Route path="menu" element={<div>Menu Page</div>} />
        <Route path="user/:userId/profile" element={<div>Profile Page</div>} />
        <Route path="user/:userId/cart" element={<div>Cart Page</div>} />
        <Route path="user/:userId/order" element={<OrderPage/>} />
        <Route path="user/:userId/order-prepare" element={<OrderPrepare/>} />
        <Route path="user/:userId/order-complete" element={<OrderComplete/>} />
        <Route path="user/:userId/ordered-page" element={<OrderedPage/>} />
        <Route path="user/:userId/profilepage" element={<ProfilePage/>} />
        <Route path="user/:userId/notification" element={<div>Notification Page</div>} />
        {/* Route for OTP */}
        <Route path="otp" element={<TSubmit />} />
      </Routes>
    </Box>
  );
};
