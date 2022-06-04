import { useState } from 'react'
import Button from '../Button/Button'

const Counter = () => {

    const [counter, setCounter] = useState(0)
    const sumarCantidad = () => {
        setCounter(counter + 1)
    }
    const restarCantidad = () => {
        setCounter(counter - 1)
    }

    return (
        <div className="contenedor">
            <Button variant="primary">Añadir al Carrito</Button>
            <button onClick={sumarCantidad}> + </button>
            <p className="counter">{counter}</p>
            <button onClick={restarCantidad}> - </button>
        </div>
    )
}

export default Counter