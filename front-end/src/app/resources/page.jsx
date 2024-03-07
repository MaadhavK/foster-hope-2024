// import Counties from "./components/countyCardList"
import { Row, Col, Container, Card, Button} from "react-bootstrap";
import styles from "../page.module.css";
// import "./counties.css"

import Link from "next/link";

import { Lora, Cabin} from "next/font/google";
const lora = Lora({weight: '400', subsets: ['latin']})
const cabin = Cabin({weight: '400', subsets: ['latin']})
import ResourceCard from "./components/resourcecard.js"
import Pagination from "../components/pagination.js"


async function getResources() {
    const response = await fetch('https://api.foster-hope.com/resources/all_resources');
    return await response.json();
}
export default async function listResources( {searchParams} ) {

    const resources = await getResources();

    const page = searchParams["page"] ?? 1
    const per_page = searchParams["per_page"] ?? 16
    const start = (Number(page) - 1) * Number(per_page)
    const end = start + Number(per_page)
    const num_instances = Object.keys(resources.data).length
    // console.log(resources);
    
    const entries = resources.data.slice(start, end)

    return (
        <main className={styles.main} style={{backgroundColor:"white", width:"100vw", paddingTop:"55px", height:"100%"}}>
            <Container style={{maxWidth:"100vw", margin:"0", paddingLeft:"5vw", paddingRight:"5vw", paddingTop:"5vh", border:"0"}}>
                <div className={lora.className}>
                    <h1 style={{color:"black", textAlign:"center"}}>Resources</h1>
                </div>
                <div className={cabin.className}>
                    <br></br>
                    <p className={styles.splashdesc} style={{color:"black", textAlign:"center"}}>
                        blurb about resources stuff and how it's important to foster kids / those wanting to support
                    </p>
                </div>
            </Container>
            <Container fluid={true} style = {{}}>
                <Row style={{padding:"3vw", paddingTop:"2rem", justifyContent:"space-evenly"}}>
                    {entries.map((res) => (
                        <Col xs style={{paddingBottom: "2rem"}}> <ResourceCard resource={JSON.stringify(res)}/> </Col>
                    ))}
                </Row>
            </Container>
            <Pagination
                num_instances={num_instances}
                path={"resources"}
            />
            <h3 className={lora.className} style={{color:"black", paddingBottom:"20px",  paddingTop: "10px"}}>
                Number of Instances: {num_instances}
            </h3>
        </main>
    )
}