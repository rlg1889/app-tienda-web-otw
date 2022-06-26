import { useContext } from "react";
import CartContext from "../../Context/CartContext";

const Cart = () => {
    const {cart , clearCart} = useContext(CartContext)

    return(
        <>
            <h1>Carrito</h1>
            <div>
                {cart.map(prod => <h3>{prod.nombre}</h3>)}
            </div>
        </>
    )
}