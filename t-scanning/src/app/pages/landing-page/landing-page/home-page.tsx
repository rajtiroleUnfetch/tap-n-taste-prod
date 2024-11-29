import { Box } from '@mui/material'
import { ImageSlider } from '@tap-n-taste/ui'
import { sliderImages } from 't-scanning/src/app/constants/LandingPageData'
import React from 'react'

const HomePage = () => {
  return (
   <Box className="px-[8%] sm:px-[15%]">
      {/* add top navigation bar here */}
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

      {/* add footer here */}
    <footer>footer should be here</footer>


<Box>bottom bar</Box>
   </Box>
  )
}

export default HomePage