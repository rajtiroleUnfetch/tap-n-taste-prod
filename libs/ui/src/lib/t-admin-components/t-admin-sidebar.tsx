import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Box, IconButton, List, ListItem, ListItemIcon, ListItemText, Divider, Button } from '@mui/material';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { AdminPageroutes} from '@tap-n-taste/admin'; // Importing routes configuration
import { MenuCard} from '@tap-n-taste/ui'; // Importing routes configuration

export const Sidebar: React.FC<{ handleDrawerToggle: () => void }> = ({ handleDrawerToggle }) => {
  // Get the dynamic `id` and `adminId` from the URL
  const { id, adminId } = useParams<{ id: string; adminId: string }>();

  // Handle closing the drawer when a link is clicked
  const handleLinkClick = () => {
    handleDrawerToggle(); // Close the drawer on link click
  };

  return (
    <Box
      sx={{
        width: 250,
        height: '100%',
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Close Icon to close the sidebar */}
      <IconButton onClick={handleDrawerToggle} sx={{ position: 'absolute', top: 16, right: 16, color: 'white' }}>
        <IoCloseCircleOutline size={30} />
      </IconButton>

      <Box className="mb-6 text-xl font-bold">Tap'n Taste</Box>

      <List>
        {AdminPageroutes.map((route) => (
          <ListItem key={route.path} component={Button} onClick={handleLinkClick}>
            <NavLink
              to={`/admin/${adminId}/restaurant/${id}${route.path}`}
              className="hover:text-gray-300 w-full flex items-center"
              style={{ textDecoration: 'none' }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>{<route.icon />}</ListItemIcon>
              <ListItemText primary={route.label} />
            </NavLink>
          </ListItem>
        ))}
      </List>

      {/* Divider */}
      <Divider  />
      <MenuCard />
    </Box>
  );
};

export default Sidebar;
