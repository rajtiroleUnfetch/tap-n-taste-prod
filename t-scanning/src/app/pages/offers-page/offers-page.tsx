import { Box, Typography } from '@mui/material';
import { cardData } from '../../constants/LandingPageData';
import { TButton, TCard } from '@tap-n-taste/ui';
import '../../style.css';

const OfferPage = () => {
  return (
    <Box className="mt-10 mb-10">
      <Box className="flex justify-between items-center">
        <Typography
          variant="h5"
          sx={{ fontFamily: 'Poppins', fontWeight: 'bold' }}
        >
          Offers of the day
        </Typography>
        <TButton
          text="View All"
          className={{ root: 'hover:bg-none', text: 'capitalize' }}
          sx={{ color: 'red' }}
        />
      </Box>
      <Box className="flex flex-row gap-12 overflow-x-auto no-scrollbar mt-3">
        {cardData.map((card, index) => (
          <TCard
            key={index}
            imgURL={card.imgURL}
            primeText={card.primeText}
            secText={card.secText}
          />
        ))}
      </Box>
    </Box>
  );
};

export default OfferPage;
