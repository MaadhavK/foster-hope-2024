import Image from "next/image"
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
                        <Col xs> 
                            <AboutCard 
                                imageUrl={"/public/images/Raymond.jpeg"}
                                name={"Raymond"}
                                about={"Placeholder"}
                            /> 
                        </Col>
                        <Col xs> 
                            <AboutCard 
                                imageUrl={"/public/images/Raymond.jpeg"}
                                name={"your name"}
                                about={"Placeholder"}
                            /> 
                        </Col>
                        <Col xs> 
                            <AboutCard 
                                imageUrl={"/public/images/Raymond.jpeg"}
                                name={"your name"}
                                about={"Placeholder"}
                            /> 
                        </Col>
                    </Row>
                    <Row style = {{padding: "2rem"}}>
                        
                        <Col xs style = {{paddingLeft: "10rem"}}> 
                            <AboutCard
                                imageUrl={"/public/images/Raymond.jpeg"}
                                name={"your name"}
                                about={"placeholder"}
                            /> 
                        </Col>
                        <Col xs style = {{paddingRight: "2rem"}}> 
                            <AboutCard
                                imageUrl={"/public/images/Raymond.jpeg"}
                                name={"your name"}
                                about={"placeholder"}
                            />  
                        </Col>
                    </Row>
                    
                </Container>
            </main>
        </>
    )
}