import { Box, Checkbox, FormControlLabel, Rating } from '@mui/material';
import { ImageSlider, TButton, TCounter } from '@tap-n-taste/ui';
import {
  addOnData,
  itemSliderImages,
} from 't-scanning/src/app/constants/MenuPageData';
import VegIcon from '../../../../assets/veg.svg';
import NonVegIcon from '../../../../assets/non-veg.svg';

interface ItemInfoProps {
  itemName: string;
  itemDesc: string;
  itemVeg: boolean;
  itemPrice: number;
  ratings: number;
}

export const ItemInfoPage = ({
  itemName,
  itemDesc,
  itemPrice,
  itemVeg,
  ratings,
}: ItemInfoProps) => {
  return (
    <Box className="z-10 sm:w-[450px] font-primary px-6 py-4">
      <ImageSlider
        images={itemSliderImages}
        className={{
          root: 'custom-root-class !h-36',
          image: 'custom-image-class',
          indicator: 'custom-indicator-class',
          activeIndicator: '',
          inactiveIndicator: '',
        }}
        styles={{}}
        id="custom-slider"
        aria-label="Custom Image Slider"
      />
      <Box className="section">
        <Box className="header flex justify-between items-center">
          <Box>
            <h1 className="text-2xl sm:text-3xl font-semibold flex gap-3">
              {itemName}
              <img
                width={23}
                height={23}
                src={itemVeg ? VegIcon : NonVegIcon}
                alt={itemVeg ? 'Veg Icon' : 'NonVeg Icon'}
              />
            </h1>
            <p className="text-[#8E8E8E] text-sm sm:text-base mt-3 mb-5">
              {itemDesc}
            </p>
          </Box>
        </Box>
        <Box className="sm:flex sm:justify-between ">
          <h1 className="text-2xl sm:text-4xl font-semibold">₹{itemPrice}</h1>
          <Box className="flex">
            <Rating value={ratings} readOnly precision={0.5} />
            <p>{ratings.toFixed(1)}</p>
          </Box>
        </Box>
        <Box className="add-ons mt-2">
          <Box className="bg-mild p-4 rounded-xl">
            <h1 className="text-2xl font-semibold">Add Ons</h1>
            {addOnData.map((addon, index) => (
              <Box key={index} className="flex w-full items-center">
                <Box className="flex w-full gap-3">
                  <img src={VegIcon} alt="" width={23} height={23} />
                  <h1>{addon.addOnTitle}</h1>
                </Box>

                <FormControlLabel
                  className="font-semibold"
                  control={<Checkbox color="success" />}
                  label={`₹${addon.price}`}
                />
              </Box>
            ))}
          </Box>
        </Box>
        <Box className="footer flex gap-4 mt-4">
          <TCounter />
          <TButton
            text="Add"
            className={{ root: 'flex-1' }}
            sx={{
              backgroundColor: '#F1414F',
              color: 'white',
              '&:hover': {
                backgroundColor: '#DC3D4A',
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
