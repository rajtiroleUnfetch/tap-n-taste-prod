import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Box,
  Typography,
  TextField,
  Badge,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Logo from '../../assets/logo.png';
import { Sidebar } from '@tap-n-taste/ui'; // Import the Sidebar component
import { useParams, useLocation } from 'react-router-dom';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import SearchIcon from '@mui/icons-material/Search';

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const { id, adminId } = useParams<{ id: string; adminId: string }>();
  const location = useLocation();
  const currentPage = location.pathname.split('/').pop(); // Get the last part of the URL (e.g., dashboard, orders, etc.)

  return (
    <>
      {/* Navbar */}
      <AppBar position="sticky">
        <Toolbar className="flex justify-between bg-white p-2">
          {/* Mobile Hamburger Menu */}
          <Box className="flex items-center space-x-2">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon className="text-primary" />
            </IconButton>

            {/* Current Page */}
            <Typography variant="h6" className="font-bold">
              {currentPage &&
                currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
            </Typography>
          </Box>
          {/* Logo */}
          {/* <Box className="flex items-center space-x-2 cursor-pointer">
            <img src={Logo} alt="Brand Logo" className="h-12" />
            <h1 className="text-xl font-bold font-primary">Tap'n Taste</h1>
          </Box> */}
          {/* Search Box */}
          {/* Search Box */}
          <Box className="flex items-center space-x-2 w-1/3">
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search"
              className="bg-white rounded"
              InputProps={{
                startAdornment: (
                  <Box className="mr-1">
                    <SearchIcon />
                  </Box>
                ),
              }}
            />
          </Box>

          {/* Notification and Profile Icons */}
          <Box className="flex items-center space-x-4">
            <IconButton color="inherit">
              <Badge badgeContent={4} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="error">
                <ChatBubbleIcon />
              </Badge>
            </IconButton>

            <IconButton color="inherit">
              <AccountCircleIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer for Sidebar */}
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        <Sidebar handleDrawerToggle={handleDrawerToggle} />
      </Drawer>
    </>
  );
};

export default Navbar;
