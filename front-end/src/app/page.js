"use client"
import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../front-end/src/app/globals.css'
import _default from "react-bootstrap/esm/Nav";
import { Container, Row, Col } from "react-bootstrap";
import HomeCarousel from "./components/carousel";

export default function Home() {
  return (
      <main className={styles.main2}>
        <h1 className={styles.splashtitle}>
          Foster Hope
        </h1>
        
        <br></br>
        
            <Container fill style={{width:"100vw", height: "45vw", backgroundColor:"lightblue", justifyContent:"center"}}>
              {/* <section style={{width:"120vw", height: "45vw", backgroundColor:"lightblue"}} > */}
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
              {/* </section> */}
            </Container>
        
        
      </main>  
  );
}
