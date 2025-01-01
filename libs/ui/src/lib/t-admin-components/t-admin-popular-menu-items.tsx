import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, BarElement, Tooltip, Legend, Title } from 'chart.js';
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  TextField,
  SelectChangeEvent,
} from '@mui/material';

// Register necessary components from Chart.js
ChartJS.register(CategoryScale, BarElement, Tooltip, Legend, Title);

export const PopularMenuItems: React.FC = () => {
  const [filter, setFilter] = useState<string>('month'); // Default filter is 'month'
  const [customDateRange, setCustomDateRange] = useState<{ start: string; end: string }>({
    start: '',
    end: '',
  });

  // Function to handle filter change with correct type for SelectChangeEvent
  const handleFilterChange = (event: SelectChangeEvent<string>) => {
    setFilter(event.target.value);
  };

  // Function to handle custom date range change
  const handleCustomDateRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomDateRange({
      ...customDateRange,
      [event.target.name]: event.target.value,
    });
  };

  // Get data based on selected filter
  const getOrdersData = (filter: string) => {
    switch (filter) {
      case 'day':
        return [1200, 800, 600, 300, 450]; // Example data for today
      case 'week':
        return [800, 700, 400, 250, 350]; // Example data for the week
      case 'month':
        return [1200, 800, 600, 300, 450]; // Example data for the month
      case 'year':
        return [10000, 7500, 5000, 2000, 3000]; // Example data for the year
      case 'custom':
        return [500, 450, 300, 200, 100]; // Example data for custom date range
      default:
        return [1200, 800, 600, 300, 450]; // Default to monthly data
    }
  };

  // Get labels based on selected filter
  const getLabels = (filter: string) => {
    switch (filter) {
      case 'day':
        return ['Pizza', 'Burger', 'Pasta', 'Salad', 'Dessert']; // Example for daily
      case 'week':
        return ['Pizza', 'Burger', 'Pasta', 'Salad', 'Dessert']; // Example for weekly
      case 'month':
        return ['Pizza', 'Burger', 'Pasta', 'Salad', 'Dessert']; // Example for monthly
      case 'year':
        return ['Pizza', 'Burger', 'Pasta', 'Salad', 'Dessert']; // Example for yearly
      case 'custom':
        return ['Pizza', 'Burger', 'Pasta', 'Salad', 'Dessert']; // Example for custom date range
      default:
        return ['Pizza', 'Burger', 'Pasta', 'Salad', 'Dessert']; // Default labels
    }
  };

  // Chart data based on the selected filter
  const data = {
    labels: getLabels(filter),
    datasets: [
      {
        label: 'Orders Count',
        data: getOrdersData(filter),
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Example color
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Popular Menu Items',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Menu Items',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Orders Count',
        },
      },
    },
  };

  return (
    <Box className="p-8 bg-white rounded-lg shadow-md" style={{ padding: '20px' }}>
      <h2>Popular Menu Items</h2>
      
      {/* Filter Section */}
      <Box mb={4}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Filter by</InputLabel>
          <Select value={filter} onChange={handleFilterChange} label="Filter by">
            <MenuItem value="day">Day</MenuItem>
            <MenuItem value="week">Week</MenuItem>
            <MenuItem value="month">Month</MenuItem>
            <MenuItem value="year">Year</MenuItem>
            <MenuItem value="custom">Custom Date</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Custom Date Range */}
      {filter === 'custom' && (
        <Box mb={4}>
          <TextField
            label="Start Date"
            type="date"
            variant="outlined"
            fullWidth
            name="start"
            value={customDateRange.start}
            onChange={handleCustomDateRangeChange}
            InputLabelProps={{
              shrink: true,
            }}
            className="mb-2"
          />
          <TextField
            label="End Date"
            type="date"
            variant="outlined"
            fullWidth
            name="end"
            value={customDateRange.end}
            onChange={handleCustomDateRangeChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
      )}

      {/* Bar Chart */}
      <Bar data={data} options={options} />
    </Box>
  );
};

export default PopularMenuItems;
