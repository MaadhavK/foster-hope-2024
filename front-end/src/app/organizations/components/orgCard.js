"use client"
import styles from "../../page.module.css";
import {Card} from 'react-bootstrap';
import { Button } from "react-bootstrap";
import YouTube from 'react-youtube';

import { Lora, Cabin} from "next/font/google";

const lora = Lora({weight: '400', subsets: ['latin']})
const cabin = Cabin({weight: '400', subsets: ['latin']})

const OrgCard = ({org}) => {
    var thisOrg = JSON.parse(org);
    if (!thisOrg) {
        return <div>Error: org data is not available</div>;
    }
    const path = "organizations/" + thisOrg?.id + "/";

    return (
        <Card style = {{width: "20rem", height: "35rem", margin:"0 auto"}}>
            <Card.Img  style={{width:"20rem", height:"20rem", objectFit:"cover"}} variant="top" src = {thisOrg?.image}/>
            <Card.Body className="d-flex flex-column justify-content-center" style={{padding: "1rem", background: "lightblue"}}>
                <Card.Title className={lora.className} style={{fontSize:"1.3rem"}}><b>{thisOrg?.name}</b></Card.Title>
                <Card.Text className={cabin.className} style={{paddingTop:"10px", paddingBottom:"10px"}}>
                Location: {thisOrg?.location}
                <br></br>
                Type: {thisOrg?.type}
                <br></br>
                Reviews: {thisOrg?.ratings}
                <br></br>
                Hours: {thisOrg?.operation_hours}
                </Card.Text>
                <Button variant="outline-dark" href = {path}> Read More </Button>
            </Card.Body>
        </Card>
    )
} 

export default OrgCard;
