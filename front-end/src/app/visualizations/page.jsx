import { Row, Col, Container, Tab, Tabs } from "react-bootstrap";
import styles from "../page.module.css";
import { Lora, Cabin} from "next/font/google";
const lora = Lora({weight: '400', subsets: ['latin']})
const cabin = Cabin({weight: '400', subsets: ['latin']})
import PieChart from "../components/pieChart.js"

async function getCounties() {
    const response = await fetch('http://api.foster-hope.com/counties/all_counties');
    return await response.json();
}

async function getOrgs() {
    const response = await fetch('http://api.foster-hope.com/orgs/all_orgs');
    return await response.json();
}

async function getResources() {
    const response = await fetch(`http://api.foster-hope.com/resources/all_resources`)
    return await response.json();
}

export default async function visualizations() {
    return (
        <main className={styles.main} style={{backgroundColor:"white", width:"100vw", paddingTop:"55px", height:"100%"}}>
            <Container style={{maxWidth:"100vw", margin:"0", paddingLeft:"5vw", paddingRight:"5vw", paddingTop:"5vh", border:"0"}}>
                <div className={lora.className}>
                    <h1 style={{color:"black", textAlign:"center"}}>Visualizations</h1>
                </div>
            </Container>
            <Container fluid={true} style = {{}}>
                <Row style={{padding:"3vw", paddingTop:"2rem", justifyContent:"space-evenly"}}>

                </Row>
            </Container>
        </main>
    )
}