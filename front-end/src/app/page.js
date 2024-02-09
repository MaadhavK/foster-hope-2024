import Image from "next/image";
import styles from "./page.module.css";

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
