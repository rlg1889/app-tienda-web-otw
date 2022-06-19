import './App.css';
import React , {
  useState,
  createContext
} from 'react'
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './Context/CartContext'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path = '/' element={<ItemListContainer greeting= 'Bienvenido a nuestro Sitio Web'/>} />
          <Route path = '/categoria/:categoriaID'element = {<ItemListContainer/>} />
          <Route path = '/detail/:productoID' element = {<ItemDetailContainer/>} />
          <Route path = '/cart' element = {<h1> Carrito </h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
