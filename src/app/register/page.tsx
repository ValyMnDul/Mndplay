'use client'
import './style.css';
import React, {useState} from 'react';
import { useRouter } from 'next/navigation';
export default function Register(){
    const router=useRouter();

    const [form,setForm]=useState({
        username:'',
        email:'',
        password:'',
        cpassword:''
    });

    const [message,setMessage]=useState('');

    const change=(e:React.ChangeEvent<HTMLInputElement>) =>{
        const {id,value}=e.target;
        setForm((p)=>({
            ...p,
            [id]:value
        }));
    };

    const submit=async (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const res = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        });
        const data=await res.json();
        setMessage(data.message);

        if(data.message=='Account successfully created.'){
            router.push('/login');
        }
    }

    return(
        <div className='container'>
            <h1>Register</h1>
            <form onSubmit={submit}>
                <label htmlFor='username' >Username</label>
                <br></br>
                <input id='username' maxLength={20} type='text' required onChange={change}></input>
                <br></br><br></br>

                <label htmlFor='email'>Email</label>
                <br></br>
                <input id='email' type='email' required onChange={change}></input>
                <br></br><br></br>

                <label htmlFor='password'>Password</label>
                <br></br>
                <input id='password' maxLength={40} minLength={6} type='password' required onChange={change}></input>
                <br></br><br></br>

                <label htmlFor='cpassword'>Confirm Password</label>
                <br></br>
                <input id='cpassword' maxLength={40} minLength={6} type='password' required onChange={change}></input>
                <br></br><br></br>
                
                <div>
                    <input type='checkbox' id='terms' required />
                    <label htmlFor="terms">I agree to the terms and conditions</label>
                </div>
                
                <button type='submit'>Register</button>
                <br></br>
            </form>
            <p id='message'>{message}</p>
            <p>Already have an account? <a href="/login">Login here</a></p>
        </div>
    );
}