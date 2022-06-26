import babucha from "./Assets/Babucha rustica de niño - Gris topo.jpg";
import buzo from "./Assets/Buzo canguro de niño - Berlin - Mostaza.jpg";
import chomba from "./Assets/Chomba lisa estampada Niño - Azul marino.jpg";
import jean from "./Assets/Jean de niño - Azul claro localizado.jpg";
import remera from "./Assets/Remera Bebe - Trex - Marino.jpg";


const productos = [
    {id: '1', nombre: 'Babucha rustica de Bebe', precio: 1500, img: 'https://i.imgur.com/EtJcJiV.jpg', categoria: 'bebe', stock:30, descripcion: 'Pantalon de algodon rustico peinado'},
    {id: '2', nombre: 'Buzo canguro de Niño', precio: 2500, img: buzo, categoria:'nino', stock:25, descripcion: 'Buzo de algodon con capucha forrada y bolsillo delantero'},
    {id: '3', nombre: 'Chomba lisa estampada Niño', precio: 1200, img: chomba, categoria:'nino', stock:32, descripcion: 'Chomba de algodon jersey con estampa tipo logo'},
    {id: '4', nombre: 'Jean de Niño', precio: 2200, img: jean, categoria:'nino', stock:50, descripcion: 'Jean localizado azul oscuro'},
    {id: '5', nombre: 'Remera de Bebe', precio: 850, img: remera, categoria: 'bebe', stock:20, descripcion: 'Remera de algodon jersey manga larga con estampa'} 
]

export const getProducto = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            resolve(productos)
        }, 1000)
    })
}

export const getProductoID = (id) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            resolve(productos.find(prod => prod.id === id))
        }, 1000)
    })
}

export const getProductoCategoria = (categoriaID) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            resolve(productos.filter(prod => prod.categoria === categoriaID))
        }, 1000)
    })
}