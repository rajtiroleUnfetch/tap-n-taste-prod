import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Box, IconButton, List, ListItem, ListItemText, Divider } from '@mui/material';
import { IoCloseCircleOutline } from 'react-icons/io5';

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
        {/* Dashboard Link */}
        <ListItem component="button" onClick={handleLinkClick}>
          <NavLink
            to={`/admin/${adminId}/restaurant/${id}/dashboard`}
            className="hover:text-gray-300 w-full"
          >
            <ListItemText primary="Dashboard" />
          </NavLink>
        </ListItem>

        {/* Orders Link */}
        <ListItem component="button" onClick={handleLinkClick}>
          <NavLink
            to={`/admin/${adminId}/restaurant/${id}/orders`}
            className="hover:text-gray-300 w-full"
          >
            <ListItemText primary="Orders" />
          </NavLink>
        </ListItem>

        {/* Payments Link */}
        <ListItem component="button" onClick={handleLinkClick}>
          <NavLink
            to={`/admin/${adminId}/restaurant/${id}/payments`}
            className="hover:text-gray-300 w-full"
          >
            <ListItemText primary="Payments" />
          </NavLink>
        </ListItem>

        {/* Notifications Link */}
        <ListItem component="button" onClick={handleLinkClick}>
          <NavLink
            to={`/admin/${adminId}/restaurant/${id}/notifications`}
            className="hover:text-gray-300 w-full"
          >
            <ListItemText primary="Notifications" />
          </NavLink>
        </ListItem>

        {/* Settings Link */}
        <ListItem component="button" onClick={handleLinkClick}>
          <NavLink
            to={`/admin/${adminId}/restaurant/${id}/settings`}
            className="hover:text-gray-300 w-full"
          >
            <ListItemText primary="Settings" />
          </NavLink>
        </ListItem>

        {/* Logout Link */}
        <ListItem component="button" onClick={handleLinkClick}>
          <NavLink
            to={`/admin/${adminId}/restaurant/${id}/logout`}
            className="hover:text-gray-300 w-full"
          >
            <ListItemText primary="Logout" />
          </NavLink>
        </ListItem>
      </List>

      {/* Divider */}
      <Divider sx={{ borderColor: 'white', marginY: 2 }} />
    </Box>
  );
};

export default Sidebar;
