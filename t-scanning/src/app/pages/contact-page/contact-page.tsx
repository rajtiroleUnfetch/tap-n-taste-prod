import { Box } from '@mui/material';
import { TopNav } from '@tap-n-taste/ui';
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <Box className="px-[8%] sm:px-[15%]">
      {/* Top Navigation Bar */}
      <TopNav />
      <div>
        <h1>Contact Us</h1>
        <p>This is the contact page.</p>
      </div>
    </Box>
  );
};

export default ContactPage;
