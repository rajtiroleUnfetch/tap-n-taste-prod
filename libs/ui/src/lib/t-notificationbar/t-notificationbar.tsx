import React, { useState } from 'react';
import styled from 'styled-components';

// Exporting the component at the top
export const TNotificationBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <NotificationBar>
      <TabButton
        active={activeTab === 'all'}
        onClick={() => setActiveTab('all')}
      >
        All
      </TabButton>
      <TabButton
        active={activeTab === 'unread'}
        onClick={() => setActiveTab('unread')}
      >
        Unread
      </TabButton>
      <TabButton
        active={activeTab === 'read'}
        onClick={() => setActiveTab('read')}
      >
        Read
      </TabButton>
    </NotificationBar>
  );
};

// Styled components for the notification bar
const NotificationBar = styled.div`
  display: flex;
justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 10px;
  margin-left: 45px; 
`;

// Define a TypeScript interface for props
interface TabButtonProps {
  active: boolean;
}

// Pass the props to the styled button
const TabButton = styled.button<TabButtonProps>`
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? '#F1414F' : '#DCDCDC')};
  color:#FFFFFF;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${(props) => (props.active ? '#F1414F' : '#BDBDBD')};
  }
`;
