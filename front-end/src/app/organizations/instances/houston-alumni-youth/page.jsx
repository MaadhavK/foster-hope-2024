"use client"
import styles from "../../../page.module.css";
import "../instancestyle.css";
import { Row, Col, Container } from "react-bootstrap";
import YouTube from "react-youtube";

export default function HoustonAlumniYouth(){
    
    const YoutubeID = new URLSearchParams(new URL("https://www.youtube.com/watch?v=H03R1jUqrCQ").search).get("v");
    
    return (
        <main className = {styles.main}>
            <h1>Houston Alumni Youth</h1>
            <p><br/><br/></p>
            <Container>
                <Row>
                    <Col>
                        <img className="halfimage" src="/images/orgs/houstonalumniyouth.jpeg"/>
                    </Col>
                    <Col>
                        <h2>About</h2>
                        <p> <br/>
                        The Hay Center's mission is "empowering current and former foster youth to be successful, productive adults
                        through training & mentorship in education, employment, and personal achievement". The Hay Center supports foster 
                        youth through having a center that provides life skills courses, supportive services and amenities, and engagement
                        events. An example is that they offer are GED and job readiness courses.
                        </p>
                        <p><br/><b>
                            Location: </b>Houston <br />
                            <b>Type: </b>Government<br />
                            <b >Reviews: </b>3.4<br />
                            <b >Hours: </b>9:00 - 6:00<br />
                        </p>
                        <p><br/><b> Website:</b><a href="https://www.haycenter.org/">https://www.haycenter.org/</a></p>
                    </Col>
                </Row>
            </Container>
            <p><br/><br/><br/></p>
            <div styles={{flexDirection: "Row"}}>
                <div styles={{alignContent: "center", alignItems: "center", justifyContent: "center"}}>
                    <YouTube videoId={YoutubeID}/>
                </div>
            </div>
        </main>
    )
}