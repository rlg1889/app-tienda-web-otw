import { useState } from "react"
import {useNotification} from "../Notification/Notification"

const ClientForm = ({crearOrden}) => {
    const agregarNotificacion = useNotification()

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')     
    const [telefono, setTelefono] = useState('')     
    const [direccion, setDireccion] = useState('')
    
    const generarOrden = (e) => {
        const error = validar(nombre, telefono, email, direccion)

        if(error){
            agregarNotificacion(error, 'error')
        }
        else{
            e.preventDefault()
                const cliente = {
                    nombre : nombre,
                    email : email,                    
                    telefono : telefono,
                    direccion : direccion,
                }
                
                crearOrden(cliente)
        }
    }

    return(
        <>
            <h3>Ingrese los datos solicitados para finalizar la compra</h3>
            <form 
                className="formulario"
                onSubmit = {e =>{
                    e.preventDefault()
                    generarOrden(e)
                }}>
                <input
                    type = "text"
                    name = "nombre"
                    placeholder = "Nombre"
                    value = {nombre}
                    onChange = {e => setNombre(e.target.value)}/>
                <input
                    type = "email"
                    name = "email"
                    placeholder = "Email"
                    value = {email}
                    onChange = {e => setEmail(e.target.value)}/>
                <input
                    type = "number"
                    name = "telefono"
                    placeholder = "Teléfono"
                    value = {telefono}
                    onChange = {e => setTelefono(e.target.value)}/>
                <input
                    type = "text"
                    name = "direccion"
                    placeholder = "Direccion"
                    value = {direccion}
                    onChange = {e => setDireccion(e.target.value)}/>
                <input 
                    className="button"
                    type = "submit" 
                    value = "Comprar"/>
            </form>
        </>
    )
}

const validar = (nombre, telefono, email, direccion) => {
    if(nombre.length < 5)
        return "El nombre debe tener mínimo 5 caracteres"

    if(telefono.length < 8)
        return "El teléfono ingresado no es válido"

    if(!email.includes('@') || email.length < 10)
        return "El email ingresado no es válido"

    if(direccion.length < 5){
        return "La dirección debe tener mínimo 10 caracteres"
    }
}

export default ClientForm