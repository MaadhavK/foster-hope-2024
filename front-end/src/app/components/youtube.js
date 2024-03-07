"use client"
import YouTube from 'react-youtube';
export default function YoutubeEmbed ({params}) {
    const videoId = new URLSearchParams(new URL(params).search).get("v")
    return(
        <YouTube videoId={videoId}></YouTube>
    )
}