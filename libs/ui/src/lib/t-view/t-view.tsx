import React from "react";
import styled from "styled-components";

// Styled Components for Button and Wrapper
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Distribute buttons evenly */
  width: 100%; /* Make sure the wrapper takes up the full width */
  margin: 20px 0; /* Margin for spacing above and below */
`;

const Button = styled.div`
  padding: 10px 20px; /* Button size */
  font-size: 16px;
  color: #ff0000; /* Text color - Red */
  background-color: white; /* Background color - White */
  border: 2px solid #ff0000; /* Red border */
  border-radius: 20px; /* Rounded border */
  cursor: pointer;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: #F1414F; /* Red background on hover */
    color: white; /* White text on hover */
    margin: 4px;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    font-size: 10px; /* Smaller font size for smaller screens */
    padding: 8px 16px; /* Smaller padding for smaller screens */
  }
`;

// Styled Component for TView wrapper
const StyledTView = styled.div`
  color: pink;
`;

// Functional Component
export function TView() {
  return (
    <StyledTView>
      <Wrapper>
        <Button>ALL</Button>
        <Button>Starters</Button>
        <Button>Appetizers</Button>
        <Button>Beverages</Button>
      </Wrapper>
    </StyledTView>
  );
}

export default TView;
