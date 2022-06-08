import babucha from "./Assets/Babucha rustica de niño - Gris topo.jpg";
import buzo from "./Assets/Buzo canguro de niño - Berlin - Mostaza.jpg";
import chomba from "./Assets/Chomba lisa estampada Niño - Azul marino.jpg";
import jean from "./Assets/Jean de niño - Azul claro localizado.jpg";
import remera from "./Assets/Remera Bebe - Trex - Marino.jpg";


const productos = [
    {id: '1', nombre: 'Babucha rustica de niño', precio: 1500, img: babucha},
    {id: '2', nombre: 'Buzo canguro de niño', precio: 2500, img: buzo},
    {id: '3', nombre: 'Chomba lisa estampada niño', precio: 1200, img: chomba},
    {id: '4', nombre: 'Jean de niño', precio: 2200, img: jean},
    {id: '5', nombre: 'Remera bebe', precio: 850, img: remera}
    
]

export const getProducto = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            resolve(productos)
        }, 2000)
    })
}