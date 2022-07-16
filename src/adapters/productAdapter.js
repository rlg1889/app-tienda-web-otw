export const createAdaptedProductFromFirestore = (doc) => {
    const data = doc.data()

    const productFormatted = {
        id: doc.id,
        nombre: data.nombre,
        categoria: data.categoria,
        img: data.img,
        precio: data.precio,
        descripcion: data.descripcion
    }

    return productFormatted
}