"use client"
// import Counties from "./components/countyCardList"
import { Row, Col, Container, Card} from "react-bootstrap";
import styles from "../page.module.css";

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

            {/* <Container style = {{padding: 15}}>
                <Row>
                    <Col>
                         <Card style = {{width: "20rem"}}>
                            <Card.Img variant="bottom" />
                            <Card.Body>
                                <Card.Title> Travis County</Card.Title>
                                <Card.Text>
                                Population: 30
                                <br></br>
                                Number of Agencies: 50
                                <br></br>
                                Number of Foster Children: 100
                                <br></br>
                                Number of Foster Homes: 20
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style = {{width: "20rem"}}>
                            <Card.Img variant="top" />
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
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style = {{width: "20rem"}}>
                            <Card.Img variant="top" />
                            <Card.Body>
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
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container> */}
        </main>
    )
}