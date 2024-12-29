import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { RestaurantAdminPage } from './pages'; // Assuming you have this component
import theme from '../theme';
import './app.css';
import '@fontsource/poppins'; // Defaults to weight 400
import { LoginSignUp } from '@tap-n-taste/ui';
import { ToastContainer } from 'react-toastify';

// Main App Component
const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
       <ToastContainer position="top-right" autoClose={5000} />
      <CssBaseline /> {/* Ensures consistent baseline styles across browsers */}
      <Routes>
        {/* Default Route */}
        <Route path="/" element={<div>Tap-n-Taste Home Page</div>} />

        <Route
          path="/restaurant/:restaurantId/login"
          element={<LoginSignUp isAdminSignUpLogin={true} type="login" />}
        />
        <Route
          path="/restaurant/:restaurantId/sign-up"
          element={<LoginSignUp isAdminSignUpLogin={true} type="signup" />}
        />
        {/* Admin Route */}
        <Route path="/admin" element={<Outlet />}></Route>

        {/* Dynamic Restaurant Admin Page Route */}
        <Route
          path="/restaurant/:restaurantId/admin/:adminId/*"
          element={<RestaurantAdminPage />}
        />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
