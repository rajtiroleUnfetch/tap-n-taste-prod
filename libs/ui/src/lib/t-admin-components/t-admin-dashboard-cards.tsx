import React from 'react';

interface DashboardCardProps {
  title: string;
  value: string | number;
  subtitle: string;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, subtitle }) => {
  return (
    <div className="bg-white p-4 shadow rounded-md">
      <h3 className="text-gray-700 font-bold">{title}</h3>
      <p className="text-2xl font-semibold mt-2">{value}</p>
      <p className="text-gray-500 mt-1">{subtitle}</p>
    </div>
  );
};

export default DashboardCard;
