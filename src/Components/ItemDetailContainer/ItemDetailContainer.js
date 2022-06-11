import { useState , useEffect } from 'react'
import { getProductoID } from '../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const[producto, setProducto] = useState ()
    const {productoID} = useParams()
   
    useEffect(() => {
        getProductoID(productoID).then(response => {
            setProducto(response)
        })
    },[])

    return (
        <>
            <h1>Detalle del producto</h1>
            <ItemDetail {...producto}/>
        </>
    )

}

export default ItemDetailContainer