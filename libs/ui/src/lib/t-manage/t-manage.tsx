import React from 'react';
import styled from 'styled-components';
import TuneIcon from '@mui/icons-material/Tune';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Dialog } from '@mui/material';
import { TFilterPopUp } from '../t-filter-popup';
import { TSortPopUp } from '../t-sort-popup';

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

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function TManage() {
  const [openFilter, setOpenFilter] = React.useState(false);
  const [openSort, setOpenSort] = React.useState(false);

  const handleFilterOpen = () => setOpenFilter(true);
  const handleFilterClose = () => setOpenFilter(false);

  const handleSortOpen = () => setOpenSort(true);
  const handleSortClose = () => setOpenSort(false);

  return (
    <>
      <StyledTManage>
        <Container>
          <Button onClick={handleFilterOpen}>
            <TuneIcon style={{ fontSize: '20px' }} />
            Filters
          </Button>
          <Button onClick={handleSortOpen}>
            <SwapVertIcon style={{ fontSize: '20px' }} />
            Sort
          </Button>
        </Container>
      </StyledTManage>
      {/* Filter Dialog */}
      <Dialog
        open={openFilter}
        TransitionComponent={Transition}
        onClose={handleFilterClose}
        className="rounded-2xl"
      >
        <TFilterPopUp />
      </Dialog>

      {/* Sort Dialog */}
      <Dialog
        open={openSort}
        TransitionComponent={Transition}
        onClose={handleSortClose}
        className="rounded-2xl"
      >
        <TSortPopUp />
      </Dialog>
    </>
  );
}

export default TManage;
