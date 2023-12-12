import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
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
