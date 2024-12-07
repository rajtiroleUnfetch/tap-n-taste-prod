// apps/t-scanning/tailwind.config.js

/* eslint-disable @typescript-eslint/no-var-requires */
const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      screens: {
        'md-lg': { min: '1024px', max: '1440px' }, // Custom range
      },
    },
  },
  plugins: [],
};
