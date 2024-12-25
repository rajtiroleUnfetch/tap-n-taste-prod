/* eslint-disable @typescript-eslint/no-var-requires */
const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname), // Make sure to include your dependency glob patterns
  ],
  theme: {
    extend: {
      screens: {
        'md-lg': { min: '1024px', max: '1440px' }, // Custom range for medium to large screens
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'], // Add Poppins as the default sans-serif font
      },
      colors: {
        // Define colors for primary, secondary, tertiary (light red), black, white, and gray
        primary: '#F1414F', // Red as primary
        secondary: '#000000', // White as secondary
        tertiary: '#FF8A80', // Light red as tertiary
        black: '#000000', // Black color
        white: '#FFFFFF', // White color (for font and background)
        gray: '#9e9e9e', // Gray for text and backgrounds

        // Define text colors
        text: {
          primary: '#000000', // Black font for primary text
          secondary: '#FFFFFF', // White font for secondary text
          disabled: '#9e9e9e', // Gray for disabled text
        },

        // Define background colors
        background: {
          default: '#FFFFFF', // White background for default
          paper: '#FFFFFF', // White background for paper elements
        },

        // Define action state colors
        action: {
          hover: '#e0e0e0', // Light gray for hover states
          selected: '#d3d3d3', // Lighter gray for selected states
          disabled: '#e0e0e0', // Light gray for disabled action states
        },
      },
    },
  },
  plugins: [],
};
