import Image from "next/image"
import AboutCard from "./components/aboutCard";
import { Row, Col, Container } from "react-bootstrap";
import styles from "../page.module.css";


export const metadata = {
    title: "About Foster Hope"
}

const data = {
    "members": [
      {
        "name": "Grace Pan",
        "role": "idk",
        "bio":  "idk",
        "img": "/images/Grace.jpeg",
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
        "role": "idk",
        "bio":  "idk",
        "username": "maadhavskothuri"
      },
      {
        "name": "Alea N Nablan",
        "role": "idk",
        "bio":  "idk",
        "username": "aleanadhiraa"
      },
      {
        "name": "Nathan Cheng",
        "role": "idk",
        "bio":  "idk",
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