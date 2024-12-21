import React from "react";
import styled from "styled-components";
import { IoHomeOutline, IoCartOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { TNavButton } from "@tap-n-taste/ui";
import LocalDiningIcon from "@mui/icons-material/LocalDining";

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

        <StyledTNavButton
          icon={<LocalDiningIcon sx={{ color: "#f1f1f1" }} />}
          onClick={() => alert("Button clicked!")}
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
  background-color: #f1f1f1;
  border-radius: 20px;
  padding: 20px 0;
  height: 100px;
  margin-bottom: 5px;
`;

const StyledTNavButton = styled(TNavButton)`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: red;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  padding: 10px 0;
  margin-bottom: 100px;
  width: 100%;
  margin: 20px auto 0;
  position: relative;
  height: 80px;
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
