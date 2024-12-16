import { Box } from '@mui/material';
import {
  ImageSlider,
  TButton,
  TManage,
  TopNav,
  TViewBar,
} from '@tap-n-taste/ui';
import ReviewPage from '../../review-page/review-page';
import FaqPage from '../../faq-page/faq-page';
import FooterPage from '../../footer-page/footer-page';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { RestaurantInfoPage } from '../../restaurant-info-page/restaurant-info-page';
import OfferPage from '../../offers-page/offers-page';
import TopCustomerLikes from '../../top-customer-likes/top-customer-likes';
import ChefSpecial from '../../chef-special/chef-special';
import GalleryPage from '../../gallery-page/gallery-page';

const HomePage = () => {
  return (
    // <Box className="px-4 md:px-8 lg:px-12 mt-4">
    <Box className="px-[8%] sm:px-[10%]">
      {' '}
      {/* Add padding for different screen sizes */}
      {/* Top Navigation Bar */}
      <TopNav />
      {/* Image Slider Added inside the Restaurant Info*/}
      {/* RESTAURANT INFO */}
      <RestaurantInfoPage
        restaurantName="Stone Water"
        restaurantDesc="North Indian | Chinese | Thai"
        restaurantAddress="Door 8-9/2, Rushikonda,Visakhapatnam"
        isOpen={true}
        closingTime={11}
        daysOperate="Mon-Fri"
        deliveryAndDinning={true}
        distance={2.2}
        ratings={4.5}
      />
      <Box className="mt-4">
        <TButton
          text="Menu"
          className={{ root: '!bg-[#F1414F] !text-white w-full' }}
          icon={<RestaurantMenuIcon className="text-white" />}
        />
      </Box>
      <TViewBar />
      <Box>
        <TManage />
      </Box>
      {/* Offers Section */}
      <OfferPage />
      {/* Top Customer Likes Section */}
      <TopCustomerLikes />
      {/* Chef Special Section */}
      <ChefSpecial />
      {/* Gallery */}
      <GalleryPage />
      {/* Review Section */}
      <ReviewPage />
      {/* FAQ Section */}
      <FaqPage />
      {/* Footer Section */}
      <FooterPage />
      {/* Bottom Bar */}
      <Box>Bottom Bar</Box>
    </Box>
  );
};

export default HomePage;
