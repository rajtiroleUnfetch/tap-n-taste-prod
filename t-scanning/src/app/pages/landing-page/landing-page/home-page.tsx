import { Box, Divider } from '@mui/material';
import { TButton, TCategory, TManage, TopNav, TViewBar } from '@tap-n-taste/ui';
import CallIcon from '@mui/icons-material/Call';
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
    <Box className="px-[8%] sm:px-[15%]">
      {/* Top Navigation Bar */}
      <TopNav />
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
      <Box className="mt-4 mb-8">
        <TButton
          text="Menu"
          className={{ root: '!bg-[#F1414F] !text-white w-full' }}
          icon={<RestaurantMenuIcon className="text-white" />}
        />
      </Box>
      <Box className="flex justify-between items-center mb-8">
        <TManage />
        <TCategory />
      </Box>
      <TViewBar />
      {/* Offers Section */}
      <OfferPage />
      {/* Top Customer Likes Section */}
      <TopCustomerLikes />
      <ChefSpecial />
      <GalleryPage />
      {/* Review Section */}
      <ReviewPage />
      {/* FAQ Section */}
      <FaqPage />
      {/* Issue */}
      <Box className="mt-6 mb-20">
        <Divider
          textAlign="left"
          className="text-2xl text-zinc-700 font-semibold mb-6"
        >
          Having an issue?
        </Divider>
        <Box className="mt-8 mb-8"></Box>
        <TButton
          text="Contact Us"
          className={{
            root: 'w-full mt-8 bg-white',
            text: 'text-primary',
          }}
          styles={{
            border: '2px solid #F1414F',
          }}
          icon={<CallIcon className="text-primary" />}
        />
      </Box>
      {/* Footer Section */}
      <FooterPage />
      {/* Bottom Bar */}
      <Box>Bottom Bar</Box>
    </Box>
  );
};

export default HomePage;
