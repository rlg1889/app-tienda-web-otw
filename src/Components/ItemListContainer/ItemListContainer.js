import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducto , getProductoCategoria} from '../asyncmock'
import ItemList from '../ItemList/ItemList.js'
import { useParams } from 'react-router-dom'
import { collection, getDocs , query , where } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemListContainer = (props) => {
    const [productos, setProductos]=useState([])
    const [loading, setLoading] = useState(true)

    const { categoriaID } = useParams ()

    useEffect(() =>{
        setLoading(true)

        const collectionRef = categoriaID ? (
            query(collection(db,'productos'), where('categoria', '==', categoriaID))
        ) : (collection(db,'productos'))

        getDocs(collectionRef).then(response =>{
            console.log(response)
            const productsFormatted = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setProductos(productsFormatted)
        }).catch(error => {
            console.log(error)
        }).finally(()=> {
            setLoading(false)
        })
        }, [categoriaID])

    if(loading) {
        return <h1>Cargando ...</h1>
    }

    return (
        <section>
            <h1 className="Titulo">{props.greeting}</h1>
            {productos.length > 0
                ?<ItemList productos={productos}/>
                : <h1>No hay productos.</h1>
            }
        </section>
    )
}

export default ItemListContainer