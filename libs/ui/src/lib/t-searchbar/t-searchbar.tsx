
import React from 'react';
import { Box, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export function TSearchbar() {
  return (
    <Box display="flex" flexDirection="column" maxWidth={361}>
      <TextField
        variant="outlined"
        placeholder="Search Dishes"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{ paddingLeft: 1 }}>
              <SearchIcon sx={{ color: '#f44336' }} />
            </InputAdornment>
          ),
        }}
        sx={{
          backgroundColor: 'white',
          borderRadius: 3,
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
          '& .MuiOutlinedInput-root': {
            paddingLeft: 1.5,
            paddingRight: 1.5,
            '& input': {
              padding: '10px 0px',
            },
            '& fieldset': {
              borderColor: 'transparent', // Remove the border color
              borderRadius: 3,
            },
            '&:hover fieldset': {
              borderColor: 'transparent', // Ensure border is still transparent on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: 'transparent', // Ensure border remains transparent when focused
            },
          },
          '@media (max-width:600px)': {
            paddingLeft: '1px',
            paddingRight: '1px',
            fontSize: '0.9rem',
          },
          '@media (min-width:600px) and (max-width:900px)': {
            paddingLeft: '1.5px',
            paddingRight: '1.5px',
            fontSize: '1rem',
          },
          '@media (min-width:900px)': {
            paddingLeft: '2px',
            paddingRight: '2px',
            fontSize: '1.1rem',
          },
        }}
      />
    </Box>
  );
}

