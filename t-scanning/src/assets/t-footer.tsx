import styled from 'styled-components';
import { IoHomeOutline, IoCartOutline } from 'react-icons/io5';
import { TbTruckDelivery } from 'react-icons/tb';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { TNavButton } from '@tap-n-taste/ui';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

export function TFooter() {
  return (
    <Wrapper>
      <Footer>
        <Button>
          <IoHomeOutline />
        </Button>
        <Button>
          <TbTruckDelivery />
        </Button>

        {/* Custom styled TNavButton */}
        <StyledTNavButton
          icon={<LocalDiningIcon sx={{ color: '#FFFFFF' }} />}
          onClick={() => alert('Button clicked!')}
          backgroundColor="red"
        />

        <Button>
          <IoCartOutline />
        </Button>
        <Button>
          <PermIdentityIcon />
        </Button>
      </Footer>
    </Wrapper>
  );
}

// Wrapper div to set background color
const Wrapper = styled.div`
  background-color: #f3edec; /* Set the gray background */
  border-radius: 20px;
  padding: 20px 0;
  height: 150px; /* Add some padding around the footer */
`;

const StyledTNavButton = styled(TNavButton)`
  position: absolute; /* Absolute positioning */
  top: -60px; /* Move the button upwards by 60px */
  left: 50%; /* Center the button horizontally */
  transform: translateX(-50%); /* Center it exactly */
  z-index: 999; /* Ensure it appears above other elements */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Add shadow */
  background-color: red; /* Adding a background to test visibility */
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  padding: 10px 0;
  width: 100%; /* Increase width */
  margin: 20px auto 0; /* Add margin-top to increase space from top */
  position: relative; /* Required for absolute positioning of child elements */
  height: 120px; /* Ensure enough height to allow movement */
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
    font-size: 24px;
    transition: color 0.3s ease;

    &:hover {
      color: red;
    }
  }
`;
