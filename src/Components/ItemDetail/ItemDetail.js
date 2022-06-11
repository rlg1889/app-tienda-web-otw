const ItemDetail = ({ nombre , precio }) => {
    return(
        <>
            <h2>Card</h2>
            <h3>Articulo: {nombre} </h3>
            <p>Precio: $ {precio} </p>
        </>
    )
}

export default ItemDetail