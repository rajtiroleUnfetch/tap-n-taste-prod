import { Box, Typography } from '@mui/material';
import { TButton, TCard } from '@tap-n-taste/ui';
import '../../../style.css';
import { hotDealsData } from 't-scanning/src/app/constants/CartPageData';

const HotDeals = () => {
  return (
    <Box className="my-20">
      <Box className="flex justify-between items-center">
        <Typography
          variant="h5"
          sx={{ fontFamily: 'Poppins', fontWeight: 'bold' }}
        >
          Hot Deals!
        </Typography>
        <TButton
          text="View All"
          className={{ root: 'hover:bg-none', text: 'capitalize' }}
          sx={{ color: 'red' }}
        />
      </Box>
      <Box className="flex flex-row gap-12 overflow-x-auto no-scrollbar mt-3">
        {hotDealsData.map((card, index) => (
          <TCard
            key={index}
            imgURL={card.imgURL}
            gradient={true}
            primeText={card.primeText}
            secText={card.secText}
            sx={{
              root: { width: '310px', height: '110px' },
              primeText: { fontSize: '30px' },
              secText: { fontSize: '20px' },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default HotDeals;
