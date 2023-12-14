import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/signup";
// import LocationComponent from "./components/location/LocationMap";
import Login from "./pages/login";
import Rating from "./pages/rating";
import Map from "./pages/rides";
import Landing from "./pages/landing";
import YourRides from "./pages/yourrides";
import Location from "./pages/location/Location";
import DriversRequest from "./pages/driver_ride_requests";
import AboutUs from "./pages/about";
import ContactUs from "./pages/contact";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route classname="signup" path="/signup" element={<SignUp />} />
          <Route classname="login" path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/rating" element={<Rating />} />
          <Route path="/ride" element={<Map />} />
          <Route path='/landing' element={<Landing/>}/>
          <Route path="/yourride" element={<YourRides />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/request" element={< DriversRequest/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
