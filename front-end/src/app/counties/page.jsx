"use client"
// import Counties from "./components/countyCardList"
import { Row, Col, Container, Card, Button} from "react-bootstrap";
import styles from "../page.module.css";
// import "./counties.css"

import Link from "next/link";

import { Lora, Cabin} from "next/font/google";
const lora = Lora({weight: '400', subsets: ['latin']})
const cabin = Cabin({weight: '400', subsets: ['latin']})
import countiesData from "../data/counties.json";
import CountyCard from "./components/countycard";

// export const metadata = {
//     title: "Counties"
// }

export default function listCounties() {
    const counties = countiesData;
    // console.log(counties["counties"].slice(0,9));
    const countylen = Object.keys(counties?.counties).length;

    return (      
        <main className={styles.main} style={{backgroundColor:"white", width:"100vw", paddingTop:"55px", height:"100%"}}>
            <Container style={{maxWidth:"100vw", margin:"0", paddingLeft:"5vw", paddingTop:"5vh", border:"0"}}>
                <div className={lora.className}>
                    <h1 style={{color:"black"}}>Counties</h1>
                </div>
                <div className={cabin.className}>
                    <br></br>
                    <p className={styles.splashdesc} style={{}}>
                        County plays a vital role in the foster care system by overseeing placements and ensuring the safety of children 
                        within its jurisdiction. Collaborating with local partners, counties provide essential support to foster 
                        families, including counseling, healthcare, and education. This local approach is crucial for safeguarding 
                        the well-being and future of children in foster care.
                    </p>
                </div>
            </Container>
            <Container fluid={true} style = {{}}>
                <Row style={{padding:"3vw", paddingTop:"2rem", justifyContent:"space-evenly"}}>
                    {counties["counties"].slice(0, 9).map((county) => (
                        <Col xs style={{paddingBottom: "2rem"}}> <CountyCard county={JSON.stringify(county)}/> </Col>
                    ))}
                </Row>
            </Container>
            
            <h3 className={lora.className} style={{color:"black", paddingBottom:"20px"}}>
                Number of Instances: {countylen}
            </h3>
        </main>
    )
}