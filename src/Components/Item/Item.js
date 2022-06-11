import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, img , precio }) => {
    return(
        <Card>
            <Card.Img variant="top" src={img} alt={nombre} height="150"/>
            <Card.Title>{nombre}{"\n\r"}</Card.Title>
            <Card.Text>
            {"$"}{precio}
            </Card.Text>
            <Link to={`/detail/${id}`} className='Option'>Ver mas</Link>
        </Card>
    )
}

export default Item