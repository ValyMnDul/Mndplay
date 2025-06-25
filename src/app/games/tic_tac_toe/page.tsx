'use client'
import "./style.css";
import Navbar from "@/components/Navbar";
import { useRef } from "react";


export default function Tic_tac_toe(){

    const c1 = useRef<HTMLDivElement | null>(null);
    const c2 = useRef<HTMLDivElement | null>(null);
    const c3 = useRef<HTMLDivElement | null>(null);
    const c4 = useRef<HTMLDivElement | null>(null);
    const c5 = useRef<HTMLDivElement | null>(null);
    const c6 = useRef<HTMLDivElement | null>(null);
    const c7 = useRef<HTMLDivElement | null>(null);
    const c8 = useRef<HTMLDivElement | null>(null);
    const c9 = useRef<HTMLDivElement | null>(null);

    const turnText = useRef<HTMLParagraphElement | null>(null);
    const xScore = useRef<HTMLParagraphElement | null>(null);
    const oScore = useRef<HTMLParagraphElement | null>(null);

    let turn=true; //true - 'x' ; false - 'O';
    let xScoreNr=0;
    let oScoreNr=0;

    function reset(){
        if(c1.current && c2.current && c3.current && c4.current && c5.current && c6.current && c7.current && c8.current && c9.current && turnText.current && xScore.current && oScore.current){
            c1.current.innerHTML = '';
            c2.current.innerHTML = '';
            c3.current.innerHTML = '';
            c4.current.innerHTML = '';
            c5.current.innerHTML = '';
            c6.current.innerHTML = '';
            c7.current.innerHTML = '';
            c8.current.innerHTML = '';
            c9.current.innerHTML = '';
        }
    }

    function Place(input:number){
        if(c1.current && c2.current && c3.current && c4.current && c5.current && c6.current && c7.current && c8.current && c9.current && turnText.current && xScore.current && oScore.current){
            switch(input){
                case 1:
                    if(c1.current.innerHTML==""){
                        if(turn==true){
                            c1.current.innerHTML='X';
                            turnText.current.innerHTML="O's Turn";
                        }
                        else{
                            c1.current.innerHTML='O';
                            turnText.current.innerHTML="X's Turn";
                        }
                        turn=!turn;
                        
                    }
                    break;

                case 2:
                    if(c2.current.innerHTML==""){
                        if(turn==true){
                            c2.current.innerHTML='X';
                            turnText.current.innerHTML="O's Turn";
                        }
                        else{
                            c2.current.innerHTML='O';
                            turnText.current.innerHTML="X's Turn";
                        }
                        turn=!turn;
                    }
                    break;

                case 3:
                    if(c3.current.innerHTML==""){
                        if(turn==true){
                            c3.current.innerHTML='X';
                            turnText.current.innerHTML="O's Turn";
                        }
                        else{
                            c3.current.innerHTML='O';
                            turnText.current.innerHTML="X's Turn";
                        }
                        turn=!turn;
                    }
                    break;

                case 4:
                    if(c4.current.innerHTML==""){
                        if(turn==true){
                            c4.current.innerHTML='X';
                            turnText.current.innerHTML="O's Turn";
                        }
                        else{
                            c4.current.innerHTML='O';
                            turnText.current.innerHTML="X's Turn";
                        }
                        turn=!turn;
                    }
                    break;

                case 5:
                    if(c5.current.innerHTML==""){
                        if(turn==true){
                            c5.current.innerHTML='X';
                            turnText.current.innerHTML="O's Turn";
                        }
                        else{
                            c5.current.innerHTML='O';
                            turnText.current.innerHTML="X's Turn";
                        }
                        turn=!turn;
                    }
                    break;
                
                case 6:
                    if(c6.current.innerHTML==""){
                        if(turn==true){
                            c6.current.innerHTML='X';
                            turnText.current.innerHTML="O's Turn";
                        }
                        else{
                            c6.current.innerHTML='O';
                            turnText.current.innerHTML="X's Turn";
                        }
                        turn=!turn;
                    }
                    break;

                case 7:
                    if(c7.current.innerHTML==""){
                        if(turn==true){
                            c7.current.innerHTML='X';
                            turnText.current.innerHTML="O's Turn";
                        }
                        else{
                            c7.current.innerHTML='O';
                            turnText.current.innerHTML="X's Turn";
                        }
                        turn=!turn;
                    }
                    break;

                case 8:
                    if(c8.current.innerHTML==""){
                        if(turn==true){
                            c8.current.innerHTML='X';
                            turnText.current.innerHTML="O's Turn";
                        }
                        else{
                            c8.current.innerHTML='O';
                            turnText.current.innerHTML="X's Turn";
                        }
                        turn=!turn;
                    }
                    break;

                case 9:
                    if(c9.current.innerHTML==""){
                        if(turn==true){
                            c9.current.innerHTML='X';
                            turnText.current.innerHTML="O's Turn";
                        }
                        else{
                            c9.current.innerHTML='O';
                            turnText.current.innerHTML="X's Turn";
                        }
                        turn=!turn;
                    }
                    break;
            }

            
            
            if(c1.current.innerHTML == 'X' && c2.current.innerHTML == 'X' && c3.current.innerHTML == 'X'){
                xScoreNr++;
                xScore.current.innerHTML=xScoreNr.toString();
                reset();
            }
            else if(c4.current.innerHTML == 'X' && c5.current.innerHTML == 'X' && c6.current.innerHTML == 'X'){
                xScoreNr++;
                xScore.current.innerHTML=xScoreNr.toString();
                reset();
            }
            else if(c7.current.innerHTML == 'X' && c8.current.innerHTML == 'X' && c9.current.innerHTML == 'X'){
                xScoreNr++;
                xScore.current.innerHTML=xScoreNr.toString();
                reset();
            }
            else if(c1.current.innerHTML == 'X' && c4.current.innerHTML == 'X' && c7.current.innerHTML == 'X'){
                xScoreNr++;
                xScore.current.innerHTML=xScoreNr.toString();
                reset();
            }
            else if(c2.current.innerHTML == 'X' && c5.current.innerHTML == 'X' && c8.current.innerHTML == 'X'){
                xScoreNr++;
                xScore.current.innerHTML=xScoreNr.toString();
                reset();
            }
            else if(c3.current.innerHTML == 'X' && c6.current.innerHTML == 'X' && c9.current.innerHTML == 'X'){
                xScoreNr++;
                xScore.current.innerHTML=xScoreNr.toString();
                reset();
            }
            else if(c1.current.innerHTML == 'X' && c5.current.innerHTML == 'X' && c9.current.innerHTML == 'X'){
                xScoreNr++;
                xScore.current.innerHTML=xScoreNr.toString();
                reset();
            }
            else if(c3.current.innerHTML == 'X' && c5.current.innerHTML == 'X' && c7.current.innerHTML == 'X'){
                xScoreNr++;
                xScore.current.innerHTML=xScoreNr.toString();
                reset();
            }
            else if(c1.current.innerHTML == 'O' && c2.current.innerHTML == 'O' && c3.current.innerHTML == 'O'){
                oScoreNr++;
                oScore.current.innerHTML=oScoreNr.toString();
                reset();
            }
            else if(c4.current.innerHTML == 'O' && c5.current.innerHTML == 'O' && c6.current.innerHTML == 'O'){
                oScoreNr++;
                oScore.current.innerHTML=oScoreNr.toString();
                reset();
            }
            else if(c7.current.innerHTML == 'O' && c8.current.innerHTML == 'O' && c9.current.innerHTML == 'O'){
                oScoreNr++;
                oScore.current.innerHTML=oScoreNr.toString();
                reset();
            }
            else if(c1.current.innerHTML == 'O' && c4.current.innerHTML == 'O' && c7.current.innerHTML == 'O'){
                oScoreNr++;
                oScore.current.innerHTML=oScoreNr.toString();
                reset();
            }
            else if(c2.current.innerHTML == 'O' && c5.current.innerHTML == 'O' && c8.current.innerHTML == 'O'){
                oScoreNr++;
                oScore.current.innerHTML=oScoreNr.toString();
                reset();
            }
            else if(c3.current.innerHTML == 'O' && c6.current.innerHTML == 'O' && c9.current.innerHTML == 'O'){
                oScoreNr++;
                oScore.current.innerHTML=oScoreNr.toString();
                reset();
            }
            else if(c1.current.innerHTML == 'O' && c5.current.innerHTML == 'O' && c9.current.innerHTML == 'O'){
                oScoreNr++;
                oScore.current.innerHTML=oScoreNr.toString();
                reset();
            }
            else if(c3.current.innerHTML == 'O' && c5.current.innerHTML == 'O' && c7.current.innerHTML == 'O'){
                oScoreNr++;
                oScore.current.innerHTML=oScoreNr.toString();
                reset();
            }
            else if(c1.current.innerHTML != '' && c2.current.innerHTML != '' && c3.current.innerHTML != '' && c4.current.innerHTML != '' && c5.current.innerHTML != '' && c6.current.innerHTML != '' && c7.current.innerHTML != '' && c8.current.innerHTML != '' && c9.current.innerHTML != ''){
                turnText.current.innerHTML = "It's a Tie!";
                reset();
            }
        }
    }
    return(
        <>
           <Navbar/>

            <div className="container">
                <div className="scoreBoard">
                    <span>X&nbsp;</span><p ref={xScore}>0</p>:<p ref={oScore}>0</p><span>&nbsp;O</span>
                </div>
                <div className="gameBoard">
                    <div ref={c1} onClick={() => Place(1)}></div>
                    <div ref={c2} onClick={() => Place(2)}></div>
                    <div ref={c3} onClick={() => Place(3)}></div>
                    <div ref={c4} onClick={() => Place(4)}></div>
                    <div ref={c5} onClick={() => Place(5)}></div>
                    <div ref={c6} onClick={() => Place(6)}></div>
                    <div ref={c7} onClick={() => Place(7)}></div>
                    <div ref={c8} onClick={() => Place(8)}></div>
                    <div ref={c9} onClick={() => Place(9)}></div>
                </div>
                <div className="turnBoard">
                    <p ref={turnText}>X's Turn</p>
                </div>
                <div className="buttons">
                    <a onClick={()=>{
                        reset();
                        turn=true;
                        if(turnText.current && xScore.current && oScore.current){   
                            xScoreNr=0;
                            oScoreNr=0;
                            xScore.current.innerHTML = "0";
                            oScore.current.innerHTML = "0";  
                            turnText.current.innerHTML = "X's Turn";
                        }
                    }}>Reset</a>
                    <a href="/games/tic_tac_toe/rules">Rules</a>
                </div>
            </div>

        </>
    )
}
