import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon from '@mui/icons-material/Menu';
import { navLinksData } from 't-scanning/src/app/constants/LandingPageData';
import { Typography } from '@mui/material';
import Logo from '../../assets/logo.png';

const themeColor = '#F1414F'; // Define your color here

export default function TSidebar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      className="w-[250px] h-full py-6 relative lg:hidden"
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {navLinksData.map((navLink, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              sx={{
                '&:hover': { backgroundColor: themeColor, color: 'white' },
              }}
            >
              <ListItemIcon>
                <navLink.icon
                  sx={{
                    fontSize: '30px',
                    '&:hover': { backgroundColor: themeColor, color: 'white' },
                  }}
                />
              </ListItemIcon>
              <Typography sx={{ fontWeight: 300, fontFamily: 'Poppins' }}>
                {navLink.linkText}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
        <img src={Logo} width={40} alt="Logo" />
        <Typography variant="body1" sx={{ fontSize: 12, marginLeft: 1 }}>
          Powered by Tap'nTaste
        </Typography>
      </Box>
    </Box>
  );

  return (
    <div className="lg:hidden">
      {/* Hamburger Menu Icon */}
      <MenuIcon
        onClick={toggleDrawer(true)}
        sx={{
          fontSize: 30,
          fontWeight: 900,
          cursor: 'pointer',
          transition: 'color 0.3s ease',
          '&:hover': { color: themeColor },
        }}
      />
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
