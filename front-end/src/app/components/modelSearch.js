'use client'
import { Container, Row, Col, Button, Form } from "react-bootstrap"
import React, { useState } from "react";
import { Lora, Cabin} from "next/font/google";
const lora = Lora({weight: '400', subsets: ['latin']})
const cabin = Cabin({weight: '400', subsets: ['latin']})
import { useRouter } from 'next/navigation';




export default function ModelSearch({model}) {

    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState(null)

    const saveSearch = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch(null);
        }
    };

    const handleSearch = (event) => {
        if (event !== null) {
            event.preventDefault();
        }
        if (searchTerm != null) {
            router.push(`?search=${encodeURIComponent(searchTerm)}`);
        }
    }

    const reset = (event) => {
        router.replace("/" + model.toLowerCase(), undefined, { shallow: true });
        document.getElementById("searchBar").value = "";
    }

    return (
        <Container fluid={true} style={{ maxWidth: "100vw", padding: "0" }}>
        <Row className="justify-content-center align-items-center">
          <Col xs="auto" className="d-flex align-items-center">
            <Form.Control 
              id="searchBar"
              className={cabin.className}
              type="text" 
              placeholder={"Search " + model} 
              onChange={saveSearch}
              onKeyDown={handleKeyPress}
              style={{ fontSize: '1rem', width: '75vw' }}/>
          </Col>
          <Col xs="auto" className="d-flex align-items-center">
            <Button className="search-button" style={{ fontSize: '1rem' }} onClick={handleSearch}>
              <img src="/images/search_icon.svg.png" alt='magnifying glass' style={{ height: '1rem' }}/>
            </Button>
          </Col>
          <Col xs="auto" className="d-flex align-items-center">
            <Button className="reset-button" style={{ fontSize: '1rem' }} onClick={reset}>
                Reset
            </Button>
          </Col>
        </Row>
      </Container>
    )
}
