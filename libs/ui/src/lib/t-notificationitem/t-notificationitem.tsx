import React, { useState } from 'react';
import styled from 'styled-components';

const StyledTNotificationItem = styled.div<{ isRead: boolean }>`
  background-color: ${(props) => (props.isRead ? '#C4C4C4' : '#FFE7E9')};
  padding: 16px;
  margin: 8px auto; /* Center the notification item */
  border-radius: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  width: 90%; /* Take 90% of the screen's width */
`;

const ImageContainer = styled.div`
  width: 60px; /* Increased size of the circular image */
  height: 60px;
  border-radius: 50%; /* Circular shape */
  overflow: hidden; /* Ensures the image stays inside the circle */
  margin-right: 16px; /* Space between the image and the text */
  flex-shrink: 0; /* Prevent image container from shrinking */
  border: 2px solid #F1414F;
`;

const TextContainer = styled.div`
  margin-left: 15px; /* Fixed width from the left */
  flex: 1; /* Allow text container to expand */
`;

const MainText = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  color: black; /* Changed color to black */
`;

const SubText = styled.div`
  font-size: 14px;
  color: black; /* Changed color to black */
`;

const MinutesText = styled.div`
  font-size: 12px;
  color: black; /* Changed color to black */
  font-style: bold;
`;

interface TNotificationItemProps {
  mainText: string;
  subText: string;
  category?: 'unread' | 'read'; // Default category 'unread'
  minutes?: string; // The time to be displayed at the right side
  imageSrc: string; // Image source for the left circular image
}

export function TNotificationItem({
  mainText,
  subText,
  category = 'unread', // Default category is 'unread'
  minutes = '1', // Default minutes text
  imageSrc, // Image source passed as prop
}: TNotificationItemProps) {
  const [isRead, setIsRead] = useState(category === 'read'); // Set initial state based on category
  const [currentCategory, setCurrentCategory] = useState(category);

  const handleClick = () => {
    setIsRead(true); // Change the background color
    setCurrentCategory('read'); // Change category to 'read'
  };

  return (
    <StyledTNotificationItem isRead={isRead} onClick={handleClick}>
      <ImageContainer>
        <img src={imageSrc} alt="notification icon" width="60" height="60" />
      </ImageContainer>
      <TextContainer>
        <MainText>{mainText}</MainText>
        <SubText>{subText}</SubText>
      </TextContainer>
      <MinutesText>{minutes}m ago</MinutesText>
    </StyledTNotificationItem>
  );
}

export default TNotificationItem;
