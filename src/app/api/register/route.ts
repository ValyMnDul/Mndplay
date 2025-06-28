import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { username, email, password, cpassword } = body;

  if (!username || !email || !password || !cpassword) {
    return NextResponse.json({ message: 'Toate câmpurile sunt necesare' }, { status: 400 });
  }

  if (password !== cpassword) {
    return NextResponse.json({ message: 'Parolele nu se potrivesc' }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ message: 'Email invalid' }, { status: 400 });
  }

  console.log('Utilizator nou:', { username, email });

  return NextResponse.json({ message: 'Înregistrare cu succes!' }, { status: 200 });
}