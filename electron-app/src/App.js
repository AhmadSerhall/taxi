import { Routes, Route, Router } from "react-router-dom";
import HomePage from "./pages/HomePage/index";
import DriversTable from "./pages/Drivers/Drivers.js";
import Login from "./components/login/login";
import UsersTable from "./components/users_table/index.js";
import Passengers from "./pages/Passengers/Passengers.js";
import Rides from "./pages/Rides/Rides.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin_panel" element={<HomePage />} />
      <Route path="/admin_panel/drivers" element={<DriversTable />} />
      <Route path="/admin_panel/passengers" element={<Passengers />} />
      <Route path="/admin_panel/rides" element={<Rides />} />
    </Routes>
  );
}

export default App;
