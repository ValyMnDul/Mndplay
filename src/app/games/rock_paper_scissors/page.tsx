'use client';
import Navbar from '@/components/Navbar';
import './style.css';
export default function RockPaperScissors() {
    return(
        <>
            <Navbar/>
            <div className='container'>
                <p className='letsplay'>Let&apos;s play!</p>
                <div className='robot'>
                    <p>My choice:</p>
                    <div></div>
                </div>
                <div className='buttons'>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
                <div className="buttons2">
                    <a>Reset</a>
                    <a href="/games/rock_paper_scissors/rules">Rules</a>
                </div>
            </div>
        </>
    );
}