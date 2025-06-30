'use client';
import './style.css';
import React, {useState} from 'react';
import { useRouter } from 'next/navigation';
export default function Login(){

    const router=useRouter();

    const [form,setForm]=useState({
        email:'',
        password:''
    });

    const [message,setMessage]=useState("");

    const change=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {id,value} = e.target;
        setForm((p)=>({
            ...p,
            [id]:value
        }));
    }

    const submit = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const res=await fetch('/api/login',{
            method:'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(form)
        });
        const data=await res.json();

        setMessage(data.message);

        if(data.message=='Login successfully'){
            localStorage.setItem('isLoggedIn', 'true')
            router.push('/');
        }
        
    }

    return(

        <div className='container'>
            <h1>Login</h1>
            <form action='/api/login' onSubmit={submit}>
                <label htmlFor='email'>Email</label>
                <br></br>
                <input id='email' type='email' onChange={change}></input>
                <br></br><br></br>
                
                <label htmlFor='password'>Password</label>
                <br></br>
                <input id='password' type='password' onChange={change}></input>
                <br></br><br></br>

                <button type='submit'>Login</button>
            </form>
            <p id='message'>{message}</p>
            <p>Don&apos;t have an account? <a href="/register">Register here</a></p>
            <p>Forgot your password? <a href="/reset-password">Reset it here</a></p>
        </div>
    );
}