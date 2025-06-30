'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./style.css";
export default function Home(){
    return(
        <>
            <Navbar/>
            
            <h1>MNDPlay</h1>
            <div className="container">
                <div className="card" id="gamesCard" onClick={() => window.location.href = "/games"}>
                    <p>PLAY!</p>
                </div>
                <div className="card" id="profileCard" onClick={() => window.location.href = "/account"}>
                </div>
            </div>

            <Footer/>
        </>
    )
}