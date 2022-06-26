import { useState , useEffect } from 'react'
import { getProductoID } from '../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc , doc } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemDetailContainer = () => {
    const[producto, setProducto] = useState ()
    const {productoID} = useParams()
   
    useEffect(() => {
        const docRef = doc(db,'productos', productoID)

        getDoc(docRef).then(doc => {
            const productFormatted = {id:doc.id, ...doc.data()}
            setProducto(productFormatted)
        }).catch(error=>{
            console.log(error)
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