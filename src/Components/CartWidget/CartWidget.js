import { useContext } from 'react';
import CartContext from "../../Context/CartContext";
import { Link, useNavigate } from 'react-router-dom'

const CartWidget = () => {
    const { getCartQuantity, totalQuantity } = useContext(CartContext)
    const navigate = useNavigate()
    return(
        <div onClick={() => navigate ('/cart') }> 
            <img src='/images/carrito.svg' alt='widget-carrito'style={{width: 50}}/>
            {totalQuantity}
        </div>
    )
}

export default CartWidget