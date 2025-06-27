'use client';
import Navbar from '@/components/Navbar';
import './style.css';
import { useState,useEffect ,useRef } from 'react';
export default function RockPaperScissors() {

    const rock=useRef<HTMLButtonElement>(null);
    const paper=useRef<HTMLButtonElement>(null);
    const scissors=useRef<HTMLButtonElement>(null);
    const robot=useRef<HTMLDivElement>(null);
    const title=useRef<HTMLParagraphElement>(null);
    let clicked=false;


    const [random,setRandom]=useState<number>(0);
    useEffect(()=>{
        setRandom(Math.floor(Math.random()*3)+1);
    },[]);

    function reset(){
        if(title.current) title.current.innerHTML="Let&apos;s play!";
        if(robot.current) robot.current.innerHTML="";
        setRandom(Math.floor(Math.random()*3)+1);
        clicked=false;
    }

    function click(input:string){
        if(clicked == false && rock.current && paper.current && scissors.current && robot.current && title.current){
            switch(random){
                case 1:
                    robot.current.innerHTML='🪨';
                    if(input=="rock"){
                        title.current.innerHTML="DRAW!";
                    }
                    else if(input=="paper"){
                        title.current.innerHTML="You won!";
                    }
                    else{
                        title.current.innerHTML="You lost!";
                    }
                    break;

                case 2:
                    robot.current.innerHTML='📄';
                    if(input=="rock"){
                        title.current.innerHTML="You lost!";
                    }
                    else if(input=="paper"){
                        title.current.innerHTML="DRAW!";
                    }
                    else{
                        title.current.innerHTML="You won!";
                    }
                    break;

                case 3:
                    robot.current.innerHTML='✂️';
                    if(input=="rock"){
                        title.current.innerHTML="You won";
                    }
                    else if(input=="paper"){
                        title.current.innerHTML="You lost!";
                    }
                    else{
                        title.current.innerHTML="DRAW!";
                    }
                    break;
            }
            clicked = true;
        }
    }
 
    return(
        <>
            <Navbar/>
            <div className='container'>
                <p className='letsplay' ref={title}>Let&apos;s play!</p>
                <div className='robot'>
                    <p>Robot&apos;s choice:</p>
                    <div ref={robot}></div>
                </div>
                <div className='buttons'>
                    <button ref={rock} onClick={()=>{click("rock")}}>🪨</button>
                    <button ref={paper} onClick={()=>{click("paper")}}>📄</button>
                    <button ref={scissors} onClick={()=>{click("scissors")}}>✂️</button>
                </div>
                <div className="buttons2">
                    <a onClick={reset}>Reset</a>
                    <a href="/games/rock_paper_scissors/rules">Rules</a>
                </div>
            </div>
        </>
    );
}