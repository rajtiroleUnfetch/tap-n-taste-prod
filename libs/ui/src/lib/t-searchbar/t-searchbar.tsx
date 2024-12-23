import { Box, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import clsx from 'clsx';

interface TSearchbarProps {
  placeholder?: string; // Placeholder text for the search bar
  value?: string; // Controlled value for the search input
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Change handler
  onSearchIconClick?: () => void; // Click handler for the search icon
  className?: {
    root?: string; // Root container class
    textField?: string; // TextField class
    inputAdornment?: string; // InputAdornment class
    searchIcon?: string; // Search icon class
  };
  styles?: React.CSSProperties; // Inline styles for the root box
  InputProps?: object; // Additional props for MUI's `InputProps`
  [rest: string]: any; // Additional props for the root container
}

export const TSearchbar: React.FC<TSearchbarProps> = ({
  placeholder = 'Search Dishes',
  value,
  onChange,
  onSearchIconClick,
  className = {},
  styles,
  InputProps = {},
  ...rest
}) => {
  const {
    root = '',
    textField = '',
    inputAdornment = '',
    searchIcon = '',
  } = className;

  return (
    <Box
      className={clsx('py-8', root)} // Root container with custom class
      style={{ ...styles, width: '100%' }} // Updated width
      sx={{
        margin: '0 auto', // Center the search bar
      }}
      {...rest} // Additional props
    >
      <TextField
        variant="outlined"
        placeholder={placeholder}
        fullWidth
        value={value}
        onChange={onChange}
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
              className={clsx(inputAdornment)} // Custom InputAdornment class
              sx={{ paddingLeft: 1, paddingY: 3 }}
            >
              <SearchIcon
                onClick={onSearchIconClick}
                className={clsx('cursor-pointer', searchIcon)} // Custom SearchIcon class
                sx={{ color: '#F1414F' }} // Icon color
              />
            </InputAdornment>
          ),
          ...InputProps, // Merge additional InputProps
        }}
        className={clsx(textField)} // Custom TextField class
        sx={{
          backgroundColor: 'white',
          borderRadius: 3,
          boxShadow: '0px 4px 12px #B9B5B5', // Box shadow color
          '& .MuiOutlinedInput-root': {
            paddingLeft: 1.5,
            paddingRight: 1.5,
            '& input': {
              padding: '10px 0px',
              color: '#757575', // Text color
            },
            '& input::placeholder': {
              color: '#757575', // Placeholder text color
              opacity: 1, // Ensure the placeholder is fully visible
            },
            '& fieldset': {
              borderColor: 'transparent',
              borderRadius: 3,
            },
            '&:hover fieldset': {
              borderColor: 'transparent',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'transparent',
            },
          },
        }}
      />
    </Box>
  );
};

export default TSearchbar;
