import styled from 'styled-components';
import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarRateIcon from '@mui/icons-material/StarRate';
import Slider from '@mui/material/Slider';

const StyledTFilterPopUp = styled.div`
  color: pink;
`;

function valuetext(value: number) {
  return `${value}`;
}

export function TFilterPopUp() {
  const [sliderValue, setSliderValue] = useState(200);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setSliderValue(newValue as number); // Update slider value state
  };

  return (
    <Box className="border font-primary rounded-2xl">
      <header className="bg-white flex justify-between rounded-t-2xl px-6 py-4 cursor-pointer">
        <h1 className="text-2xl">Filter</h1>
        <ExpandMoreIcon />
      </header>
      <Box className="p-3 bg-zinc-100">
        <Box className="bg-white rounded-xl">
          <Box className="p-3">
            {/* Dynamic label */}
            <h1>{`Price Range: ${sliderValue}`}</h1>
            {/* Slider */}
            <Slider
              aria-label="Temperature"
              value={sliderValue}
              onChange={handleSliderChange}
              getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              step={100}
              marks
              min={0}
              max={500}
              sx={{
                color: '#F1414F', // Customizing slider's color to red
              }}
            />
          </Box>
          <Box className="p-3">
            <h1>Rating</h1>
            <Box className="flex mt-2 gap-4">
              <Button
                className="flex items-center justify-center gap-2"
                variant="outlined"
                color="error"
              >
                <StarRateIcon className="text-primary" />
                <h3 className="text-xs">Rating 3.0+</h3>
              </Button>
              <Button
                className="flex items-center justify-center"
                variant="outlined"
                color="error"
              >
                <StarRateIcon className="text-primary" />
                <h3 className="text-xs">Rating 3.0+</h3>
              </Button>
            </Box>
          </Box>
          <Box className="p-3">
            <h1>Quantity</h1>
            <Box className="flex mt-2 gap-2 sm:gap-4">
              <Button variant="outlined" color="error">
                <h3 className="text-xs sm:text-sm"> Server 1-2</h3>
              </Button>
              <Button variant="outlined" color="error">
                <h3 className="text-xs sm:text-sm"> Server 2-3</h3>
              </Button>
              <Button variant="outlined" color="error">
                <h3 className="text-xs sm:text-sm"> Server 3+</h3>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default TFilterPopUp;
