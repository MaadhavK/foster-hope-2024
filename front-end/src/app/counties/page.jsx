"use client"
// import Counties from "./components/countyCardList"
import { Row, Col, Container, Card, Button} from "react-bootstrap";
import styles from "../page.module.css";

import Link from "next/link";

// export const metadata = {
//     title: "Counties"
// }

export default function listCounties() {
    
    //const Counties = dynamic(() => import("./components/countyCardList"));
    return (
        <main className= {styles.main}>
            <div className= {styles.description}>
                <h1>Counties Page</h1>
            </div>

            <Container style = {{padding: 15}}>
                <Row>
                    <Col>
                         <Card style = {{width: "20rem", height: "35rem"}}>
                            <Card.Img variant="bottom" src = "images/counties/travis.jpg"/>
                            <Card.Body>
                                <Card.Title> Travis County</Card.Title>
                                <Card.Text>
                                Population: 1,305,000
                                <br></br>
                                Number of Agencies: 
                                <br></br>
                                Number of Foster Children: 186
                                <br></br>
                                Number of Foster Homes: 20
                                <br></br>
                                </Card.Text>
                                <Button href = "counties/instances/travis/"> Read More </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style = {{width: "20rem", height: "35rem"}}>
                            <Card.Img variant="top" src = "images/counties/hays.png"/>
                            <Card.Body>
                                <Card.Title> Hays County</Card.Title>
                                <Card.Text>
                                Population: 30
                                <br></br>
                                Number of Agencies: 50
                                <br></br>
                                Number of Foster Children: 100
                                <br></br>
                                Number of Foster Homes: 20
                                </Card.Text>
                                <Button href = "counties/instances/hays/"> Read More </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style = {{width: "20rem", height: "35rem"}}>
                            <Card.Img variant="top" src = "/images/counties/bastrop.jpg"/>
                            <Card.Body style={{background:"lightgray"}}>
                                <Card.Title> Bastrop County</Card.Title>
                                <Card.Text>
                                Population: 30
                                <br></br>
                                Number of Agencies: 50
                                <br></br>
                                Number of Foster Children: 100
                                <br></br>
                                Number of Foster Homes: 20
                                </Card.Text>
                                <Button href = "counties/instances/bastrop/"> Read More </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </main>
    )
}