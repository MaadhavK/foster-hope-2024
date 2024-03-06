"use client"
import styles from "../../page.module.css";
import resData from "../../data/resources.json";
import { Row, Col, Container, Button} from "react-bootstrap";
import YouTube from 'react-youtube';

import { Lora, Cabin} from "next/font/google";
import Link from "next/link";

const lora = Lora({weight: '400', subsets: ['latin']})
const cabin = Cabin({weight: '400', subsets: ['latin']})


export default function resPage ({params}) {
    const id = params.name
    const data = resData
    const resources = data?.resources
    const res = resources.find(b => b.id == id)
    const videoId = new URLSearchParams(new URL(res.vid_url).search).get("v")
    return (
        <div style={{minHeight:"100vh", backgroundColor:"#ffffff", paddingTop:"55px"}}>
            <div style={{textAlign:"center", color:"black", height:"30vh", display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
                <h1 className={lora.className} style={{fontSize:"3rem", zIndex:"1"}}>{res.name}</h1>
            </div> 
            <div style={{backgroundColor:"#f8f9fa"}}> 
                <Container fluid={true} style={{padding:"10vh"}}>
                    <Row>
                        <Col style={{minWidth:"400px", paddingBottom:"5vh"}}>
                            <img src={res.img_url} alt="res image" style={{objectFit:"contain", height:"400px", minWidth:"400px", maxWidth:"40vw"}}/>
                        </Col>
                        <Col d-flex={true} style={{minWidth:"400px", alignItems:"center", alignContent:"center", justifyContent:"center", paddingRight:"30px"}}>
                            <p className={cabin.className} style={{color:"black", fontSize:"1.25rem"}}>{res.description}</p>
                            <div style={{height:"2rem", marginTop:"20px", color:"black"}}>
                                <div className={cabin.className} style={{fontSize:"1.2rem", textAlign:"left", float:"left", clear:"none", display:"inline"}}>
                                    <b>Location:</b>
                                </div>
                                <div className={cabin.className} style={{fontSize:"1.2rem", textAlign:"right", float:"right", clear:"none", display:"inline"}}>
                                    {res.location}
                                </div>
                            </div>
                            <div style={{ height:"2rem", color:"black"}}>
                                <div className={cabin.className} style={{fontSize:"1.2rem", textAlign:"left", float:"left", clear:"none", display:"inline"}}>
                                    <b>Type:</b>
                                </div>
                                <div className={cabin.className} style={{fontSize:"1.2rem", textAlign:"right", float:"right", clear:"none", display:"inline"}}>
                                    {res.type}
                                </div>
                            </div>
                            <div style={{height:"2rem", color:"black"}}>
                                <div className={cabin.className} style={{fontSize:"1.2rem", textAlign:"left", float:"left", clear:"none", display:"inline"}}>
                                    <b>Reviews:</b>
                                </div>
                                <div className={cabin.className} style={{fontSize:"1.2rem", textAlign:"right", float:"right", clear:"none", display:"inline"}}>
                                    {res.reviews}
                                </div>
                            </div>
                            <br></br>
                            <Button className={cabin.className} variant="outline-dark" href={res.website} style={{width:"150px"}}>Website</Button>
                        </Col>
                    </Row>
                    <Row>
                        <div className="col-md-12 text-center mt-5">
                            <YouTube videoId={videoId} />
                        </div>

                    </Row>
                </Container>
            </div>
        </div>
    )
}