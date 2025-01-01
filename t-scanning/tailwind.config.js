// apps/t-scanning/tailwind.config.js

/* eslint-disable @typescript-eslint/no-var-requires */
const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      screens: {
        'md-lg': { min: '1024px', max: '1440px' }, // Custom range
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'], // Add Poppins as the default sans font
      },
      colors: {
        primary: '#F1414F', // Your main red color
        mild: '#F3F3F3',
      },
    },
  },
  plugins: [],
};
