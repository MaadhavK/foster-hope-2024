"use client"
import styles from "../../../page.module.css";
import "../instancestyle.css";
import { Row, Col, Container } from "react-bootstrap";
import YouTube from "react-youtube";

// page for foster village instance
export default function FosterVillage(){
    const YoutubeID = new URLSearchParams(new URL("https://www.youtube.com/watch?v=r6Qr442U6mg").search).get("v");
    return (
        <main className = {styles.main}>
            <h1 className="blacktext">Foster Village Inc.</h1>
            <p><br/><br/></p>
            <Container className="blacktext">
                <Row>
                    <Col>
                    {/* image */}
                        <img className="halfimage" src="/images/orgs/foster-village.jpeg"/>
                    </Col>
                    <Col>
                    {/* description and list of attributes and website  */}
                        <h2>About</h2>
                        <p> <br/>
                            Foster Village, based in Austin, Texas, is dedicated to supporting foster families and children in the foster care system. 
                            Their mission involves providing practical assistance, building community support networks, meeting essential needs, 
                            empowering foster parents through training and resources, and advocating for the rights and well-being of children in foster care. 
                            Through their initiatives, Foster Village aims to create a more supportive and nurturing environment for foster families and 
                            children in the Austin community
                        </p>
                        <p><br/><b>
                            Location: </b>Dripping Springs<br/>
                            <b>Type: </b>Non-profit<br/>
                            <b>Reviews: </b>4.7<br/>
                            <b>Hours: </b>24/7<br/>
                        </p>
                        <p><br/><b> Website:</b><a href="https://www.fostervillageaustin.org/about"> https://www.fostervillageaustin.org/about</a></p>
                    </Col>
                </Row>
            </Container>
            <p><br/><br/><br/></p>
            <div styles={{flexDirection: "Row"}}>
                <div styles={{alignContent: "center", alignItems: "center", justifyContent: "center"}}>
                    <YouTube videoId={YoutubeID}/>
                </div>
            </div>
            {/* Links */}
            
            <div className="center">
                <h1>Related Links</h1>
                <h2>County</h2>
                <div><a href="../../../counties/instances/hays">Hays County</a></div>
                <h2>Resource</h2>
                <div><a href="../../../resources/instances/childrenscenter">Childrens Center</a></div>
            </div>
        </main>
    )
}