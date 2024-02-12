import styles from "../page.module.css";
import ResourceList from "../components/resources";

export const metadata = {
    title: "Resources"
}

export default function Resources() {
    return (
        <main className= {styles.main}>
            <div className= {styles.description}>
                <h1>Resources</h1>
            </div>
            <ResourceList/>
        </main>
    )
}