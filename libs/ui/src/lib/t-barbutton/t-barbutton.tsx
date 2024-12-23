import React from 'react';
import styled from 'styled-components';

// Define the CustomButton component with customizable colors and text
const CustomButton = styled.button<{
  borderColor: string;
  bgColor: string;
  textColor: string;
  hoverBgColor: string;
  hoverBorderColor: string;
  hoverTextColor: string;
}>`
  width: 6.5em;
  height: 3em;
  border-radius: 30em;
  font-size: 15px;
  font-family: inherit;
  position: relative;
  overflow: hidden;
  z-index: 1;
  border: 2px solid ${({ borderColor }) => borderColor};
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ hoverBgColor }) => hoverBgColor};
    border-color: ${({ hoverBorderColor }) => hoverBorderColor};
    color: ${({ hoverTextColor }) => hoverTextColor};
  }
`;

// Styling for the TBarButton wrapper
const StyledTBarButton = styled.div`
  color: pink;
`;

interface TBarButtonProps {
  buttonText: string; // Adding a custom text option for the button
}

export function TBarButton({ buttonText }: TBarButtonProps) {
  return (
    <StyledTBarButton>
      <CustomButton
        borderColor="red" // Red border color
        bgColor="white" // White background
        textColor="red" // Red text color
        hoverBgColor="red" // Red background on hover
        hoverBorderColor="red" // Red border on hover
        hoverTextColor="white" // White text on hover
        className="max-sm:text-sm"
      >
        {buttonText} {/* Display custom text */}
      </CustomButton>
    </StyledTBarButton>
  );
}

export default TBarButton;
