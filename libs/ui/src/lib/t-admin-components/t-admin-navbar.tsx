import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../assets/logo.png';
import { Sidebar } from '@tap-n-taste/ui'; // Import the Sidebar component
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {/* Navbar */}
      <AppBar position="static" className="shadow">
        <Toolbar className="flex justify-between">
          {/* Mobile Hamburger Menu */}
          <Box className="md:hidden">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Logo */}
          <Box className="flex items-center space-x-2 cursor-pointer">
            <img src={Logo} alt="Brand Logo" className="h-12" />
            <h1 className="text-xl font-bold font-primary">Tapn'Taste</h1>
          </Box>

          {/* Desktop Menu */}
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer for Sidebar */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        <Sidebar handleDrawerToggle={handleDrawerToggle} />
      </Drawer>
    </>
  );
};

export default Navbar;
