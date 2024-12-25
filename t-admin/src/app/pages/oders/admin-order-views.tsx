import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Tabs,
  Tab,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { ErrorOutline } from '@mui/icons-material'; // Icon for no items available
import classNames from 'classnames'; // Import classnames
import { MenuItemCard } from '@tap-n-taste/ui';

// Constants for table options and status options
const TABLE_OPTIONS = [
  { label: 'All', value: 'All' },
  { label: 'Table 1', value: 1 },
  { label: 'Table 2', value: 2 },
  { label: 'Table 3', value: 3 },
];

const STATUS_OPTIONS = [
  { label: 'All', value: 'All' },
  { label: 'Preparing', value: 'Preparing' },
  { label: 'Pending', value: 'Pending' },
  { label: 'Served', value: 'Served' },
  { label: 'Canceled', value: 'Canceled' },
];

// Example order data
const initialOrdersData = [
  {
    id: '001',
    heading: 'Veg Burger',
    description: 'Delicious veggie burger',
    price: 10,
    quantity: 1,
    status: 'Preparing',
    image: 'https://via.placeholder.com/100',
    tableNumber: 1,
  },
  {
    id: '002',
    heading: 'Chicken Pizza',
    description: 'Tasty chicken pizza',
    price: 15,
    quantity: 2,
    status: 'Pending',
    image: 'https://via.placeholder.com/100',
    tableNumber: 1,
  },
  {
    id: '003',
    heading: 'Vegan Salad',
    description: 'Fresh and healthy salad',
    price: 8,
    quantity: 3,
    status: 'Served',
    image: 'https://via.placeholder.com/100',
    tableNumber: 2,
  },
  {
    id: '004',
    heading: 'Beef Steak',
    description: 'Juicy beef steak',
    price: 20,
    quantity: 1,
    status: 'Canceled',
    image: 'https://via.placeholder.com/100',
    tableNumber: 2,
  },
];

export const AdminOrderViews = () => {
  const [filterStatus, setFilterStatus] = useState('All');
  const [tableNumber, setTableNumber] = useState('All');
  const [orders, setOrders] = useState(initialOrdersData);

  // Filter orders based on selected table and status
  const filteredOrders = orders.filter(
    (order) =>
      (tableNumber === 'All' || order.tableNumber === Number(tableNumber)) &&
      (filterStatus === 'All' || order.status === filterStatus)
  );

  // Handle the change of order status
  const handleStatusChange = (orderId: string, newStatus: string) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
  };

  return (
    <Box className="w-full p-2">
      {/* Dropdown for Table Selection */}
      <FormControl className="mb-4 min-w-120">
        <InputLabel id="table-select-label">Table</InputLabel>
        <Select
          labelId="table-select-label"
          value={tableNumber}
          onChange={(e) => setTableNumber(e.target.value)}
          label="Table"
          className="w-full"
        >
          {TABLE_OPTIONS.map(({ label, value }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Status Tabs */}
      <Tabs
        value={filterStatus}
        onChange={(event, newValue) => setFilterStatus(newValue)}
        aria-label="status selection"
        className="mb-4 !text-black"
        sx={{color: 'black'}}
      >
        {STATUS_OPTIONS.map(({ label, value }) => (
          <Tab key={value} label={label} value={value} />
        ))}
      </Tabs>

      {/* Display Orders for the Selected Table */}
      <Typography variant="h5" className="mb-4">
        Orders for{' '}
        {tableNumber === 'All' ? 'All Tables' : `Table ${tableNumber}`}
      </Typography>

      {/* If no orders available, show "No items" */}
      {filteredOrders.length === 0 ? (
        <Box className="flex justify-center items-center flex-col p-4">
          <ErrorOutline color="error" className="text-6xl" />
          <Typography variant="h6" className="mt-2">
            No Items Available
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={2}>
          {filteredOrders.map((order) => (
            <Grid item xs={12} sm={6} md={6} key={order.id}>
              <MenuItemCard
                image={order.image}
                heading={order.heading}
                description={order.description}
                price={order.price}
              />
              <Card
                className={classNames('order-card flex items-center', {
                  'order-preparing': order.status === 'Preparing',
                })}
              >
                <CardContent className="flex-1">
                  <Typography variant="h6">Order ID: {order.id}</Typography>
                  <Typography variant="body2">Quantity: {order.quantity}</Typography>
                  <FormControl className="mt-4 min-w-120">
                    <InputLabel id={`status-select-label-${order.id}`}>
                      Status
                    </InputLabel>
                    <Select
                      labelId={`status-select-label-${order.id}`}
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(order.id, e.target.value)
                      }
                      label="Status"
                      className="w-full"
                    >
                      {STATUS_OPTIONS.map(({ label, value }) => (
                        <MenuItem key={value} value={value}>
                          {label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default AdminOrderViews;
