import { useState, useContext } from "react";
import { addDoc, collection, writeBatch, getDocs, query, where, documentId } from 'firebase/firestore'
import CartContext from '../../Context/CartContext'
import { Link } from "react-router-dom";
import ClientForm from "../ClientForm/ClientForm"
import {useNotification} from "../Notification/Notification"
import { db } from '../../services/firebase/index'


const Checkout = (props) => {
    const {cart,getTotal,clearCart} = useContext(CartContext)
    const [compra, setCompra] = useState (false)
    const [id, setId] = useState ("")
    const [loading, setLoading] = useState(false)
    const total= getTotal();

    const setNotification=useNotification()

    const handleCrearOrden = (cliente) => {

    const orden = {
        comprador: {
            nombre: cliente.nombre,
            email: cliente.email,
            telefono: cliente.telefono,
            direccion: cliente.direccion
        },
        items: cart,
        total
    }

    const batch = writeBatch(db)

    const ids = cart.map(prod => prod.id)

    const outOfStock = []

    const collectionRef = collection(db, 'productos')

    getDocs(query(collectionRef, where(documentId(), 'in', ids)))
        .then(response => {
            response.docs.forEach(doc => {
                const dataDoc = doc.data()

                const prod = cart.find(prod => prod.id === doc.id)
                const prodQuantity = prod.quantity

                if(dataDoc.stock >= prodQuantity) {
                    batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
        }).then(() => {
            if(outOfStock.length === 0) {
                const collectionRef = collection(db, 'orders')
                return addDoc(collectionRef, orden)
            } else {
                return Promise.reject({ type: 'out_of_stock', productos: outOfStock })
            }
        }).then(({ id }) => {
            batch.commit()
            clearCart()
            setNotification('success',`Su orden se genero correctamente. El id de su orden es: ${id}`)
            setId(id)
            setCompra(true)

        }).catch(error => {
            if(error.type === 'out_of_stock') {
                setNotification('error','Hay productos que no tienen stock')

            } else {
                console.log(error)
            }
        }).finally(() => {
            setLoading(false)
        })

}


if(loading) {
    return <h1>Se esta generando su orden...</h1>
}

if(compra){
    return(
        <>
            <div className="contenedor-checkout">
                <h2>{props.titulo}</h2>
                <h3>Su compra fue registrada con éxito. El ID de su orden es {id}</h3>
                <div className="contenedor-boton-seguir">
                    <Link to='/' className="boton">Seguir comprando</Link>
                </div>
            </div>
        </>
    )
}
else{
    return(
        <>
            <div className="contenedor-checkout">
                <h2>{props.titulo}</h2>
                <ClientForm crearOrden={handleCrearOrden}/>
            </div>
        </>
    )
}
}
export default Checkout