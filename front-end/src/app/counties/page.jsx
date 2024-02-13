import Counties from "./components/countyCardList"
import { Row, Col, Container } from "react-bootstrap";
import styles from "../page.module.css";
//import dynamic from 'next/dynamic';
export const metadata = {
    title: "Counties"
}

export default function listCounties() {

    //const Counties = dynamic(() => import("./components/countyCardList"));
    return (
        <main className= {styles.main}>
            <div className= {styles.description}>
                <h1>Counties Page</h1>
            </div>
        </main>
    )
}