"use client"
import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../front-end/src/app/globals.css'
import _default from "react-bootstrap/esm/Nav";

export default function Home() {
  return (

    <main className={styles.main2}>

        <h1 className={styles.topspace}>What We Do</h1>
        <p className={styles.splashdesc}>
          This website is intended to be a source of information and resources about foster care in Texas.
          The intended audience are those curious about foster care and those in foster care needing resources.
        </p>
        <img class={styles.splashimage} src="/images/FrontPageImage.jpg" />


      </main>
  );
}
