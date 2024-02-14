"use client"
// import Counties from "./components/countyCardList"
import { Row, Col, Container, Card, Button} from "react-bootstrap";
import styles from "../page.module.css";

import Link from "next/link";

export default function listCounties() {
    return (
        <main className= {styles.main}>
            <div className= {styles.description}>
                <h1>Organizations</h1>
            </div>

            <Container style = {{padding: 15}}>
                <Row>
                    <Col>
                         <Card style = {{width: "20rem", height: "35rem"}}>
                            <Card.Img variant="bottom" src = "" style={{padding: "1rem", background: "lightblue"}}/>
                            <Card.Body>
                                <Card.Title> Organization 1</Card.Title>
                                <Card.Text>
                                Attribute 1: 
                                <br></br>
                                Attribute 2: 
                                <br></br>
                                Attribute 3:
                                <br></br>
                                Attribute 4:
                                <br></br>
                                Attribute 5:
                                <br></br>
                                </Card.Text>
                                <Button href = "organizations/instances/org1"> Read More </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style = {{width: "20rem", height: "35rem"}}>
                            <Card.Img variant="bottom" src = "" style={{padding: "1rem", background: "lightblue"}}/>
                            <Card.Body>
                                <Card.Title> Organization 2</Card.Title>
                                <Card.Text>
                                Attribute 1: 
                                <br></br>
                                Attribute 2: 
                                <br></br>
                                Attribute 3:
                                <br></br>
                                Attribute 4:
                                <br></br>
                                Attribute 5:
                                <br></br>
                                </Card.Text>
                                <Button href = "organizations/instances/org2"> Read More </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style = {{width: "20rem", height: "35rem"}}>
                            <Card.Img variant="bottom" src = "" style={{padding: "1rem", background: "lightblue"}}/>
                            <Card.Body>
                                <Card.Title> Organization 3</Card.Title>
                                <Card.Text>
                                Attribute 1: 
                                <br></br>
                                Attribute 2: 
                                <br></br>
                                Attribute 3:
                                <br></br>
                                Attribute 4:
                                <br></br>
                                Attribute 5:
                                <br></br>
                                </Card.Text>
                                <Button href = "organizations/instances/org3"> Read More </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </main>
    )
}