import { useContext } from 'react';
import CartContext from "../../Context/CartContext";
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return(
        <Link to='/cart' className="CartWidget"> 
            <img src='/images/carrito.svg' alt='widget-carrito' style={{width: 50}}/>
            {totalQuantity}
        </Link>
    )
}

export default CartWidget