import { BottomNavigation, Box } from "@mui/material";
import { Routes, Route, useParams } from "react-router-dom";
import HomePage from "./landing-page/home-page";

export const LandingPage = () => {
  const { id } = useParams(); // Access the restaurant ID from the URL

  return (
   <Box>
      <h1>Restaurant Landing Page - ID: {id}</h1>
      {/* Nested Routes for LandingPage */}
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="login" element={<div>type login Login Page</div>} />
        <Route path="sign-up" element={<div> type signup Sign-Up Page</div>} />
        <Route path="menu" element={<div>Menu Page</div>} />
        <Route path="user/:userId/profile" element={<div>Profile Page</div>} />
        <Route path="user/:userId/cart" element={<div>Cart Page</div>} />
        <Route path="user/:userId/order" element={<div>Order Page</div>} />
        <Route path="user/:userId/notification" element={<div>Notification Page</div>} />
      </Routes>
   </Box>
  );
};
