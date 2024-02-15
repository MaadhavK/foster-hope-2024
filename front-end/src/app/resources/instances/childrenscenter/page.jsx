"use client"
import styles from "../../../page.module.css";
import { Row, Col, Container } from "react-bootstrap";
export default function Resource1(){
    return (
        <main className = {styles.main}>
            <div>
                <h1> Children's Center of Austin</h1>
                <Row style = {{padding: "2rem", display: "flex", justifyContent:"row"}}>
                <Col xs style={{paddingBottom: "2rem"}}>
                    <img src="/images/resources/logo.png" style={{width: "500px", height: "auto", margin: "12px"}}></img>
                </Col>
                <Col xs style={{paddingBottom: "2rem"}}>
                <p> From organizers: 
                Welcome to The Children’s Center of Austin, providing the finest quality childcare and education for infants through pre-kindergarten, as well as after-school care for
                 kindergarten through fifth grade and summer camp for ages 6-10. The Children’s Center of Austin offers a safe, clean, and nurturing setting with a theme-based educational curr
                 iculum designed to promote learning and exploration in a warm and fun environment. Both of our locations feature controlled access, separate classrooms, shaded playgrounds, and
                  fun activity areas for art, swimming, and extracurricular activities.</p>
                </Col>
                </Row>
                <Row style = {{padding: "2rem", display: "flex", justifyContent:"row"}}>
                <Col xs style={{paddingBottom: "2rem"}}>
                    <Container>
                <p> Location: Austin
                                    <br></br>
                                    Type: Children's Institute
                                    <br></br>
                                    In person: yes
                                    <br></br>
                                    Website: 
                                    <a href="https://www.childrenscenterofaustin.com/" target="_blank" rel="nofollow">
                                    https://www.childrenscenterofaustin.com/</a>
                                    <br></br></p>
                                    </Container>
                </Col>
                <Col xs style={{paddingBottom: "2rem"}}>
                <img src="https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/567/2020/01/09170756/preschool-img.png" style={{width: "300px", height: "auto", margin: "12px"}}></img>
                </Col>
                </Row>
                <h2>County</h2>
                <a href='../../counties/instances/Hays'>Hays County</a>
                <h2>Organization</h2>
                <a href='../../organizations/instances/austin-angels'>Austin Angels</a>
            </div>
        </main>
    )
}