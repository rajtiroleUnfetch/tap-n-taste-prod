import styled from 'styled-components';
import { IoHomeOutline, IoCartOutline } from 'react-icons/io5';
import { TbTruckDelivery } from 'react-icons/tb';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { TNavButton } from '@tap-n-taste/ui';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import { Box } from '@mui/material';

export function TFooter() {
  return (
    <Box className="fixed z-[999] sm:hidden w-[85%] bg-white rounded-lg bottom-0 flex items-center justify-between p-4">
      <Button>
        <IoHomeOutline />
      </Button>
      <Button>
        <TbTruckDelivery />
      </Button>
      <StyledTNavButton
        icon={<LocalDiningIcon sx={{ color: '#f1f1f1' }} />}
        onClick={() => alert('Button clicked!')}
        backgroundColor="red"
      />
      <Button>
        <IoCartOutline />
      </Button>
      <Button>
        <PermIdentityIcon />
      </Button>
    </Box>
  );
}

const StyledTNavButton = styled(TNavButton)`
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: red;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: black;
    font-size: 22px;
    transition: color 0.3s ease;

    &:hover {
      color: red;
    }
  }
`;
