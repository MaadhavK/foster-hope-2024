"use client"
import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../front-end/src/app/globals.css'
import _default from "react-bootstrap/esm/Nav";
import { Container, Row, Col, ResponsiveEmbed } from "react-bootstrap";
import HomeCarousel from "./components/carousel";

// Splash Page
export default function Home() {
  return (
    <main className={styles.main2}>
      <h1 className={styles.splashtitle}>
        Foster Hope
      </h1>
      
      <br />
      
      {/* Container for the page to be responsive */}
      <Container style={{ backgroundColor: "lightblue", padding: "15px"}}>
        <Row className="align-items-center">
          {/* Carousel of images */}
          <Col xs={12} md={6} className="align-self-start">
            <HomeCarousel />
          </Col>
          {/* Information about foster children */}
          <Col xs={12} md={6}>
            <h3 style={{ color: "black", textAlign: "center" }}>Our Mission</h3>
            <p className={styles.splashdesc}>
              Those in foster care face the difficult task of navigating the complexities of the foster care system. They face
              many challenges, such as frequent changes in homes that breaks relationships, emotional struggles that are often overlooked, 
              and a lack of resources and support.
            </p>
            <p className={styles.splashdesc}>
              Foster Hope contains a wealth of information and resources about foster care in Texas. Those that are in foster care can easily
              locate local resources and support organizations, and those that are curious about foster care can find further information about
              foster care and can help contribute to the effort to support those in foster care through donations and charitable work.
            </p>
          </Col>
        </Row>
      </Container>
    </main>  
  );
}
