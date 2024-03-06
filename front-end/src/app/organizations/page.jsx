// import Counties from "./components/countyCardList"
import { Row, Col, Container, Card, Button} from "react-bootstrap";
import styles from "../page.module.css";
// import "./counties.css"

import Link from "next/link";

import { Lora, Cabin} from "next/font/google";
const lora = Lora({weight: '400', subsets: ['latin']})
const cabin = Cabin({weight: '400', subsets: ['latin']})
import orgsData from "../data/organizations.json";
import OrgCard from "./components/orgCard.js"

// model page for counties
export default function listCounties() {

    const orgs = orgsData;
    const orgslen = Object.keys(orgs?.orgs).length;

    // console.log(orgs)

    return (
        
        <main className={styles.main} style={{backgroundColor:"white", width:"100vw", paddingTop:"55px", height:"100%"}}>
            <Container style={{maxWidth:"100vw", margin:"0", paddingLeft:"5vw", paddingTop:"5vh", border:"0"}}>
                <div className={lora.className}>
                    <h1 style={{color:"black"}}>Organizations</h1>
                </div>
                <div className={cabin.className}>
                    <br></br>
                    <p className={styles.splashdesc} style={{}}>
                        blurb about orgs stuff and how it's important to foster kids / those donating
                    </p>
                </div>
            </Container>
            <Container fluid={true} style = {{}}>
                <Row style={{padding:"3vw", paddingTop:"2rem", justifyContent:"space-evenly"}}>
                    {orgs["orgs"].slice(0, 10).map((organization) => (
                        <Col xs style={{paddingBottom: "2rem"}}> <OrgCard org={JSON.stringify(organization)}/> </Col>
                    ))}
                </Row>
            </Container>
            
            {/* <div className= {styles.description} > */}
                {/* <h1 styles={{color: "black"}}>Organizations</h1>
                </div>
                <Container style = {{padding: 15}}>
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

                </Container> */}
                <h3 className={lora.className} style={{color:"black", paddingBottom:"20px"}}>
                    Number of Instances: {orgslen}
                </h3>
            </main>
    )
}