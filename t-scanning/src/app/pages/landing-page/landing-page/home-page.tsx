import { Box } from '@mui/material'
import { TopNav } from '@tap-n-taste/ui'
import React from 'react'


const HomePage = () => {
  return (
   <Box className="px-[8%] sm:px-[15%]">
      {/* add top navigation bar here */}
      <TopNav />
      {/* add top footer here */}
      <footer>footer should be here</footer>
   </Box>
  )
}

export default HomePage