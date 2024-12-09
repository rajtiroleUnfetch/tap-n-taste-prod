import { Box } from '@mui/material';
import { TopNav, TSearchbar } from '@tap-n-taste/ui';
import FooterPage from '../footer-page/footer-page';
import CuisinesOffered from './cuisines-offered/cuisines-offered';
import { ItemInfoPage } from './item-info/item-info';
const MenuPage = () => {
  return (
    <Box className="px-[8%] sm:px-[10%]">
      <TopNav />
      <TSearchbar />
      <CuisinesOffered />
      {/* Will only open when a card is clicked */}
      <ItemInfoPage
        itemName="Burger"
        itemDesc="Succulent grilled chicken patty nestled between toasted buns, crowned with crisp lettuce and tangy mayo, delivering savory satisfaction in every bite."
        itemPrice={234.9}
        itemVeg={false}
        ratings={3}
      />
      {/*  */}
      <FooterPage />
    </Box>
  );
};

export default MenuPage;
