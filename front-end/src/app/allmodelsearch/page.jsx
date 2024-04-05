import { Lora, Cabin } from "next/font/google";
import styles from "../page.module.css";
import { Row, Col, Container, Tab, Tabs } from "react-bootstrap";
const lora = Lora({ weight: "400", subsets: ["latin"] });
const cabin = Cabin({ weight: "400", subsets: ["latin"] });

import Tabination from "./components/tabination.js";

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

export const getSearchCounties = async (search) => {
  const response = await fetch(
    "http://api.foster-hope.com/counties/all_counties?search_query=" + search
  );
  return await response.json();
};
export const getSearchOrgs = async (search) => {
  const response = await fetch(
    "http://api.foster-hope.com/orgs/all_orgs?search_query=" + search
  );
  return await response.json();
};
export const getSearchResources = async (search) => {
  const response = await fetch(
    "http://api.foster-hope.com/resources/all_resources?search_query=" + search
  );
  return await response.json();
};

export default async function AllModelSearch({ searchParams }) {
  var counties = null;
  var orgs = null;
  var resources = null;

  const search = searchParams["search"] ?? null;
  if (search != null) {
    counties = await getSearchCounties(search);
    orgs = await getSearchOrgs(search);
    resources = await getSearchResources(search);
  } else {
    counties = await getCounties();
    orgs = await getOrgs();
    resources = await getResources();
  }

  return (
    <main className={styles.main} style={{ backgroundColor: "#ffffff" }}>
      <Container
        style={{
          maxWidth: "100vw",
          padding: "0",
          margin: "0",
          backgroundColor: "#c7c7c7",
        }}
      >
        <Tabination
          counties={counties}
          orgs={orgs}
          resources={resources}
          searchParams={searchParams}
        />
      </Container>
    </main>
  );
}
