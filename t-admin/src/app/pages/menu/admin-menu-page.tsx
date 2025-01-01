import React, { useState } from 'react';
import { Box, Grid, Modal, TextField, Button, FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material';
import { MenuItemCard } from '@tap-n-taste/ui';  // Assuming you have this MenuItemCard component

// Example menu items data
const initialMenuItems = [
  {
    id: '001',
    heading: 'Veg Burger',
    description: 'Delicious veggie burger',
    price: 10,
    image: 'https://via.placeholder.com/100',
    available: true,
    status: 'Available',  // Added status field
  },
  {
    id: '002',
    heading: 'Chicken Pizza',
    description: 'Tasty chicken pizza',
    price: 15,
    image: 'https://via.placeholder.com/100',
    available: true,
    status: 'Available',  // Added status field
  },
  {
    id: '003',
    heading: 'Vegan Salad',
    description: 'Fresh and healthy salad',
    price: 8,
    image: 'https://via.placeholder.com/100',
    available: false,
    status: 'Unavailable',  // Added status field
  },
];

export const AdminMenuPage = () => {
  const [menuItems, setMenuItems] = useState(initialMenuItems);
  const [selectedItem, setSelectedItem] = useState<any>(null); // Item being edited
  const [open, setOpen] = useState(false); // Modal visibility
  const [formValues, setFormValues] = useState<any>({}); // Form values

  // Handle modal open
  const handleOpen = (item: any) => {
    setSelectedItem(item);
    setFormValues(item);
    setOpen(true);
  };

  // Handle modal close
  const handleClose = () => {
    setOpen(false);
  };

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
    setFormValues({
      ...formValues,
      [e.target.name as string]: e.target.value,
    });
  };

  // Handle availability change
  const handleAvailabilityChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    setFormValues({
      ...formValues,
      available: e.target.value === 'Available' ? true : false,
    });
  };

  // Handle status change
  const handleStatusChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    setFormValues({
      ...formValues,
      status: e.target.value as string,  // Update the status
    });
  };

  // Handle save changes
  const handleSave = () => {
    const updatedItems = menuItems.map((item) =>
      item.id === selectedItem.id ? { ...item, ...formValues } : item
    );
    setMenuItems(updatedItems);
    setOpen(false);
  };

  return (
    <Box>
      <Typography variant="h4" className="mb-4">Admin Menu</Typography>
      <Grid container spacing={2}>
        {menuItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <MenuItemCard
              image={item.image}
              heading={item.heading}
              description={item.description}
              price={item.price}
              onEdit={() => handleOpen(item)} // Open edit modal on click
            />
          </Grid>
        ))}
      </Grid>

      {/* Modal for Editing Menu Item */}
      <Modal open={open} onClose={handleClose}>
        <Box className="modal-box" style={{ padding: 20, backgroundColor: 'white', maxWidth: 500, margin: 'auto', marginTop: 100 }}>
          <Typography variant="h6">Edit Menu Item</Typography>

          <TextField
            label="Name"
            name="heading"
            value={formValues.heading || ''}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Description"
            name="description"
            value={formValues.description || ''}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Price"
            name="price"
            type="number"
            value={formValues.price || ''}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />

          <FormControl fullWidth margin="normal">
            <InputLabel>Availability</InputLabel>
            <Select
              name="available"
              value={formValues.available ? 'Available' : 'Unavailable'}
              // onChange={handleAvailabilityChange}
            >
              <MenuItem value="Available">Available</MenuItem>
              <MenuItem value="Unavailable">Unavailable</MenuItem>
            </Select>
          </FormControl>

          {/* Added status field */}
          <FormControl fullWidth margin="normal">
            <InputLabel>Status</InputLabel>
            <Select
              name="status"
              value={formValues.status || 'Available'}
              // onChange={handleStatusChange}
            >
              <MenuItem value="Available">Available</MenuItem>
              <MenuItem value="Unavailable">Unavailable</MenuItem>
              <MenuItem value="Out of Stock">Out of Stock</MenuItem>
            </Select>
          </FormControl>

          <Button variant="contained" color="primary" onClick={handleSave} fullWidth style={{ marginTop: 20 }}>
            Save Changes
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleClose} fullWidth style={{ marginTop: 10 }}>
            Cancel
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default AdminMenuPage;
