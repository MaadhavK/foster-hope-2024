"use client"
// import Counties from "./components/countyCardList"
import { Row, Col, Container, Card, Button} from "react-bootstrap";
import styles from "../page.module.css";

// model page for resources
export default function Resources() {
    return (
        <main className= {styles.main}>
            <div className= {styles.description}>
                <h1>Resources</h1>
                </div>
                <Container style = {{padding: 15}}>
                    <Row>
                        <Col>
                        {/* lists out cards of instances, style in rows using bootstrap row and col */}
                            <Card style = {{width: "20rem"}}>
                                <Card.Img variant="top" src="/images/resources/storytime.jpeg" style={{padding: "1rem", background: "lightblue"}}/>
                                <Card.Body>
                                    <Card.Title> Free Kids Event: Children's Book Story Time</Card.Title>
                                    <Card.Text>
                                    Location: Austin
                                    <br></br>
                                    Type: Event
                                    <br></br>
                                    In person: yes
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
                                    In person: yes
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
                                    In person: yes
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
}