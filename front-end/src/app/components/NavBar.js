import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from "../page.module.css"
import { Lora , Cabin} from 'next/font/google';

const lora = Lora({weight: '400', subsets: ['latin']})
const cabin = Cabin({weight: '400', subsets: ['latin']})

// Navigation bar with styling and routing
export default function NavBar(){
    return (
        <Navbar bg="light" data-bs-theme="light" fixed = "top" border="white" expand="lg">
            <Container className={styles.container} style={{maxWidth:"100vw", paddingLeft:"5vw", paddingRight:"5vw"}}>
                <Navbar.Brand className={lora.className} style={{fontWeight:"bold"}} href="/">Foster Hope.</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className='me-auto'></Nav>
                <Nav>
                    <Nav.Link className={cabin.className} href="/about">About Us</Nav.Link>
                    <Nav.Link className={cabin.className} href="/counties">Counties</Nav.Link>
                    <Nav.Link className={cabin.className} href="/organizations">Organizations</Nav.Link>
                    <Nav.Link className={cabin.className} href="/resources">Resources</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
    
}


