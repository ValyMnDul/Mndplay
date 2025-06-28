'use client'
import './style.css';
import React, {useState} from 'react';
export default function Register(){

    const [form,setForm]=useState({
        username:'',
        email:'',
        password:'',
        cpassword:''
    });

    const change= async (e:React.ChangeEvent<HTMLInputElement>) =>{
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
        const data=await res.json()
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
            <p>Already have an account? <a href="/login">Login here</a></p>
        </div>
    );
}