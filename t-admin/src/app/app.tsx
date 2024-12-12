import { Routes, Route } from 'react-router-dom';
import { AdminLandingPage } from './pages/admin-landing-page/admin-landing-page';

const App = () => (
  <Routes>
    <Route path="/" element={<div>Tap-n-Taste Admin Page</div>} />
    <Route path="/restaurants/:id/*" element={<AdminLandingPage />} />
  </Routes>
);

export default App;
