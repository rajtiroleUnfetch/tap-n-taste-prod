import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F1414F', // Primary color: Red
      contrastText: '#000000', // Text on primary color: Black for readability
    },
    secondary: {
      main: '#F1414F', // Secondary color: Light Red
      contrastText: '#FFFFFF', // Text on secondary color: White for readability
    },
    text: {
      primary: '#000000', // Black for normal text
      secondary: '#FFFFFF', // White for selected text
      disabled: '#9e9e9e', // Disabled text (gray)
    },
    background: {
      default: '#FFFFFF', // White for background
      paper: '#FFFFFF', // White background for paper elements
    },
    action: {
      hover: '#e0e0e0', // Gray for hover/active states
      selected: '#d3d3d3', // Lighter gray for selected states
      disabled: '#e0e0e0', // Disabled action states
    },
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif', // Default to Poppins
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.2,
      color: '#000', // Black for h1
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.3,
      color: '#000', // Black for h2
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 400,
      lineHeight: 1.4,
      color: '#000', // Black for h3
    },
    body1: {
      fontSize: '1rem',
      color: '#000', // Black for body text
    },
    body2: {
      fontSize: '0.875rem',
      color: '#000', // Black for smaller body text
    },
    button: {
      fontSize: '1rem',
      fontWeight: 600,
      textTransform: 'none', // Prevent uppercase for buttons
    },
    caption: {
      fontSize: '0.75rem',
      color: '#9e9e9e', // Disabled text (gray)
    },
  },
  spacing: 8, // MUI spacing unit, 1 unit = 8px
  shape: {
    borderRadius: 4, // Standard border-radius for components
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: 'Poppins, Arial, sans-serif', // Ensure Poppins for all HTML tags
          margin: 0,
          padding: 0,
        },
        '*': {
          fontFamily: 'Poppins, Arial, sans-serif', // Apply font to all elements
        },
        'h1, h2, h3, h4, h5, h6, p, span': {
          fontFamily: 'Poppins, Arial, sans-serif', // Explicitly set for common text elements
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Rounded corners for buttons
          padding: '8px 16px', // Standard padding for buttons
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16, // Rounded corners for cards
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Card shadow
          padding: '16px', // Padding inside cards
        },
      },
    },
  },
});

export default theme;
