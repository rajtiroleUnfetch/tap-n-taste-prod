import { Box } from '@mui/material'
import React from 'react'
import ReviewPage from '../../review-page/review-page'
import FaqPage from '../../faq-page/faq-page'
import FooterPage from '../../footer-page/footer-page'

const HomePage = () => {
  return (
   <Box>
      {/* add top navigation bar here */}
    <div>nav bar</div>
    <ReviewPage/>
    <FaqPage/>
    <FooterPage/>
<Box>bottom bar</Box>
   </Box>
  )
}

export default HomePage