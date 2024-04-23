import { Row, Col, Container, Tab, Tabs } from "react-bootstrap";
import styles from "../page.module.css";
import { Lora, Cabin} from "next/font/google";
const lora = Lora({weight: '400', subsets: ['latin']})
const cabin = Cabin({weight: '400', subsets: ['latin']})
import PieChart from "./components/pieChart.js";
import ScatterPlot from "./components/scatterPlot.js";

export const getElderHomes = async () => {
    const response = await fetch(
      "https://cs373backend.elderhelpertexas.me/elderhomes"
    );
    return await response.json();
  };
  export const getHospitals = async () => {
    const response = await fetch("https://cs373backend.elderhelpertexas.me/hospitals");
    return await response.json();
  };
  export const getEvents = async () => {
    const response = await fetch(
      `https://cs373backend.elderhelpertexas.me/events`
    );
    return await response.json();
  };


export default async function providervisuals() {

    var elderhomes = null;
    var hospitals = null;
    var events = null;
  
      // Search paramters (is there a search paramter or not?)

    elderhomes = await getElderHomes();
    hospitals = await getHospitals();
    events = await getEvents();

    var scatter = [];
    for(var k in hospitals){
        var rev = parseFloat(hospitals[k]["gross_patient_revenue"].substring(1).replace(",", ''));
        scatter.push({beds : parseFloat(hospitals[k]["beds"]), revenue : rev});
    }
    scatter = JSON.stringify(scatter);
  
    return (
      <main
        className={styles.main}
        style={{
          backgroundColor: "white",
          width: "100vw",
          paddingTop: "55px",
          height: "100%",
        }}
      >
        <Container style={{maxWidth: "100vw", margin: "0", paddingLeft: "5vw", paddingRight: "5vw", paddingTop: "5vh", border: "0", justifyContent: "center", alignItems: "center"}}>
          <Row style={{padding: "3vw", paddingTop: "2rem", justifyContent: "space-evenly"}}>
            <Col>
              <div className={lora.className}>
                <h1 style={{ color: "black", textAlign: "center" }}>
                  Visualizations
                </h1>
              </div>
            </Col>
          </Row>
          <Row style={{padding: "3vw", paddingTop: "2rem", justifyContent: "center"}} >
            <Col style={{ textAlign: "center" }}>
              <PieChart data={events} />
            </Col>
          </Row>
          <Row style={{padding: "3vw", paddingTop: "2rem", justifyContent: "center"}} >
            <Col style={{ textAlign: "center" }}>
              <ScatterPlot data={scatter} />
            </Col>
          </Row>

        </Container>
      </main>
    );
  }
  