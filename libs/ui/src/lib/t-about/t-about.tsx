import React from 'react';
import styled from 'styled-components';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import GradeIcon from '@mui/icons-material/Grade';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// Main container for the restaurant card
const RestaurantCard = styled.div`
  background-color: #F5F6F7;
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  color: #a9a9a9;
`;

// Restaurant name and rating
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const CheckCircleIcon = styled(CheckCircleOutlineIcon)`
  color: #A9A9A9;
  font-size: 5px;
`;

const RestaurantName = styled.h1`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  color: #A9A9A9;
`;

const Rating = styled.div`
  background-color: #4caf50;
  color: white;
  padding: 2px 4px;
  border-radius: 40px;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;

  & > svg {
    font-size: 14px;
    margin-right: 4px;
  }
`;

const Details = styled.div`
  font-size: 12px;
  line-height: 1.4;
`;

const Timing = styled.div`
  margin-top: 4px;
  font-size: 12px;
  font-weight: bold;
  color: #A9A9A9;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px; /* Space between text and line */
  margin-top: 12px;
  font-size: 14px;
  font-weight: bold;
  color: #A9A9A9;
  position: relative;

  &::after {
    content: "";
    display: block;
    flex-grow: 1;
    height: 1px;
    background-color: #e0e0e0;
    margin-left: 8px; /* Space between text and line */
  }
`;

const FacilityList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
  font-size: 12px;
`;

const FacilityItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Checkmark = styled.span`
  color: #4caf50;
  font-size: 16px;
`;

const SocialLinks = styled.div`
  margin-top: 8px;
`;

const IconsButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
  gap: 8px;
`;

const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F3EFEF;
  border-radius: 50%;
  padding: 8px;
  font-size: 14px;
  cursor: pointer;
  color: #424242;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  & > svg {
    font-size: 18px;
  }
`;

// Component
export function TAbout({
  restaurantName = "Restaurant Name",
  openingTime = "10:00am",
  closingTime = "11:00pm",
  cuisines = "Chinese | Italian | Cafe",
  address = "Address, address",
  phoneNumber = "Phone Number",
  distance = "2.2km away",
  facilities = [
    "Take away Available",
    "Indoor Seating",
    "Event Booking",
    "Table Booking",
    "Dine In",
    "Home Delivery",
  ],
}) {
  return (
    <RestaurantCard>
      <Header>
        <RestaurantName>{restaurantName}</RestaurantName>
        <Rating><GradeIcon />4.5</Rating>
      </Header>
      <Details>
        {cuisines}
        <br />
        {address}
        <br />
        {phoneNumber}
        <br />
        {distance}
        <Timing>
          Opens at {openingTime} | Closes at {closingTime}
        </Timing>
      </Details>
      <SectionHeader>Facilities</SectionHeader>
      <FacilityList>
        {facilities.map((facility, index) => (
          <FacilityItem key={index}>
            <Checkmark><CheckCircleIcon /></Checkmark> {facility}
          </FacilityItem>
        ))}
      </FacilityList>
      <SectionHeader>Connect with us</SectionHeader>
      <IconsButtonContainer>
        <IconButton>
          <InstagramIcon />
        </IconButton>
        <IconButton>
          <FacebookIcon />
        </IconButton>
        <IconButton>
          <XIcon />
        </IconButton>
      </IconsButtonContainer>
    </RestaurantCard>
  );
}

export default TAbout;
