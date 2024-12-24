import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';
import { Select, MenuItem, InputLabel, FormControl, TextField, Box, SelectChangeEvent } from '@mui/material';

// Register necessary components from Chart.js
ChartJS.register(ArcElement, Tooltip, Legend, Title);

export const FoodCategoryComparison: React.FC = () => {
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
 // Function to generate data based on selected filter
 const getDataByFilter = (filter: string) => {
    switch (filter) {
      case 'week':
        return [50, 100, 75, 120, 90]; // Example data for the current week
      case 'day':
        return [10, 20, 15, 30, 25]; // Example data for today
      case 'month':
        return [120, 250, 80, 150, 90]; // Example data for the current month
      case 'year':
        return [1500, 2000, 1200, 2500, 2200]; // Example data for the year
      case 'custom':
        // For custom range, you could implement logic to calculate this based on the custom date range
        return [100, 200, 150, 250, 300]; // Placeholder data for custom range
      default:
        return [120, 250, 80, 150, 90]; // Default (monthly) data
    }
  };

  // Data for different food categories
  const data = {
    labels: ['Appetizers', 'Main Course', 'Desserts', 'Beverages', 'Sides'],
    datasets: [
      {
        label: 'Food Categories Sold',
        data: getDataByFilter(filter),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',  // Appetizers - Red
          'rgba(54, 162, 235, 0.6)',  // Main Course - Blue
          'rgba(255, 206, 86, 0.6)',  // Desserts - Yellow
          'rgba(75, 192, 192, 0.6)',  // Beverages - Green
          'rgba(153, 102, 255, 0.6)', // Sides - Purple
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)', 
          'rgba(54, 162, 235, 1)', 
          'rgba(255, 206, 86, 1)', 
          'rgba(75, 192, 192, 1)', 
          'rgba(153, 102, 255, 1)',
        ],
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
        text: `Food Category Sales Comparison (${filter.charAt(0).toUpperCase() + filter.slice(1)})`,
        font: {
          size: 18,
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => {
            return `${tooltipItem.label}: ${tooltipItem.raw} items sold`;
          },
        },
      },
      legend: {
        position: 'top' as const,  // Use the 'as const' assertion to ensure it's recognized as a valid position type
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

      <Pie data={data} options={options} />
    </div>
  );
};

export default FoodCategoryComparison;
