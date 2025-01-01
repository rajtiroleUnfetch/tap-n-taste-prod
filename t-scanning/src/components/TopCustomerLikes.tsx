import { Box, Typography } from '@mui/material';
import { TButton, TCard } from '@tap-n-taste/ui';
import { topLinkingData } from '../app/constants/LandingPageData';

const TopCustomerLikes = () => {
  return (
    <Box className="mt-10 mb-10 font-primary">
      <Box className="flex justify-between items-center">
        <Typography
          variant="h5"
          sx={{ fontFamily: 'Poppins', fontWeight: 'bold' }}
        >
          Mostly Liked by Customers
        </Typography>
        <TButton
          text="View All"
          className={{ root: 'hover:bg-none', text: 'capitalize' }}
          sx={{ color: 'red' }}
        />
      </Box>
      <Box className="flex flex-row gap-12 overflow-x-auto no-scrollbar mt-3">
        {topLinkingData.map((card, index) => (
          <Box className="flex flex-col justify-center items-center gap-2">
            <TCard
              key={index}
              imgURL={card.imgURL}
              gradient={false}
              sx={{
                root: { width: '180px', height: '148px' }, // Pass styles directly to the root
              }}
            />
            <Typography variant="h6">{card.imgTitle}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TopCustomerLikes;
