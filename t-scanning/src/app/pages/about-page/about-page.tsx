import { Box } from '@mui/material';
import { TAbout, TopNav } from '@tap-n-taste/ui';
import React from 'react';

const AboutPage = () => {
  return (
    <Box className="px-[8%] sm:px-[15%]">
      {/* Top Navigation Bar */}
      <TopNav />
      <TAbout />
    </Box>
  );
};

export default AboutPage;
