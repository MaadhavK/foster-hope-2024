
import styles from "../../page.module.css";
// import React, { useEffect, useState } from 'react';
import countiesData from "../../data/counties.json";
import YoutubeEmbed from "@/app/components/youtube";
import { Row, Col, Container } from "react-bootstrap";
import "../counties.css";
import YouTube from 'react-youtube';

import { Lora, Cabin} from "next/font/google";

const lora = Lora({weight: '400', subsets: ['latin']})
const cabin = Cabin({weight: '400', subsets: ['latin']})

async function getCounties() {
    const response = await fetch('https://api.foster-hope.com/counties/all_counties');
    return await response.json();
}


export default async function CountyPage ({params}) {


    const data = await getCounties()
    const id = params.name.replace("_", ' ');
    const counties = data["data"]
    const county = counties.find(b => b.county == id)

    
    return (
        <div style={{minHeight:"100vh", backgroundColor:"#ffffff", paddingTop:"55px"}}>
            <div style={{textAlign:"center", color:"black", height:"30vh", display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
                <h1 className={lora.className} style={{fontSize:"3rem", zIndex:"1"}}>{county.county}</h1>
            </div> 
            <div style={{backgroundColor:"#f8f9fa"}}> 
                <Container fluid={true} style={{padding:"10vh"}}>
                    <Row>
                        <Col style={{minWidth:"400px", paddingBottom:"5vh"}}>
                            {/* County Image */}
                            <img className="countyimage" src={county.image} alt="county image" style={{objectFit:"contain", minWidth:"400px"}}/>
                        </Col>
                        <Col style={{minWidth:"400px", alignItems:"center", justifyContent:"center", margin:"0 auto"}}>
                            {/* Info */}
                            <p className={cabin.className} style={{color:"black", fontSize:"1.5rem"}}>{county.description}</p>
                            <div style={{width:"400px", height:"2rem", color:"black", marginTop:"20px"}}>
                                <div className={cabin.className} style={{fontSize:"1.3rem", textAlign:"left", float:"left", clear:"none", display:"inline"}}>
                                    Population:
                                </div>
                                <div className={cabin.className} style={{fontSize:"1.3rem", textAlign:"right", float:"right", clear:"none", display:"inline"}}>
                                    {county.population}
                                </div>
                            </div>
                            <div style={{width:"400px", height:"2rem", color:"black"}}>
                                <div className={cabin.className} style={{fontSize:"1.3rem", textAlign:"left", float:"left", clear:"none", display:"inline"}}>
                                    Number of Agencies
                                </div>
                                <div className={cabin.className} style={{fontSize:"1.3rem", textAlign:"right", float:"right", clear:"none", display:"inline"}}>
                                    {county.number_of_orgs}
                                </div>
                            </div>
                            <div style={{width:"400px", height:"2rem", color:"black"}}>
                                <div className={cabin.className} style={{fontSize:"1.3rem", textAlign:"left", float:"left", clear:"none", display:"inline"}}>
                                    Number of Foster Children:
                                </div>
                                <div className={cabin.className} style={{fontSize:"1.3rem", textAlign:"right", float:"right", clear:"none", display:"inline"}}>
                                    {county.number_of_foster_kids}
                                </div>
                            </div>
                            <div style={{width:"400px", height:"2rem", color:"black"}}>
                                <div className={cabin.className} style={{fontSize:"1.3rem", textAlign:"left", float:"left", clear:"none", display:"inline"}}>
                                    Number of Foster Homes:
                                </div>
                                <div className={cabin.className} style={{fontSize:"1.3rem", textAlign:"right", float:"right", clear:"none", display:"inline"}}>
                                    {county.number_of_homes}
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {/* Youtube video Placement*/}
                        <div className="col-md-12 text-center mt-5">
                            {/*<YouTube videoId={videoId} />*/}
                            <YoutubeEmbed params={county.media}></YoutubeEmbed>
                        </div>

                    </Row>
                </Container>
            </div>
            
            {/* Links */}
        </div>
    )
}