"use client"
import styles from "../../page.module.css";
import {Card} from 'react-bootstrap';
import { Button } from "react-bootstrap";
import "../counties.css";
import YouTube from 'react-youtube';

import { Lora, Cabin} from "next/font/google";

const lora = Lora({weight: '400', subsets: ['latin']})
const cabin = Cabin({weight: '400', subsets: ['latin']})

import { HighlightText } from "../../components/HighlightText";

// Card with county information (params are data passed in)
const CountyCard = ({county, query = ""}) => {
    var thisCounty = JSON.parse(county);
    if (!thisCounty) {
        return <div>Error: County data is not available</div>;
    }

    const path = "../counties/" + thisCounty.county.replace(" ", '_') + "/";
    // County information with routing to instance page
    //<HighlightText text={thisCounty?.number_of_orgs.toString()} query={query} /> 

    return (
        <Card style = {{width: "20rem", height: "37rem", margin:"0 auto"}}>
            <Card.Img  style={{width:"20rem", height:"20rem", objectFit:"cover"}} variant="top" src = {thisCounty?.image}/>
            <Card.Body className="d-flex flex-column justify-content-center" style={{padding: "1rem", background: "lightblue"}}>
                <Card.Title className={lora.className} style={{fontSize:"1.6rem"}}><b>{HighlightText(thisCounty?.county, query)}</b></Card.Title>
                <Card.Text className={cabin.className} style={{paddingTop:"10px", paddingBottom:"10px"}}>
                Population: {HighlightText(thisCounty?.population, query)}
                <br></br>
                Number of Orgs: {HighlightText(thisCounty?.number_of_orgs, query)}
                <br></br>
                Number of Foster Children: {HighlightText(thisCounty?.number_of_foster_kids, query)}
                <br></br>
                Number of Foster Homes: {HighlightText(thisCounty?.number_of_homes, query)}
                <br></br>

                </Card.Text>
                <Button className={lora.className} variant="outline-dark" href = {path}> Read More </Button>
            </Card.Body>
        </Card>
    )
} 

export default CountyCard;
