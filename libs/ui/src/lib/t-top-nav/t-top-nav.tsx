import { Box, Snackbar, Alert } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Logo from '../../assets/logo.png';
import { useState } from 'react';
import { TTableSelector } from '../t-tableselector';
import TSidebar from '../t-sidebar/t-sidebar';
import { navLinksData } from 't-scanning/src/app/constants/LandingPageData';
import { TButton } from '../t-button';

const themeColor = '#F1414F'; // Define your color here

export function TopNav() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleNotificationClick = () => {
    setSnackbarMessage('Notifications icon clicked!');
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <Box className="flex items-center justify-between py-5 sm:py-10 relative">
      {/* Sidebar for mobile and tablet screens */}
      <TSidebar />

      {/* Logo */}
      <Box className="flex items-center space-x-2 cursor-pointer">
        <img src={Logo} alt="Brand Logo" className="h-12" />
        <h1 className="text-xl font-bold font-primary">Tapn'Taste</h1>
      </Box>

      {/* Table Selector */}
      <TTableSelector className="z-50 w-fit h-fit absolute lg:top-[42%] xl:top-[42%] bottom-[-4%] md:bottom-[-2%] lg:left-[29%] xl:left-[22%] left-1/2 transform -translate-x-1/2" />

      {/* Navigation Links */}
      <Box className="hidden lg:flex gap-8">
        {navLinksData.map((navLink) => (
          <h1
            key={navLink.linkText}
            className="font-semibold uppercase hover:text-primary cursor-pointer"
          >
            {navLink.linkText}
          </h1>
        ))}
      </Box>

      {/* Icon Navigation Links (Visible on md and lg only) */}
      <Box className="hidden md:flex lg:hidden gap-4">
        {navLinksData.map((navLink) => (
          <navLink.icon
            key={navLink.linkText}
            className="hover:bg-[#F1414F] hover:text-white p-1 rounded-xl cursor-pointer transition-all duration-500"
          />
        ))}
      </Box>

      {/* Sign In / Sign Up Buttons */}
      <Box className="hidden md:flex gap-4">
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

      {/* Notifications Icon (Visible on mobile and tablet only) */}
      <Box className="block md:hidden">
        <NotificationsNoneIcon
          className="text-black hover:text-[#F1414F] transition-colors duration-300 cursor-pointer"
          fontSize="large"
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
            backgroundColor: '#fff',
            color: 'black',
            '& .MuiSvgIcon-root': {
              color: themeColor,
            },
            border: 2,
            borderColor: '#3333',
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default TopNav;
