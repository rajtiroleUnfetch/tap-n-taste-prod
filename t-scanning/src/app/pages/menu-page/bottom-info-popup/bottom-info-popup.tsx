import { Box } from '@mui/material';
import { TButton, TCard } from '@tap-n-taste/ui';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const BottomInfoPopUp = () => {
  return (
    <Box className="flex justify-between items-center rounded-lg font-primary bg-white shadow-lg p-2 sm:p-4 mb-10 mt-10">
      {/* Content goes here */}
      <Box className="max-lg:hidden">
        <TCard
          imgURL="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          gradient={false}
          sx={{
            root: { width: '100px', height: '100px' }, // Pass styles directly to the root
          }}
        />
      </Box>
      {/* <Box className=" sm:hidden">
        <TCard
          imgURL="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          gradient={false}
          sx={{
            root: { width: '50px', height: '50px' }, // Pass styles directly to the root
          }}
        />
      </Box> */}
      <Box className="sm:flex-1 sm:ml-10">
        <h1 className="text-sm sm:text-lg">Restaurant Name</h1>
        <p className="text-xs sm:text-base text-primary">View Menu</p>
      </Box>
      <Box className="bg-primary sm:px-2 sm:pb-2 cursor-pointer rounded-md text-white">
        <TButton
          text="View Cart"
          className={{ text: 'text-xs sm:text-base text-white' }}
        />
        <p className="text-[10px] sm:text-base text-center">3 Items</p>
      </Box>
      <CloseOutlinedIcon className="sm:ml-4" />
    </Box>
  );
};

export default BottomInfoPopUp;
