import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/signup";
import RequestForm from "./components/request_form";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/requestride" element={<RequestForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
} //

export default App;
