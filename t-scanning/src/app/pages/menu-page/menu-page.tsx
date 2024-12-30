import { Box } from '@mui/material';
import {
  TCategory,
  TCustomCard,
  TFoodItemTypes,
  TFooter,
  TManage,
  TopNav,
  TSearchbar,
  TView,
} from '@tap-n-taste/ui';
import FooterPage from '../footer-page/footer-page';
import CuisinesOffered from './cuisines-offered/cuisines-offered';
import { ItemInfoPage } from './item-info/item-info';
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import BottomInfoPopUp from './bottom-info-popup/bottom-info-popup';
import { menuCardData } from '../../constants/MenuPageData';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import burgerImage from '../../../assets/burger.jpg';
import pastaImage from '../../../assets/pasta.jpg';
import friesImage from '../../../assets/potatofries.jpg';

export default function MenuPage() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  return (
    <Box className="px-[8%] sm:px-[15%]">
      <TopNav />
      <TSearchbar />
      <TView />

      <Box className="flex justify-between items-center mb-8">
        <TManage />
        <TCategory />
      </Box>

      <CuisinesOffered />

      {/* Custom Card */}
      <Box className="mb-4">
        <TCustomCard
          image={burgerImage}
          title="Burger"
          description="Succulent Grilled Chicken Patty Nestled Between Toasted Buns, Crowned With Crisp Lettuce And Tangy Mayo, Delivering Savory Satisfaction In Every Bite."
          rating={4.5}
          price={250}
          veg={true} // Non-vegetarian
        />
        <TCustomCard
          image={pastaImage}
          title="Pasta"
          description="A creamy, comforting dish made with al dente pasta, rich sauce, and a blend of fresh herbs"
          rating={4.8}
          price={200}
          veg={false} // Vegetarian
        />
        <TCustomCard
          image={friesImage}
          title="Fries"
          description="Golden, crispy on the outside and soft on the inside, these perfectly seasoned fries are the ultimate snack for any craving."
          rating={4.1}
          price={200}
          veg={true} // Vegetarian
        />
      </Box>

      <BottomInfoPopUp noOfItems={3} />
      <Box className="mb-4">
        <TFooter />
      </Box>
    </Box>
  );
}
