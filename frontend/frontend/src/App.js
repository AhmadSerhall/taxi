import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/signup";
// import LocationComponent from "./components/location/LocationMap";
// import Login from "./pages/login";
// import Rating from "./pages/rating";
// import Map from "./pages/rides";
import Location from "./pages/location/Location";
// import LocationMap from "./components/location/LocationMap";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          {/* <Route classname="signup" path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/rating" element={<Rating />} />
          <Route path="/ride" element={<Map />} /> */}
          <Route path="/location" element={<Location />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
