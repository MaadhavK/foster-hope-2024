"use client"
import styles from "../../page.module.css";
import countiesData from "../../data/counties.json";
import { Row, Col, Container } from "react-bootstrap";
import "../counties.css";
import YouTube from 'react-youtube';

import { Lora, Cabin} from "next/font/google";

const lora = Lora({weight: '400', subsets: ['latin']})
const cabin = Cabin({weight: '400', subsets: ['latin']})


export default function CountyPage ({params}) {
    console.log(params)
    const id = params.name.replace("_", ' ');

    const data = countiesData
    const counties = data?.counties
    const county = counties.find(b => b.name == id)
    console.log(county);
    //return (<div>asdjkfljsadlkfdsaf</div>)
    const videoId = new URLSearchParams(new URL(county.vid_url).search).get("v")
    return (
        <main className= {styles.main}>
            <div className="header">
                <h1>{county.name}</h1>
            </div> 
            <Container>
                <Row>
                    <Col>
                        {/* County Image */}
                        <img className="countyimage" src={county.img_url} alt="Description of your image" />
                    </Col>
                    <Col>
                        {/* Info */}
                        <p className="paragraph">{county.description}</p>
                        <ul className="bullet-point">
                            <li>Population: {county.population}</li>
                            <li>Number of Agencies: {county.num_agencies}</li>
                            <li>Number of Foster Children: {county.num_foster_child}</li>
                            <li>Number of Foster Homes: {county.num_foster_homes}</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    {/* Youtube video Placement*/}
                    <div className="col-md-12 text-center mt-5">
                        <YouTube videoId={videoId} />
                    </div>

                </Row>
            </Container>
            {/* Links */}
        </main>
    )
}