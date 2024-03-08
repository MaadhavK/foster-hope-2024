"use client"
import styles from "../../page.module.css";
import {Card} from 'react-bootstrap';
import { Button } from "react-bootstrap";
import YouTube from 'react-youtube';

import { Lora, Cabin} from "next/font/google";

const lora = Lora({weight: '400', subsets: ['latin']})
const cabin = Cabin({weight: '400', subsets: ['latin']})

const ResourceCard = ({resource}) => {
    
    resource.replace(/"/g, /'/g)
    // console.log(`Here's the resource: ${resource}`)
    var thisRes = JSON.parse(resource);
    
    
    if (!thisRes) {
        return <div>Error: resource data is not available</div>;
    }

    const path = "../resources/" + thisRes.id + "/";
    
    const date = new Date();
    const offsetMinutes = date.getTimezoneOffset();
    const offsetMilliseconds = offsetMinutes * 60 * 1000;
    const currentDate = new Date(date.getTime() - offsetMilliseconds);
    const day = currentDate.getDay() - 1;

    let hours = thisRes?.hours;

    if(thisRes.type != "event"){
        hours = JSON.parse(thisRes?.hours)[day]
    }

    return (
        <Card style = {{width: "20rem", height: "30rem", margin:"0 auto"}}>
            <Card.Img  style={{width:"20rem", height:"15rem", objectFit:"cover"}} variant="top" src = {thisRes?.media}/>
            <Card.Body className="d-flex flex-column" style={{padding: "1rem", background: "lightblue", justifyContent:"space-between"}}>
                <div>
                    <Card.Title className={lora.className} style={{fontSize:"1.2rem", alignSelf:"flex-start"}}><b>{thisRes?.name}</b></Card.Title>
                    <Card.Text className={cabin.className} style={{paddingTop:"10px", paddingBottom:"10px"}}>
                    Location: {thisRes?.county}
                    <br></br>
                    Hours: {hours}
                    <br></br>
                    Type: {thisRes?.type}
                    <br></br>
                    </Card.Text>
                </div>
                <div style={{}}>
                    <Button variant="outline-dark" href = {thisRes?.website} style={{marginBottom:"10px", width:"100%"}}>Website</Button>
                    <Button variant="outline-dark" href = {path} style={{width:"100%"}}> Read More </Button>
                </div>
            </Card.Body>
        </Card>
    )
} 

export default ResourceCard;
