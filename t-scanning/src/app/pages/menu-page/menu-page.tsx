import { Box } from '@mui/material';
import { TopNav, TSearchbar } from '@tap-n-taste/ui';
import FooterPage from '../footer-page/footer-page';
import CuisinesOffered from './cuisines-offered/cuisines-offered';
import { ItemInfoPage } from './item-info/item-info';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MenuPage = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className="px-[8%] sm:px-[10%]">
      <TopNav />
      <TSearchbar />
      <CuisinesOffered />

      {/* Demo Button to Show Item Component.*/}
      <Button variant="outlined" onClick={handleClickOpen}>
        Item
      </Button>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        className="rounded-2xl"
      >
        <ItemInfoPage
          itemName="Burger"
          itemDesc="Succulent grilled chicken patty nestled between toasted buns, crowned with crisp lettuce and tangy mayo, delivering savory satisfaction in every bite."
          itemPrice={234.9}
          itemVeg={false}
          ratings={3}
        />
      </Dialog>

      <FooterPage />
    </Box>
  );
};

export default MenuPage;
