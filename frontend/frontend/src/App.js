import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/signup";
import HomePage from './pages/landing';
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/HomePage" element = {<HomePage/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
