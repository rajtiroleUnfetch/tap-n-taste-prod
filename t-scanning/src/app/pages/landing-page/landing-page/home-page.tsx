import { Box, Divider } from '@mui/material';
import {
  TAbout,
  TButton,
  TCategory,
  TCustomCard,
  TFaq,
  TFooter,
  TManage,
  TopNav,
  TOrderplaced,
  TReviewpopup,
  TSearchbar,
  TTableSelector,
  TViewBar,
} from '@tap-n-taste/ui';
import CallIcon from '@mui/icons-material/Call';
import ReviewPage from '../../review-page/review-page';
import FaqPage from '../../faq-page/faq-page';
import FooterPage from '../../footer-page/footer-page';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { RestaurantInfoPage } from '../../restaurant-info-page/restaurant-info-page';
import OfferPage from '../../offers-page/offers-page';
import TSetting from '../../setting-page/setting-page';
import TPayment from '../../payment-page/t-payment';
import TopCustomerLikes from '../../top-customer-likes/top-customer-likes';
import ChefSpecial from '../../chef-special/chef-special';
import GalleryPage from '../../gallery-page/gallery-page';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box className="px-[8%] sm:px-[15%]">
      {/* Top Navigation Bar */}
      <TopNav />

      {/* Table Selector */}
      <Box className="w-full flex items-center justify-center">
        <TTableSelector />
      </Box>

      {/* Search Bar */}
      <TSearchbar />

      {/* Restaurant Info */}
      <RestaurantInfoPage
        restaurantName="Stone Water"
        restaurantDesc="North Indian | Chinese | Thai"
        restaurantAddress="Door 8-9/2, Rushikonda, Visakhapatnam"
        isOpen={true}
        closingTime={11}
        daysOperate="Mon-Fri"
        deliveryAndDinning={true}
        distance={2.2}
        ratings={4.5}
      />

      {/* Menu Button */}
      <Box className="mt-4 mb-8">
        <TButton
          text="Menu"
          className={{ root: '!bg-[#F1414F] !text-white w-full' }}
          icon={<RestaurantMenuIcon className="text-white" />}
          onClick={() => navigate('/restaurants/:id/menu')}
        />
      </Box>

      {/* Category and Management */}
      <Box className="flex justify-between items-center mb-8">
        <TManage />
        <TCategory />
      </Box>

      {/* View Bar */}
      <TViewBar />

      {/* Offers Section */}
      <OfferPage />

      {/* Top Customer Likes Section */}
      <TopCustomerLikes />

      {/* Chef Special Section */}
      <ChefSpecial />
      
      {/* Gallery Section */}
      <GalleryPage />

      {/* Review Section */}
      <ReviewPage />


      {/* FAQ Section */}
      <Box className="mb-4">
        <TFaq />
      </Box>

      {/* Issue Section */}
      <Box className="mt-6 mb-20">
        <Divider
          textAlign="left"
          className="text-2xl text-zinc-700 font-semibold mb-6"
        >
          Having an issue?
        </Divider>
        <TButton
          text="Contact Us"
          className={{ root: 'w-full mt-8 bg-white', text: 'text-primary' }}
          styles={{ border: '2px solid #F1414F' }}
          icon={<CallIcon className="text-primary" />}
        />
      </Box>


      

      
      {/* About Section */}
      <Box className="mb-4">
        <TAbout />
      </Box>

      {/* Footer Section */}
      <Box className="mb-4">
        <TFooter />
        
      </Box>

      
      <Box className="mt-10 mb-5">
        <h1 className="text-center font-semibold text-sm text-zinc-500">
          Powered by Tap'nTaste
        </h1>
      </Box>
    </Box>
  );
};

export default HomePage;
