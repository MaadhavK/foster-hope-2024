"use client"
import Image from "next/image"
import AboutCard from "./components/aboutCard";
import ImageCard from "./components/ImageCard";
import { Row, Col, Container } from "react-bootstrap";
import styles from "../page.module.css";
import './components/ImageGrid.css'


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
        "role": "idk",
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
    { src: 'https://yt3.googleusercontent.com/X-rhKMndFm9hT9wIaJns1StBfGbFdLTkAROwm4UZ3n9ucrBky5CFIeeZhSszFXBgQjItzCD0SA=s900-c-k-c0x00ffffff-no-rj', alt: 'Image 4', logo: "Postman" },
    { src: 'https://www.docker.com/wp-content/uploads/2023/05/symbol_blue-docker-logo.png', alt: 'Image 5', logo: "Docker" },
    { src: 'https://seeklogo.com/images/A/aws-amplify-logo-D68DDB5AB1-seeklogo.com.png', alt: 'Image 6', logo: "AWS Amplify" },
  ];

  


export default function About() {
    return (
        <>
            <main className= {styles.main}>
              <Container>
                <div style={{padding:"1rem", color:"black"}}>
                  <h1>About Foster Hope</h1>
                  <br></br>
                  <p> This website aims to inform users about foster children in Texas by providing important statistics as well as organizations and resources that are in place
                    to support these children. The intended users are people part of the foster care system (children or providers) who may be looking for information about their specific area
                    or need support from the organizations or resources provided.
                  </p>
                  <br></br>
                  <br></br>
                  <h2>Data Sources</h2>
                  <br></br>
                  <p>Our data comes from [...]. Integrating disparate data can be tricky, since additional sources may be needed to programmatically scrape the necessary information. However,
                    using disparate data can allow for a holistic view of a situation or community that expands the user's perspective.
                  </p>

                  <h2 style={{paddingBottom:"2rem", paddingTop: "2rem"}}>Our Team</h2>
                </div>
              </Container>

            <Container style = {{padding: 15, alignContent: "center", justifyContent: "center"}}>
                <Row style = {{padding: "2rem", display: "flex", justifyContent:"row"}}>
                    {data["members"].slice(0, 3).map((member) => (
                        <Col xs style={{paddingBottom: "2rem"}}> <AboutCard member={member}/> </Col>
                    ))}
                </Row>
                <Row style = {{padding: "2rem"}}>
                    {data["members"].slice(3, 5).map((member) => (
                        <Col xs> <AboutCard member={member}/> </Col>
                    ))}
                </Row>
                
            </Container>
            <Container style={{justifyContent:"space-around", color: "black"}}>
              <h1 className="center">Tools Used</h1>
              <div className="image-grid">
              {imageArray.map((image, index) => (
              <ImageCard key={index} src={image.src} alt={image.alt} textBelowImage={image.logo} style={{padding:"4rem", objectFit: "cover", height:"60%", width: "100%"}} />
              ))}
              <br></br>
                </div>
            </Container>

        </main>
        </>
    )
}