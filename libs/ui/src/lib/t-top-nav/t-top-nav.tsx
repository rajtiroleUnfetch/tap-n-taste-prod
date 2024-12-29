import { Box, Snackbar, Alert } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Logo from '../../assets/logo.png';
import { useState } from 'react';
import TSidebar from '../t-sidebar/t-sidebar';
import { navLinksData } from 't-scanning/src/app/constants/LandingPageData';
import { TButton } from '../t-button';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const themeColor = '#F1414F'; // Define your color here

export function TopNav() {
  const navigate = useNavigate();
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
    <Box className="">
      <Box className="flex items-center justify-between py-5 sm:py-10 relative">
        {/* Sidebar for mobile and tablet screens */}
        <TSidebar />

        {/* Logo */}
        <Box className="flex items-center space-x-2 cursor-pointer">
          <img src={Logo} alt="Brand Logo" className="h-12" />
          <h1 className="text-xl font-bold font-primary">Tapn'Taste</h1>
        </Box>

        {/* Navigation Links */}
        <Box className="hidden lg:flex gap-2 xl:gap-8">
          {navLinksData.map((navLink) => (
            <NavLink
              key={navLink.linkText}
              to={navLink.path}
              end={navLink.end}
              className={({ isActive }) =>
                `font-semibold lg:text-sm uppercase flex items-center gap-2 cursor-pointer ${
                  isActive ? 'text-red-500' : 'hover:text-primary'
                }`
              }
            >
              {navLink.linkText}
            </NavLink>
          ))}
        </Box>

        {/* Sign In / Sign Up Buttons */}
        <Box className="hidden md:flex gap-4 max-lg:gap-2">
          <TButton
            text="Sign Up"
            className={{ text: 'lg:text-xs' }}
            sx={{
              backgroundColor: 'white',
              border: '2px solid #F1414F',
              color: '#F1414F',
            }}
            onClick={() => navigate('/restaurant/:restaurantId/sign-up')} // Navigate to sign-up
          />
          <TButton
            text="Sign In"
            className={{ text: 'lg:text-xs' }}
            sx={{
              backgroundColor: '#F1414F',
              border: '2px solid #F1414F',
              color: 'white',
              '&:hover': {
                backgroundColor: '#DC3D4A',
              },
            }}
            onClick={() => navigate('/restaurant/:restaurantId/login')} // Navigate to login
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
    </Box>
  );
}

export default TopNav;
