import { NextResponse } from "next/server";
import resources from './resources.json';

export async function GET(request){
    return NextResponse.json(resources);
}