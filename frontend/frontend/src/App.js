import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/signup";
import Navbar from "./components/navbar/index";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
