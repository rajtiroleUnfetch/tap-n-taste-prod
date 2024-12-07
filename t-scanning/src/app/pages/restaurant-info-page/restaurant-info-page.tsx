import { Box, Chip, Grid, Rating, Typography } from '@mui/material';
import { ImageSlider } from '@tap-n-taste/ui';
import { TButton } from '@tap-n-taste/ui';
import { sliderImages } from '../../constants/LandingPageData';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import DirectionsIcon from '@mui/icons-material/Directions';
import AssistantDirectionOutlinedIcon from '@mui/icons-material/AssistantDirectionOutlined';
import CallIcon from '@mui/icons-material/Call';

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
  return (
    <Box>
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
        <Box className="header flex justify-between items-center">
          <Box>
            <h1 className="text-3xl sm:text-4xl font-semibold">
              {restaurantName}
            </h1>
            <p className="text-[#8E8E8E] mb-5">{restaurantDesc}</p>
          </Box>
          <Box>
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
        <Box className="sm:flex sm:justify-between">
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center" mb={2}>
              <LocationOnIcon color="action" sx={{ mr: 1 }} />
              <p className="">{restaurantAddress}</p>
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
      </Box> */}
    </Box>
  );
};
