
import styles from "../../page.module.css";
// import React, { useEffect, useState } from 'react';
import countiesData from "../../data/counties.json";
import YoutubeEmbed from "@/app/components/youtube";
import OrgCard from "@/app/organizations/components/orgCard";
import { Row, Col, Container, Button } from "react-bootstrap";
import "../counties.css";
import YouTube from 'react-youtube';


import { Lora, Cabin} from "next/font/google";
import ResourceCard from "@/app/resources/components/resourcecard";

const lora = Lora({weight: '400', subsets: ['latin']})
const cabin = Cabin({weight: '400', subsets: ['latin']})

async function getCounties() {
    const response = await fetch('http://api.foster-hope.com/counties/all_counties');
    return await response.json();
}

async function getOrgs() {
    const response = await fetch("https://api.foster-hope.com/orgs/all_orgs");
    return await response.json();
}

async function getResources() {
    const response = await fetch('https://api.foster-hope.com/resources/all_resources');
    return await response.json();
}

// async function getOrg(id) {
//     const req = "http://api.foster-hope.com/orgs/single_org?" + id
//     const response = await fetch(req)
//     return await response.json();
// }

export default async function CountyPage ({params}) {


    const data = await getCounties()
    const id = params.name.replaceAll("_", ' ')
    const counties = data["data"]
    const county = counties.find(b => b.county == id)

    const orgData = await getOrgs()
    const orgs = orgData["data"]    
    const resData = await getResources()
    const res = resData["data"]

    return (
        <div style={{minHeight:"100vh", backgroundColor:"#ffffff", paddingTop:"55px"}}>
            <div style={{textAlign:"center", color:"black", height:"30vh", display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
                <h1 className={lora.className} style={{fontSize:"3rem", zIndex:"1"}}>{county.county} County</h1>
            </div> 
            <div style={{backgroundColor:"#f8f9fa"}}> 
                <Container fluid={true} style={{padding:"5vw"}}>
                    <Row>
                        <Col style={{minWidth:"400px", paddingBottom:"5vh"}}>
                            {/* County Image */}
                            <img className="countyimage" src={county.image} alt="county image" style={{objectFit:"contain", minWidth:"400px"}}/>
                        </Col>
                        <Col style={{minWidth:"400px", alignItems:"center", justifyContent:"center", margin:"0 auto"}}>
                            {/* Info */}
                            <div style={{maxWidth:"400px", height:"2rem", color:"black", marginTop:"20px", margin:"0 auto"}}>
                                <div className={cabin.className} style={{fontSize:"1.3rem", textAlign:"left", float:"left", clear:"none", display:"inline"}}>
                                    Population:
                                </div>
                                <div className={cabin.className} style={{fontSize:"1.3rem", textAlign:"right", float:"right", clear:"none", display:"inline"}}>
                                    {county.population}
                                </div>
                            </div>
                            <div style={{maxWidth:"400px", height:"2rem", color:"black", margin:"0 auto"}}>
                                <div className={cabin.className} style={{fontSize:"1.3rem", textAlign:"left", float:"left", clear:"none", display:"inline"}}>
                                    Number of Agencies
                                </div>
                                <div className={cabin.className} style={{fontSize:"1.3rem", textAlign:"right", float:"right", clear:"none", display:"inline"}}>
                                    {county.number_of_orgs}
                                </div>
                            </div>
                            <div style={{maxWidth:"400px", height:"2rem", color:"black", margin:"0 auto"}}>
                                <div className={cabin.className} style={{fontSize:"1.3rem", textAlign:"left", float:"left", clear:"none", display:"inline"}}>
                                    Number of Foster Children:
                                </div>
                                <div className={cabin.className} style={{fontSize:"1.3rem", textAlign:"right", float:"right", clear:"none", display:"inline"}}>
                                    {county.number_of_foster_kids}
                                </div>
                            </div>
                            <div style={{maxWidth:"400px", height:"2rem", color:"black", margin:"0 auto"}}>
                                <div className={cabin.className} style={{fontSize:"1.3rem", textAlign:"left", float:"left", clear:"none", display:"inline"}}>
                                    Number of Foster Homes:
                                </div>
                                <div className={cabin.className} style={{fontSize:"1.3rem", textAlign:"right", float:"right", clear:"none", display:"inline"}}>
                                    {county.number_of_homes}
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row style={{padding:"5vw", paddingTop:"30px", paddingBottom:"0"}}>
                        <p className={cabin.className} style={{color:"black", fontSize:"1.3rem"}}>{county.description}</p>
                    </Row>
                    <Row style={{paddingBottom:"5vw"}}>
                        {/* Youtube video Placement*/}
                        <div className="col-md-12 text-center mt-5">
                            {/*<YouTube videoId={videoId} />*/}
                            <YoutubeEmbed params={county.media}></YoutubeEmbed>
                        </div>

                    </Row>
                    <Row style={{paddingBottom:"20px"}}>
                        <h3 className={lora.className} style={{textAlign:"center"}}>
                            Organizations in {county.county} County:
                        </h3>
                    </Row>
                    <Row style={{alignItems:"center", padding:"5vw", paddingTop:"0", justifyContent:"space-evenly"}}>
                            {county.organizations.map((id) => {
                                return (
                                    <Col xs style={{paddingBottom: "3rem", width:"20rem"}}> <OrgCard org={orgs.find(b => b.id == id)}/> </Col>
                                    // <div key={id} style={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"5px"}}>
                                    //     <Button variant="outline-dark" href={'organizations/' + id + "/"} style={{width:"400px"}}> {orgs.find(b => b.id == id).name}</Button>
                                    // </div>  
                                )
                            })}
                    </Row>
                    <Row style={{paddingBottom:"20px"}}>
                        <h3 className={lora.className} style={{textAlign:"center"}}>
                            Resources in {county.county} County:
                        </h3>
                    </Row>
                    <Row style={{alignItems:"center"}}>
                            {county.resources.map((id) => {
                                return (
                                <Col xs style={{paddingBottom: "3rem", width:"20rem"}}> <ResourceCard resource={JSON.stringify(res.find(b => b.id == id))}/> </Col>
                                // <div key={id} style={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"5px"}}>
                                //     <Button variant="outline-dark" href={'organizations/' + id + "/"} style={{width:"400px"}}> {res.find(b => b.id == id).name}</Button>
                                // </div>
                                )
                            })}
                    </Row>
                    <Row style={{paddingBottom:"20px"}}>
                        <h3 className={lora.className} style={{textAlign:"center"}}>
                            Organizations in {county.county} County:
                        </h3>
                    </Row>
                    <Row style={{alignItems:"center", padding:"5vw", paddingTop:"0", justifyContent:"space-evenly"}}>
                            {county.organizations.map((id) => {
                                return (
                                    <Col xs style={{paddingBottom: "3rem", width:"20rem"}}> <OrgCard org={orgs.find(b => b.id == id)}/> </Col>
                                    // <div key={id} style={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"5px"}}>
                                    //     <Button variant="outline-dark" href={'organizations/' + id + "/"} style={{width:"400px"}}> {orgs.find(b => b.id == id).name}</Button>
                                    // </div>  
                                )
                            })}
                    </Row>
                    <Row style={{paddingBottom:"20px"}}>
                        <h3 className={lora.className} style={{textAlign:"center"}}>
                            Resources in {county.county} County:
                        </h3>
                    </Row>
                    <Row style={{alignItems:"center"}}>
                            {county.resources.map((id) => {
                                return (
                                <Col xs style={{paddingBottom: "3rem", width:"20rem"}}> <ResourceCard resource={JSON.stringify(res.find(b => b.id == id))}/> </Col>
                                // <div key={id} style={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"5px"}}>
                                //     <Button variant="outline-dark" href={'organizations/' + id + "/"} style={{width:"400px"}}> {res.find(b => b.id == id).name}</Button>
                                // </div>
                                )
                            })}
                    </Row>

                    
                </Container>
            </div>
            
            {/* Links */}
        </div>
    )
}