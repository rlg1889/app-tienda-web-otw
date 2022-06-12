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
                <NavLink to='/categoria/bebe' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Indumentaria de Bebe</NavLink>
                <NavLink to='/categoria/nino' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Indumentaria de Niño</NavLink>
                {/* <Link>Tabla de talles</Link> */}
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar