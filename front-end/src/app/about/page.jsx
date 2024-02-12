import Image from "next/image"
import raymond from "/public/images/Raymond.jpeg"
import AboutCard from "./components/aboutCard";
import { Row, Col, Container } from "react-bootstrap";
import styles from "../page.module.css";


export const metadata = {
    title: "About Foster Hope"
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
                    <Col xs> <AboutCard/> </Col>
                    <Col xs> <AboutCard/> </Col>
                    <Col xs> <AboutCard/> </Col>
                </Row>
                <Row style = {{padding: "2rem"}}>
                    
                    <Col xs style = {{paddingLeft: "10rem"}}> <AboutCard/> </Col>
                    <Col xs style = {{paddingRight: "2rem"}}> <AboutCard/> </Col>
                </Row>
                
            </Container>
        </main>
        
            <Image
                src={raymond}
                width={300}
                height={400}
                alt="Raymond"
            />
        </>
    )
}