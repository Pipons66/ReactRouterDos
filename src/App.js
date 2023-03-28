import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CartaPoke from './Components/CartaPoke';
import PokeApi from './Views/PokeApi';
import PokeSearch from './Views/PokeSearch';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<PokeApi/>} />
          <Route path='/pokemon' element={<PokeSearch/>} />
          <Route path='/pokemon/:id' element={<CartaPoke/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
