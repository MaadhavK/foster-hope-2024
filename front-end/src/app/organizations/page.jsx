// import Counties from "./components/countyCardList"
import { Row, Col, Container, Card, Button} from "react-bootstrap";
import styles from "../page.module.css";
// import "./counties.css"

import Link from "next/link";

import { Lora, Cabin} from "next/font/google";
const lora = Lora({weight: '400', subsets: ['latin']})
const cabin = Cabin({weight: '400', subsets: ['latin']})
import OrgCard from "./components/orgCard.js"
import Pagination from "../components/pagination.js"


async function getOrgs() {
    const response = await fetch('https://api.foster-hope.com/orgs/all_orgs');
    return await response.json();
}
// model page for counties
export default async function listCounties( {searchParams} ) {

    const orgs = await getOrgs();
    //const orgslen = Object.keys(orgs?.orgs).length;
    const page = searchParams["page"] ?? 1
    const per_page = searchParams["per_page"] ?? 16
    const start = (Number(page) - 1) * Number(per_page)
    const end = start + Number(per_page)
    const num_instances = Object.keys(orgs.data).length

    const entries = orgs.data.slice(start, end)

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
                    {entries.map((organization) => (
                        <Col xs style={{paddingBottom: "2rem"}}> <OrgCard org={organization}/> </Col>
                    ))}
                </Row>
            </Container>
            <Pagination
                num_instances={num_instances}
                path={"organizations"}
            />
            <br></br>
            <p className={lora.className} style={{color:"black", paddingBottom:"20px"}}>
                Number of Instances: {num_instances}
            </p>
        </main>
    )
}