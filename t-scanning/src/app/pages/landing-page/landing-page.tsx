import { Box, Typography } from '@mui/material';
import { TCard } from '@tap-n-taste/ui';
import { cardData} from '../../constants/CardData';
import '../../style.css';



export const LandingPage = () => {
  return (
    <Box>
      <Box>landing page</Box>
      <Typography>Offers Section</Typography>
      <Box
  className="flex flex-row gap-10 overflow-x-auto no-scrollbar"
>
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