
import { NextResponse } from 'next/server';
import {writeFileSync, existsSync, promises as fs } from 'fs';

export async function POST(req: Request) {
  const body = await req.json();
  const { username, email, password, cpassword } = body;

  if (!username || !email || !password || !cpassword) {
    return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
  }

  if (password !== cpassword) {
    return NextResponse.json({ message: "Passwords don't match" }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ message: 'Invalid email' }, { status: 400 });
  }

  if(!existsSync('./accounts')){
    fs.mkdir('./accounts');
  }

  global.setTimeout(()=>{
    writeFileSync(`./accounts/${email}.json`,`{"username":"${username}","email":"${email}","password":"${password}"}`);
  },1000);


  return NextResponse.json({ message: 'Account successfully created.' }, { status: 200 });
}