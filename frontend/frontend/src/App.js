import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/signup";
import LocationComponent from "./components/location/LocationComponent";
import Login from "./pages/login";
import Rating from "./pages/rating";
import Map from "./pages/rides";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/location" element={<LocationComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
