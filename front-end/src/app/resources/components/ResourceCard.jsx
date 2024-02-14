import Card from 'react-bootstrap/Card';

export default function ResourceCard({resource}) {
    return (
        <div>
            <Card style = {{width: "20rem"}}>
            <Card.Img variant="top" src={resource.img}/>
                <Card.Body>
                    <Card.Title>{resource.name}</Card.Title>
                    <Card.Text>
                        Location: {resource.location}
                        Type: {resource.type}
                        Cost: {resource.type}
                        Cost: {resource.cost}
                        For: {resource.audience}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}