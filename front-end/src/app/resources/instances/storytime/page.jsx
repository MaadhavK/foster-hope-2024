"use client"
import styles from "../../../page.module.css";
import { Row, Col, Container, Card } from "react-bootstrap";
import YouTube from 'react-youtube';

// create page for resoure instance 3
export default function Resource1(){
    const videoId = new URLSearchParams(new URL("https://www.youtube.com/watch?v=kul-g_30HuU").search).get("v");
    
    
    return (
        <main className = {styles.main}>
            <div>
                {/* list out nae description and picture*/}
                <h1> Free Kids Event: Children's Book Story Time</h1>
                <Row style = {{padding: "2rem", display: "flex", justifyContent:"row"}}>
                <Col xs style={{paddingBottom: "2rem"}}>
                    <img src="/images/resources/storytime.jpeg" style={{width: "500px", height: "auto", margin: "12px"}}></img>
                </Col>
                <Col xs style={{paddingBottom: "2rem"}}>
                <p> From organizers: 
                    Join us for our fun storytime event for a soon-to-be-released children's book!
    This book, created for children ages 9 and under, encourages literacy and teaches a multitude of valuable life lessons.
    We will appreciate you and your child's feedback on our children's book at the event.
    This event will be taking place remotely. 📧 We will reach out to you via email before the event. Please make sure to check your spam folder.
    Don't miss out on this exclusive experience! We look forward to meeting you!
    📱Follow us on Facebook to be the first to know about our upcoming events and exciting announcements! Click Here.
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
                                    Review: 4.7
                                    <br></br>
                                    Website: 
                                    <a href="https://www.eventbrite.com/e/free-kids-event-childrens-book-story-time-tickets-817584907467?aff=ebdssbdestsearch" target="_blank" rel="nofollow">
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
            <a href='../../../counties/instances/bastrop'>Bastrop County</a>
            <h2>Organization</h2>
            <a href='../../../organizations/instances/houston-alumni-youth'>Houston Alumni</a>
            </div>
        </main>
    )
}