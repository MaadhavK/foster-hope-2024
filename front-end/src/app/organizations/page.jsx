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

    return (
        <main className={styles.main} style={{backgroundColor:"white", width:"100vw", paddingTop:"55px", height:"100%"}}>
            <Container style={{maxWidth:"100vw", margin:"0", paddingLeft:"5vw", paddingRight:"5vw", paddingTop:"5vh", border:"0"}}>
                <div className={lora.className}>
                    <h1 style={{color:"black", textAlign:"center"}}>Organizations</h1>
                </div>
                <div className={cabin.className}>
                    <br></br>
                    <p className={styles.splashdesc} style={{color:"black", textAlign:"center"}}>
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
            <h3 className={lora.className} style={{color:"black", paddingBottom:"20px"}}>
                Number of Instances: {orgslen}
            </h3>
        </main>
    )
}