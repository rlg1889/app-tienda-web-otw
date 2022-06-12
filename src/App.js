import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path = '/' element={<ItemListContainer greeting= 'Bienvenido a nuestro Sitio Web'/>} />
          <Route path = '/categoria/:categoriaID'element = {<ItemListContainer/>} />
          <Route path = '/detail/:productoID' element = {<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
