import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { Link , NavLink } from 'react-router-dom'

const NavBar = () =>{
    return(
        <nav>
            <Link to='/'>
                <h3>Over the Wave - Baby & kids</h3>
            </Link>
            <div>   
                <Link to='/categoria/bebe'>Indumentaria de Bebe</Link>
                <Link to='/categoria/nino'>Indumentaria de Niño</Link>
                <Link>Tabla de talles</Link>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar