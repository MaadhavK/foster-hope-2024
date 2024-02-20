"use client"
import styles from "../../../page.module.css";
import { Row, Col, Container, Card } from "react-bootstrap";
import YouTube from 'react-youtube';

// create page for resoure instance 2
export default function Resource1(){
    const videoId = new URLSearchParams(new URL("https://www.youtube.com/watch?v=V_k9vdkpX40").search).get("v");
    
    return (
       
        <main className = {styles.main}>
            <div>
                {/* list out nae description and picture*/}
                <h1> Recognizing & Reporting Child Abuse</h1>
                <Row style = {{padding: "2rem", display: "flex", justifyContent:"row"}}>
                <Col xs style={{paddingBottom: "2rem"}}>
                    <img src="/images/resources/event2.jpg" style={{width: "500px", height: "auto", margin: "12px"}}></img>
                </Col>
                <Col xs style={{paddingBottom: "2rem"}}>
                <p> From organizers: 
                Join us for an informative event on recognizing and reporting child abuse. Learn how to identify signs of abuse and what steps to take to protect children in our community.
                 This in-person event will be held at 1811 Southeast Inner Loop, Georgetown, TX, USA. Together, let's create a safe environment for our children. Don't miss out on this important opportunity to make a difference!
                    </p>
                </Col>
                </Row>
                {/* list out attributres and media  */}
                <Row style = {{padding: "2rem", display: "flex", justifyContent:"row"}}>
                <Col xs style={{paddingBottom: "2rem"}}>
                    <Container>
                    <Card style = {{width: "20rem"}}>
                    <Card.Body>
                        <Card.Text>
                        Location: Austin
                                    <br></br>
                                    Type: Event
                                    <br></br>
                                    In person: yes
                                    <br></br>
                                    Website: 
                                    <a href="https://www.eventbrite.com/e/recognizing-reporting-child-abuse-tickets-796979666637?aff=ebdssbdestsearch" target="_blank" rel="nofollow">
                                    https://www.eventbrite.com</a>
                                    <br></br>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                                    </Container>
                </Col>
                <Col xs style={{paddingBottom: "2rem"}}>
                <YouTube videoId={videoId} />
                </Col>
                </Row>
                <h1>Related Links</h1>
                <h2>County</h2>
                <a href='../../../counties/instances/travis'>Travis County</a>
                <h2>Organization</h2>
                <a href='../../../organizations/instances/austin-angels'>Austin Angels</a>
            </div>
        </main>
    )
}