import React from 'react';
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
  background-color: #e53935; /* Matches the red background */
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
    background-color: #d32f2f; /* Slightly darker shade for hover */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  }
`;

export function TManage() {
  return (
    <StyledTManage>
      
      <Container>
        <Button>
          <TuneIcon style={{ fontSize: '20px' }} />
          Filters
        </Button>
        <Button>
          <SwapVertIcon style={{ fontSize: '20px' }} />
          Sort
        </Button>
      </Container>
    </StyledTManage>
  );
}

export default TManage;
