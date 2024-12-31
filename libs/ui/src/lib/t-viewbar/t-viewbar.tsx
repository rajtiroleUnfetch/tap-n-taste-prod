import React, { useState } from 'react';
import styled from 'styled-components';

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background-color: white;
  border-bottom: 1px solid #e0e0e0;
`;

const NavItem = styled.div<{ isActive: boolean }>`
  position: relative;
  font-size: 16px; /* Default font size for larger screens */
  font-weight: 600; /* Set font-weight to bold for all tabs */
  color: ${(props) =>
    props.isActive ? '#e53935' : '#4F4F4F'}; /* Custom inactive text color */
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  text-align: center;
  flex-grow: 1;

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
    background-color: ${(props) =>
      props.isActive ? '#F1414F' : 'transparent'};
    transition: background-color 0.2s ease-in-out;
  }

  /* Media query for smaller screens */
  @media (max-width: 600px) {
    font-size: 14px; /* Smaller font size for small screens */
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

export { TViewBar };
