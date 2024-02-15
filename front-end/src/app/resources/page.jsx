"use client"
// import Counties from "./components/countyCardList"
import { Row, Col, Container, Card, Button} from "react-bootstrap";
import styles from "../page.module.css";
export default function Resources() {
    return (
        <main className= {styles.main}>
            <div className= {styles.description}>
                <h1>Resources</h1>
                </div>
                <Container style = {{padding: 15}}>
                    <Row>
                        <Col>
                            <Card style = {{width: "20rem"}}>
                                <Card.Img variant="top" src="/images/resources/storytime.jpeg" style={{padding: "1rem", background: "lightblue"}}/>
                                <Card.Body>
                                    <Card.Title> Free Kids Event: Children's Book Story Time</Card.Title>
                                    <Card.Text>
                                    Location: Austin
                                    <br></br>
                                    Type: Event
                                    <br></br>
                                    Review: 4.7
                                    <br></br>
                                    Website: 
                                    <a href="https://www.eventbrite.com/e/free-kids-event-childrens-book-story-time-tickets-817584907467?aff=ebdssbdestsearch" target="_blank" rel="nofollow">
                                    https://www.eventbrite.com</a>
                                    <br></br>
                                    </Card.Text>
                                    <Button href = "resources/instances/storytime/"> Read More </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style = {{width: "20rem"}}>
                                <Card.Img variant="top" src="/images/resources/event2.jpg" style={{padding: "1rem", background: "lightblue"}}/>
                                <Card.Body>
                                    <Card.Title> Recognizing & Reporting Child Abuse</Card.Title>
                                    <Card.Text>
                                    Location: Austin
                                    <br></br>
                                    Type: Event
                                    <br></br>
                                    Review: 4.7
                                    <br></br>
                                    Website: 
                                    <a href="https://www.eventbrite.com/e/recognizing-reporting-child-abuse-tickets-796979666637?aff=ebdssbdestsearch" target="_blank" rel="nofollow">
                                    https://www.eventbrite.com</a>
                                    <br></br>
                                    </Card.Text>
                                    <Button href = "resources/instances/recognize/"> Read More </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style = {{width: "20rem"}}>
                                <Card.Img variant="top" src="/images/resources/logo.png" style={{padding: "1rem", background: "lightblue"}}/>
                                <Card.Body>
                                    <Card.Title> Children's Center of Austin</Card.Title>
                                    <Card.Text>
                                    Location: Austin
                                    <br></br>
                                    Type: Children's Institute
                                    <br></br>
                                    Review: 3.4
                                    <br></br>
                                    Website: 
                                    <a href="https://www.childrenscenterofaustin.com/" target="_blank" rel="nofollow">
                                    https://www.childrenscenterofaustin.com/</a>
                                    <br></br>
                                    </Card.Text>
                                    <Button href = "resources/instances/childrenscenter/"> Read More </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </main>
    )
    // const [resources, setResources] = useState([])

    // useEffect(() => {
    //     const getResources = async () => {
    //         const res = await fetch('/api/resources')
    //         const data = await res.json()
    //         setResources(data);
    //     }

    //     getResources()
    // }, [])
    // console.log(resources)
    // console.log(typeof resources)
    // console.log(Array.isArray(resources))
    // return (
    //     <main className= {styles.main}>
    //         <div className= {styles.description}>
    //             <h1>Resources</h1>
    //             <Container style = {{padding: 15}}>
    //             <Row style = {{padding: "2rem"}}>
    //                 {resources && resources['resources'] && resources['resources'].map((resource) => (
    //                     <Col xs><ResourceCard resource={resource}/> </Col>
    //                 ))}
    //             </Row>
    //         </Container>
    //             </div>
    //         </main>
    // )
}