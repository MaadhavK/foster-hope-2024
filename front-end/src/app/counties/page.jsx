// import Counties from "./components/countyCardList"
import { Row, Col, Container, Card, Button} from "react-bootstrap";
import styles from "../page.module.css";
// import "./counties.css"

import Link from "next/link";

import { Lora, Cabin} from "next/font/google";
const lora = Lora({weight: '400', subsets: ['latin']})
const cabin = Cabin({weight: '400', subsets: ['latin']})
import CountyCard from "./components/countycard";
import Pagination from "../components/pagination.js"


export const getCounties = async ()=> {
    const response = await fetch('http://api.foster-hope.com/counties/all_counties');
    return await response.json();
}

export default async function listCounties( {searchParams} ) {
    const counties = await getCounties();

    const page = searchParams["page"] ?? 1
    const per_page = searchParams["per_page"] ?? 16
    const start = (Number(page) - 1) * Number(per_page)
    const end = start + Number(per_page)
    const num_instances = Object.keys(counties.data).length

    const entries = counties.data.slice(start, end)

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
                    {entries.map((county) => (
                        <Col xs style={{paddingBottom: "2rem"}}> <CountyCard county={JSON.stringify(county)}/> </Col>
                    ))}
                </Row>
                
                
            </Container>
            <Pagination
                num_instances={num_instances}
                path = {"counties"}
            />
            <br></br>
            <br></br>
            <h3 className={lora.className} style={{color:"black", paddingBottom:"20px"}}>
                Number of Instances: {num_instances}
            </h3>
        </main>
    )
}
