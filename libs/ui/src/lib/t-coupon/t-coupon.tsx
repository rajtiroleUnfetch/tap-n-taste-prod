import React, { useState } from 'react';
import styled from 'styled-components';
import discountImage from './discount.png'; // Adjust the path to your image file

const StyledTCoupon = styled.div<{ isRead: boolean }>`
  background-color: ${(props) => (props.isRead ?   '#FFE7E9': '#C4C4C4')};
  padding: 16px;
  margin: 20px auto; /* Added margin for spacing between components */
  border-radius: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  width: 90%; /* Increased width of the component */
`;

const ImageContainer = styled.div`
  width: 100px; /* Increased width of the image */
  height: 100px; /* Increased height of the image */
  overflow: hidden; /* Ensures the image fits within the container */
  margin-right: 16px; /* Space between the image and the text */
  flex-shrink: 0; /* Prevent image container from shrinking */
  margin-top: 45px;
`;

const TextContainer = styled.div`
  margin-left: 15px; /* Fixed width from the left */
  flex: 1; /* Allow text container to expand */
`;

const MainText = styled.div`
  font-size: 30px;
  margin-bottom: 8px;
  color: black; /* Changed color to black */
`;

const SubText = styled.div`
  font-size: 20px;
  color: black; /* Changed color to black */
`;

const ActionText = styled.div`
  font-size: 20px;
  color: #F1414F;
  font-style: bold;
  margin-right: 40px;
`;

interface TCouponProps {
  mainText: string;
  subText: string;
  category?: 'unread' | 'read'; // Default category 'unread'
}

export function TCoupon({
  mainText,
  subText,
  category = 'unread', // Default category is 'unread'
}: TCouponProps) {
  const [isRead, setIsRead] = useState(category === 'read'); // Set initial state based on category
  const [actionText, setActionText] = useState('Apply'); // Default text is "Apply"

  const handleClick = () => {
    setIsRead(true); // Change the background color
    setActionText('Applied'); // Change text to "Applied"
  };

  return (
    <StyledTCoupon isRead={isRead} onClick={handleClick}>
      <ImageContainer>
        <img src={discountImage} alt="Discount" width="80" height="80" />
      </ImageContainer>
      <TextContainer>
        <MainText>{mainText}</MainText>
        <SubText>{subText}</SubText>
      </TextContainer>
      <ActionText>{actionText}</ActionText>
    </StyledTCoupon>
  );
}

export default TCoupon;
