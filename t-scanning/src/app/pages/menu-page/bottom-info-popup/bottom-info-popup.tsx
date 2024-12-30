import React from 'react';
import { Box } from '@mui/material';
import { TButton, TCard } from '@tap-n-taste/ui';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const BottomInfoPopUp = ({ noOfItems = 1 }) => {
  console.log(noOfItems);

  return (
    <Box className="flex flex-col sm:flex-row justify-between items-center rounded-lg font-primary bg-white shadow-lg p-4 mb-10 mt-10">
      {/* Restaurant Image */}
      <Box className="flex-shrink-0 mb-4 sm:mb-0">
        <TCard
          imgURL="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          gradient={false}
          sx={{
            root: {
              width: {
                xs: '80px', // Extra-small screens
                sm: '90px', // Small screens
                md: '100px', // Medium screens and above
              },
              height: {
                xs: '80px', // Extra-small screens
                sm: '90px', // Small screens
                md: '100px', // Medium screens and above
              },
            },
          }}
        />
      </Box>

      {/* Restaurant Details */}
      <Box className="flex-1 sm:ml-6 text-center sm:text-left">
        <h1 className="text-sm sm:text-lg font-bold">Restaurant Name</h1>
        <p className="text-xs sm:text-base text-primary cursor-pointer">
          View Menu
        </p>
      </Box>

      {/* View Cart Button */}
      <Box className="relative bg-primary px-4 py-2 cursor-pointer rounded-md text-white flex flex-col items-center justify-center">
        <TButton
          text="View Cart"
          className={{
            text: 'text-xs sm:text-sm md:text-base text-white',
          }}
          sx={{
            width: '200px', // Fixed button width for consistency
            height: '40px', // Fixed button height for consistency
          }}
        />
        <p className="mt-1 text-[10px] sm:text-xs md:text-sm bg-red-500 text-white rounded-full px-2">
          {noOfItems} Items
        </p>
      </Box>

      {/* Close Icon */}
      <CloseOutlinedIcon className="sm:ml-4 cursor-pointer mt-4 sm:mt-0" />
    </Box>
  );
};

export default BottomInfoPopUp;
