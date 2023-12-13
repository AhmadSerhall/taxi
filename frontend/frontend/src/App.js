import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/signup";
import LocationComponent from "./components/location/LocationComponent";
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
} //

export default App;
