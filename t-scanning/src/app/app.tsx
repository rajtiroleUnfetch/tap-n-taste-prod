
import React from "react";
import { Box, Typography } from "@mui/material";
import { TButton, TSearchbar, TNavButton, TFooter,TBarButton,TViewBar,TManage, ImageSlider} from '@tap-n-taste/ui';

import LocalDiningIcon from "@mui/icons-material/LocalDining";
import EastIcon from "@mui/icons-material/East";
import DirectionsOutlinedIcon from "@mui/icons-material/DirectionsOutlined";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

import CallOutlinedIcon from "@mui/icons-material/CallOutlined";

import { TCard } from '@tap-n-taste/ui';
import { cardData} from './constants/LandingPageData';
import "./style.css";

const App = () => {
  const handleRedSliderToggle = (isRight: boolean) => {
    console.log("Red Slider:", isRight ? "Right" : "Left");
  };

  const handleGreenSliderToggle = (isRight: boolean) => {
    console.log("Green Slider:", isRight ? "Right" : "Left");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      {/* TNavButton at the top-center */}
      <Box display="flex" justifyContent="center" mb={3}>
        <TNavButton
          icon={
            <DirectionsOutlinedIcon
              sx={{
                color: "#3366CC",
                stroke: "#81D4FA",
                strokeWidth: 0.5,
              }}
            />
          }
          onClick={() => alert("Directions button clicked!")}
        />
      </Box>

      {/* Welcome Message */}
      <h1>Welcome to Tap-n-Taste</h1>
      <br />

      {/* Render the TSearchBar Component */}
      <TSearchbar />

      {/* IMAGE SLIDER */}

      <Box className="flex flex-row gap-10 overflow-x-auto no-scrollbar mt-10">
        <ImageSlider/>
      </Box>


      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <Box display="flex" flexDirection="column" gap={2} alignItems="center">
          <TNavButton
            icon={
              <DirectionsOutlinedIcon
                sx={{
                  color: "#3366CC",
                  stroke: "#81D4FA",
                  strokeWidth: 0.5,
                }}
              />
            }
            onClick={() => alert("Directions button clicked!")}
          />

          <TNavButton
            icon={
              <CallOutlinedIcon
                sx={{
                  color: "#3366CC",
                  stroke: "#81D4FA",
                  strokeWidth: 0.5,
                }}
              />
            }
            onClick={() => alert("Call button clicked!")}
          />
        </Box>
      </div>

      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <Box display="flex" flexDirection="column" gap={2}>
          <TButton
            text="Menu"
            onClick={() => alert("Menu clicked!")}
            icon={<LocalDiningIcon style={{ color: "red" }} />}
            iconPosition="left"
            marginLeftRight="16px"
          />
          <TButton
            text="Submit Review"
            icon={<EastIcon style={{ color: "white", fontSize: "24px" }} />}
            iconPosition="right"
            onClick={() => alert("Review Submitted!")}
            marginLeftRight="16px"
          />
        </Box>
      </div>
      <br />
      <TFooter />
      <div className="flex gap-4 justify-center items-center">
        <TBarButton buttonText="ALL" />
        <TBarButton buttonText="STARTERS" />
        <TBarButton buttonText="APPETIZERS" />
        <TBarButton buttonText="BEVERAGES" />
      </div>
      <br />
      
        
      <TViewBar></TViewBar>
      <br></br>
      <TManage></TManage>

<br></br>

<TButton
  text="Contact us"
  onClick={() => alert("Contact us clicked!")}
  icon={<PhoneInTalkIcon style={{ color: "black !important" }} />}  // Corrected color usage
  iconPosition="left"
  marginLeftRight="16px"

/>

{/* OFFERS SECTION */}
  <Box className="flex flex-row gap-10 overflow-x-auto no-scrollbar mt-10">
  {cardData.map((card, index) => (
    <TCard
      key={index}
      imgURL={card.imgURL}
      primeText={card.primeText}
      secText={card.secText}
    />
  ))}
</Box>
    </div>

    
  );
};

export default App;
