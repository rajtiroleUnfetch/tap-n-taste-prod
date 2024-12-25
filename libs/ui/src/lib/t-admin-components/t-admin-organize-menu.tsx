import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Button,
  Typography,
  IconButton,
  Box,
} from '@mui/material';
import { Menu as MenuIcon, Edit as EditIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

interface MenuItem {
  id: number;
  name: string;
}

const initialMenuItems: MenuItem[] = [
  { id: 1, name: 'Burger' },
  { id: 2, name: 'Pizza' },
  { id: 3, name: 'Pasta' },
];

export const MenuCard = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenuItems);
  const navigate = useNavigate(); // For navigation

  const handleAddMenuItem = () => {
    // Navigate to a different route (e.g., /add-menu)
    navigate('/add-menu');
  };

  const handleEditMenuItem = (id: number) => {
    // Navigate to a page where menu item can be edited
    navigate(`/edit-menu/${id}`);
  };

  return (
    <Card>
      <CardContent className='flex flex-col items-center'>
        <Typography variant="h6" component="div">
          Organize Menu
        </Typography>
        <IconButton>
          <RestaurantMenuIcon className="text-primary w-10 h-10" />
        </IconButton>
        <Box
          mt={2}
          className="flex flex-col  items-center"
        >
          <Button
            variant="outlined"
            color="primary"
            onClick={handleAddMenuItem}
          >
            Add Menu Item
          </Button>
          <Typography>
            Total Items: {menuItems.length}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MenuCard;
