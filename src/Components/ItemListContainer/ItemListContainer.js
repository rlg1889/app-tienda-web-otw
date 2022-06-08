import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducto } from '../asyncmock'
import ItemList from '../ItemList/ItemList.js'

const ItemListContainer = (props) => {
    const[productos, setProductos]=useState([])

    useEffect(() =>{
        getProducto().then(response =>{
            setProductos(response)
        })
    }, [])

    return (
        <section>
            <h1 className="Titulo">{props.greeting}</h1>
            <ItemList productos={productos}/>
        </section>
    )
}

export default ItemListContainer