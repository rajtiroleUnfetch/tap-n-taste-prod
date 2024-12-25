import { Box } from '@mui/material';
import React from 'react';
import {Outlet} from 'react-router-dom';

// Parent Component - AdminOrderPage
export const AdminOrderPage: React.FC = () => {
  return (
   <Box className='h-full w-full'>
        <Outlet/>
    </Box>
  );
};

export default AdminOrderPage;
