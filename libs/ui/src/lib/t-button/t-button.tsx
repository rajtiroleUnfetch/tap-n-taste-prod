import React from 'react';
import styled from 'styled-components';

const StyledTButton = styled.button`
  background-color: #f44336;
  color: #fff;
  font-size: 1rem;
  padding: 10px 16px;
  border-radius: 8px;
  max-width: 400px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  // Responsive styles
  @media (max-width: 600px) {
    padding: 8px 12px;
    font-size: 0.8rem;
  }

  @media (min-width: 600px) and (max-width: 960px) {
    padding: 10px 16px;
    font-size: 1rem;
  }

  @media (min-width: 960px) {
    padding: 12px 20px;
    font-size: 1.2rem;
  }
`;

interface TButtonProps {
  icon?: React.ReactNode | string;
  text: string;
  onClick?: () => void;
  iconPosition?: 'left' | 'right';
  marginLeftRight?: string;
}

export function TButton({
  icon,
  text,
  onClick,
  iconPosition = 'left',
  marginLeftRight = '16px',
}: TButtonProps) {
  return (
    <StyledTButton
      onClick={onClick}
      style={{
        marginLeft: marginLeftRight,
        marginRight: marginLeftRight,
      }}
    >
      {icon && iconPosition === 'left' && (
        <span style={{ marginRight: '8px', display: 'flex', alignItems: 'center' }}>
          {typeof icon === 'string' ? (
            <img src={icon} alt="" style={{ width: '20px', height: '20px', filter: 'invert(1)' }} />
          ) : (
            React.cloneElement(icon as React.ReactElement, { style: { color: 'white' } })
          )}
        </span>
      )}
      {text}
      {icon && iconPosition === 'right' && (
        <span style={{ marginLeft: '8px', display: 'flex', alignItems: 'center' }}>
          {typeof icon === 'string' ? (
            <img src={icon} alt="" style={{ width: '20px', height: '20px', filter: 'invert(1)' }} />
          ) : (
            React.cloneElement(icon as React.ReactElement, { style: { color: 'white' } })
          )}
        </span>
      )}
    </StyledTButton>
  );
}

export default TButton;

