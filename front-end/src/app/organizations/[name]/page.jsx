import styles from "../../page.module.css";
import { Row, Col, Container, Button} from "react-bootstrap";
import { Lora, Cabin} from "next/font/google";
import Link from "next/link";

const lora = Lora({weight: '400', subsets: ['latin']})
const cabin = Cabin({weight: '400', subsets: ['latin']})

async function getOrgs() {
    const response = await fetch('https://api.foster-hope.com/orgs/all_orgs');
    return await response.json();
}

export default async function OrgPage ({params}) {
    const id = params.name
    const data = await getOrgs()
    const orgs = data?.data
    const org = orgs.find(b => b.name.replaceAll(' ', '') == id)

    const date = new Date();
    const offsetMinutes = date.getTimezoneOffset();
    const offsetMilliseconds = offsetMinutes * 60 * 1000;
    const currentDate = new Date(date.getTime() - offsetMilliseconds);
    const day = currentDate.getDay() - 1;

    return (
        <div style={{minHeight:"100vh", backgroundColor:"#ffffff", paddingTop:"55px"}}>
            <div style={{textAlign:"center", color:"black", height:"30vh", display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
                <h1 className={lora.className} style={{fontSize:"3rem", color:"black", zIndex:"1"}}>{org.name}</h1>
                <p className={cabin.className} style={{color:"black"}}>{org.location}</p>
            </div> 
            <div style={{backgroundColor:"#f8f9fa"}}> 
                <Container fluid={true} style={{padding:"10vh"}}>
                    <Row>
                        <Col style={{minWidth:"400px", paddingBottom:"5vh"}}>
                            <img src={org.image} alt="org image" style={{objectFit:"contain", height:"400px", maxWidth:"40vw", minWidth:"400px"}}/>
                        </Col>
                        <Col d-flex={true} style={{minWidth:"400px", alignItems:"center", alignContent:"center", justifyContent:"center", paddingRight:"30px"}}>
                            <p className={cabin.className} style={{color:"black", fontSize:"1.25rem"}}></p>
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
                    <Row>

                    </Row>
                </Container>
            </div>
            
            {/* Links */}
        </div>
    )
}