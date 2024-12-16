
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import HomePage from "./landing-page/home-page";
import { LoginSignUp } from "@tap-n-taste/ui";
import { TSubmit } from "@tap-n-taste/ui";
import { TFaq } from "@tap-n-taste/ui";
import { TOrderplaced ,TNotificationPage,TCouponpage} from "@tap-n-taste/ui";
import ProductAdd from "../productadd-page/productadd";

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
        <Route path="user/:userId/order" element={<div>Order Page</div>} />
        {/* <Route path="user/:userId/notification" element={<div>Notification Page</div>} /> */}
        <Route path="faq" element={<TFaq />} />
        <Route path="login/otp" element={<TSubmit />} />
        {/* Pass props here */}
        <Route 
          path="login/orderplaced" 
          element={<TOrderplaced mainText="Order Successfully" subText="Placed!" />} 
        />
        <Route path="notification" element={<TNotificationPage/>} />
        <Route path="coupons" element={<TCouponpage/>} />
        <Route path="productadd" element={<ProductAdd/>} />
      </Routes>
    </Box>
  );
};
