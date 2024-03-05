"use client"
import styles from "../../page.module.css";
import countiesData from "../../data/counties.json";
import {Card} from 'react-bootstrap';
import { Button } from "react-bootstrap";
import "../counties.css";
import YouTube from 'react-youtube';

import { Lora, Cabin} from "next/font/google";

const lora = Lora({weight: '400', subsets: ['latin']})
const cabin = Cabin({weight: '400', subsets: ['latin']})

// "id": 1,
// "name": "Travis County",
// "img_url": "https://upload.wikimedia.org/wikipedia/commons/6/64/Travis_courthouse_2011.jpg",
// "description": "Travis County is located in Central Texas. As of the 2020 census, the population was 1,290,188. It is the fifth-most populous county in Texas. Its county seat and most populous city is Austin, the capital of Texas.",
// "population": "1,290,188",
// "num_agencies": 50,
// "num_foster_child": 100,
// "num_foster_homes": 20,
// "vid_url": "https://www.youtube.com/watch?v=wo0m4Lk-Ylo&ab_channel=TravisCountyTX"

const CountyCard = ({county}) => {
    var thisCounty = JSON.parse(county);
    if (!thisCounty) {
        return <div>Error: County data is not available</div>;
    }
    const path = "counties/" + thisCounty?.id + "/";

    return (
        <Card style = {{width: "20rem", height: "35rem"}}>
            <Card.Img  style={{width:"20rem", height:"20rem", objectFit:"cover"}} variant="top" src = {thisCounty?.img_url}/>
            <Card.Body className="d-flex flex-column justify-content-center" style={{padding: "1rem", background: "lightblue"}}>
                <Card.Title>{thisCounty?.name}</Card.Title>
                <Card.Text style={{paddingTop:"10px", paddingBottom:"10px"}}>
                Population: {thisCounty?.population}
                <br></br>
                Number of Agencies: {thisCounty?.num_agencies}
                <br></br>
                Number of Foster Children: {thisCounty?.num_foster_child}
                <br></br>
                Number of Foster Homes: {thisCounty?.num_foster_homes}
                </Card.Text>
                <Button variant="outline-dark" href = {path}> Read More </Button>
            </Card.Body>
        </Card>
    )
} 

export default CountyCard;
