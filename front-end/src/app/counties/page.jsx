import { Row, Col, Container, Card, Button, Form} from "react-bootstrap";
import styles from "../page.module.css";
import ModelSearch from "../components/modelSearch"


import { Lora, Cabin} from "next/font/google";
const lora = Lora({weight: '400', subsets: ['latin']})
const cabin = Cabin({weight: '400', subsets: ['latin']})
import CountyCard from "./components/countycard";
import Pagination from "../components/pagination.js"


export const getCounties = async ()=> {
    const response = await fetch('http://api.foster-hope.com/counties/all_counties');
    return await response.json();
}

async function searchAndSort(search, sort, asc){
    console.log('http://api.foster-hope.com/counties/all_counties?' + 
    (search != null ? "search_query=" + search + (sort != null ? "&" : "") : "") + 
    (sort != null ? "sort=" + (asc ? "" : "-") + sort : ""))
    const response = await fetch('http://api.foster-hope.com/counties/all_counties?' + 
    (search != null ? "search_query=" + search + (sort != null ? "&" : "") : "") + 
    (sort != null ? "sort=" + (asc ? "" : "-") + sort : ""));
    const result = await response.json();
    return result;
}


export default async function listCounties( {searchParams} ) {
    const search = searchParams["search"] ?? null
    const sort = Number(searchParams["sort"] ?? 0)
    const asc = searchParams["asc"] == "true" ? true : false;
    
    var sortParam = null;
    switch (sort) {
        case 0:
            sortParam = null;
            break;
        case 1:
            sortParam = "county";
            break;
        case 2:
            sortParam = "population";
            break;
        case 3:
            sortParam = "number_of_foster_kids";
            break;
        case 4:
            sortParam = "number_of_orgs";
            break;
        case 5:
            sortParam = "number_of_homes";
            break;
    }

    var counties = null;

    if(search != null || sortParam != null){
        counties = await searchAndSort(search, sortParam, asc);
    } else {
        counties = await getCounties();
    } 

    // Params for pagination
    const page = searchParams["page"] ?? 1
    const per_page = searchParams["per_page"] ?? 16
    const start = (Number(page) - 1) * Number(per_page)
    const end = start + Number(per_page)
    const num_instances = Object.keys(counties.data).length

    // Page slice
    const entries = counties.data.slice(start, end)

    return (      
        <main className={styles.main} style={{backgroundColor:"white", width:"100vw", paddingTop:"55px", height:"100%"}}>
            <Container style={{maxWidth:"100vw", margin:"0", paddingLeft:"5vw", paddingRight:"5vw", paddingTop:"5vh", border:"0"}}>
                <div className={lora.className}>
                    <h1 style={{color:"black", textAlign:"center"}}>Counties</h1>
                </div>
                <div className={cabin.className}>
                    <br></br>
                    {/* Page description */}
                    <p className={styles.splashdesc} style={{textAlign:"center"}}>
                        Counties plays a vital role in the foster care system by overseeing placements and ensuring the safety of children
                        within its jurisdiction. Collaborating with local partners, counties provide support to foster
                        families through counseling, healthcare, and education. This local approach is crucial for safeguarding
                        the well-being and future of children in foster care.
                    </p>
                </div>
            </Container>
            {/* Search bar functionality */}
            <ModelSearch model="Counties" choices={["County Name", "Population", "Num of Foster Children", "Num of Orgs", "Num of Foster Homes"]}/>

            <br></br>
            <br></br>
            <h3 className={lora.className} style={{ color: "black", paddingBottom: "20px", paddingTop: "10px" }}>
                Number of Instances: {num_instances}
            </h3>

            {/* All of the county pages in the page */}
            <Container fluid={true} style = {{}}>
                <Row style={{padding:"3vw", paddingTop:"2rem", justifyContent:"space-evenly"}}>
                    {entries.map((county) => (
                        <Col xs style={{paddingBottom: "2rem"}}> <CountyCard county={JSON.stringify(county)} query={search}/></Col>
                   ))}
                </Row>
                
            </Container>
            <Pagination
                num_instances={num_instances}
                path = {"counties"}
                search = {search}
                sort = {sort}
                asc = {asc}
            />
            
        </main>
    )
}
