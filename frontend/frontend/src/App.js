
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/signup";
import Login from "./pages/login";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
} //

export default App;
