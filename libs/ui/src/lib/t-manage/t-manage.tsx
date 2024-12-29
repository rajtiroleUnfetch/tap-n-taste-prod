import React from 'react';
import styled from 'styled-components';
import TuneIcon from '@mui/icons-material/Tune';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Container, Dialog } from '@mui/material';
import { TFilterPopUp } from '../t-filter-popup';
import { TSortPopUp } from '../t-sort-popup';

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
      <StyledTManage className="flex !bg-[#F1414F]">
        <Button onClick={handleFilterOpen}>
          <TuneIcon style={{ fontSize: '20px' }} />
          Filters
        </Button>
        <Button onClick={handleSortOpen}>
          <SwapVertIcon style={{ fontSize: '20px' }} />
          Sort
        </Button>
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

// Styled Components
const StyledTManage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch; /* Ensures children fill the height */
  background-color: #f1414f;
  border-radius: 15px;
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
