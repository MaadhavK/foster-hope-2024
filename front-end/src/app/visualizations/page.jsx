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
              padding: "3vw",
              paddingTop: "2rem",
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
              padding: "3vw",
              paddingTop: "2rem",
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
              padding: "3vw",
              paddingTop: "2rem",
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
              padding: "3vw",
              paddingTop: "2rem",
              justifyContent: "center", // Center the content horizontally
            }}
          >
            <Col style={{ textAlign: "center" }}>
              {" "}
              {/* Center the content inside the column */}
              <ScatterPlot data={scatter}/>
            </Col>
          </Row>

        </Container>
      </main>
    );
  }
  