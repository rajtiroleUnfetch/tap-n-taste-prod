
import React from 'react';
import { Box } from '@mui/material';

interface TNavButtonProps {
  icon: React.ReactNode; // Accepts an MUI icon or any React node
  onClick?: () => void; // Optional click handler
  backgroundColor?: string; // Accepts background color as a prop
}

export function TNavButton({ icon, onClick, backgroundColor = '#E0E0E0' }: TNavButtonProps) {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: 40,
        height: 40,
        backgroundColor: backgroundColor, // Use the backgroundColor prop
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // Optional shadow for depth
        cursor: 'pointer',
        transition: 'background-color 0.2s',
        '&:hover': {
          backgroundColor: '#D6D6D6', // Slightly darker grey on hover
        },
      }}
    >
      {icon}
    </Box>
  );
}
