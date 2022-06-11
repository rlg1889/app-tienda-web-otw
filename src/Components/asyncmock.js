import babucha from "./Assets/Babucha rustica de niño - Gris topo.jpg";
import buzo from "./Assets/Buzo canguro de niño - Berlin - Mostaza.jpg";
import chomba from "./Assets/Chomba lisa estampada Niño - Azul marino.jpg";
import jean from "./Assets/Jean de niño - Azul claro localizado.jpg";
import remera from "./Assets/Remera Bebe - Trex - Marino.jpg";


const productos = [
    {id: '1', nombre: 'Babucha rustica de Bebe', precio: 1500, img: babucha, categoria: 'bebe'},
    {id: '2', nombre: 'Buzo canguro de Niño', precio: 2500, img: buzo, categoria:'nino'},
    {id: '3', nombre: 'Chomba lisa estampada Niño', precio: 1200, img: chomba, categoria:'nino'},
    {id: '4', nombre: 'Jean de Niño', precio: 2200, img: jean, categoria:'nino'},
    {id: '5', nombre: 'Remera de Bebe', precio: 850, img: remera, categoria: 'bebe'}
    
]

export const getProducto = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            resolve(productos)
        }, 500)
    })
}

export const getProductoID = (id) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            resolve(productos.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductoCategoria = (categoriaID) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            resolve(productos.filter(prod => prod.categoria === categoriaID))
        }, 500)
    })
}