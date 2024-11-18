
// import React from 'react';
// import styles from './app.module.css';
// import NxWelcome from './nx-welcome';
// import { TButton, TSearchbar } from '@tap-n-taste/ui';

// import LocalDiningIcon from '@mui/icons-material/LocalDining';
// import EastIcon from '@mui/icons-material/East';
// import { Box } from '@mui/material';

// function App() {
//   return (
//     <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
//       {/* NxWelcome Component */}
//       <NxWelcome title="tap-n-taste" />

//       {/* Render the TSearchBar Component */}
//       <TSearchbar />

//       <div style={{ marginTop: '20px', textAlign: 'center' }}>
//         {/* Render a simple TButton */}
//         {/* <TButton
//           text="Click Me"
//           icon="https://example.com/icon.png" // Replace with an actual icon URL
//           onClick={() => alert('TButton clicked!')}
//           iconPosition="left"
//           marginLeftRight="16px"
//         /> */}
//       </div>

//       <div style={{ marginTop: '40px', textAlign: 'center' }}>
//         {/* Render additional TButton components */}
//         <Box display="flex" flexDirection="column" gap={2}>
//           <TButton
//             text="Menu"
//             onClick={() => alert('Menu clicked!')}
//             icon={<LocalDiningIcon style={{ color: 'red' }} />}
//             iconPosition="left"
//             marginLeftRight="16px"
//           />
//           <TButton
//             text="Submit Review"
//             icon={<EastIcon style={{ color: 'white', fontSize: '24px' }} />}
//             iconPosition="right"
//             onClick={() => alert('Review Submitted!')}
//             marginLeftRight="16px"
//           />
//         </Box>
//       </div>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { TButton, TSearchbar, TNavButton } from '@tap-n-taste/ui';

import LocalDiningIcon from '@mui/icons-material/LocalDining';
import EastIcon from '@mui/icons-material/East';
import DirectionsOutlinedIcon from '@mui/icons-material/DirectionsOutlined'; // Import the outlined version of the icon
import CallOutlinedIcon from '@mui/icons-material/CallOutlined'; // Import CallOutlinedIcon
import { Box } from '@mui/material';

function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      {/* NxWelcome Component */}
      <NxWelcome title="tap-n-taste" />

      {/* Render the TSearchBar Component */}
      <TSearchbar />

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        {/* Flex column layout for TNavButton components */}
        <Box display="flex" flexDirection="column" gap={2} alignItems="center">
          {/* TNavButton with DirectionsOutlinedIcon */}
          <TNavButton
            icon={
              <DirectionsOutlinedIcon
                sx={{
                  color: '#3366CC', // Light blue color
                  stroke: '#81D4FA', // Apply stroke color
                  strokeWidth: 0.5, // Slightly thicker outline
                }}
              />
            }
            onClick={() => alert('Directions button clicked!')}
          />

          {/* TNavButton with CallOutlinedIcon */}
          <TNavButton
            icon={
              <CallOutlinedIcon
                sx={{
                  color: '#3366CC', // Light blue color
                  stroke: '#81D4FA', // Apply stroke color
                  strokeWidth: 0.5, // Slightly thicker outline
                }}
              />
            }
            onClick={() => alert('Call button clicked!')}
          />
        </Box>
      </div>

      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        {/* Render additional TButton components */}
        <Box display="flex" flexDirection="column" gap={2}>
          <TButton
            text="Menu"
            onClick={() => alert('Menu clicked!')}
            icon={<LocalDiningIcon style={{ color: 'red' }} />}
            iconPosition="left"
            marginLeftRight="16px"
          />
          <TButton
            text="Submit Review"
            icon={<EastIcon style={{ color: 'white', fontSize: '24px' }} />}
            iconPosition="right"
            onClick={() => alert('Review Submitted!')}
            marginLeftRight="16px"
          />
        </Box>
      </div>
    </div>
  );
}

export default App;
