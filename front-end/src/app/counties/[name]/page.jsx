"use client"
import styles from "../../page.module.css";
import countiesData from "../../data/counties.json";
import { Row, Col, Container } from "react-bootstrap";
import "../counties.css";
import YouTube from 'react-youtube';

import { Lora, Cabin} from "next/font/google";

const lora = Lora({weight: '400', subsets: ['latin']})
const cabin = Cabin({weight: '400', subsets: ['latin']})


export default function CountyPage ({params}) {
    const id = params.name
    const data = countiesData
    const counties = data?.counties
    const county = counties.find(b => b.id == id)
    const videoId = new URLSearchParams(new URL(county.vid_url).search).get("v")
    return (
        <div style={{minHeight:"100vh", backgroundColor:"#ffffff", paddingTop:"55px"}}>
            <div style={{textAlign:"center", color:"black", height:"30vh", display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
                <h1 className={lora.className} style={{fontSize:"3rem", zIndex:"1"}}>{county.name}</h1>
            </div> 
            <div style={{backgroundColor:"#f8f9fa"}}> 
                <Container fluid={true} style={{padding:"10vh"}}>
                    <Row>
                        <Col style={{minWidth:"400px", paddingBottom:"5vh"}}>
                            {/* County Image */}
                            <img className="countyimage" src={county.img_url} alt="county image" style={{objectFit:"contain", minWidth:"400px"}}/>
                        </Col>
                        <Col style={{minWidth:"400px", alignItems:"center", justifyContent:"center", margin:"0 auto"}}>
                            {/* Info */}
                            <p className={cabin.className} style={{color:"black", fontSize:"1.5rem"}}>{county.description}</p>
                            <div style={{width:"400px", height:"2rem", marginTop:"20px"}}>
                                <div className={cabin.className} style={{fontSize:"1.3rem", textAlign:"left", float:"left", clear:"none", display:"inline"}}>
                                    Population:
                                </div>
                                <div className={cabin.className} style={{fontSize:"1.3rem", textAlign:"right", float:"right", clear:"none", display:"inline"}}>
                                    {county.population}
                                </div>
                            </div>
                            <div style={{width:"400px", height:"2rem"}}>
                                <div className={cabin.className} style={{fontSize:"1.3rem", textAlign:"left", float:"left", clear:"none", display:"inline"}}>
                                    Number of Agencies
                                </div>
                                <div className={cabin.className} style={{fontSize:"1.3rem", textAlign:"right", float:"right", clear:"none", display:"inline"}}>
                                    {county.num_agencies}
                                </div>
                            </div>
                            <div style={{width:"400px", height:"2rem"}}>
                                <div className={cabin.className} style={{fontSize:"1.3rem", textAlign:"left", float:"left", clear:"none", display:"inline"}}>
                                    Number of Foster Children:
                                </div>
                                <div className={cabin.className} style={{fontSize:"1.3rem", textAlign:"right", float:"right", clear:"none", display:"inline"}}>
                                    {county.num_foster_child}
                                </div>
                            </div>
                            <div style={{width:"400px", height:"2rem"}}>
                                <div className={cabin.className} style={{fontSize:"1.3rem", textAlign:"left", float:"left", clear:"none", display:"inline"}}>
                                    Number of Foster Homes:
                                </div>
                                <div className={cabin.className} style={{fontSize:"1.3rem", textAlign:"right", float:"right", clear:"none", display:"inline"}}>
                                    {county.num_foster_homes}
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {/* Youtube video Placement*/}
                        <div className="col-md-12 text-center mt-5">
                            <YouTube videoId={videoId} />
                        </div>

                    </Row>
                </Container>
            </div>
            
            {/* Links */}
        </div>
    )
}