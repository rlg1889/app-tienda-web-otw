import { useContext } from "react";
import CartContext from "../../Context/CartContext";

const CartWidget = () => {
    const { getCartQuantity , totalQuantity} = useContext(CartContext)

    return(
        <div> 
            <img src='/images/carrito.svg' alt='widget-carrito'style={{width: 50}}/>
            {totalQuantity}
        </div>
    )
}

export default CartWidget