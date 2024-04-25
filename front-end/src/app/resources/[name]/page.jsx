import styles from "../../page.module.css";
import { Row, Col, Container, Button} from "react-bootstrap";

import { Lora, Cabin} from "next/font/google";
import CountyCard from "../../counties/components/countycard";
import OrgCard from "../../organizations/components/orgCard";
import Link from "next/link";

const lora = Lora({weight: '400', subsets: ['latin']})
const cabin = Cabin({weight: '400', subsets: ['latin']})

// Resources data
async function getResources() {
    const response = await fetch(`http://api.foster-hope.com/resources/all_resources`);
    return await response.json();
}

// Get related orgs data
async function getOrgs() {
    const response = await fetch('http://api.foster-hope.com/orgs/all_orgs');
    return await response.json();
}

// Get related counties data
async function getCounties() {
    const response = await fetch('http://api.foster-hope.com/counties/all_counties');
    return await response.json();
}

export default async function resPage ({params}) {
    const id = params.name;
    
    const data = await getResources();
    // Find this instance
    const resources = data?.data;
    const res = resources.find(b => b.id == id);
    
    // Date/time logic
    const date = new Date();
    const offsetMinutes = date.getTimezoneOffset();
    const offsetMilliseconds = offsetMinutes * 60 * 1000;
    const currentDate = new Date(date.getTime() - offsetMilliseconds);
    const day = currentDate.getDay() - 1;

    const countydata = await getCounties()
    const counties = countydata["data"]
    const county = counties.find(b => b.county == res.county)
    const countyPath = "../counties/"+ res.county + "/";

    let hours = res?.hours;

    if(res.type != "event"){
        console.log("what")
        hours = JSON.parse(res?.hours)[day]
    }

    const orgdata = await getOrgs()
    const orgs = orgdata["data"]

    return (
        <div style={{minHeight:"100vh", backgroundColor:"lightblue", paddingTop:"55px"}}>
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
                        {/* Organization info */}
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
                                    {hours}
                                </div>
                            </div>
                            <br></br>
                            {/* <Button className={cabin.className} variant="outline-dark" href={countyPath} style={{width:"150px"}}>county</Button> */}
                            <Button className={cabin.className} variant="outline-dark" href={res.website} style={{width:"150px"}}>Website</Button>
                        </Col>
                    </Row>
                    <Row style={{justifyContent:"space-around", padding:"5vw"}}>
                        <Col>
                            <h3 className={lora.className} style={{textAlign:"center", paddingBottom:"20px"}}>
                                Map
                            </h3>
                            <iframe
                                width="100%"
                                height="35rem"
                                style={{border: "0", minWidth:"300px", minHeight:"35rem", marginBottom:"50px"}}
                                loading="lazy"
                                allowfullscreen
                                referrerpolicy="no-referrer-when-downgrade"
                                src={res.map}>
                            </iframe>
                            {/* <GMapEmbed params={org.map}></GMapEmbed> */}
                        </Col>
                        {/* Related county */}
                        <Col style={{}}>
                            <h3 className={lora.className} style={{textAlign:"center", paddingBottom:"20px"}}>
                                County
                            </h3>
                            <CountyCard county={JSON.stringify(county)}/>
                            {/* <div key={id} style={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"5px"}}>
                                <Button variant="outline-dark" href={countyPath} style={{width:"400px"}}> {org.county} County</Button>
                            </div> */}
                        </Col>
                    </Row>
                    {/* Related organizations */}
                    <Row>
                        <h3 className={lora.className} style={{textAlign:"center", paddingBottom:"20px"}}>
                                Related Organizations
                        </h3>
                        {res.organizations.map((id) => {
                            return (
                                <Col xs style={{paddingBottom: "3rem", width:"20rem"}}> <OrgCard org={orgs.find(b => b.id == id)}/> </Col>

                            // <div key={id} style={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"5px"}}>
                            //     <Button variant="outline-dark" href={'organizations/' + id + "/"} style={{width:"400px"}}> {res.find(b => b.id == id).name}</Button>
                            // </div>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        </div>
    )
}