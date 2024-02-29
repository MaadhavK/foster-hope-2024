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
import { Poppins, Anton, Lora, Cabin} from "next/font/google";

// Splash Page

const poppins = Poppins({ weight: '400', subsets: ['latin']  })
const anton = Anton({ weight: '400', subsets: ['latin']  })
const lora = Lora({weight: '400', subsets: ['latin']})
const cabin = Cabin({weight: '400', subsets: ['latin']})

export default function Home() {
  return (
    <main >
    <div className={styles.splashwhitebg}>
      
      <div style={{position:"absolute", width:"100vw", height:"70vh", zIndex:"0", top:"0"}}>
        <img src="images/handholding.jpeg" style={{zIndex:"-1", filter:"brightness(14%)", width:"100vw", height:"70vh", opacity:".8", objectFit:"cover"}}></img>
      </div> 

      <Container className={styles.splashcont} styles={{height:"70vh", paddingTop:"55px", paddingBottom:"100px", top:"0"}}>
        <Row style={{height:"20vh"}}></Row>
        <Row style={{zIndex:"1", maxWidth:"100vw", margin:"0", padding:"0", border:"0", height:"50vh", justifyContent:"center"}}>
          <Col style={{zIndex:"1", maxWidth:"100vw", alignItems:"center", justifyContent:"center", alignSelf:"center"}}>
            <h1 className={lora.className} style={{zIndex:"1", textAlign:"center", fontSize:"4rem", textShadow:"2px 2px 4px #101010", fontWeight:"bold"}}>
              Foster Hope.
            </h1>
            <br/>
            <div className={cabin.className} style={{textAlign:"center"}}>
              empowing lives for foster children.
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <div className={styles.splashgrad}>
    </div>
    <div className={styles.splashdarkbg} style={{padding:"5vw"}}>
      <Container fluid={true} className={styles.splashcont} styles={{maxWidth:"100vw", height:"100vh", padding:"0"}}>
        <Row styles={{padding:"0"}}>
          <Col styles={{padding:"0"}}>
            <h2 className={lora.className} style={{color:"black", minWidth:"400px"}}>Our Mission</h2>
            <br/>
            <p className={styles.splashdesc} style={{}}>
              Those in foster care face the difficult task of navigating the complexities of the foster care system. They face
              many challenges, such as frequent changes in homes that breaks relationships, emotional struggles that are often overlooked, 
              and a lack of resources and support.
            </p>
            <p className={styles.splashdesc} style={{}}>
              Foster Hope contains a wealth of information and resources about foster care in Texas. Those that are in foster care can easily
              locate local resources and support organizations, and those that are curious about foster care can find further information about
              foster care and can help contribute to the effort to support those in foster care through donations and charitable work.
            </p>
            <br/>
          </Col>
          <Col styles={{alignItems:"center", display:"block", marginLeft:"auto", marginRight:"auto", padding:"0"}}>
            <HomeCarousel style={{flex:"1", maxWidth:"100vw", alignSelf:"center"}}></HomeCarousel>
          </Col>
        </Row>
      </Container>
    </div>
    </main>
    

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