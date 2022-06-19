import { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../Context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({ id, nombre , precio, img, categoria, descripcion, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    
    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        console.log(`se agregaron ${quantity} ${nombre}`)
        addItem({ id, nombre, precio, quantity})
        setQuantityAdded(quantity)
    }

    return(
        <article>
            <h2>Card</h2>
            <h3>Articulo: {nombre} </h3>
            <p>Precio: $ {precio} </p>
            <img src={img} alt={nombre} className="ItemImg"/>
            <footer className='ItemFooter'>
            { quantityAdded === 0 
               ?  <ItemCount stock={stock} onAdd={handleOnAdd} />
               :  <Link to='/cart'>Terminar compra</Link>
           }
       </footer>
        </article>
    )
}

export default ItemDetail