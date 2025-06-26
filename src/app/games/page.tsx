import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./style.css";
export default function Games(){
    return(
        <>
            <Navbar/>

            <h1>Choose a game</h1>
            <div className="container">
                <a href="/games/tic_tac_toe">
                    <div className="card" id="ticTacToe">
                        TIC-TAC-TOE
                    </div>
                </a>
                <a href="/games/hangman">
                    <div className="card" id="hangman">
                        HANGMAN
                    </div>
                </a>
                <a href="">
                    <div className="card">
                        SNAKE
                    </div>
                </a>
            </div>
            
            <Footer/>
        </>
    )
}