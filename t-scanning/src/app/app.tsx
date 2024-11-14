// src/App.tsx
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Container, Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Libs } from '@tap-n-taste/libs';
import { TMainLayout } from '@tap-n-taste/ui';
import {Assets } from '@tap-n-taste/assets';
import { Features} from '@tap-n-taste/features';
import {Hooks } from '@tap-n-taste/hooks';
import { Services} from '@tap-n-taste/services';
import { State } from '@tap-n-taste/state';
import {Theme } from '@tap-n-taste/theme';
import { Utils } from '@tap-n-taste/utils';
import './style.css'
import { LandingPage } from './pages/landing-page/landing-page'

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
  },
});



const About = () => (
  <div>
    <h1>About</h1>
    <p>This is the About Page.</p>
  </div>
);

const NotFound = () => (
  <div>
    <h1>404 - Page Not Found</h1>
    <p>Oops! The page you are looking for does not exist.</p>
    <Link to="/">Go back to Home</Link>
  </div>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <TMainLayout>
          
            {/* Define Routes */}
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/restaurants/:id" element={<LandingPage />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            </TMainLayout>
    </ThemeProvider>
  );
}

export default App;
