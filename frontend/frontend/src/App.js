import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/signup";
import RequestForm from "./components/request_form";
import YourRides from "./pages/yourrides";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/requestride" element={<YourRides />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
} //

export default App;
