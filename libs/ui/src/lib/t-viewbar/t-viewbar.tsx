import React, { useState } from 'react';
import styled from 'styled-components';

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
  padding: 8px 16px;
  background-color: white;
  border-bottom: 1px solid #e0e0e0;
`;

const NavItem = styled.div<{ isActive: boolean }>`
  position: relative;
  font-size: 16px;
  font-weight: ${(props) => (props.isActive ? '500' : '400')};
  color: ${(props) => (props.isActive ? '#e53935' : '#424242')};
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #e53935;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: ${(props) => (props.isActive ? '#e53935' : 'transparent')};
    transition: background-color 0.2s ease-in-out;
  }
`;

const TViewBar = () => {
  const [activeTab, setActiveTab] = useState('Offers');

  const tabs = ['Offers', 'Photos', 'Reviews', 'About', 'Events'];

  return (
    <NavContainer>
      {tabs.map((tab) => (
        <NavItem
          key={tab}
          isActive={activeTab === tab}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </NavItem>
      ))}
    </NavContainer>
  );
};

// Exporting TViewBar
export { TViewBar };
