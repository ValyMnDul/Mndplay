'use client';
import './style.css';
import Navbar from '@/components/Navbar';
export default function Rules(){
    return(
        <>
            <Navbar/>
            <div className='container'>
                <h1>Rock Paper Scissors Rules</h1>
                <ul id='winconditions'>
                    <li>- Rock beats Scissors -</li>
                    <li>- Scissors beats Paper -</li>
                    <li>- Paper beats Rock -</li>
                </ul>
                <h2>How to Play:</h2>
                <ul>
                    <li>- Each player chooses one of the three options: Rock, Paper, or Scissors.</li>
                    <li>- Players reveal their choices simultaneously.</li>
                    <li>- The winner is determined based on the rules above.</li>
                    <li>- If both players choose the same option, it is a draw.</li>
                </ul>
                <h2>Winning Conditions:</h2>
                <ul>
                    <li>- Rock crushes Scissors -</li>
                    <li>- Scissors cut Paper -</li>
                    <li>- Paper covers Rock -</li>
                </ul>
                <h2>Tips:</h2>
                <ul>
                    <li>- Try to predict your opponent&apos;s choice based on their previous moves.</li>
                    <li>- Mix up your choices to avoid being predictable.</li>
                    <li>- Remember that each option has a counter, so be strategic in your selections.</li>
                </ul>
            </div>
            <div className="doneBtnContainer">
                <a href="/games/rock_paper_scissors" className="doneBtn">Done</a>
                <p>Go back to play rock-paper-scissors!</p>
            </div>
        </>
    );
}