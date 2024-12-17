import React, { useState } from 'react';
import styled from 'styled-components';
import TuneIcon from '@mui/icons-material/Tune';
import SwapVertIcon from '@mui/icons-material/SwapVert';

const StyledTManage = styled.div`
  color: pink;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: #e53935;
  color: white;
  border: none;
  border-radius: 24px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 500;

  &:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  &:hover {
    background-color: #d32f2f;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  }
`;

const StyledTFilterPopUp = styled.div`
  position: absolute;
  top: 100px; /* Adjust the position as needed */
  left: 50%;
  transform: translateX(-50%);
  padding: 16px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 100;
`;

export function TManage() {
  const [showFilterPopup, setShowFilterPopup] = useState(false);

  const toggleFilterPopup = () => {
    setShowFilterPopup((prev) => !prev);
  };

  return (
    <StyledTManage>
      <Container>
        <Button onClick={toggleFilterPopup}>
          <TuneIcon style={{ fontSize: '20px' }} />
          Filters
        </Button>
        <Button>
          <SwapVertIcon style={{ fontSize: '20px' }} />
          Sort
        </Button>
      </Container>

      {showFilterPopup && (
        <StyledTFilterPopUp>
          <h1>Filter Options</h1>
          <button onClick={toggleFilterPopup}>Close</button>
        </StyledTFilterPopUp>
      )}
    </StyledTManage>
  );
}

export default TManage;
