import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import SignUp from './pages/signup';
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
      <Route path='/signup' element={<SignUp/>} />
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
