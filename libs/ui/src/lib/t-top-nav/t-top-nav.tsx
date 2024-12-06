import { Box, Snackbar, Alert } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import fullLogo from '../../assets/full-brand.png';
import Logo from '../../assets/logo.png';
import { useState } from 'react';
import { TTableSelector } from '../t-tableselector';
import TSidebar from '../t-sidebar/t-sidebar';
import { navLinksData } from 't-scanning/src/app/constants/LandingPageData';
import { TButton } from '../t-button';

const themeColor = '#F1414F'; // Define your color here

export function TopNav() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  // Handle Menu Click
  const handleMenuClick = (event: React.MouseEvent<SVGSVGElement>) => {
    setAnchorEl(event.currentTarget as unknown as HTMLElement);
  };

  const handleMenuClose = (option?: string) => {
    setAnchorEl(null);
    if (option) {
      setSnackbarMessage(`${option} clicked!`);
      setSnackbarOpen(true);
    }
  };

  // Handle Notification Click
  const handleNotificationClick = () => {
    setSnackbarMessage('Notifications icon clicked!');
    setSnackbarOpen(true);
  };

  // Handle Snackbar Close
  const handleSnackbarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return; // Prevent closing if clicking outside
    }
    setSnackbarOpen(false); // Close Snackbar
  };

  return (
    <Box className="flex items-center justify-between py-5 sm:py-10 relative">
      <TSidebar />

      {/* Full Brand Logo */}
      <img src={fullLogo} alt="Full Brand Logo" className="h-12" />

      {/* Logo */}
      {/* <img src={Logo} alt="Brand Logo" className="h-12" /> */}

      <Box className="max-md:hidden flex justify-between gap-8">
        {navLinksData.map((navLink, index) => (
          <h1 className="font-semibold uppercase max-lg:text-[12px] hover:text-[#F1414F] cursor-pointer">
            {navLink.linkText}
          </h1>
        ))}
      </Box>

      <Box display="flex" gap={2}>
        <TButton
          text="Sign Up"
          sx={{
            backgroundColor: 'white',
            border: '2px solid #F1414F',
            color: '#F1414F',
          }}
        />

        <TButton
          text="Sign In"
          sx={{
            backgroundColor: '#F1414F',
            border: '2px solid #F1414F',
            color: 'white',
            '&:hover': {
              backgroundColor: '#DC3D4A',
            },
          }}
        />
      </Box>

      <Box className="md:hidden">
        <NotificationsNoneIcon
          sx={{
            fontSize: 30,
            cursor: 'pointer',
            transition: 'color 0.3s ease',
            '@media (min-width: 1280px)': {
              display: 'none', // Explicitly hide after lg
            },
            '&:hover': { color: themeColor }, // Apply theme color on hover
          }}
          onClick={handleNotificationClick}
        />
      </Box>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="info"
          sx={{
            width: '100%',
            backgroundColor: '#fff', // Set background to white
            color: 'black', // Set text color to red
            '& .MuiSvgIcon-root': {
              color: themeColor, // Set icon color to red
            },
            border: 2,
            borderColor: '#3333',
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>

      {/* TABLE SELECTOR */}
      <TTableSelector />
    </Box>
  );
}

export default TopNav;
