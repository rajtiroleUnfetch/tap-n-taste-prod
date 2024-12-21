import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa6";
import TCounter from "../t-counter/t-counter";

const CardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 16px;
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #424242;
`;

const Description = styled.div`
  font-size: 14px;
  color: #757575;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const RatingIcon = styled(FaStar)`
  color: #4caf50;
`;

const RatingText = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #4caf50;
`;

const PriceContainer = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #424242;
  align-self: flex-start;
  margin-right: auto;
`;

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 8px;
`;

const AddButton = styled.button`
  padding: 8px 16px;
  background-color: #e53935;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #d32f2f;
  }

  &:focus {
    outline: none;
  }
`;

const StyledTCustomCard = styled.div`
  color: pink;
`;

export function TCustomCard({ image, title, description, rating, price }:any) {
  return (
    <StyledTCustomCard>
      <CardContainer>
        <Image src={image} alt={title} />
        <InfoContainer>
          <Title>{title}</Title>
          <Description>{description}</Description>

          <ActionContainer>
            <RatingContainer>
              <RatingIcon />
              <RatingText>{rating}</RatingText>
            </RatingContainer>
            <TCounter />
            <AddButton>ADD</AddButton>
          </ActionContainer>
        </InfoContainer>
        <PriceContainer>₹{price}</PriceContainer>
      </CardContainer>
    </StyledTCustomCard>
  );
}

export default TCustomCard;
