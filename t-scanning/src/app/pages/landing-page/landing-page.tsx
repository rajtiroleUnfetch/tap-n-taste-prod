import { Box, Typography } from '@mui/material';
import { TCard } from '@tap-n-taste/ui';

const images = {
  img1: 'https://plus.unsplash.com/premium_photo-1694141251673-1758913ade48?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  img2: 'https://images.unsplash.com/photo-1706650439799-d4a8894556b6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  img3: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};

export const LandingPage = () => {
  return (
    <Box>
      <Box>landing page</Box>
      <Typography>Cards</Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 6,
          flex: 'wrap',
        }}
      >
        <TCard imgURL={images.img1} primeText="50% off" secText="on Biryani" />
        <TCard imgURL={images.img2} primeText="30% off" secText="on Starters" />
        <TCard imgURL={images.img3} primeText="20% off" secText="on Pizza " />
      </Box>
    </Box>
  );
};
