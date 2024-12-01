import { Box } from '@mui/material';
import { ImageSlider, TButton, TopNav } from '@tap-n-taste/ui';
import { sliderImages } from 't-scanning/src/app/constants/LandingPageData';
import React from 'react';
import ReviewPage from '../../review-page/review-page';
import FaqPage from '../../faq-page/faq-page';
import FooterPage from '../../footer-page/footer-page';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

const HomePage = () => {
  return (
    <Box className="px-4 md:px-8 lg:px-12 mt-4">
      {' '}
      {/* Add padding for different screen sizes */}
      {/* Top Navigation Bar */}
      <TopNav />
      {/* Image Slider */}
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
      <Box className="mt-4">
        <TButton
          text="Menu"
          className={{ root: '!bg-[#F1414F] !text-white w-full' }}
          icon={<RestaurantMenuIcon className="text-white" />}
        />
      </Box>
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
