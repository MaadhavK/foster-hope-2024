import { Row, Col, Container, Tab, Tabs } from "react-bootstrap";
import styles from "../page.module.css";
import { Lora, Cabin} from "next/font/google";
const lora = Lora({weight: '400', subsets: ['latin']})
const cabin = Cabin({weight: '400', subsets: ['latin']})
import PieChart from "./components/pieChart.js";
import ScatterPlot from "./components/scatterPlot.js";
import BarChart from "./components/barChart";

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
          <Row style={{paddingTop: "1rem", paddingBottom: "1rem", justifyContent: "space-evenly"}}>
            <Col>
              <div className={lora.className}>
                <h1 style={{ color: "black", textAlign: "center" }}>
                  Visualizations
                </h1>
              </div>
            </Col>
          </Row>
          <Row style={{paddingTop: "1rem", paddingBottom: "1rem", justifyContent: "center"}} >
            <Col style={{ textAlign: "center" }}>
              <PieChart data={events} />
            </Col>
          </Row>
          <Row style={{paddingTop: "1rem", paddingBottom: "1rem", justifyContent: "center"}} >
            <Col style={{ textAlign: "center" }}>
              <ScatterPlot data={scatter} />
            </Col>
          </Row>
          <Row style={{paddingTop: "1rem", paddingBottom: "1rem", justifyContent: "center"}} >
            <Col style={{ textAlign: "center" }}>
              <BarChart data={elderhomes} />
            </Col>
          </Row>
          <Row style={{paddingTop: "1rem", paddingBottom: "1rem", justifyContent: "center"}} >
          <Col className={lora.className} style={{paddingLeft:"20vw", paddingRight:"20vw", paddingTop:"1rem", paddingBottom:"1rem", color:"black"}}>
              <h2 style={{textAlign:"center"}}>Critiques</h2>
              <br/>
              <div style={{fontSize:"20px"}}>What did they do well?</div>
              <br/>
              <div>
                
              </div>
              <br/>
              <div style={{fontSize:"20px"}}>How effective was their RESTful API?</div>
              <br/>
              <div>
                Their RESTful API seems to be well implemented and the documentation provided through
                postman was more than ample for us to use them to create visualizations. 
              </div>
              <br/>
              <div style={{fontSize:"20px"}}>How well did they implement your user stories?</div>
              <br/>
              <div>
                
              </div>
              <br/>
              <div style={{fontSize:"20px"}}>What did we learn from their website?</div>
              <br/>
              <div>
                
              </div>
              <br/>
              <div style={{fontSize:"20px"}}>What can they do better?</div>
              <br/>
              <div>
                There seems to be some spacing issues, especially with the pictures in model pages and the 
                searching and sorting elements that makes the website less visually appealing. The font could 
                also be improved.
              </div>
              <br/>
              <div style={{fontSize:"20px"}}>What effects did the peer reviews have?</div>
              <br/>
              <div></div>
              <br/>
              <div style={{fontSize:"20px"}}>What puzzles us about their website?</div>
              <br/>
              <div>
                One thing that puzzles us is an issue that we were having with our api, which seems to provide different
                data based on whether http or https is used in the api call. 
              </div>
            </Col>
          </Row>

        </Container>
      </main>
    );
  }
  