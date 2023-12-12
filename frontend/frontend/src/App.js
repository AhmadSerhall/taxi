import React from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import RideRequest from './components/RideRequest';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
      {/* <route path='/' element={<Landing/>} /> */}
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
