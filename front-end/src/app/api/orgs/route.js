import { NextResponse } from "next/server";
import orgs from './orgs.json';

export async function GET(request){
    return NextResponse.json(orgs);
}