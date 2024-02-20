"use client"
// import Counties from "./components/countyCardList"
import { Row, Col, Container, Card, Button} from "react-bootstrap";
import styles from "../page.module.css";

import Link from "next/link";

// model page for counties
export default function listCounties() {
    return (
        <main className= {styles.main}>
            <div className= {styles.description} >
                <h1 styles={{color: "black"}}>Organizations</h1>
                </div>
                <Container style = {{padding: 15}}>
                    {/* creates cards for instances, uses bootstrap row and col to format it in rows*/}
                    <Row>
                        <Col>
                            <Card style = {{width: "20rem"}}>
                                <Card.Img variant="top" src="/images/orgs/AustinAngels.png"/>
                                <Card.Body style={{padding: "1rem", background: "lightblue"}}>
                                    <Card.Title> Austin Angels</Card.Title>
                                    <Card.Text>
                                    Location: Austin
                                    <br></br>
                                    Type: Non-profit
                                    <br></br>
                                    Review: 4.7
                                    <br></br>
                                    Hours: 8:30 - 5:00
                                    <br></br>
                                    </Card.Text>
                                    <Button href = "organizations/instances/austin-angels/"> Read More </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style = {{width: "20rem"}}>
                                <Card.Img variant="top" src="/images/orgs/foster-village.jpeg"/>
                                <Card.Body style={{padding: "1rem", background: "lightblue"}}>
                                    <Card.Title> Foster Village Inc.</Card.Title>
                                    <Card.Text>
                                    Location: Dripping Springs
                                    <br></br>
                                    Type: Non-profit
                                    <br></br>
                                    Review: 4.7
                                    <br></br>
                                    Hours: 24/7
                                    <br></br>
                                    </Card.Text>
                                    <Button href = "organizations/instances/foster-village/"> Read More </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style = {{width: "20rem"}}>
                                <Card.Img variant="top" src="/images/orgs/houstonalumniyouth.jpeg"/>
                                <Card.Body style={{padding: "1rem", background: "lightblue"}}>
                                    <Card.Title> Houston Alumni and Youth</Card.Title>
                                    <Card.Text>
                                    Location: Houston
                                    <br></br>
                                    Type: Government Office
                                    <br></br>
                                    Review: 3.4
                                    <br></br>
                                    Hours: 9:00 - 6:00
                                    <br></br>
                                    </Card.Text>
                                    <Button href = "organizations/instances/houston-alumni-youth/"> Read More </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>
                <h3>
                    Number of Instances: 3
                </h3>

            </main>
    )
}