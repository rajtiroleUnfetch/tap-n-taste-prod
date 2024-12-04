import { Box, Snackbar, Alert } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import fullLogo from '../../assets/full-brand.png';
import { useState } from 'react';
import { TTableSelector } from '../t-tableselector';
import TSidebar from '../t-sidebar/t-sidebar';

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

      {/* Notification Icon */}
      <NotificationsNoneIcon
        sx={{
          fontSize: 30,
          cursor: 'pointer',
          transition: 'color 0.3s ease',
          '&:hover': { color: themeColor }, // Apply theme color on hover
        }}
        onClick={handleNotificationClick}
      />

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
