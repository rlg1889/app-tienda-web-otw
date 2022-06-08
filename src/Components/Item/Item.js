const Item = ({ nombre, img , precio }) => {
    return(
        <li>
            <img src={img} alt={nombre} height="150"/>
            {nombre}{"\n\r"}
            {"$"}{precio}
        </li>
    )
}

export default Item