"use client"

export default function GMapEmbed ({params}) {
    const source = params.replaceAll(' ', '+')
    console.log(source)
    return(
        <iframe
            width="400px"
            height="600px"
            loading="lazy"
            allowFullScreen
            src={source}>
        </iframe>
    )
}