import { Box, InputAdornment, TextField } from '@mui/material';
import { TButton, TCustomCard, TopNav, TTableSelector } from '@tap-n-taste/ui';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';
import Divider from '@mui/material/Divider';
import ApplyCoupons from './apply-coupons/apply-coupons';
import HotDeals from './hot-deals/hot-deals';
import CartTable from './cart-table/cart-table';

const CartPage = () => {
  return (
    <Box className="px-[8%] sm:px-[10%] font-primary">
      <TopNav />
      <Box className="mt-10 flex items-center justify-between border px-6 py-3 rounded-lg">
        <h1 className="text-primary">Your Table Number is</h1>
        <TTableSelector className="relative" />
      </Box>
      <Box className="mt-10 mb-10">
        <h1 className="text-center">Custom Card Section</h1>
      </Box>
      <Box className="w-full flex justify-between items-center">
        <TButton
          text="Cooking Requests"
          icon={<KeyboardArrowDownOutlinedIcon className="text-primary" />}
          className={{ text: 'text-primary capitalize font-semibold' }}
        />
        <TButton
          text="Add More Items"
          icon={<ControlPointRoundedIcon className="text-primary" />}
          className={{ text: 'text-primary capitalize font-semibold' }}
        />
      </Box>

      <Divider>
        <h1>Deals & Coupons</h1>
      </Divider>

      {/* Apply Coupon  */}
      <ApplyCoupons />

      {/* Hot Deals */}
      <HotDeals />

      <Divider>
        <h1>Your Cart</h1>
      </Divider>

      <CartTable />
      <TButton text="Place Order" />
    </Box>
  );
};

export default CartPage;
