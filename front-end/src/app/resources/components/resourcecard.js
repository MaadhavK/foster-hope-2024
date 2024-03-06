import {Card, Button} from 'react-bootstrap';
// component create card to list data of resource instance on model page, use for phase 2
export default function ResourceCard({resource}) {
    const path = "resources/instances/" + resource.name + '/'
    console.log(path)
    return (
        <container>
            <Card style = {{width: "20rem"}}>
            <Card.Img variant="top" src={resource.img}/>
                <Card.Body>
                    <Card.Title>{resource.name}</Card.Title>
                    <Card.Text>
                        Location: {resource.location}
                        <br></br>
                        Type: {resource.type}
                        <br></br>
                        Phone: {resource.phone}
                        <br></br>
                        Website: {resource.website}
                    </Card.Text>
                <Button href = {path}> Read More </Button>
                </Card.Body>
            </Card>
        </container>
    )
}