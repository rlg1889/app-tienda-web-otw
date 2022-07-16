import { db } from "."
import { getDocs, query, where , collection } from 'firebase/firestore'
import { createAdaptedProductFromFirestore } from "../../adapters/productAdapter"

export const getProducts = (categoriaID) => {
    return new Promise((resolve, reject) => {
        const collectionRef = categoriaID ? ( 
            query(collection(db, 'productos'), where('categoria', '==', categoriaID))
        ) : ( collection(db, 'productos') )

        getDocs(collectionRef).then(response => {
            const productsFormatted = response.docs.map(doc => {
                return createAdaptedProductFromFirestore(doc)
            })
            resolve(productsFormatted)
        }).catch(error => {
            reject(error)
        })
    })

}