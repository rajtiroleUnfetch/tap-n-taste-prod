import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, BarElement, Tooltip, Legend, Title } from 'chart.js';
import { Box } from '@mui/material';

// Register necessary components from Chart.js
ChartJS.register(CategoryScale, BarElement, Tooltip, Legend, Title);

export const OrderFrequencyByTime: React.FC = () => {
  const data = {
    labels: ['Morning', 'Afternoon', 'Evening'],
    datasets: [
      {
        label: 'Orders Count',
        data: [200, 350, 500], // Example order frequency by time
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Order Frequency by Time of Day',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time of Day',
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
    <Box className='p-8 bg-white rounded-lg shadow-md'>
      <h2>Order Frequency by Time of Day</h2>
      <Bar data={data} options={options} />
    </Box>
  );
};

export default OrderFrequencyByTime;
