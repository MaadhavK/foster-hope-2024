import styles from "../../page.module.css";
import { Row, Col, Container, Button} from "react-bootstrap";
import { Lora, Cabin} from "next/font/google";
import CountyCard from "../../counties/components/countycard";
import ResourceCard from "../../resources/components/resourcecard";
import Link from "next/link";

const lora = Lora({weight: '400', subsets: ['latin']})
const cabin = Cabin({weight: '400', subsets: ['latin']})

// Data for orgs
async function getOrgs() {
    const response = await fetch('http://api.foster-hope.com/orgs/all_orgs');
    return await response.json();
}

// Data for related counties
async function getCounties() {
    const response = await fetch('http://api.foster-hope.com/counties/all_counties');
    return await response.json();
}

// Data for related resources
async function getResources() {
    const response = await fetch('http://api.foster-hope.com/resources/all_resources');
    return await response.json();
}



export default async function OrgPage ({params}) {
    const id = params.name
    const data = await getOrgs()
    const orgs = data?.data
    const org = orgs.find(b => b.id == id)

    // Logic to parse the open hours
    const date = new Date();
    const offsetMinutes = date.getTimezoneOffset();
    const offsetMilliseconds = offsetMinutes * 60 * 1000;
    const currentDate = new Date(date.getTime() - offsetMilliseconds);
    const day = currentDate.getDay() - 1;

    const countydata = await getCounties();
    const counties = countydata["data"]
    const county = counties.find(b => b.county == org.county)
    const countyPath = "../counties/" + org.county.replaceAll(' ', '_') +"/"
    // console.log(org.resources)

    // return (<div></div>)
    const resData = await getResources()
    const resources = resData["data"]

    return (
        <div style={{minHeight:"100vh", backgroundColor:"lightblue", paddingTop:"55px"}}>
            <div style={{textAlign:"center", color:"black", height:"30vh", display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
                <h1 className={lora.className} style={{fontSize:"3rem", color:"black", zIndex:"1"}}>{org.name}</h1>
                <p className={cabin.className} style={{color:"black"}}>{org.location}</p>
            </div> 
            {/* Organization information */}
            <div style={{backgroundColor:"#f8f9fa"}}> 
                <Container fluid={true} style={{padding:"10vh"}}>
                    <Row style={{paddingBottom:"50px"}}>
                        <Col style={{minWidth:"400px", paddingBottom:"5vh"}}>
                            <img src={org.image} alt="org image" style={{objectFit:"contain", height:"400px", maxWidth:"40vw", minWidth:"400px"}}/>
                        </Col>
                        <Col style={{minWidth:"400px", alignItems:"center", alignContent:"center", justifyContent:"center", paddingRight:"30px"}}>
                            <p className={cabin.className} style={{color:"black", fontSize:"1.25rem"}}>{org.description}</p>
                            <div style={{height:"2rem", marginTop:"20px", color:"black"}}>
                                <div className={cabin.className} style={{fontSize:"1.2rem", textAlign:"left", float:"left", clear:"none", display:"inline"}}>
                                    <b>County:</b>
                                </div>
                                <div className={cabin.className} style={{fontSize:"1.2rem", textAlign:"right", float:"right", clear:"none", display:"inline"}}>
                                    {org.county}
                                </div>
                            </div>
                            <div style={{ height:"2rem", color:"black"}}>
                                <div className={cabin.className} style={{fontSize:"1.2rem", textAlign:"left", float:"left", clear:"none", display:"inline"}}>
                                    <b>Rating:</b>
                                </div>
                                <div className={cabin.className} style={{fontSize:"1.2rem", textAlign:"right", float:"right", clear:"none", display:"inline"}}>
                                    {org.rating}
                                </div>
                            </div>
                            <div style={{height:"2rem", color:"black"}}>
                                <div className={cabin.className} style={{fontSize:"1.2rem", textAlign:"left", float:"left", clear:"none", display:"inline"}}>
                                    <b>Today's Hours:</b>
                                </div>
                                <div className={cabin.className} style={{fontSize:"1.2rem", textAlign:"right", float:"right", clear:"none", display:"inline"}}>
                                    {JSON.parse(org.operation_hours)[day]}
                                </div>
                            </div>
                            <div style={{height:"2rem", color:"black"}}>
                                <div className={cabin.className} style={{fontSize:"1.2rem", textAlign:"left", float:"left", clear:"none", display:"inline"}}>
                                    <b>Type:</b>
                                </div>
                                <div className={cabin.className} style={{fontSize:"1.2rem", textAlign:"right", float:"right", clear:"none", display:"inline"}}>
                                    {JSON.parse(org.type)[0].replaceAll('_', ' ')}
                                </div>
                            </div>
                            <br></br>
                            <Button className={cabin.className} variant="outline-dark" href={org.website} style={{width:"150px"}}>Website</Button>
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
                                src={org.map}>
                            </iframe>                     
                            {/* <GMapEmbed params={org.map}></GMapEmbed> */}
                        </Col>
                        {/* Related County */}
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
                    {/* Related Resources */}
                    <Row>
                        <h3 className={lora.className} style={{textAlign:"center", width:"100%", padding:"20px"}}>
                                Related Resources
                        </h3>
                        {org.resources.map((id) => {
                            return (
                                <Col xs style={{paddingBottom: "3rem", width:"20rem"}}> <ResourceCard resource={JSON.stringify(resources.find(b => b.id == id))}/> </Col>

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