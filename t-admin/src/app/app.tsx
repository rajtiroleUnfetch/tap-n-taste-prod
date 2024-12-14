import { Routes, Route } from "react-router-dom";
import {RestaurantAdminPage} from './pages'
const App = () => (
  <Routes>
    <Route path="/" element={<div>Tap-n-Taste Page</div>} />
    <Route path="/admin" element={<div>Tap-n-Taste admin Page</div>} />
    <Route path="/admin/restaurant/:id/*" element={<RestaurantAdminPage/>} />
  </Routes>
);

export default App;
