"use client"
// import Counties from "./components/countyCardList"
import { Row, Col, Container, Card, Button} from "react-bootstrap";
import styles from "../page.module.css";
import {useState, useEffect} from 'react'
import ResourceCard from "./components/ResourceCard";
export default function Resources() {
    const [resources, setResources] = useState([])

    useEffect(() => {
        const getResources = async () => {
            const res = await fetch('/api/resources')
            const data = await res.json()
            setResources(data);
        }

        getResources()
    }, [])
    console.log(resources)
    console.log(typeof resources)
    console.log(Array.isArray(resources))
    return (
        <main className= {styles.main}>
            <div className= {styles.description}>
                <h1>Resources</h1>
                <Container style = {{padding: 15}}>
                <Row style = {{padding: "2rem"}}>
                    {resources.map((resource) => (
                        <Col xs><ResourceCard resource={resource}/> </Col>
                    ))}
                </Row>
            </Container>
                </div>
            </main>
    )
}