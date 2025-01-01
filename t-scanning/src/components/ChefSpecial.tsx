import { Box, Typography } from '@mui/material';
import { TButton, TCard } from '@tap-n-taste/ui';
import { chefSpecialData } from '../app/constants/LandingPageData';

const ChefSpecial = () => {
  return (
    <Box className="mt-10 mb-10 overflow-visible">
      <Box className="flex justify-between items-center overflow-visible">
        <Typography
          variant="h5"
          sx={{ fontFamily: 'Poppins', fontWeight: 'bold' }}
        >
          Chef's Special
        </Typography>
        <TButton
          text="View All"
          className={{ root: 'hover:bg-none', text: 'capitalize' }}
          sx={{ color: 'red' }}
        />
      </Box>
      <Box className="flex flex-row gap-12 overflow-x-auto no-scrollbar mt-3 overflow-visible pb-10">
        {chefSpecialData.map((card, index) => (
          <Box
            key={index}
            className="flex flex-col justify-center items-start gap-5 bg-white rounded-2xl shadow-xl overflow-visible pb-3"
          >
            <TCard
              imgURL={card.imgURL}
              gradient={false}
              sx={{
                root: { width: '325px', height: '220px' }, // Pass styles directly to the root
              }}
            />
            <Typography
              variant="h4"
              sx={{ fontFamily: 'Poppins', paddingLeft: 2 }}
            >
              {card.imgTitle}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Poppins',
                color: '#616161',
                paddingLeft: 2,
              }}
            >
              {card.imgDesc}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ChefSpecial;
