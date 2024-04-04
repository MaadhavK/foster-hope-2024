"use client"
import styles from "../../page.module.css";
import {Card} from 'react-bootstrap';
import { Button } from "react-bootstrap";

import { Lora, Cabin} from "next/font/google";

const lora = Lora({weight: '400', subsets: ['latin']})
const cabin = Cabin({weight: '400', subsets: ['latin']})

import { HighlightText } from "../../components/HighlightText";

// Organization card
const OrgCard = ({org, query=""}) => {
    var thisOrg = org;
    if (!thisOrg) {
        return <div>Error: org data is not available</div>;
    }

    // Date/time logic
    const path = "../organizations/" + thisOrg.id + "/";
    const date = new Date();
    const offsetMinutes = date.getTimezoneOffset();
    const offsetMilliseconds = offsetMinutes * 60 * 1000;
    const currentDate = new Date(date.getTime() - offsetMilliseconds);
    const day = currentDate.getDay() - 1;

    return (
        // Organization card
        <Card style = {{width: "20rem", height: "37rem", margin:"0 auto"}}>
            <Card.Img  style={{width:"20rem", height:"20rem", objectFit:"cover"}} variant="top" src = {thisOrg?.image}/>
            <Card.Body className="d-flex flex-column" style={{padding: "1rem", background: "lightblue", justifyContent:"space-between"}}>
                <div>
                    <Card.Title className={lora.className} style={{fontSize:"1.3rem"}}><b>{HighlightText(thisOrg?.name,query)}</b></Card.Title>
                    <Card.Text className={cabin.className} style={{paddingTop:"10px", paddingBottom:"10px"}}>
                    Location: {HighlightText(thisOrg?.county, query)} County
                    <br></br>
                    Type: {HighlightText(JSON.parse(thisOrg.type)[0].replaceAll('_', ' '),query)}
                    <br></br>
                    Reviews: {HighlightText(thisOrg?.rating, query)}
                    <br></br>
                    {HighlightText(JSON.parse(thisOrg.operation_hours)[day], query)}
                    </Card.Text>
                    </div>
                <div>
                    <Button variant="outline-dark" href = {path} style={{width:"100%"}}> Read More </Button>
                </div>
            </Card.Body>
        </Card>
    )
} 

export default OrgCard;
