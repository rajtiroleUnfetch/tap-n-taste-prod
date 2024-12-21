import { Box } from '@mui/material';
import { ImageSlider } from '@tap-n-taste/ui';
import { TAbout, TButton, TFaq, TopNav, TFooter, TOrderplaced, TManage, TViewBar, TSearchbar, TView, TReviewpopup, TCustomCard} from '@tap-n-taste/ui';
import ReviewPage from '../../review-page/review-page';
import FaqPage from '../../faq-page/faq-page';
import FooterPage from '../../footer-page/footer-page';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { RestaurantInfoPage } from '../../restaurant-info-page/restaurant-info-page';
import OfferPage from '../../offers-page/offers-page';
import TSetting from '../../setting-page/setting-page';
import TPayment from '../../payment-page/t-payment';

import TopCustomerLikes from '../../top-customer-likes/top-customer-likes';
import TCategory from 'libs/ui/src/lib/t-category/t-category';
import { Discount } from '@mui/icons-material';
import burgerImage from './burger.jpg';  // Adjust the path if it's in a different folder
import pastaImage from './pasta.jpg'; 
import friesImage from './potatofries.jpg'; 
import Tpayment from '../../payment-page/t-payment';


const HomePage = () => {
  return (
    <Box className="px-[8%] sm:px-[15%]">
      {/* Top Navigation Bar */}
      <TopNav />

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

      <Box className="mt-4">
        <TButton
          text="Menu"
          className={{ root: '!bg-[#F1414F] !text-white w-full' }}
          icon={<RestaurantMenuIcon className="text-white" />}
        />
      </Box>

      <TSearchbar />
      <TView />

      <div className="flex justify-between mb-4">
        <TManage />
        {/* <TCategory /> */}
      </div>

      <TViewBar />

      {/* Offers Section */}
      <OfferPage />

      {/* Top Customer Likes Section */}
      <TopCustomerLikes />

      {/* Review Section */}
      <ReviewPage />

      <TOrderplaced
        mainText="Your order is accepted"
        subText="by the restaurant!"
      />

      <Box className="mb-4">
        <TFaq />
      </Box>

      {/* About Section */}
      <Box className="mb-4">
        <TAbout />
      </Box>

      {/* Footer Section */}
      <Box className="mb-4">
        <TFooter />
        <TReviewpopup />
      </Box>

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
      <TSetting></TSetting>
      <Tpayment></Tpayment>
      </Box>
    </Box>
  );
};

export default HomePage;
