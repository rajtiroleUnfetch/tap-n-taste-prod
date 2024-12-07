import { Box, Snackbar, Alert, Icon, useMediaQuery } from '@mui/material';
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

  // Media Query
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
  const isLaptop = useMediaQuery('(min-width: 1025px) and (max-width: 1280px)');
  const isDesktop = useMediaQuery('(min-width: 1281px)');

  return (
    <Box className="flex items-center justify-between py-5 sm:py-10 relative">
      {/* Sidebar visible for mobile and tablet */}
      {(isMobile || isTablet) && <TSidebar />}

      {/* Full Brand Logo */}
      <img src={fullLogo} alt="Full Brand Logo" className="h-12" />

      {/* NavLinks Section */}
      {isDesktop && (
        <Box className="flex justify-between gap-8">
          {navLinksData.map((navLink) => (
            <h1
              key={navLink.linkText}
              className="font-semibold uppercase hover:text-[#F1414F] cursor-pointer"
            >
              {navLink.linkText}
            </h1>
          ))}
        </Box>
      )}

      {isLaptop && (
        <Box className="flex justify-between gap-5">
          {navLinksData.map((navLink) => (
            <navLink.icon
              key={navLink.linkText}
              style={{
                padding: '1px',
                borderRadius: '0.5rem', // Corresponds to rounded-xl
                transition: 'all 0.3s ease',
              }}
              className="hover:bg-[#F1414F]/80 hover:text-white cursor-pointer"
            />
          ))}
        </Box>
      )}

      {/* Sign In / Sign Up Buttons */}
      {!isMobile && (
        <Box className="flex gap-4">
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
      )}

      {/* Notification Icon */}
      {(isMobile || isTablet) && (
        <Box>
          <NotificationsNoneIcon
            sx={{
              fontSize: 30,
              cursor: 'pointer',
              transition: 'color 0.3s ease',
              '&:hover': { color: themeColor },
            }}
            onClick={handleNotificationClick}
          />
        </Box>
      )}

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
            color: 'black', // Set text color to black
            '& .MuiSvgIcon-root': {
              color: themeColor, // Set icon color
            },
            border: 2,
            borderColor: '#3333',
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>

      {/* Table Selector */}
      <TTableSelector />
    </Box>
  );
}

export default TopNav;
