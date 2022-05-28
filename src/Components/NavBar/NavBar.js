import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () =>{
    return(
        <nav>
            <h3>Over the Wave - Baby & kids</h3>
            <div>   
                <button>Indumentaria de Bebe</button>
                <button>Indumentaria de Niño</button>
                <button>Tabla de talles</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar