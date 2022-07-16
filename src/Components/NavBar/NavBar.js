import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { Link , NavLink } from 'react-router-dom'

const NavBar = () =>{
    return(
        <nav>
            <Link to='/'>
            <img src='/images/Logo.png' alt='logo over the wave' style={{width: 250}}/>
            </Link>
            <div>   
                <NavLink to='/categoria/bebe' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Indumentaria de Bebe</NavLink>
                <NavLink to='/categoria/nino' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Indumentaria de Niño</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar