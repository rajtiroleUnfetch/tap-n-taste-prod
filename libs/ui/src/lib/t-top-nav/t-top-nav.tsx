import {
  Box,
  Snackbar,
  Alert,
} from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import fullLogo from '../../assets/full-brand.png';
import { useState } from 'react';
import TSidebar from '../t-sidebar/t-sidebar';

export function TopNav() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State for sidebar
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  // Toggle Sidebar Open/Close
  const toggleDrawer = (open: boolean) => () => {
    setIsDrawerOpen(open);
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
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <Box className="flex items-center justify-between px-5 py-3 bg-white shadow-md">
      <TSidebar />

      {/* Full Brand Logo */}
      <img src={fullLogo} alt="Full Brand Logo" className="h-12" />

      {/* Notification Icon */}
      <NotificationsNoneIcon
        className="text-gray-600 text-2xl cursor-pointer hover:text-red-500 transition-colors"
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
          className="w-full border-2 border-gray-300 text-black bg-white"
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default TopNav;
