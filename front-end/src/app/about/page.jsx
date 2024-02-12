import Image from "next/image"
import raymond from "/public/images/Raymond.jpeg"

export const metadata = {
    title: "About Foster Hope"
}

export default function About() {
    return (
        <>
            <h1>About Us</h1>
            <Image
                src={raymond}
                width={300}
                height={400}
                alt="Raymond"
            />
        </>
    )
}