'use client'
import { Container, Row, Col, Button, Form } from "react-bootstrap"
import React, { useState } from "react";
import { Lora, Cabin, Cabin_Sketch} from "next/font/google";
const lora = Lora({weight: '400', subsets: ['latin']})
const cabin = Cabin({weight: '400', subsets: ['latin']})
import { useRouter } from 'next/navigation';




export default function ModelSearch({model, choices}) {

    // state for search term and cards
    const router = useRouter();
    const [saveTerm, setSaveTerm] = useState(null);
    const [searched, setSearched] = useState(null);
    const [asc, setAsc] = useState(true);
    const [selVal, setSelVal] = useState(0);

    const saveSearch = (e) => {
        setSaveTerm(e.target.value)
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch(null);
        }
    };

    // Logic for handling a search
    const handleSearch = (event) => {
        if (event !== null) {
            event.preventDefault();
        }
        if (saveTerm != null) {
            setSearched(saveTerm);
            router.push(model.toLowerCase() + "?" + "search=" + encodeURIComponent(saveTerm) + (selVal != "" ? "&": "") + (selVal != 0 ? "sort=" + selVal + "&asc=" + asc : ""));
        }
    }

    // Toggling the sort from ascending to descending and vice versa
    const toggleAscSwitch = (e) => {
        const val = !asc;
        setAsc(val);
        if(selVal != 0){
            router.push(model.toLowerCase() + "?" + (searched != null ? "search=" + encodeURIComponent(searched) + "&" : "") + "sort=" + selVal + "&asc=" + val);
        }
    }
    
    const handleSelect = (e) => {
        console.log(e.target.value);
        setSelVal(e.target.value);
        router.push(model.toLowerCase() + "?" + (searched != null ? "search=" + encodeURIComponent(searched) + (e.target.value != 0 ? "&": "") : "") + (e.target.value != 0 ? "sort=" + e.target.value + "&asc=" + asc : ""));
    }

    // Reset elements to original
    const reset = (event) => {
        router.replace("/" + model.toLowerCase(), undefined, { shallow: true });
        document.getElementById("searchBar").value = "";
        setSearched(null);
        setAsc(true);
        setSelVal("");
        document.getElementById("ascSwitch").checked = false;
    }

    return (
        <Container fluid={true} style={{ maxWidth: "100vw", padding: "0" }}>
            <Row className="justify-content-center align-items-center">
                {/* Sort drop down menu */}
                <Col xs="auto" className="d-flex align-items-center">
                    <Form.Select value={selVal} onChange={handleSelect} className={cabin.className} style={{color:"black", fontSize:"1rem"}}>
                        <option value={0}>Sort By:</option>
                        {choices.map((option, index) => (
                            <option value={index + 1}>{option}</option>
                        ))}
                    </Form.Select>
                </Col>
                {/* Ascending/Descending Toggle */}
                <Col xs="auto" className="d-flex align-items-center">
                    <Form.Switch id="ascSwitch" style={{color:"black", fontSize:"1rem"}} className={cabin.className} onChange={toggleAscSwitch} label={asc ? "Ascending" : "Descending"}/>
                </Col>
                <Col xs="auto" className="d-flex align-items-center">
                    {/* Search Bar */}
                    <Container style={{minWidth:"500px"}}>
                        <Row>
                            <Col xs="auto" className="d-flex align-items-center">
                                <Form.Control 
                                    id="searchBar"
                                    className={cabin.className}
                                    type="text" 
                                    placeholder={"Search " + model} 
                                    onChange={saveSearch}
                                    onKeyDown={handleKeyPress}
                                    style={{ fontSize: '1rem', width:"45vw" }}
                                />
                            </Col>
                            <Col xs="auto" className="d-flex align-items-center">
                                <Button className="search-button" style={{ fontSize: '1rem', backgroundColor:"#c7c7c7", borderColor:"#ffffff"}} onClick={handleSearch}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = '#d0d0d0';
                                        e.target.style.borderColor = '#000000';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = '#c7c7c7';
                                        e.target.style.borderColor = '#ffffff';
                                    }}
                                >
                                <img src="/images/search_icon.svg.png" alt='magnifying glass' style={{ height: '1rem' }}/>
                                </Button>
                            </Col>
                            {/* Reset button */}
                            <Col xs="auto" className="d-flex align-items-center">
                                <Button className={cabin.className} style={{ fontSize: '1rem' , color:"black", backgroundColor:"#c7c7c7", borderColor:"#ffffff"}} onClick={reset}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = '#d0d0d0';
                                        e.target.style.borderColor = '#000000';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = '#c7c7c7';
                                        e.target.style.borderColor = '#ffffff';
                                    }}
                                >
                                    Reset
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}
