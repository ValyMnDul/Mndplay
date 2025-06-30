import { NextResponse } from "next/server";
import {writeFileSync,readFileSync, existsSync, promises as fs } from 'fs';
export async function POST(req:Request){
    const body=await req.json();
    const {email,password}=body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return NextResponse.json({ message: 'Invalid email' }, { status: 400 });
    }

    if (!existsSync(`./accounts/${email}.json`)) {
        return NextResponse.json({ message: "Account not found" }, { status: 404 });
    }


    const file=readFileSync(`./accounts/${email}.json`);
    const data=JSON.parse(await file.toString());
    
    if(data.password==password){
        return NextResponse.json({message:"Login successfully"},{status:200})
    }
    else{
        return NextResponse.json({message:"Wrong password"},{status:400})
    }
}
