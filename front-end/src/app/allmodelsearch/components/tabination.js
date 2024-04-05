"use client";

import { useRouter, useSearchParams } from "next/navigation";
import styles from "../../page.module.css";
import { Row, Col, Container, Tab, Tabs, Form, Button } from "react-bootstrap";
import { Lora, Cabin } from "next/font/google";
const lora = Lora({ weight: "400", subsets: ["latin"] });
const cabin = Cabin({ weight: "400", subsets: ["latin"] });
import { useEffect, useState } from "react";
import Pagination from "./pagination.js";

import CountyCard from "../../counties/components/countycard";
import OrgCard from "../../organizations/components/orgCard";
import ResourceCard from "../../resources/components/resourcecard";

const Tabination = ({ counties, orgs, resources, searchParams }) => {
  const router = useRouter();
  const search = useSearchParams();

  let [searchTerm, setSearchTerm] = useState(searchParams["search"]);
  let [rawInput, setRawInput] = useState(searchParams["search"]);

  if (searchTerm.includes("/")) {
    searchTerm = searchTerm.split("/")[0];
  }
  const searchURL = `allmodelsearch?search=${searchTerm}`;
  // Params for pagination
  const [page, setPage] = useState(searchParams["page"] ?? 1);
  const per_page = searchParams["per_page"] ?? 16;

  // console.log(searchParams["page"])
  // console.log(searchParams["per_page"])

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const num_instances_counties = Object.keys(counties.data).length;
  const num_instances_orgs = Object.keys(orgs.data).length;
  const num_instances_resources = Object.keys(resources.data).length;

  // Page slice
  const [county_entries, setCounties] = useState(
    counties.data.slice(start, end)
  );
  //const county_entries = counties.data.slice(start, end)
  const [orgs_entries, setOrgs] = useState(orgs.data.slice(start, end));
  //const orgs_entries = orgs.data.slice(start, end)
  const [resources_entries, setResources] = useState(
    resources.data.slice(start, end)
  );
  //const resources_entries = resources.data.slice(start, end)

  const [tabState, setTabState] = useState("counties");

  const [modelState, setModelState] = useState({
    counties: 1,
    orgs: 1,
    resources: 1,
  });

  const saveSearch = (e) => {
    setRawInput(e.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch(null);
    }
  };

  const handleSearch = (event) => {
    if (event !== null) {
      event.preventDefault();
    }

    if (rawInput != null) {
      // Navigate to search page with the query parameter
      // Calculate start and end based on the updated page state

      setSearchTerm(rawInput);
      setPage(searchParams["page"] ?? 1);

      const start = (Number(page) - 1) * Number(per_page);
      const end = start + Number(per_page);

      // Update the sliced data based on the updated page state
      setCounties(counties.data.slice(start, end));
      setOrgs(orgs.data.slice(start, end));
      setResources(resources.data.slice(start, end));
      router.push(`/allmodelsearch?search=${encodeURIComponent(rawInput)}`);
    }
  };

  useEffect(() => {
    const tempPage = searchParams["page"] ?? 1;
    setPage(searchParams["page"] ?? 1);
    if (tabState === "counties") {
      setModelState({
        counties: tempPage,
        orgs: Number(modelState.orgs),
        resources: Number(modelState.resources),
      });
    } else if (tabState === "orgs") {
      setModelState({
        counties: Number(modelState.counties),
        orgs: tempPage,
        resources: Number(modelState.resources),
      });
    } else if (tabState === "resources") {
      setModelState({
        counties: Number(modelState.counties),
        orgs: Number(modelState.orgs),
        resources: tempPage,
      });
    }

    console.log(page);
    const start = (Number(tempPage) - 1) * Number(per_page);
    const end = start + Number(per_page);

    if (tabState === "counties") {
      setCounties(counties.data.slice(start, end));
    } else if (tabState === "orgs") {
      setOrgs(orgs.data.slice(start, end));
    } else if (tabState === "resources") {
      setResources(resources.data.slice(start, end));
    }
  }, [per_page, counties, orgs, resources, searchParams]);

  //If a different tab is changed
  const handleTabChange = (key) => {
    const per_page = searchParams["per_page"] ?? 16;
    setTabState(key);

    if (key === "counties") {
      setPage(Number(modelState.counties));
      const start = (Number(modelState.counties) - 1) * Number(per_page);
      const end = start + Number(per_page);
      setCounties(counties.data.slice(start, end));
      setResources(resources.data.slice(start, end));
      setOrgs(orgs.data.slice(start, end));
      router.push(
        `/${searchURL}&page=${Number(modelState.counties)}&per_page=${per_page}`
      );
    } else if (key === "orgs") {
      setPage(Number(modelState.orgs));
      const start = (Number(modelState.orgs) - 1) * Number(per_page);
      const end = start + Number(per_page);
      setCounties(counties.data.slice(start, end));
      setResources(resources.data.slice(start, end));
      setOrgs(orgs.data.slice(start, end));
      router.push(
        `/${searchURL}&page=${Number(modelState.orgs)}&per_page=${per_page}`
      );
    } else if (key === "resources") {
      setPage(Number(modelState.resources));
      const start = (Number(modelState.resources) - 1) * Number(per_page);
      const end = start + Number(per_page);
      setCounties(counties.data.slice(start, end));
      setResources(resources.data.slice(start, end));
      setOrgs(orgs.data.slice(start, end));
      router.push(
        `/${searchURL}&page=${Number(
          modelState.resources
        )}&per_page=${per_page}`
      );
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        paddingLeft: "5vw",
        paddingRight: "5vw",
        paddingTop: "15vh",
        paddingBottom: "20px",
        color: "black",
      }}
    >
      <h1
        className={lora.className}
        style={{ fontSize: "3rem", textAlign: "center" }}
      >
        Search results for "{searchTerm}"
      </h1>
      <br></br>
      <br></br>

      {/* Search bar */}
      <Container
        fluid={true}
        className={styles.splashcont}
        style={{ maxWidth: "100vw", height: "15vh", padding: "0" }}
      >
        <Row className="justify-content-center align-items-center">
          <Col xs="auto" className="d-flex align-items-center">
            <Form.Control
              type="text"
              placeholder="Search"
              onChange={saveSearch}
              onKeyDown={handleKeyPress}
              style={{ fontSize: "1rem", width: "45vw" }}
            />
          </Col>
          <Col xs="auto" className="d-flex align-items-center">
            <Button
              className="search-button"
              style={{
                fontSize: "1rem",
                backgroundColor: "#c7c7c7",
                borderColor: "#ffffff",
              }}
              onClick={handleSearch}
              onMouseEnter={(e) => {
                e.target.style.borderColor = "#000000";
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = "#ffffff";
              }}
            >
              <img
                src="/images/search_icon.svg.png"
                alt="magnifying glass"
                style={{ height: "2vw" }}
              />
            </Button>
          </Col>
        </Row>
      </Container>

      <Tabs
        defaultActiveKey="counties"
        className={lora.className}
        onSelect={(key) => handleTabChange(key)}
        style={{color:"black", backgroundColor: "#FFFFFF", fontWeight: "bold",  fontSize: "1.2rem" }}
        justify
      >
        <Tab eventKey="counties" title="Counties" 
        style={{color:"black", backgroundColor: "#FFFFFF"}}>
          {/* Render Counties content */}
          <Container fluid={true} style={{}}>
            <Row
              style={{
                padding: "3vw",
                paddingTop: "2rem",
                justifyContent: "space-evenly",
              }}
            >
              {county_entries.map((county, index) => (
                <Col key={index} xs style={{ paddingBottom: "2rem" }}>
                  <CountyCard
                    key={index}
                    county={JSON.stringify(county)}
                    query={searchTerm}
                  />
                </Col>
              ))}
            </Row>
          </Container>
          {/* Pagination component */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Pagination
              num_instances={num_instances_counties}
              path={`${searchURL}`}
            />
          </div>
          <h3
            className={lora.className}
            style={{
              color: "black",
              paddingBottom: "20px",
              textAlign: "center",
            }}
          >
            Number of Instances: {num_instances_counties}
          </h3>
        </Tab>
        <Tab eventKey="orgs" title="Organizations" style={{color:"black", backgroundColor: "#FFFFFF" }}>
          {/* Render Organizations content */}
          <Container fluid={true} style={{}}>
            <Row
              style={{
                padding: "3vw",
                paddingTop: "2rem",
                justifyContent: "space-evenly",
              }}
            >
              {orgs_entries.map((organization, index) => (
                <Col key={index} xs style={{ paddingBottom: "2rem" }}>
                  <OrgCard key={index} org={organization} query={searchTerm} />
                </Col>
              ))}
            </Row>
          </Container>
          {/* Pagination component */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Pagination
              num_instances={num_instances_orgs}
              path={`${searchURL}`}
            />
          </div>
          <h3
            className={lora.className}
            style={{
              color: "black",
              paddingBottom: "20px",
              textAlign: "center",
            }}
          >
            Number of Instances: {num_instances_orgs}
          </h3>
        </Tab>
        <Tab eventKey="resources" title="Resources" style={{color:"black", backgroundColor: "#FFFFFF" }}>
          {/* Render Resources content */}
          <Container fluid={true} style={{}}>
            <Row
              style={{
                padding: "3vw",
                paddingTop: "2rem",
                justifyContent: "space-evenly",
              }}
            >
              {resources_entries.map((resource, index) => (
                <Col key={index} xs style={{ paddingBottom: "2rem" }}>
                  <ResourceCard
                    key={index}
                    resource={JSON.stringify(resource)}
                    query={searchTerm}
                  />
                </Col>
              ))}
            </Row>
          </Container>
          {/* Pagination component */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Pagination
              num_instances={num_instances_resources}
              path={`${searchURL}`}
            />
          </div>
          <h3
            className={lora.className}
            style={{
              color: "black",
              paddingBottom: "20px",
              textAlign: "center",
            }}
          >
            Number of Instances: {num_instances_resources}
          </h3>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Tabination;
