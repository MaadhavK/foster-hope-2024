// import Counties from "./components/countyCardList"
import { Row, Col, Container, Card, Button} from "react-bootstrap";
import styles from "../page.module.css";
// import "./counties.css"

import Link from "next/link";

import { Lora, Cabin} from "next/font/google";
const lora = Lora({weight: '400', subsets: ['latin']})
const cabin = Cabin({weight: '400', subsets: ['latin']})
import CountyCard from "./components/countycard";

// export const metadata = {
//     title: "Counties"
// }

async function getCounties() {
    const response = await fetch('https://api.foster-hope.com/counties/all_counties');
    return await response.json();
}

export default async function listCounties() {
    const counties = await getCounties();
    //console.log(counties);
    //console.log(counties["data"].slice(0,9));
    //const countylen = Object.keys(counties["data"]).length;
    //console.log(countylen);

    return (      
        <main className={styles.main} style={{backgroundColor:"white", width:"100vw", paddingTop:"55px", height:"100%"}}>
            <Container style={{maxWidth:"100vw", margin:"0", paddingLeft:"5vw", paddingRight:"5vw", paddingTop:"5vh", border:"0"}}>
                <div className={lora.className}>
                    <h1 style={{color:"black", textAlign:"center"}}>Counties</h1>
                </div>
                <div className={cabin.className}>
                    <br></br>
                    <p className={styles.splashdesc} style={{textAlign:"center"}}>
                        County plays a vital role in the foster care system by overseeing placements and ensuring the safety of children
                        within its jurisdiction. Collaborating with local partners, counties provide essential support to foster
                        families, including counseling, healthcare, and education. This local approach is crucial for safeguarding
                        the well-being and future of children in foster care.
                    </p>
                </div>
            </Container>
            <Container fluid={true} style = {{}}>
                <Row style={{padding:"3vw", paddingTop:"2rem", justifyContent:"space-evenly"}}>
                    {counties["data"].slice(0, 9).map((county) => (
                        <Col xs style={{paddingBottom: "2rem"}}> <CountyCard county={JSON.stringify(county)}/> </Col>
                    ))}
                </Row>
            </Container>
            <h3 className={lora.className} style={{color:"black", paddingBottom:"20px"}}>
                Number of Instances: {9}
            </h3>
        </main>
    )
}

{/* <Container style = {{padding: 15}}>
                <Row>
                    <Col>
                         <Card style = {{width: "20rem", height: "35rem"}}>
                            <Card.Img variant="bottom" src = "images/counties/travis.jpg"/>
                            <Card.Body  style={{padding: "1rem", background: "lightblue"}}>
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
                                <Button href = "counties/1/"> Read More </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style = {{width: "20rem", height: "35rem"}}>
                            <Card.Img variant="top" src = "images/counties/haysCounty.jpg"/>
                            <Card.Body  style={{padding: "1rem", background: "lightblue"}}>
                                <Card.Title> Hays County</Card.Title>
                                <Card.Text>
                                Population: 241,067
                                <br></br>
                                Number of Agencies: 50
                                <br></br>
                                Number of Foster Children: 100
                                <br></br>
                                Number of Foster Homes: 20
                                </Card.Text>
                                <Button href = "counties/2/"> Read More </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style = {{width: "20rem", height: "35rem"}}>
                            <Card.Img variant="top" src = "/images/counties/bastrop.jpg"/>
                            <Card.Body style={{padding: "1rem", background: "lightblue"}}>
                                <Card.Title> Bastrop County</Card.Title>
                                <Card.Text>
                                Population: 97,216
                                <br></br>
                                Number of Agencies: 50
                                <br></br>
                                Number of Foster Children: 100
                                <br></br>
                                Number of Foster Homes: 20
                                </Card.Text>
                                <Button href = "counties/3/"> Read More </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container> */}