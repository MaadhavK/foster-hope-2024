"use client"
import Image from "next/image"
import AboutCard from "./components/aboutCard";
import { Row, Col, Container } from "react-bootstrap";
import styles from "../page.module.css";


const data = {
    "members": [
      {
        "name": "Grace Pan",
        "role": "idk",
        "bio":  "idk",
        "img": "/images/Grace.jpg",
        "username": "pan-grace"
      },
      {
        "name": "Raymond Wang",
        "role": "idk",
        "bio":  "idk",
        "img": "/images/Raymond.jpeg",
        "username": "raymww"
      },
      {
        "name": "Maadhav Kothuri",
        "role": "Frontend (so far)",
        "bio":  "I'm a second-year computer science major at UT Austin and am interested in building full-stack applications that make an impact. In my spare time, I like to play the trumpet, spend time with friends, and participate in the UT fencing club.",
        "img": "/images/Maadhav.jpg",
        "username": "maadhavskothuri"
      },
      {
        "name": "Alea Nablan",
        "role": "Frontend",
        "bio":  "I'm a fourth year studying computer science at UT Austin. I enjoy listening to music and watching various kinds of tv shows.",
        "img": "/images/Alea.jpg",
        "username": "aleanadhiraa"
      },
      {
        "name": "Nathan Cheng",
        "role": "idk",
        "bio":  "idk",
        "img": "/images/Nathan.PNG",
        "username": "nathanchengus"
      }
    ]
  }
  


export default function About() {
    return (
        <>
            <main className= {styles.main}>
                <div className= {styles.description}>
                <h1>About Us</h1>
                </div>

            <Container style = {{padding: 15}}>
                <Row style = {{padding: "2rem"}}>
                    {data["members"].slice(0, 3).map((member) => (
                        <Col xs> <AboutCard member={member}/> </Col>
                    ))}
                </Row>
                <Row style = {{padding: "2rem"}}>
                    {data["members"].slice(3, 5).map((member) => (
                        <Col xs> <AboutCard member={member}/> </Col>
                    ))}
                </Row>
                
            </Container>
        </main>
        </>
    )
}