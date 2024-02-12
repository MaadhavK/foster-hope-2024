import styles from "../page.module.css";
import AboutCard from "./components/aboutCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function About() {
    return (
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
        
        
    )
}