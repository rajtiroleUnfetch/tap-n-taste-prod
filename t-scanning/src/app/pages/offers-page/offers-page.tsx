import { Box, Typography } from '@mui/material';
import { cardData } from '../../constants/LandingPageData';
import { TCard } from '@tap-n-taste/ui';
import '../../style.css';

const OfferPage = () => {
  return (
    <Box className="mt-10 mb-10">
      <Typography
        variant="h5"
        sx={{ fontFamily: 'Poppins', fontWeight: 'bold' }}
      >
        Offers of the day
      </Typography>
      <Box className="flex flex-row gap-10 overflow-x-auto no-scrollbar mt-3">
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
