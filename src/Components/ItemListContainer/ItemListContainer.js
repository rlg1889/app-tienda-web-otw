import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducto , getProductoCategoria} from '../asyncmock'
import ItemList from '../ItemList/ItemList.js'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {
    const [productos, setProductos]=useState([])
    const [loading, setLoading] = useState(true)

    const { categoriaID } = useParams ()

    useEffect(() =>{
        setLoading(true)

        if(!categoriaID){
            getProducto().then(response =>{
                setProductos(response)
            }).catch(error =>{
                console.log(error)
            }).finally(()=>{
                setLoading(false)
            })
        } else {
            getProductoCategoria(categoriaID).then(response =>{
                setProductos(response)
            }).catch(error =>{
                console.log(error)
            }).finally(()=>{
                setLoading(false)
            })
        }
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