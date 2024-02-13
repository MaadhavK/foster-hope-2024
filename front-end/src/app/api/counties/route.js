import NextResponse from "next/server"
import counties from './counties.json'

export async function GET(request){
    return NextResponse.json(counties)
}