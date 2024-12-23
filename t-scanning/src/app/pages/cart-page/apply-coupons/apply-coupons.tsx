import { Box, InputAdornment, TextField } from '@mui/material';
import CouponIcon from '../../../../assets/coupon.png';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const ApplyCoupons = () => {
  return (
    <Box className="mt-10">
      <TextField
        variant="outlined"
        placeholder="Apply Coupons"
        fullWidth
        onChange={() => {}}
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
              className=""
              sx={{ paddingLeft: 1, paddingY: 3 }}
            >
              <img src={CouponIcon} alt="Coupon Icon" />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment
              position="end"
              className="pr-2 cursor-pointer text-3xl"
            >
              <ChevronRightIcon />
            </InputAdornment>
          ),
        }}
        className=""
        sx={{
          backgroundColor: 'white',
          borderRadius: 3,
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
          '& .MuiOutlinedInput-root': {
            paddingLeft: 1.5,
            paddingRight: 1.5,
            '& input': {
              padding: '10px 0px',
            },
            '& fieldset': {
              borderColor: 'transparent',
              borderRadius: 3,
            },
            '&:hover fieldset': {
              borderColor: 'transparent',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'transparent',
            },
          },
        }}
      />
    </Box>
  );
};

export default ApplyCoupons;
