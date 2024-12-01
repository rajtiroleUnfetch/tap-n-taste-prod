import { Box } from '@mui/material'
import { ImageSlider } from '@tap-n-taste/ui'
import { sliderImages } from 't-scanning/src/app/constants/LandingPageData'
import React from 'react'
import ReviewPage from '../../review-page/review-page'
import FaqPage from '../../faq-page/faq-page'
import FooterPage from '../../footer-page/footer-page'

const HomePage = () => {
  return (
   <Box className="px-[8%] sm:px-[15%]">
      {/* add top navigation bar here */}
    <div>nav bar</div>
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
    <ReviewPage/>
    <FaqPage/>
    <FooterPage/>
<Box>bottom bar</Box>
   </Box>
  )
}

export default HomePage