"use client"
import Image from "next/image"
import AboutCard from "./components/aboutCard";
import ImageCard from "./components/ImageCard";
import { Row, Col, Container } from "react-bootstrap";
import styles from "../page.module.css";
import './components/ImageGrid.css'
import { Lora, Cabin } from "next/font/google";

// Data for group members
const data = {
    "members": [
      {
        "name": "Grace Pan",
        "role": "Frontend",
        "bio":  "I'm a third year cs major at UT, and I'm interested in web and app development. I like dancing and reading in my free time",
        "img": "/images/Grace.jpg",
        "username": "pan-grace"
      },
      {
        "name": "Raymond Wang",
        "role": "Frontend",
        "bio":  "I'm a second-year cs student at UT, and I'm interested in application and game programming, as well as data modeling / ml. In spare time, I game, play ultimate frisbee, and hang with my cat.",
        "img": "/images/Raymond.jpeg",
        "username": "raymww"
      },
      {
        "name": "Maadhav Kothuri",
        "role": "Frontend (so far)",
        "bio":  "I'm a second-year computer science major at UT Austin and am interested in building full-stack applications that make an impact. In my spare time, I like to play the trumpet, spend time with friends, and participate in the UT fencing club.",
        "img": "/images/Maadhav.jpg",
        "username": "maadhavskothuri"
      },
      {
        "name": "Alea Nablan",
        "role": "Frontend",
        "bio":  "I'm a fourth year studying computer science at UT Austin. I enjoy listening to music and watching various kinds of tv shows.",
        "img": "/images/Alea.jpg",
        "username": "aleanadhiraa"
      },
      {
        "name": "Nathan Cheng",
        "role": "Full Stack",
        "bio":  "I'm a third year cs major at UT Austin. I like playing v ball and I like thrifting.",
        "img": "/images/Nathan.PNG",
        "username": "nathanchengus"
      }
    ]
  }

  const imageArray = [
    // Add more image data as needed
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png', alt: 'Image 1', logo: "React" },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png', alt: 'Image 2', logo: "Bootstrap" },
    { src: 'https://yt3.googleusercontent.com/R6P5skGdZJeM1bebvt3ILeU8k-9tiqE5T198RmBH8SoGXH2gk_Lk-45uZoq6X6pW4a4c9Sqn=s900-c-k-c0x00ffffff-no-rj', alt: 'Image 3', logo: "GitLab" },
    { src: 'https://seeklogo.com/images/P/postman-logo-F43375A2EB-seeklogo.com.png', alt: 'Image 4', logo: "Postman" },
    { src: 'https://www.docker.com/wp-content/uploads/2023/05/symbol_blue-docker-logo.png', alt: 'Image 5', logo: "Docker" },
    { src: 'https://seeklogo.com/images/A/aws-amplify-logo-D68DDB5AB1-seeklogo.com.png', alt: 'Image 6', logo: "AWS Amplify" },
  ];


  const lora = Lora({weight: '400', subsets: ['latin']})
  const cabin = Cabin({weight: '400', subsets: ['latin']})

export default function About() {
    return (
      <main className= {styles.main} style={{backgroundColor:"#f8f9fa"}}>
        <Container style={{maxWidth:"100vw", padding:"0", margin:"0", backgroundColor:"#c7c7c7"}}> 
          <div style={{backgroundColor:"#c7c7c7", paddingLeft:"5vw", paddingRight:"5vw",paddingTop:"15vh", paddingBottom:"20px", color:"black"}}>
            <h1 className={lora.className} style={{fontSize:"3rem"}}>About Foster Hope.</h1>
          </div>

          <div style={{paddingLeft:"5vw", paddingRight:"5vw", color:"#333"}}>
            <p className={cabin.className}> This website aims to inform users about foster children in Texas by providing important statistics as well as organizations and resources that are in place
              to support these children. The intended users are people part of the foster care system (children or providers) who may be looking for information about their specific area
              or need support from the organizations or resources provided.
            </p>
          </div>

          <br/>

          <div style={{backgroundColor:"#c7c7c7", padding:"20px", paddingLeft:"5vw", paddingRight:"5vw", color:"black"}}>
            <h2 className={lora.className}>Our Data Sources</h2>
          </div>

          <div style={{paddingLeft:"5vw", paddingRight:"5vw", color:"#333"}}>
            <p className={cabin.className}>
              Our data comes from the Google Places API, the Wikipedia API and the EventBrite API, as well as certain government websites with specific county data. Although the data shown in this phase is a small fraction of the actual data, it did seem that Travis County had resources that were much more readily available than the other counties. This is likely due to its comparitively large population, meaning that foster children in smaller counties, like Bastrop County, might be less supported.
            </p>
          </div>
        </Container>
        <div className={styles.aboutgrad}>
          <h2 className={lora.className} style={{paddingLeft:"5vw", color:"black"}}>Our Team</h2>
        </div>
        {/* add gradient and then OUR TEAM*/}
        {/* Group bio cards */}
        <Container fluid={true} style = {{maxWidth:"100vw", padding:"5vw"}}>

            {/* need help figuring out how to get the lower two columns to center their cards*/}
            <Row style={{padding:"3vw", paddingTop:"0", justifyContent:"space-evenly"}}>
                {data["members"].slice(0, 5).map((member) => (
                    <Col xs style={{paddingBottom: "2rem"}}> <AboutCard member={member}/> </Col>
                ))}
            </Row>
            {/* <Row style = {{padding: "2rem"}}>
                {data["members"].slice(3, 5).map((member) => (
                    <Col xs> <AboutCard member={member}/> </Col>
                ))}
            </Row> */}
            
        </Container>
        {/* Icons with tools used */}
        
        <Container style={{justifyContent:"space-between", color: "black"}}>
          <h1 className={lora.className}>Tools Used</h1>
          <br/>
          <Row className="image-grid">
          {imageArray.map((image, index) => (
          <ImageCard key={index} src={image.src} alt={image.alt} textBelowImage={image.logo} />
          ))}
          </Row>
        </Container>
        <br/>
        <br/>
      </main>
    )
}