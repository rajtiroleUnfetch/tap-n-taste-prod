import React from 'react';
import { Button, IconButton, Typography } from '@mui/material';
import clsx from 'clsx';

interface TButtonProps {
  icon?: React.ReactNode | string; // Icon as a node or URL string
  text: string; // Button text
  onClick?: () => void; // Click handler
  iconPosition?: 'left' | 'right'; // Icon position relative to text
  className?: {
    root?: string; // Root button class
    iconButton?: string; // IconButton class
    text?: string; // Typography class for the text
    iconImage?: string; // Class for image if icon is a URL
  };
  styles?: React.CSSProperties; // Inline styles for the root button
  [rest: string]: any; // Additional props for the Button component
}

export const TButton: React.FC<TButtonProps> = ({
  icon,
  text,
  onClick,
  iconPosition = 'left',
  className = {},
  styles,
  ...rest
}) => {
  const {
    root = '',
    iconButton = '',
    text: textClass = '',
    iconImage = '',
  } = className;

  return (
    <Button
      onClick={onClick}
      className={clsx('bg-white', root)}
      style={{ ...styles }} // Ensure Poppins is applied to the button
      {...rest} // Additional props
    >
      {/* Render Icon on the left if position is left */}
      {icon && iconPosition === 'left' && (
        <IconButton
          className={clsx(
            'p-0 text-white flex items-center justify-center',
            iconButton // Custom IconButton class
          )}
          sx={{ fontFamily: 'Poppins' }} // Font applied for the icon
          disableRipple // Remove extra ripple for cleaner UI
        >
          {typeof icon === 'string' ? (
            <img
              src={icon}
              alt="icon"
              className={clsx('w-5 h-5', iconImage)} // Custom image class
            />
          ) : (
            icon // Render custom ReactNode icon
          )}
        </IconButton>
      )}

      {/* Render Text */}
      <h1
        className={clsx(
          'text-base font-medium', // Default Tailwind styling
          textClass // Custom text class
        )}
      >
        {text}
      </h1>

      {/* Render Icon on the right if position is right */}
      {icon && iconPosition === 'right' && (
        <IconButton
          className={clsx(
            'p-0 text-white flex items-center justify-center',
            iconButton // Custom IconButton class
          )}
          sx={{ fontFamily: 'Poppins' }} // Font applied for the icon
          disableRipple // Remove extra ripple for cleaner UI
        >
          {typeof icon === 'string' ? (
            <img
              src={icon}
              alt="icon"
              className={clsx('w-5 h-5', iconImage)} // Custom image class
            />
          ) : (
            icon // Render custom ReactNode icon
          )}
        </IconButton>
      )}
    </Button>
  );
};

export default TButton;
