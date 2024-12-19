import { Box, CardContent, Collapse, TextareaAutosize } from '@mui/material';
import {
  TButton,
  TCustomCard,
  TFooter,
  TopNav,
  TTableSelector,
} from '@tap-n-taste/ui';
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';
import Divider from '@mui/material/Divider';
import ApplyCoupons from './apply-coupons/apply-coupons';
import HotDeals from './hot-deals/hot-deals';
import CartTable from './cart-table/cart-table';
import { useState } from 'react';
import { ExpandMoreOutlined } from '@mui/icons-material';
import { cartPageCardsData } from '../../constants/CartPageData';

const CartPage = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box className="px-[8%] sm:px-[10%] font-primary">
      <TopNav />
      <Box className="mt-10 flex items-center justify-between border px-6 py-3 rounded-lg">
        <h1 className="text-primary">Your Table Number is</h1>
        <TTableSelector className="relative" />
      </Box>
      <Box className="mt-10 mb-10">
        {cartPageCardsData.map((item, index) => (
          <TCustomCard
            image={item.image}
            title={item.title}
            description={item.description}
            rating={item.rating}
            price={item.price}
            veg={false}
          />
        ))}
      </Box>
      <Box className="w-full flex justify-between items-center mb-10">
        <TButton
          text="Cooking Requests"
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          icon={<ExpandMoreOutlined />}
          className={{ text: 'text-primary capitalize font-semibold' }}
        />
        <TButton
          text="Add More Items"
          icon={<ControlPointRoundedIcon className="text-primary" />}
          className={{ text: 'text-primary capitalize font-semibold' }}
        />
      </Box>

      <Collapse className="mb-10" in={expanded} timeout="auto" unmountOnExit>
        <CardContent className="h-60">
          <TextareaAutosize
            className="w-full h-60 bg-zinc-200 p-4 rounded-xl"
            placeholder="Add Less Salt & Spices"
            style={{ height: '150px', resize: 'none' }} // This disables the resizing handle
          />
        </CardContent>
      </Collapse>

      <Divider className="mt-20">
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
      <Box className="w-full flex justify-center items-center mb-10">
        <TButton
          text="Place Order"
          sx={{
            width: '100%',
            backgroundColor: '#F1414F',
            border: '2px solid #F1414F',
            color: 'white',
            '&:hover': {
              backgroundColor: '#DC3D4A',
            },
          }}
        />
      </Box>

      <TFooter />
    </Box>
  );
};

export default CartPage;
