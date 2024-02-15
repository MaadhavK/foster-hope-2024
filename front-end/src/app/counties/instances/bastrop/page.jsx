"use client"
import { Row, Col, Container } from "react-bootstrap";
import YouTube from 'react-youtube';
import styles from "../../../page.module.css";
import "../counties.css";

export default function BastropCounty(){

    const videoId = new URLSearchParams(new URL("https://www.youtube.com/watch?v=jjSyux2Nu8E&ab_channel=SecretsofTexas").search).get("v");
    return (
        <main className={styles.main}>
            <div className="header">
                <h1> Bastrop County Information</h1>
            </div>
            <Container>
                <Row>
                    <Col>
                        <img className="countyimage" src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Bastrop_courthouse.jpg" alt="Description of your image" />
                    </Col>
                    <Col>
                        <p className="paragraph">Bastrop County is located in the U.S. state of Texas. It is in Central Texas and its county seat is Bastrop. As of the 2020 census, the population was 97,216. Bastrop County is included in the Austin–Round Rock, Texas, metropolitan statistical area.</p>
                        <ul className="bullet-point">
                            <li>Population: 97,216</li>
                            <li>Number of Agencies: 50</li>
                            <li>Number of Foster Children: 100</li>
                            <li>Number of Foster Homes: 20</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <div className="col-md-12 text-center mt-5">
                        <YouTube videoId={videoId} />
                    </div>
                </Row>

            </Container>

            {/* Links */}
            <div className="center">
                <h2>Organization</h2>
                <div><a href="../../../organizations/instances/houston-alumni-youth">Houston Alumni Youth</a></div>
                <h2>Resource</h2>
                <div><a href="../../../resources/instances/storytime">Free Kids Event: Children's Book Story Time</a></div>
            </div>
        </main>
    )
}
