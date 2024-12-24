import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LineElement, Tooltip, Legend, Title } from 'chart.js';

// Register necessary components from Chart.js
ChartJS.register(CategoryScale, LineElement, Tooltip, Legend, Title);

export const ReservationsAndEventBookings: React.FC = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Reservations',
        data: [100, 150, 180, 130, 200, 250, 230, 210, 220, 240, 300, 350], // Example reservation data
        borderColor: 'rgba(54, 162, 235, 1)',
        fill: false,
        tension: 0.1,
      },
      {
        label: 'Event Bookings',
        data: [50, 60, 80, 70, 120, 150, 130, 110, 140, 180, 220, 250], // Example event booking data
        borderColor: 'rgba(255, 99, 132, 1)',
        fill: false,
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Reservations and Event Bookings Over Time',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Bookings Count',
        },
      },
    },
  };

  return (
    <div>
      <h2>Reservations and Event Bookings Over Time</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default ReservationsAndEventBookings;
