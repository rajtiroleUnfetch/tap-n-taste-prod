import { Box, Typography } from '@mui/material';
import {
  ImageSlider,
  TBarButton,
  TButton,
  TMainLayout,
  TopNav,
  TSearchbar,
  TViewBar,
} from '@tap-n-taste/ui';
import { sliderImages } from 't-scanning/src/app/constants/LandingPageData';

interface Props {
  restaurantName: string;
  restaurantDesc: string;
  restaurantAddress: string;
  isOpen: boolean;
  closingTime: number;
  daysOperate: string;
  deliveryAndDinning: boolean;
  distance: number;
  ratings: number;
}

const RestaurantInfo = ({
  restaurantName,
  restaurantDesc,
  restaurantAddress,
  isOpen,
  closingTime,
  daysOperate,
  deliveryAndDinning,
  distance,
  ratings,
}: Props) => {
  return (
    <Box className="section">
      <Box className="header">
        <h1 className="text-3xl sm:text-4xl font-semibold">{restaurantName}</h1>
        <p className="text-[#8E8E8E]">{restaurantDesc}</p>
      </Box>
      <Box>
        <p className='text-[#616161]'>{restaurantAddress}</p>
        <div className="flex items-center space-x-4">
          <p className={`${isOpen ? 'text-blue-500' : 'text-red-500'}`}>{isOpen ? 'Open now' : 'Closed Now'}</p>
          <p className='font-semibold'>| Closes at {closingTime}:00pm | {daysOperate}</p>
        </div>

        <p className='text-[#616161]'>Provides {deliveryAndDinning?"Both Delivery and Dining":"Only Dining"}</p>
        <p className='text-[#757575]'>{distance}Km away</p>
        <p className='font-semibold text-emerald-600'>{ratings}</p>
      </Box>
    </Box>
  );
};

const HomePage = () => {
  return (
    <Box className="px-[8%] sm:px-[15%]">
      {/* add top navigation bar here */}
      <TopNav />
      <TSearchbar />
      <ImageSlider
        images={sliderImages}
        className={{
          root: 'custom-root-class',
          image: 'custom-image-class',
          indicator: 'custom-indicator-class',
          activeIndicator: '',
          inactiveIndicator: '',
        }}
        styles={{}}
        id="custom-slider"
        aria-label="Custom Image Slider"
      />

      {/* RESTAURANT INFO */}
      <RestaurantInfo
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

      <TButton
        vairant="contained"
        className={{
          root: 'font-semibold !bg-[#F1414F] w-full !rounded-xl !shadow-none h-12',
          text: 'text-white !font-bold',
        }}
        text="Menu"
      />

      {/* add top footer here */}
      <footer>footer should be here</footer>
    </Box>
  );
};

export default HomePage;
