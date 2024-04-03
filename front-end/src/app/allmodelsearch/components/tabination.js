'use client'
 
import { useRouter, useSearchParams} from 'next/navigation';
import styles from "../../page.module.css";
import { Row, Col, Container, Tab, Tabs } from "react-bootstrap";
import { Lora, Cabin } from "next/font/google";
const lora = Lora({ weight: '400', subsets: ['latin'] })
const cabin = Cabin({ weight: '400', subsets: ['latin'] })
import { useEffect, useState } from 'react';
import Pagination from "./pagination.js"

import CountyCard from "../../counties/components/countycard";
import OrgCard from "../../organizations/components/orgCard";
import ResourceCard from "../../resources/components/resourcecard";
import HighlightText from "../../components/HighlightText"



const Tabination = ({counties, orgs, resources, searchParams}) => {
    
    const router = useRouter()
    let searchTerm = searchParams["search"] ?? ""
    if(searchTerm.includes('/')){
        searchTerm = searchTerm.split('/')[0];
    }
    const searchURL = `allmodelsearch?search=${searchTerm}`
      // Params for pagination
    const [page, setPage] = useState(searchParams["page"] ?? 1);
    const per_page = searchParams["per_page"] ?? 16


    console.log(searchParams["page"])
    console.log(searchParams["per_page"])


    const start = (Number(page) - 1) * Number(per_page)
    const end = start + Number(per_page)


    const num_instances_counties = Object.keys(counties.data).length
    const num_instances_orgs = Object.keys(orgs.data).length
    const num_instances_resources = Object.keys(resources.data).length

    // Page slice
    const [county_entries, setCounties] = useState(counties.data.slice(start, end));
    //const county_entries = counties.data.slice(start, end)
    const [orgs_entries, setOrgs] = useState(orgs.data.slice(start, end));
    //const orgs_entries = orgs.data.slice(start, end)
    const [resources_entries, setResources] = useState(resources.data.slice(start, end));
    //const resources_entries = resources.data.slice(start, end)

    useEffect(() => {
        // Update the page state based on the searchParams["page"]
        setPage(searchParams["page"] ?? 1);
    }, [searchParams]);
    
    useEffect(() => {
        // Calculate start and end based on the updated page state
        const start = (Number(page) - 1) * Number(per_page);
        const end = start + Number(per_page);
    
        // Update the sliced data based on the updated page state
        setCounties(counties.data.slice(start, end));
        setOrgs(orgs.data.slice(start, end));
        setResources(resources.data.slice(start, end));
    }, [page, per_page, counties, orgs, resources]);

    const handleTabChange = (key) => {
        const per_page = searchParams["per_page"] ?? 16
        setPage(1);
        const start = (Number(page) - 1) * Number(per_page)
        const end = start + Number(per_page)
        console.log(start)
        console.log(end)
        setCounties(counties.data.slice(start, end))
        setOrgs(orgs.data.slice(start, end))
        setResources(resources.data.slice(start, end))
        router.push(`/${searchURL}/?page=1&per_page=${per_page}`);
    }
  return (

        <div style={{ backgroundColor: "#c7c7c7", paddingLeft: "5vw", paddingRight: "5vw", paddingTop: "15vh", paddingBottom: "20px", color: "black" }}>
          <h1 className={lora.className} style={{ fontSize: "3rem", textAlign: "center" }}>Search results for "{searchTerm}"</h1>
          
          <Tabs defaultActiveKey="counties" className="tabs" onSelect={(key) => handleTabChange(key)} justify>
            <Tab eventKey="counties" title="Counties">
              {/* Render Counties content */}
            <Container fluid={true} style = {{}}>
                    <Row style={{padding:"3vw", paddingTop:"2rem", justifyContent:"space-evenly"}}>
                        {county_entries.map((county, index) => (
                            <Col key={index} xs style={{ paddingBottom: "2rem" }}>
                                <CountyCard key={index} county={JSON.stringify(county)} />
                            </Col>
                        ))}
                    </Row>
            </Container>
            <Pagination
                num_instances={num_instances_counties}
                path={`${searchURL}`}
            />
            <br></br>
            <br></br>
            <h3 className={lora.className} style={{color:"black", paddingBottom:"20px"}}>
                Number of Instances: {num_instances_counties}
            </h3>
            </Tab>
            <Tab eventKey="orgs" title="Organizations">
              {/* Render Organizations content */}
              <Container fluid={true} style = {{}}>
                <Row style={{padding:"3vw", paddingTop:"2rem", justifyContent:"space-evenly"}}>
                {orgs_entries.map((organization, index) => (
                    <Col key={index} xs style={{ paddingBottom: "2rem" }}>
                        <OrgCard key={index} org={organization} />
                    </Col>
                ))}
                </Row>
            </Container>
            <Pagination
                num_instances={num_instances_orgs}
                path={`${searchURL}`}
            />
            <br></br>
            <p className={lora.className} style={{color:"black", paddingBottom:"20px"}}>
                Number of Instances: {num_instances_orgs}
            </p>
            </Tab>
            <Tab eventKey="resources" title="Resources">
              {/* Render Resources content */}
              <Container fluid={true} style={{}}>
                <Row style={{ padding: "3vw", paddingTop: "2rem", justifyContent: "space-evenly" }}>
                    {resources_entries.map((resource, index) => (
                        <Col key={index} xs style={{ paddingBottom: "2rem" }}>
                            <ResourceCard key={index} resource={JSON.stringify(resource)} />
                        </Col>
                    ))}

                </Row>
            </Container>
            {/* Pagination component */}
            <Pagination
                num_instances={num_instances_resources}
                path={`${searchURL}`}
            />
            <h3 className={lora.className} style={{ color: "black", paddingBottom: "20px", paddingTop: "10px" }}>
                Number of Instances: {num_instances_resources}
            </h3>
            </Tab>
          </Tabs>
        </div>
  )
}

export default Tabination;