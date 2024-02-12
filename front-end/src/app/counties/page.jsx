import CountyList from "../components/counties"
import { Row, Col, Container } from "react-bootstrap";
import styles from "../page.module.css";

export const metadata = {
    title: "Counties"
}

export default function Counties() {
    return (
        <main className= {styles.main}>
            <div className= {styles.description}>
                <h1>Counties Page</h1>
            </div>
            <CountyList/>
        </main>
    )
}