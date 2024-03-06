"use client"
import styles from "../../page.module.css";
import {Card} from 'react-bootstrap';
import { Button } from "react-bootstrap";
import YouTube from 'react-youtube';

import { Lora, Cabin} from "next/font/google";

const lora = Lora({weight: '400', subsets: ['latin']})
const cabin = Cabin({weight: '400', subsets: ['latin']})

// name": "Austin Angels",
// "img_url": "https://www.austinangels.com/uploads/1/2/3/4/123469485/black2020_burstaalogo.png",
// "description": "Austin Angels is a nonprofit organization dedicated to supporting foster children and their caretakers in the Austin, Texas area. Their mission revolves around providing consistent support, encouragement, and resources to foster families, aiming to break the cycle of abuse and neglect for children in the foster care system. Through various programs and initiatives, including mentorship, family coaching, and resource provision, Austin Angels strives to create a positive impact on the lives of foster children and their caregivers, ultimately fostering a sense of stability and belonging for those in need.",
// "location": "Austin",
// "type": "Non-Profit",
// "reviews": 4.7,
// "hours": "8:30 - 5:00",
// "website": "https://www.austinangels.com/",
// "vid_url": "https://www.youtube.com/watch?v=FOOvHdqBiJQ"

const OrgCard = ({org}) => {
    var thisOrg = JSON.parse(org);
    if (!thisOrg) {
        return <div>Error: org data is not available</div>;
    }
    const path = "organizations/" + thisOrg?.id + "/";

    return (
        <Card style = {{width: "20rem", height: "35rem", margin:"0 auto"}}>
            <Card.Img  style={{width:"20rem", height:"20rem", objectFit:"cover"}} variant="top" src = {thisOrg?.img_url}/>
            <Card.Body className="d-flex flex-column justify-content-center" style={{padding: "1rem", background: "lightblue"}}>
                <Card.Title className={lora.className} style={{fontSize:"1.7rem"}}>{thisOrg?.name}</Card.Title>
                <Card.Text className={cabin.className} style={{paddingTop:"10px", paddingBottom:"10px"}}>
                Location: {thisOrg?.location}
                <br></br>
                Type: {thisOrg?.type}
                <br></br>
                Reviews: {thisOrg?.review}
                <br></br>
                Hours: {thisOrg?.hours}
                </Card.Text>
                <Button variant="outline-dark" href = {path}> Read More </Button>
            </Card.Body>
        </Card>
    )
} 

export default OrgCard;
