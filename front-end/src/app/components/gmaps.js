"use client"

export default function GMapEmbed ({params}) {
    console.log(params)
    const source = params.replaceAll(' ', '+')
    return(
        <iframe
            width="600"
            height="450"
            loading="lazy"
            allowfullscreen
            src={source}>
        </iframe>
    )
}