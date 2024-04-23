import { Row, Col, Container, Tab, Tabs } from "react-bootstrap";
import styles from "../page.module.css";
import { Lora, Cabin} from "next/font/google";
const lora = Lora({weight: '400', subsets: ['latin']})
const cabin = Cabin({weight: '400', subsets: ['latin']})
import PieChart from "./components/pieChart.js";
import BarChart from "./components/barChart.js";
import ScatterPlot from "./components/scatterPlot.js";

export const getCounties = async () => {
    const response = await fetch(
      "http://api.foster-hope.com/counties/all_counties"
    );
    return await response.json();
  };
  export const getOrgs = async () => {
    const response = await fetch("http://api.foster-hope.com/orgs/all_orgs");
    return await response.json();
  };
  export const getResources = async () => {
    const response = await fetch(
      `http://api.foster-hope.com/resources/all_resources`
    );
    return await response.json();
  };


export default async function visualizations() {
    var counties = null;
    var orgs = null;
    var resources = null;
  
    counties = await getCounties();
    orgs = await getOrgs();
    resources = await getResources();

    var scatter = [];
    var maxPop = 0;
    var maxHomes = 0;
    for(var k in counties["data"]){
        var pop = parseFloat(counties["data"][k]["population"]);
        var homes = parseFloat(counties["data"][k]["number_of_homes"]);
        if(pop > maxPop){
            maxPop = pop;
        }
        if (homes > maxHomes) {
            maxHomes = homes;
        }
        scatter.push({population : pop, fosterHomes : homes});
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
        <Container
          style={{
            maxWidth: "100vw",
            margin: "0",
            paddingLeft: "5vw",
            paddingRight: "5vw",
            paddingTop: "5vh",
            border: "0",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Row
            style={{
              paddingTop: "1rem",
              paddingBottom: "1rem",
              justifyContent: "space-evenly",
            }}
          >
            <Col>
              <div className={lora.className}>
                <h1 style={{ color: "black", textAlign: "center" }}>
                  Visualizations
                </h1>
              </div>
            </Col>
          </Row>
          <Row
            style={{
              paddingTop: "1rem",
              paddingBottom: "1rem",
              justifyContent: "center", // Center the content horizontally
            }}
          >
            <Col style={{ textAlign: "center" }}>
              {" "}
              {/* Center the content inside the column */}
              <PieChart data={counties.data} />
            </Col>
          </Row>
          <Row
            style={{
              paddingTop: "1rem",
              paddingBottom: "1rem",
              justifyContent: "center", // Center the content horizontally
            }}
          >
            <Col style={{ textAlign: "center" }}>
              {" "}
              {/* Center the content inside the column */}
              <BarChart data={orgs.data} />
            </Col>
          </Row>
          <Row
            style={{
              paddingTop: "1rem",
              paddingBottom: "1rem",
              justifyContent: "center", // Center the content horizontally
            }}
          >
            <Col style={{ textAlign: "center" }}>
              {" "}
              {/* Center the content inside the column */}
              <ScatterPlot data={scatter}/>
            </Col>
          </Row>
          <Row style={{paddingTop: "1rem", paddingBottom: "1rem", justifyContent: "center"}} >
            <Col className={lora.className} style={{paddingLeft:"20vw", paddingRight:"20vw", paddingTop:"1rem", paddingBottom:"1rem", color:"black"}}>
              <h2 style={{textAlign:"center"}}>Critiques</h2>
              <br/>
              <div style={{fontSize:"20px"}}>What did we do well?</div>
              <br/>
              <div>
                We think that our final website's design and ui is clean and user friendly. We worked together well as a 
                group and were able to meet and collaborate together. We had a lot of fun working on this project. 
              </div>
              <br/>
              <div style={{fontSize:"20px"}}>What did we learn?</div>
              <br/>
              <div>
                
              </div>
              <br/>
              <div style={{fontSize:"20px"}}>What did we teach each other?</div>
              <br/>
              <div>
                
              </div>
              <br/>
              <div style={{fontSize:"20px"}}>What can we do better?</div>
              <br/>
              <div>
                We could have done a better job scraping picture for our models and reduced the amount of grainy, 
                hard to understand pictures. Our descriptions also were on the longer side and we could have cleaned
                this up using a word limit to make our model pages more concise and clean. We could have also improved 
                highlighting for our search function. 
              </div>
              <br/>
              <div style={{fontSize:"20px"}}>What effects did the peer reviews have?</div>
              <br/>
              <div></div>
              <br/>
              <div style={{fontSize:"20px"}}>What puzzles us?</div>
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
  