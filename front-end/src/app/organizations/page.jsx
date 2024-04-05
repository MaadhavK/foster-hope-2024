// import Counties from "./components/countyCardList"
import { Row, Col, Container, Card, Button} from "react-bootstrap";
import styles from "../page.module.css";
import ModelSearch from "../components/modelSearch.js";

import Link from "next/link";

import { Lora, Cabin} from "next/font/google";
const lora = Lora({weight: '400', subsets: ['latin']})
const cabin = Cabin({weight: '400', subsets: ['latin']})
import OrgCard from "./components/orgCard.js"
import Pagination from "../components/pagination.js"


async function getOrgs() {
    const response = await fetch('http://api.foster-hope.com/orgs/all_orgs');
    return await response.json();
}

async function searchAndSort(search, sort, asc){
    const response = await fetch('http://api.foster-hope.com/orgs/all_orgs?' + 
    (search != null ? "search_query=" + search + (sort != null ? "&" : "") : "") + 
    (sort != null ? "sort=" + (asc ? "" : "-") + sort : "") +
    (asc != null ? "&asc=" + asc : ""));

    const result = await response.json();
    return result;
}


// model page for counties
export default async function listCounties( {searchParams} ) {
    // get params for search and sort from url params
    const search = searchParams["search"] ?? null
    const sort = Number(searchParams["sort"] ?? 0)
    const asc = searchParams["asc"] == "true" ? true : false;
    
    // switch statement to encode the sort by from number
    var sortParam = null;
    switch (sort) {
        case 0:
            sortParam = null;
            break;
        case 1:
            sortParam = "name";
            break;
        case 2:
            sortParam = "type";
            break;
        case 3:
            sortParam = "rating";
            break;
        case 4:
            sortParam = "location";
            break;
        case 5:
            sortParam = "operation_hours";
            break;
    }

    // if sort or search active, call api for it
    var orgs = null;
    if(search != null || sortParam != null){
        orgs = await searchAndSort(search, sortParam, asc);
    } else {
        orgs = await getOrgs();
    }
    
    // Pagination logic
    const page = searchParams["page"] ?? 1
    const per_page = searchParams["per_page"] ?? 16
    const start = (Number(page) - 1) * Number(per_page)
    const end = start + Number(per_page)
    const num_instances = Object.keys(orgs.data).length

    // This page's page entries
    const entries = orgs.data.slice(start, end)

    return (
        <main className={styles.main} style={{backgroundColor:"white", width:"100vw", paddingTop:"55px", height:"100%"}}>
            <Container style={{maxWidth:"100vw", margin:"0", paddingLeft:"5vw", paddingRight:"5vw", paddingTop:"5vh", border:"0"}}>
                <div className={lora.className}>
                    <h1 style={{color:"black", textAlign:"center"}}>Organizations</h1>
                </div>
                {/* Organization page description */}
                <div className={cabin.className}>
                    <br></br>
                    <p className={styles.splashdesc} style={{color:"black", textAlign:"center"}}>
                        Foster support organizations and adoption agencies offer essential support for children in need, 
                        providing emotional, educational, and social assistance. They facilitate adoptions, ensuring children 
                        find permanent homes, while also offering ongoing support to foster and adoptive families. Through 
                        advocacy and legal aid, they protect children's rights and enable successful transitions into secure environments.
                    </p>
                </div>
            </Container>
            <ModelSearch model="Organizations" choices={["Name", "Type", "Rating", "Location", "Operation Hours"]}/>
            <br></br>
            <br></br>
            <h4 className={lora.className} style={{color:"black", paddingBottom:"20px"}}>
                Number of Instances: {num_instances}
            </h4>
            {/* Current page instance cards */}
            <Container fluid={true} style = {{}}>
                <Row style={{padding:"3vw", paddingTop:"2rem", justifyContent:"space-evenly"}}>
                    {entries.map((organization) => (
                        <Col xs style={{paddingBottom: "2rem"}}> <OrgCard org={organization} query={search}/> </Col>
                    ))}
                </Row>
            </Container>
            <Pagination
                num_instances={num_instances}
                path={"organizations"}
                search={search}
                sort={sort}
                asc={asc}
            />
            <br></br>
        </main>
    )
}