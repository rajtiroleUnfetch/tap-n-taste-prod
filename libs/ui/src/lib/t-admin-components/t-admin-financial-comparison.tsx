import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary components from Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const FinancialComparison: React.FC = () => {
  // Data for Income and Expenses for each month
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Income',
        data: [10000, 20000, 15000, 30000, 50000, 40000, 60000, 70000, 80000, 75000, 90000, 100000],
        backgroundColor: 'rgba(75,192,192,0.6)',  // Light Green
        borderColor: 'rgba(75,192,192,1)',        // Dark Green
        borderWidth: 1,
      },
      {
        label: 'Expenses',
        data: [5000, 15000, 10000, 20000, 30000, 25000, 35000, 40000, 45000, 50000, 60000, 65000],
        backgroundColor: 'rgba(255,99,132,0.6)', // Light Red
        borderColor: 'rgba(255,99,132,1)',       // Dark Red
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
        text: 'Monthly Income vs Expenses',
        font: {
          size: 18,
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => {
            return `${tooltipItem.dataset.label}: $${tooltipItem.raw.toLocaleString()}`;
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
    layout: {
      padding: {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
      },
    },
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <Bar data={data} options={options} />
    </div>
  );
};

export default FinancialComparison;
