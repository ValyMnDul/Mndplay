'use client'
import "./style.css";
import Navbar from "@/components/Navbar";



export default function Tic_tac_toe(){
    return(
        <>
           <Navbar/>

            <div className="container">
                <div className="scoreBoard">
                    <p>0</p>:<p>0</p>
                </div>
                <div className="gameBoard">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="turnBoard">
                    <p>X Turn</p>
                </div>
            </div>
        </>
    )
}