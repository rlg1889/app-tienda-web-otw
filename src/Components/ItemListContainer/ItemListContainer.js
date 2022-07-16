import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList.js'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../services/firebase/firestore'   

const ItemListContainer = (props) => {
    const [productos, setProductos]=useState([])
    const [loading, setLoading] = useState(true)

    const { categoriaID } = useParams ()

    useEffect(() =>{
        setLoading(true)

        getProducts(categoriaID).then(response =>{
            setProductos(response)
        }).catch(error => {
            console.log(error)
        }).finally(()=> {
            setLoading(false)
        })
        }, [categoriaID])

    if(loading) {
        return <span class="loader"></span>
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