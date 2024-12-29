import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/landing-page/landing-page";
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { TAbout } from '@tap-n-taste/ui';
import { ToastContainer } from "react-toastify";
import theme from "t-admin/src/theme";

const App = () => (
  <ThemeProvider theme={theme}>
  <CssBaseline /> {/* Ensures consistent baseline styles across browsers */}
  <ToastContainer position="top-right" autoClose={5000} />
  <Routes>
    <Route path="/" element={<div>Tap-n-Taste Page</div>} />
    <Route path="/restaurant/:restaurantId/*" element={<LandingPage />} />
    <Route path="/about*" element={<TAbout/>} />
  </Routes>
  </ThemeProvider>

);

export default App;
