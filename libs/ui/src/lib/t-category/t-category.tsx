import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SliderWrapper = styled.div`
  width: 60px; /* Match slider width */
  height: 30px; /* Match slider height */
  border: 2px solid #d3d3d3; /* Light gray border for outer wrapper */
  border-radius: 25px; /* Fully rounded corners */
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f9f9f9; /* Slightly off-white background */
  position: relative;
  padding: 2px; /* Ensure padding for proper alignment */
`;

const SliderCircle = styled.div<{ position: "left" | "right"; color: string }>`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
  border: 2px solid ${(props) => props.color};
  border-radius: 50%; /* Circle shape */
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.position === "left" ? "left: 5px;" : "right: 5px;")}
`;

const Label = styled.div`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 6px;
`;

// Functional Component
function TCategory() {
  const [isNonVegActive, setNonVegActive] = useState(false);
  const [isVegActive, setVegActive] = useState(false);

  const handleNonVegClick = () => {
    setNonVegActive(!isNonVegActive);
    console.log("Non-Veg slider toggled");
  };

  const handleVegClick = () => {
    setVegActive(!isVegActive);
    console.log("Veg slider toggled");
  };

  return (
<<<<<<< HEAD
    <StyledTCategory>
      <SliderContainer>
        {/* Non-Veg Toggle */}
        <Label onClick={() => setIsVeg(false)}>
          Non-Veg
          <SliderWrapper isSelected={!isVeg}>
            <SliderDot isActive={!isVeg} color="red" />
          </SliderWrapper>
        </Label>
=======
    <Wrapper>
      {/* Non-Veg Slider */}
      <ButtonContainer>
        <Label>Non-Veg</Label>
        <SliderWrapper onClick={handleNonVegClick}>
          <SliderCircle
            color="red"
            position={isNonVegActive ? "right" : "left"}
          />
        </SliderWrapper>
      </ButtonContainer>
>>>>>>> origin/filtersort-branch

      {/* Veg Slider */}
      <ButtonContainer>
        <Label>Veg</Label>
        <SliderWrapper onClick={handleVegClick}>
          <SliderCircle
            color="green"
            position={isVegActive ? "right" : "left"}
          />
        </SliderWrapper>
      </ButtonContainer>
    </Wrapper>
  );
}

export default TCategory;