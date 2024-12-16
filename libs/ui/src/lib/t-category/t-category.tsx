import React, { useState } from 'react';
import styled from 'styled-components';

// Styled container for the overall TCategory
const StyledTCategory = styled.div`
  color: pink;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

// Container for the toggles
const SliderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 220px;
`;

// Label for each toggle (Non-Veg and Veg)
const Label = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  color: #333;
  cursor: pointer;
`;

// Wrapper for the slider with border styling
const SliderWrapper = styled.div<{ isSelected: boolean }>`
  position: relative;
  width: 60px;
  height: 30px;
  background-color: #f0f0f0;
  border-radius: 15px;
  border: 2px solid ${(props) => (props.isSelected ? '#333' : '#ccc')};
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

// Sliding square dot
const SliderDot = styled.div<{ isActive: boolean; color: string }>`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
  border-radius: 4px;
  position: absolute;
  left: ${(props) => (props.isActive ? '30px' : '5px')};
  transition: left 0.3s ease-in-out;
`;

export function TCategory() {
  const [isVeg, setIsVeg] = useState(true); // Tracks Veg/Non-Veg selection

  return (
    <StyledTCategory>
      <SliderContainer>
        {/* Non-Veg Toggle */}
        <Label onClick={() => setIsVeg(false)}>
          Non-Veg
          <SliderWrapper isSelected={!isVeg}>
            <SliderDot isActive={!isVeg} color="red" />
          </SliderWrapper>
        </Label>

        {/* Veg Toggle */}
        <Label onClick={() => setIsVeg(true)}>
          Veg
          <SliderWrapper isSelected={isVeg}>
            <SliderDot isActive={isVeg} color="green" />
          </SliderWrapper>
        </Label>
      </SliderContainer>
    </StyledTCategory>
  );
}

export default TCategory;
