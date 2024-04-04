// import Counties from "./components/countyCardList"
import { Row, Col, Container, Card, Button, Form} from "react-bootstrap";
import styles from "../page.module.css";
import ModelSearch from "../components/modelSearch.js"
// import "./counties.css"

import Link from "next/link";

import { Lora, Cabin } from "next/font/google";
const lora = Lora({ weight: '400', subsets: ['latin'] })
const cabin = Cabin({ weight: '400', subsets: ['latin'] })
import ResourceCard from "./components/resourcecard.js"
import Pagination from "../components/pagination.js"


async function getResources() {
    const response = await fetch(`https://api.foster-hope.com/resources/all_resources`)
    return await response.json();
}

async function searchAndSort(search, sort, asc){
    const response = await fetch('https://api.foster-hope.com/resources/all_resources?' + (search != null ? "search_query=" + search + (sort != null ? "&" : "") : "") + (sort != null ? "sort=" + (asc ? "" : "-")  + sort : ""));
    const result = await response.json();
    return result;
}

export default async function listResources({ searchParams }) {
    const search = searchParams["search"] ?? null
    const sort = Number(searchParams["sort"] ?? 0)
    const asc = searchParams["asc"] == "true" ? true : false;

    var sortParam = null;
    switch (sort) {
        case 0:
            sortParam = null;
            break;
        case 1:
            sortParam = "name";
            break;
        case 2:
            sortParam = "location";
            break;
        case 3:
            sortParam = "hours";
            break;
        case 4:
            sortParam = "type";
            break;
        case 5:
            sortParam = "county";
            break;
    }

    var resources = null;

    if(search != null || sortParam != null){
        resources = await searchAndSort(search, sortParam, asc);
    } else {
         resources = await getResources();
    }

    // Pagination logic
    const page = searchParams["page"] ?? 1
    const per_page = searchParams["per_page"] ?? 16
    const start = (Number(page) - 1) * Number(per_page)
    const end = start + Number(per_page)
    
    const num_instances = Object.keys(resources.data).length

    const entries = resources.data.slice(start, end)

    return (
        <main className={styles.main} style={{ backgroundColor: "white", width: "100vw", paddingTop: "55px", height: "100%" }}>
            <Container style={{ maxWidth: "100vw", margin: "0", paddingLeft: "5vw", paddingRight: "5vw", paddingTop: "5vh", border: "0" }}>
                <div className={lora.className}>
                    <h1 style={{ color: "black", textAlign: "center" }}>Resources</h1>
                </div>
                <div className={cabin.className}>
                    <br></br>
                    {/* Resources page description */}
                    <p className={styles.splashdesc} style={{color:"black", textAlign:"center"}}>
                        Resources such as events, financial aid, and mental health support are crucial for foster children, 
                        providing emotional, educational, and social support. These resources offer counseling, academic assistance, 
                        and connections with peers and positive role models, helping foster children navigate trauma and instability. 
                        They empower children with essential life skills and ensure their rights are upheld through advocacy 
                        and legal aid services, fostering resilience and supporting successful transitions into adulthood.
                    </p>
                </div>
            </Container>
            <ModelSearch model="Resources" choices={["Name", "Location", "Hours", "Type", "County"]}/>
            {/* All of the resource cards */}
            <Container fluid={true} style={{}}>
                <Row style={{ padding: "3vw", paddingTop: "2rem", justifyContent: "space-evenly" }}>
                    {entries.map((res) => (
                        <Col xs style={{ paddingBottom: "2rem" }}> <ResourceCard resource={JSON.stringify(res)} /> </Col>
                    ))}
                </Row>
            </Container>
            {/* Pagination component */}
            <Pagination
                num_instances={num_instances}
                path={"resources"}
                search={search}
                sort={sort}
                asc={asc}
            />
            <h3 className={lora.className} style={{ color: "black", paddingBottom: "20px", paddingTop: "10px" }}>
                Number of Instances: {num_instances}
            </h3>
        </main>
    )
}