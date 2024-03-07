import styles from "../../page.module.css";
import { Row, Col, Container, Button} from "react-bootstrap";

import { Lora, Cabin} from "next/font/google";
import Link from "next/link";

const lora = Lora({weight: '400', subsets: ['latin']})
const cabin = Cabin({weight: '400', subsets: ['latin']})

async function getCounties() {
    const response = await fetch('https://api.foster-hope.com/resources/all_resources');
    return await response.json();
}


export default async function resPage ({params}) {
    const id = params.name;
    const data = await getCounties();
    const resources = data?.data;
    const res = resources.find(b => b.id == id);

    const date = new Date();
    const offsetMinutes = date.getTimezoneOffset();
    const offsetMilliseconds = offsetMinutes * 60 * 1000;
    const currentDate = new Date(date.getTime() - offsetMilliseconds);
    const day = currentDate.getDay() - 1;

    return (
        <div style={{minHeight:"100vh", backgroundColor:"#ffffff", paddingTop:"55px"}}>
            <div style={{textAlign:"center", color:"black", height:"30vh", display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
                <h1 className={lora.className} style={{fontSize:"3rem", color:"black"}}>{res.name}</h1>
                <p className={cabin.className} style={{color:"black"}}>{res.location}</p>
            </div> 
            <div style={{backgroundColor:"#f8f9fa"}}> 
                <Container fluid={true} style={{padding:"10vh"}}>
                    <Row>
                        <Col style={{minWidth:"400px", paddingBottom:"5vh"}}>
                            <img src={res.media} alt="res image" style={{objectFit:"contain", height:"400px", minWidth:"400px", maxWidth:"40vw"}}/>
                        </Col>
                        <Col style={{minWidth:"400px", alignItems:"center", alignContent:"center", justifyContent:"center", paddingRight:"30px"}}>
                            <p className={cabin.className} style={{color:"black", fontSize:"1.25rem"}}>{res.description}</p>
                            <div style={{ height:"2rem", paddingTop:"20px", color:"black"}}>
                                <div className={cabin.className} style={{fontSize:"1.2rem", textAlign:"left", float:"left", clear:"none", display:"inline"}}>
                                    <b>Type:</b>
                                </div>
                                <div className={cabin.className} style={{fontSize:"1.2rem", textAlign:"right", float:"right", clear:"none", display:"inline"}}>
                                    {res.type}
                                </div>
                            </div>
                            <br></br>
                            <div style={{height:"2rem", color:"black"}}>
                                <div className={cabin.className} style={{fontSize:"1.2rem", textAlign:"left", float:"left", clear:"none", display:"inline"}}>
                                    <b>Location:</b>
                                </div>
                                <div className={cabin.className} style={{fontSize:"1.2rem", textAlign:"right", float:"right", clear:"none", display:"inline"}}>
                                    {res.county}
                                </div>
                            </div>
                            <div style={{height:"2rem", color:"black"}}>
                                <div className={cabin.className} style={{fontSize:"1.2rem", textAlign:"left", float:"left", clear:"none", display:"inline"}}>
                                    <b>Hours:</b>
                                </div>
                                <div className={cabin.className} style={{fontSize:"1.2rem", textAlign:"right", float:"right", clear:"none", display:"inline"}}>
                                    {JSON.parse(res.hours)[day]}
                                </div>
                            </div>
                            <br></br>
                            <Button className={cabin.className} variant="outline-dark" href={res.website} style={{width:"150px"}}>Website</Button>
                        </Col>
                    </Row>
                    <Row>
                        {/* <div className="col-md-12 text-center mt-5">
                            <YouTube videoId={videoId} />
                        </div> */}

                    </Row>
                </Container>
            </div>
        </div>
    )
}