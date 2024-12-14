import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/landing-page/landing-page";
import { TAbout } from '@tap-n-taste/ui';

const App = () => (
  <Routes>
    <Route path="/" element={<div>Tap-n-Taste Page</div>} />
    <Route path="/restaurants/:id/*" element={<LandingPage />} />
    <Route path="/about*" element={<TAbout/>} />
  </Routes>
);

export default App;
