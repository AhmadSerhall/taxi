import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/signup";

import Login from "./pages/login";
import Rating from "./pages/rating";
import Map from "./pages/rides";
import HomePage from "./pages/landing";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<Login />} />
          <Route classname="signup" path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/rating" element={<Rating />} />
          <Route path="/ride" element={<Map />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
