import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './Context/CartContext'


function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path = '/' element={<ItemListContainer greeting= 'Bienvenido a nuestro Sitio Web'/>} />
            <Route path = '/categoria/:categoriaID'element = {<ItemListContainer/>} />
            <Route path = '/detail/:productoID' element = {<ItemDetailContainer/>} />
            <Route path = '/cart' element = {<Cart/>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
