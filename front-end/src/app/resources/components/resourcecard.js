"use client"
import styles from "../../page.module.css";
import {Card} from 'react-bootstrap';
import { Button } from "react-bootstrap";
import YouTube from 'react-youtube';

import { Lora, Cabin} from "next/font/google";

const lora = Lora({weight: '400', subsets: ['latin']})
const cabin = Cabin({weight: '400', subsets: ['latin']})

import { HighlightText } from "../../components/HighlightText";

function extractDomain(url) {
    let domain = url.replace(/(^\w+:|^)\/\//, '').split('/')[0];
    // Removing any subdomains
    domain = domain.replace("www.", "");
    return domain;
  }
// Function to extract domain name
function getDomainName(url) {
    const domain = extractDomain(url);
    return domain;
}

// Resource card
const ResourceCard = ({resource, query}) => {
    resource.replace(/"/g, /'/g)
    // console.log(`Here's the resource: ${resource}`)
    var thisRes = JSON.parse(resource);
    
    
    if (!thisRes) {
        return <div>Error: resource data is not available</div>;
    }

    const path = "../resources/" + thisRes.id + "/";
    
    // Date/time logic
    const date = new Date();
    const offsetMinutes = date.getTimezoneOffset();
    const offsetMilliseconds = offsetMinutes * 60 * 1000;
    const currentDate = new Date(date.getTime() - offsetMilliseconds);
    const day = currentDate.getDay() - 1;

    let hours = thisRes?.hours;

    if(thisRes.type != "event"){
        //hours = JSON.parse(thisRes?.hours)[day]
        hours = Array.isArray(thisRes?.hours) ? JSON.parse(thisRes?.hours)[day] : '';
    }

    return (
        // Resource card info with routing to instance page
        <Card style = {{width: "20rem", height: "37rem", margin:"0 auto"}}>
            <Card.Img  style={{width:"20rem", height:"20rem", objectFit:"cover"}} variant="top" src = {thisRes?.media}/>
            <Card.Body className="d-flex flex-column" style={{padding: "1rem", background: "lightblue", justifyContent:"space-between"}}>
                <div>
                    <Card.Title className={lora.className} style={{fontSize:"1.2rem", alignSelf:"flex-start"}}><b>{HighlightText(thisRes?.name,query)}</b></Card.Title>
                    <Card.Text className={cabin.className} style={{paddingTop:"10px", paddingBottom:"10px"}}>
                    Location: {HighlightText(thisRes?.county,query)}
                    <br></br>
                    Hours: {HighlightText(hours,query)}
                    <br></br>
                    Type: {HighlightText(thisRes?.type,query)}
                    <br></br>
                    Website: {HighlightText(getDomainName(thisRes?.website), query)}
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
