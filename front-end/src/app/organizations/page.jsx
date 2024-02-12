import styles from "../page.module.css";
import Orgs from "../components/orgs";

export const metadata = {
    title: "Organizations"
}

export default function Organizations() {
    return (
        <main className= {styles.main}>
            <div className= {styles.description}>
                <h1>Organizations Page</h1>
            </div>
            <Orgs/>
        </main>
    )
}