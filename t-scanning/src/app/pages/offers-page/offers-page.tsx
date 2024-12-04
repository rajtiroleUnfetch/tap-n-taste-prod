import { Box, Typography } from '@mui/material';
import { offersSectionData } from '../../constants/LandingPageData';
import { TButton, TCard } from '@tap-n-taste/ui';
import '../../style.css';

const OfferPage = () => {
  return (
    <Box className="my-20">
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
        {offersSectionData.map((card, index) => (
          <TCard
            key={index}
            imgURL={card.imgURL}
            gradient={true}
            primeText={card.primeText}
            secText={card.secText}
          />
        ))}
      </Box>
    </Box>
  );
};

export default OfferPage;
