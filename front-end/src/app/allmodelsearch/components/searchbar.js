'use client'
 
import { useSearchParams } from 'next/navigation'
import styles from "../../page.module.css";
import { Row, Col, Container, Tab, Tabs } from "react-bootstrap";
import { Lora, Cabin } from "next/font/google";
import { useEffect, useState } from 'react';

const lora = Lora({ weight: '400', subsets: ['latin'] })
const cabin = Cabin({ weight: '400', subsets: ['latin'] })

import CountyCard from "../../counties/components/countycard";
import OrgCard from "../../organizations/components/orgCard";
import ResourceCard from "../../resources/components/resourcecard";
import Pagination from "../../components/pagination.js"

export const getCounties = async () => {
  const response = await fetch('http://api.foster-hope.com/counties/all_counties');
  return await response.json();
}
export const getOrgs = async () => {
  const response = await fetch('http://api.foster-hope.com/orgs/all_orgs');
  return await response.json();
}
export const getResources = async () => {
  const response = await fetch(`http://api.foster-hope.com/resources/all_resources`)
  return await response.json();
}

export default async function SearchBar() {
  const searchParams = useSearchParams()

  const [search, setSearch] = useState(null);
  useEffect(() => {
    setSearch(searchParams.get('search'));
  }, [searchParams]);

  // This will be logged on the server during the initial render
  // and on the client on subsequent navigations.
  // console.log(search)


  const counties = await getCounties();
  const orgs = await getOrgs();
  const resources = await getResources();

  // Params for pagination
  const page = searchParams["page"] ?? 1
  const per_page = searchParams["per_page"] ?? 16
  const start = (Number(page) - 1) * Number(per_page)
  const end = start + Number(per_page)
  const num_instances_counties = Object.keys(counties.data).length
  const num_instances_orgs = Object.keys(orgs.data).length
  const num_instances_resources = Object.keys(resources.data).length

  // Page slice
  const county_entries = counties.data.slice(start, end)
  const orgs_entries = orgs.data.slice(start, end)
  const resources_entries = resources.data.slice(start, end)

  return (
    <main className={styles.main} style={{ backgroundColor: "#f8f9fa" }}>
      <Container style={{ maxWidth: "100vw", padding: "0", margin: "0", backgroundColor: "#c7c7c7" }}>

        <div style={{ backgroundColor: "#c7c7c7", paddingLeft: "5vw", paddingRight: "5vw", paddingTop: "15vh", paddingBottom: "20px", color: "black" }}>
          <h1 className={lora.className} style={{ fontSize: "3rem", textAlign: "center" }}>Search results for "{search}"</h1>
          
          <Tabs defaultActiveKey="counties" className="tabs" justify>
            <Tab eventKey="counties" title="Counties">
              {/* Render Counties content */}
            <Container fluid={true} style = {{}}>
                <Row style={{padding:"3vw", paddingTop:"2rem", justifyContent:"space-evenly"}}>
                    {county_entries.map((county) => (
                        <Col xs style={{paddingBottom: "2rem"}}> <CountyCard county={JSON.stringify(county)}/></Col>
                   
                   ))}
                </Row>
                
            </Container>
            <Pagination
                num_instances={num_instances_counties}
                path = {"counties"}
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
                    {orgs_entries.map((organization) => (
                        <Col xs style={{paddingBottom: "2rem"}}> <OrgCard org={organization}/> </Col>
                    ))}
                </Row>
            </Container>
            <Pagination
                num_instances={num_instances_orgs}
                path={"organizations"}
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
                    {resources_entries.map((res) => (
                        <Col xs style={{ paddingBottom: "2rem" }}> <ResourceCard resource={JSON.stringify(res)} /> </Col>
                    ))}
                </Row>
            </Container>
            {/* Pagination component */}
            <Pagination
                num_instances={resources_entries}
                path={"resources"}
            />
            <h3 className={lora.className} style={{ color: "black", paddingBottom: "20px", paddingTop: "10px" }}>
                Number of Instances: {num_instances_resources}
            </h3>
            </Tab>
          </Tabs>
        </div>
      </Container>
    </main>
  )
}
