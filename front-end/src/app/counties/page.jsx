import Counties from "./components/countyCardList"
import { Row, Col, Container } from "react-bootstrap";
import styles from "../page.module.css";

export const metadata = {
    title: "Counties"
}

export default function listCounties() {
    return (
        <main className= {styles.main}>
            <div className= {styles.description}>
                <h1>Counties Page</h1>
            </div>
            <Counties/>
        </main>
    )
}