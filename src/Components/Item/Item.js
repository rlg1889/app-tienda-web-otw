import { Card } from "react-bootstrap"
import Counter from "../Counter"

const Item = ({ nombre, precio, img }) => {
    return (
        <Card style={{ width: '12rem' }}>
            <Card.Img variant="top" src={img} alt={nombre} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    Precio: ${precio}
                </Card.Text>
                <Counter inicio={0}></Counter>
            </Card.Body>
        </Card>
    )
}

export default Item