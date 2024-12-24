import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { RestaurantAdminPage } from './pages'; // Assuming you have this component
import theme from '../theme';

// Main App Component
const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Ensures consistent baseline styles across browsers */}
      <Routes>
        {/* Default Route */}
        <Route path="/" element={<div>Tap-n-Taste Home Page</div>} />

        {/* Admin Route */}
        <Route path="/admin" element={<div>Tap-n-Taste Admin Page</div>} />

        {/* Dynamic Restaurant Admin Page Route */}
        <Route path="/admin/:adminId/restaurant/:id/*" element={<RestaurantAdminPage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
