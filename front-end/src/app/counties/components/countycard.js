"use client"
import styles from "../../page.module.css";
import {Card} from 'react-bootstrap';
import { Button } from "react-bootstrap";
import "../counties.css";
import YouTube from 'react-youtube';

import { Lora, Cabin} from "next/font/google";

const lora = Lora({weight: '400', subsets: ['latin']})
const cabin = Cabin({weight: '400', subsets: ['latin']})

const CountyCard = ({county}) => {
    var thisCounty = JSON.parse(county);
    if (!thisCounty) {
        return <div>Error: County data is not available</div>;
    }
    const path = "counties/" + thisCounty?.id + "/";

    return (
        <Card style = {{width: "20rem", height: "35rem", margin:"0 auto"}}>
            <Card.Img  style={{width:"20rem", height:"20rem", objectFit:"cover"}} variant="top" src = {thisCounty?.img_url}/>
            <Card.Body className="d-flex flex-column justify-content-center" style={{padding: "1rem", background: "lightblue"}}>
                <Card.Title className={lora.className} style={{fontSize:"1.6rem"}}><b>{thisCounty?.name}</b></Card.Title>
                <Card.Text className={cabin.className} style={{paddingTop:"10px", paddingBottom:"10px"}}>
                Population: {thisCounty?.population}
                <br></br>
                Number of Agencies: {thisCounty?.num_agencies}
                <br></br>
                Number of Foster Children: {thisCounty?.num_foster_child}
                <br></br>
                Number of Foster Homes: {thisCounty?.num_foster_homes}
                </Card.Text>
                <Button className={lora.className} variant="outline-dark" href = {path}> Read More </Button>
            </Card.Body>
        </Card>
    )
} 

export default CountyCard;
