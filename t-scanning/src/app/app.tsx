import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/landing-page/landing-page";

const App = () => (
  <Routes>
    <Route path="/" element={<div>Tap-n-Taste Page</div>} />
    <Route path="/restaurants/:id/*" element={<LandingPage />} />
  </Routes>
);

export default App;
