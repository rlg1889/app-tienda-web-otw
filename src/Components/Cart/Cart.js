import { useContext } from "react"
import CartContext from "../../Context/CartContext"
import CartItemList from "../CartItemList/CartItemList"
import { Link } from "react-router-dom"

const Cart = () => {
    const {cart , totalQuantity, clearCart, getTotal} = useContext(CartContext)

    const total = getTotal()

    if(totalQuantity === 0 ){
        return <h1>No hay productos en el carrito.</h1>
    }

    return(
        <>
            <h1>Carrito</h1>
            <CartItemList productsAdded={cart}/>
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <Link className="Button" to='/checkout'> Confirmar pedido </Link>
        </>
    )
}

export default Cart