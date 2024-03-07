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
    console.log(thisCounty);
    console.log(thisCounty.county);
    console.log()
    const path = "counties/" + thisCounty.county + "/";

    return (
        <Card style = {{width: "20rem", height: "35rem", margin:"0 auto"}}>
            <Card.Img  style={{width:"20rem", height:"20rem", objectFit:"cover"}} variant="top" src = {thisCounty?.image}/>
            <Card.Body className="d-flex flex-column justify-content-center" style={{padding: "1rem", background: "lightblue"}}>
                <Card.Title className={lora.className} style={{fontSize:"1.6rem"}}><b>{thisCounty?.county}</b></Card.Title>
                <Card.Text className={cabin.className} style={{paddingTop:"10px", paddingBottom:"10px"}}>
                Population: {thisCounty?.population}
                <br></br>
                Number of Agencies: 10
                <br></br>
                Number of Foster Children: {thisCounty?.number_of_foster_kids}
                <br></br>
                Number of Foster Homes: {thisCounty?.number_of_homes}
                <br></br>
                Number of Foster Homes: {thisCounty?.number_of_homes}
                <br></br>
                Id: {thisCounty?.id}
                </Card.Text>
                <Button className={lora.className} variant="outline-dark" href = {path}> Read More </Button>
            </Card.Body>
        </Card>
    )
} 

export default CountyCard;
