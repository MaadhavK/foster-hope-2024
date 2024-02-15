import resources from './resources.json'
import {NextResponse} from 'next/server'

export async function GET(request) {
    return NextResponse.json(resources)
}