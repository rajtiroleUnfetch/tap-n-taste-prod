import React from 'react';
import styled from 'styled-components';
import TuneIcon from '@mui/icons-material/Tune';
import SwapVertIcon from '@mui/icons-material/SwapVert';

export function TManage() {
  return (
    <StyledTManage>
      <Button>
        <TuneIcon />
        <span>Filters</span>
      </Button>
      <Divider />
      <Button>
        <SwapVertIcon />
        <span>Sort</span>
      </Button>
    </StyledTManage>
  );
}

export default TManage;

// Styled Components
const StyledTManage = styled.div`
  display: flex;
  align-items: stretch; /* Ensures children fill the height */
  background-color: #f94f4f;
  border-radius: 50px;
  overflow: hidden;
  width: fit-content;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: transparent;
  border: none;
  color: white;
  font-size: 10px;
  cursor: pointer;
  padding: 10px 10px; /* Decreased padding for smaller height */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  span {
    font-weight: 300;
  }
`;

const Divider = styled.div`
  width: 2px; /* Increased thickness for bold effect */
  background-color: white;
  opacity: 1; /* Full opacity for bold look */
  margin: 0; /* Removes extra spacing */
`;
