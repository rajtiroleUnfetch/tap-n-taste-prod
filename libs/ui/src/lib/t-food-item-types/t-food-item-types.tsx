import { Box } from '@mui/material';
import styled from 'styled-components';
import { TBarButton } from '../t-barbutton';

const StyledTFoodItemTypes = styled.div`
  color: pink;
`;
export function TFoodItemTypes() {
  return (
    <Box className="flex flex-start w-full mt-6 mb-6 sm:gap-6 gap-2">
      {['All', 'Starters', 'Appetizers', 'Beverages'].map((item, index) => (
        <Box key={index}>
          <TBarButton buttonText={item} />
        </Box>
      ))}
    </Box>
  );
}

export default TFoodItemTypes;
