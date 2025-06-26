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
                <div className="card" onClick={() => window.location.href = "/games"}>

                </div>
                <div className="card">

                </div>
            </div>

            <Footer/>
        </>
    )
}