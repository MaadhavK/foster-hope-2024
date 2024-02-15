"use client"
import styles from "../../../page.module.css";
import "../instancestyle.css";
import { Row, Col, Container } from "react-bootstrap";
import YouTube from "react-youtube";


// create page for austin angels instance
export default function AustinAngels(){
    const YoutubeID = new URLSearchParams(new URL("https://www.youtube.com/watch?v=FOOvHdqBiJQ").search).get("v");
    return (
        <main className = {styles.main}>
            <h1 className="blacktext">Austin Angels</h1>
            <p><br/><br/></p>
            <Container className="blacktext">
                <Row>
                    <Col>
                    {/* image media */}
                        <img className="halfimage" src="/images/orgs/AustinAngels.png"/>
                    </Col>
                    <Col>
                    {/*  description and attributes and website*/}
                        <h2>About</h2>
                        <p> <br/>
                            Austin Angels is a nonprofit organization dedicated to supporting foster children and their caretakers in the Austin, Texas area.
                            Their mission revolves around providing consistent support, encouragement, and resources to foster families, aiming to break 
                            the cycle of abuse and neglect for children in the foster care system. Through various programs and initiatives, including mentorship,
                            family coaching, and resource provision, Austin Angels strives to create a positive impact on the lives of foster children and their caregivers,
                            ultimately fostering a sense of stability and belonging for those in need.
                        </p>
                        <p><br/><b>
                            Location: </b> Austin <br />
                            <b>Type: </b>Non-profit <br />
                            <b >Reviews: </b>4.7 <br />
                            <b >Hours: </b>8:30 - 5:00 <br />
                        </p>
                        <p><br/><b> Website:</b><a href="https://www.austinangels.com/"> https://www.austinangels.com/</a></p>

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
                <h2>County</h2>
                <div><a href="../../../counties/instances/travis">Travis County</a></div>
                <h2>Resource</h2>
                <div><a href="../../../resources/instances/recognize">Recognizing & Reporting Child Abuse</a></div>
            </div>
        </main>
    )
}