import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Box } from '@mui/material';

// Register necessary components from Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

export const OrdersTypeBreakdown: React.FC = () => {
  const data = {
    labels: ['Table Orders', 'Takeaway', 'Delivery', 'Table Booking', 'Event Booking', 'Reservations'],
    datasets: [
      {
        label: 'Order Type Breakdown',
        data: [100, 50, 80, 30, 20, 60], // Example order data
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)', // Table Orders
          'rgba(255, 159, 64, 0.6)',  // Takeaway
          'rgba(153, 102, 255, 0.6)', // Delivery
          'rgba(255, 99, 132, 0.6)',  // Table Booking
          'rgba(54, 162, 235, 0.6)',  // Event Booking
          'rgba(255, 206, 86, 0.6)',  // Reservations
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box className='p-8 bg-white rounded-lg shadow-md'>
      <h2>Order Type Breakdown</h2>
      <Pie data={data} />
    </Box>
  );
};

export default OrdersTypeBreakdown;
