
import './App.css';
import Navbarapp from './components/Navbarapp';
import { Routes,Route } from 'react-router-dom';
import Products from './components/Products';
import Cart from './components/Cart';
function App() {
  return (
    <div className="App">
      <Navbarapp/>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
