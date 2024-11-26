import { Box, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import fullLogo from '../../assets/full-brand.png';
import { useState } from 'react';
import styles from './t-top-nav.module.css';

export function TopNav() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // Handle Menu Click
  const handleMenuClick = (event: React.MouseEvent<SVGSVGElement>) => {
    setAnchorEl(event.currentTarget as unknown as HTMLElement); 
  };

  const handleMenuClose = () => {
    setAnchorEl(null); 
  };

  return (
    <Box className="flex items-center justify-between p-2">
      {/* Menu Icon */}
      <MenuIcon
         sx={{
          fontSize: 30, 
          cursor: 'pointer', 
          transition: 'color 0.3s ease', 
          '&:hover': { color: '#F1414F' }, 
        }}
        onClick={handleMenuClick} 
      />

      {/* Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)} 
        onClose={handleMenuClose} 
      >
        <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
        <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
        <MenuItem onClick={handleMenuClose}>Option 3</MenuItem>
        <MenuItem onClick={handleMenuClose}>Option 4</MenuItem>
      </Menu>

      <img src={fullLogo} alt="Full Brand Logo" className="h-12" />
      <NotificationsNoneIcon sx={{
          fontSize: 30,
          cursor: 'pointer',
          transition: 'color 0.3s ease',
          '&:hover': { color: '#F1414F' },
        }} />
    </Box>
  );
}

export default TopNav;
