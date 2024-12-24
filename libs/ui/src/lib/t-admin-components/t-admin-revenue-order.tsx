import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, BarElement, Tooltip, Legend, Title } from 'chart.js';
import { Select, MenuItem, InputLabel, FormControl, TextField, Box, SelectChangeEvent } from '@mui/material';

// Register necessary components from Chart.js
ChartJS.register(CategoryScale, BarElement, Tooltip, Legend, Title);

export const RevenueByOrderType: React.FC = () => {
  // Manage the filter and custom date range
  const [filter, setFilter] = useState<string>('month'); // Default filter is 'month'
  const [customDateRange, setCustomDateRange] = useState<{ start: string; end: string }>({
    start: '',
    end: '',
  });

  // Handle filter change
  const handleFilterChange = (event: SelectChangeEvent<string>) => {
    setFilter(event.target.value);
  };

  // Handle custom date range change
  const handleCustomDateRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomDateRange({
      ...customDateRange,
      [event.target.name]: event.target.value,
    });
  };

  // Get revenue data based on the selected filter
  const getRevenueByFilter = (filter: string) => {
    switch (filter) {
      case 'day':
        return [200]; // Example revenue for today
      case 'week':
        return [1000, 1200, 1500, 1300, 1400, 1600, 1800]; // Example revenue for the week
      case 'month':
        return [5000, 4000, 6000, 4500, 5500, 7000, 8000, 8500, 9000, 10000, 11000, 12000]; // Example revenue for the month
      case 'year':
        return [50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000, 105000]; // Example revenue for the year
      case 'custom':
        return [1500, 1700, 2000, 1800, 1900, 2100, 2200]; // Example custom revenue (can be dynamically updated based on custom range)
      default:
        return [5000, 4000, 6000, 4500, 5500, 7000, 8000]; // Default revenue data for a month
    }
  };

  // Labels for the x-axis based on selected filter
  const getLabelsByFilter = (filter: string) => {
    switch (filter) {
      case 'day':
        return ['Today'];
      case 'week':
        return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']; // Weekdays
      case 'month':
        return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']; // Months
      case 'year':
        return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; // Months of the year
      case 'custom':
        return ['Week 1', 'Week 2', 'Week 3', 'Week 4']; // Custom range
      default:
        return ['1', '2', '3', '4', '5']; // Default labels
    }
  };

  // Sample data for the chart
  const data = {
    labels: getLabelsByFilter(filter),
    datasets: [
      {
        label: 'Revenue ($)',
        data: getRevenueByFilter(filter),
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Color for revenue bars
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `Revenue by Order Type (${filter.charAt(0).toUpperCase() + filter.slice(1)})`,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time Period',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Revenue ($)',
        },
      },
    },
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      {/* Filter controls */}
      <Box className="mb-4">
        <FormControl variant="outlined" fullWidth>
          <InputLabel>Time Filter</InputLabel>
          <Select
            value={filter}
            onChange={handleFilterChange}
            label="Time Filter"
            fullWidth
          >
            <MenuItem value="day">Day</MenuItem>
            <MenuItem value="week">Week</MenuItem>
            <MenuItem value="month">Month</MenuItem>
            <MenuItem value="year">Year</MenuItem>
            <MenuItem value="custom">Custom Time</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {filter === 'custom' && (
        <Box className="mb-4">
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

      {/* Bar chart rendering */}
      <Bar data={data} options={options} />
    </div>
  );
};

export default RevenueByOrderType;
