"use client"
import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../front-end/src/app/globals.css'
import _default from "react-bootstrap/esm/Nav";

export default function Home() {
  return (
    <main className={styles.main}>
        <div className={styles.description}>
          <h1>Foster Hope</h1>
          <h2>Description</h2>
        </div>
      </main>
  );
}
