"use client"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from "../page.module.css"


/*
                <Nav.Link href="/about">About Us</Nav.Link>
                <Nav.Link href="/counties">Counties</Nav.Link>
                <Nav.Link href="/organizations">Organizations</Nav.Link>
                <Nav.Link href="/resources">Resources</Nav.Link>


*/


export default function NavBar(){
    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark" fixed = "top" border="black" >
            <Container className={styles.container}>
            <Navbar.Brand href="/">Foster Hope</Navbar.Brand>
            <Nav className="me-auto">

            </Nav>
            </Container>
        </Navbar>
        <br />
        </>
    )
    
}


