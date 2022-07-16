import { useContext, useState } from "react"
import CartContext from "../../Context/CartContext"
import CartItemList from "../CartItemList/CartItemList"

const Cart = () => {
    const [loading, setLoading] = useState(false)
    const {cart , totalQuantity, clearCart} = useContext(CartContext)

    if(totalQuantity === 0 ){
        return <h1>No hay productos en el carrito.</h1>
    }

    return(
        <>
            <h1>Carrito</h1>
            <CartItemList productsAdded={cart}/>
            {/* <h3>Total: ${total}</h3> */}
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            {/* <button onClick={handleCreateOrder} className="Button">Generar Orden</button> */}
        </>
    )
}

export default Cart