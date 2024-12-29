import { Box, Chip, Grid, Rating } from '@mui/material';
import { ImageSlider } from '@tap-n-taste/ui';
import { TButton } from '@tap-n-taste/ui';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import DirectionsIcon from '@mui/icons-material/Directions';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import AssistantDirectionOutlinedIcon from '@mui/icons-material/AssistantDirectionOutlined';
import CallIcon from '@mui/icons-material/Call';
import { useNavigate } from 'react-router-dom';
import { sliderImages } from '../app/constants/LandingPageData';

interface RestaurantProps {
  restaurantName: string;
  restaurantDesc: string;
  restaurantAddress: string;
  isOpen: boolean;
  closingTime: number;
  daysOperate: string;
  deliveryAndDinning: boolean;
  distance: number;
  ratings: number;
}

export const RestaurantInfoPage = ({
  restaurantName,
  restaurantDesc,
  restaurantAddress,
  isOpen,
  closingTime,
  daysOperate,
  deliveryAndDinning,
  distance,
  ratings,
}: RestaurantProps) => {
  const navigate = useNavigate();
  return (
    <Box className="z-10 font-primary">
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
      <Box className="section">
        <Box className="header flex flex-col sm:flex-row justify-between items-center">
          <Box>
            <h1 className="text-3xl sm:text-4xl font-semibold">
              {restaurantName}
            </h1>
            <p className="text-[#8E8E8E] text-sm md:text-base mb-5">
              {restaurantDesc}
            </p>
          </Box>
          <Box className="flex">
            <TButton
              text=""
              className={{ root: 'p-0' }}
              icon={
                <AssistantDirectionOutlinedIcon
                  className="text-blue-500"
                  style={{ color: 'blue' }}
                />
              }
            />
            <TButton text="" className={{ root: 'p-0' }} icon={<CallIcon />} />
          </Box>
        </Box>
        <Box className="sm:flex sm:justify-between mt-4">
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center" mb={2}>
              <LocationOnIcon color="action" sx={{ mr: 1 }} />
              <p>{restaurantAddress}</p>
            </Box>
            <Box display="flex" alignItems="center" mb={2}>
              <AccessTimeIcon color="action" sx={{ mr: 1 }} />
              <p>
                {isOpen ? (
                  <Chip
                    label="Open now"
                    color="success"
                    size="small"
                    sx={{ mr: 1 }}
                  />
                ) : (
                  <Chip
                    label="Closed now"
                    color="error"
                    size="small"
                    sx={{ mr: 1 }}
                  />
                )}
                Closes at {closingTime}:00 PM | {daysOperate}
              </p>
            </Box>
            <Box display="flex" alignItems="center" mb={2}>
              <RestaurantIcon color="action" sx={{ mr: 1 }} />
              <p>
                {deliveryAndDinning
                  ? 'Delivery and Dining Available'
                  : 'Dining Only'}
              </p>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center" mb={2}>
              <DirectionsIcon color="action" sx={{ mr: 1 }} />
              <p>{distance} km away</p>
            </Box>
            <Box display="flex" alignItems="center">
              <Rating value={ratings} readOnly precision={0.5} />
              <p>{ratings.toFixed(1)}</p>
            </Box>
          </Grid>
        </Box>
      </Box>
      <Box className="mt-4 mb-8">
        <TButton
          text="Menu"
          className={{ root: '!bg-[#F1414F] !text-white w-full' }}
          icon={<RestaurantMenuIcon className="text-white" />}
          onClick={() => navigate('/restaurants/1/menu')} // Navigate to Menu
        />
      </Box>
    </Box>
  );
};
