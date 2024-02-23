"use client"
import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import _default from "react-bootstrap/esm/Nav";
import { Container, Row, Col, ResponsiveEmbed } from "react-bootstrap";
import HomeCarousel from "./components/carousel";
// import { useEffect } from "react";

// Splash Page
export default function Home() {

  return (
    <>
    <div className={styles.splashwhitebg}>
      
      <div style={{position:"absolute", width:"100vw", height:"70vh", zIndex:"0", top:"0"}}>
        <img src="images/handholding.jpeg" style={{zIndex:"-1", filter:"brightness(14%)", width:"100vw", height:"70vh", opacity:".8", objectFit:"cover"}}></img>
      </div> 

      <Container className={styles.splashcont} styles={{height:"70vh", paddingTop:"55px", paddingBottom:"100px", top:"0"}}>
        <Row style={{zIndex:"1", maxWidth:"100vw", margin:"0", padding:"0", border:"0", height:"70vh", justifyContent:"center"}}>
          <Col style={{zIndex:"1", alignItems:"center", justifyContent:"center", alignSelf:"center"}}>
            <h1 style={{zIndex:"1", textAlign:"center", fontSize:"3rem"}}>
              Foster Hope
            </h1>
            <div style={{textAlign:"center"}}>
              empowing lives for foster children
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <div className={styles.splashgrad}>
    </div>
    <div className={styles.splashdarkbg}>
      <br/>
      <br/>
      <Container className={styles.splashcont2} styles={{height:"100vh", alignItems:"center", justifyContent:"center"}}>
        <Row styles={{alignItems:"center", justifyContent:"center", height:"100vh"}}>
          <Col styles={{alignItems:"center", justifyContent:"center", height:"100vh"}}>
            <h3 style={{textAlign:"center", color:"black"}}>Our Mission</h3>
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
          <Col styles={{alignItems:"center", justifyContent:"center", height:"100vh", alignSelf:"center"}}>
            <HomeCarousel></HomeCarousel>
          </Col>
        </Row>
      </Container>
    </div>
    </>
    

    /* <h1 className={styles.splashtitle}>
        Foster Hope
      </h1>
      <br></br>
      <Container fill style={{width:"100vw", height: "45vw", backgroundColor:"lightblue", justifyContent:"center"}}>
        
        <Container style={{display:"flex", justifyContent:"center", padding: "15px"}}>
          <Col>
            <HomeCarousel></HomeCarousel>
          </Col>
          <Col>
            <h3 style={{display: "flex", justifyContent:"center", color:"black"}}>Our Mission</h3>
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
        </Container>
        
      </Container> */
  );
}

/*
      
*/