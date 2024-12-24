import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';
import { Select, MenuItem, InputLabel, FormControl, TextField, Box, SelectChangeEvent } from '@mui/material';

// Register necessary components from Chart.js
ChartJS.register(CategoryScale, BarElement, Tooltip, Legend, Title);

export const OrdersComparison: React.FC = () => {
  const [filter, setFilter] = useState<string>('month'); // Default filter is 'month'
  const [customDateRange, setCustomDateRange] = useState<{ start: string; end: string }>({
    start: '',
    end: '',
  });

  // Function to handle filter change
  const handleFilterChange = (event: SelectChangeEvent<string>) => {
    setFilter(event.target.value); // Update filter based on selected option
  };

  // Function to handle custom date range change
  const handleCustomDateRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomDateRange({
      ...customDateRange,
      [event.target.name]: event.target.value,
    });
  };

  // Get days labels based on selected filter
  const getDaysLabels = (filter: string) => {
    switch (filter) {
      case 'week':
        return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']; // Weekdays
      case 'day':
        return ['Today'];
      case 'month':
        return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']; // Days in a month
      case 'year':
        return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; // Months in a year
      default:
        return ['1', '2', '3', '4', '5']; // Default labels for testing
    }
  };

  // Get orders count data based on selected filter
  const getOrdersByFilter = (filter: string) => {
    switch (filter) {
      case 'week':
        return [50, 100, 75, 120, 90, 30, 50]; // Example data for the week
      case 'day':
        return [100]; // Example data for today
      case 'month':
        return [120, 130, 150, 90, 140, 160, 180, 200, 250, 210, 180, 160]; // Example data for the month
      case 'year':
        return [2000, 2200, 2300, 2100, 2500, 2400, 2200, 2300, 2400, 2500, 2300, 2200]; // Example data for the year
      default:
        return [120, 130, 150, 90, 140]; // Default orders data
    }
  };

  // Sample data for orders count (These values would be dynamically fetched in a real-world scenario)
  const data = {
    labels: getDaysLabels(filter),
    datasets: [
      {
        label: 'Orders',
        data: getOrdersByFilter(filter),
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Green
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
        text: `Orders Comparison (${filter.charAt(0).toUpperCase() + filter.slice(1)})`,
        font: {
          size: 18,
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => {
            return `Orders: ${tooltipItem.raw}`;
          },
        },
      },
      legend: {
        position: 'top' as const, // Use the 'as const' assertion to ensure it's recognized as a valid position type
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Days',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Order Count',
        },
      },
    },
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <Box className="mb-4">
        {/* Filter Controls */}
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

      <Bar data={data} options={options} />
    </div>
  );
};

export default OrdersComparison;
