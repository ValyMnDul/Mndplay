'use client';
import Navbar from "@/components/Navbar";
import "./style.css";
export default function Rules(){
    return(
        <>
            <Navbar/>
            <div className="container">
                <h1>Hangman Rules</h1>
                <p>Hangman is a word guessing game where you try to guess the letters of a hidden word.</p>
                <p>For each incorrect guess, a part of the hangman is drawn. You lose if the hangman is fully drawn before you guess the word.</p>
                <h2>How to Play:</h2>
                <ul>
                    <li>- The game starts with a hidden word represented by underscores.</li>
                    <li>- Players take turns guessing letters.</li>
                    <li>- If the guessed letter is in the word, it is revealed in its correct position(s).</li>
                    <li>- If the guessed letter is not in the word, a heart is removed from the display.</li>
                    <li>- The game continues until the word is fully revealed or all hearts are lost.</li>
                </ul>
                <h2>Winning Conditions:</h2>
                <ul>
                    <li>- Successfully guess all letters in the word before losing all hearts.</li>
                </ul>
                <h2>Tips:</h2>
                <ul>
                    <li>- Start with common letters like vowels (A, E, I, O, U) and frequently used consonants (R, S, T, L, N).</li>
                    <li>- Pay attention to the length of the word and the letters already revealed.</li>
                    <li>- Use the process of elimination to narrow down possible letters.</li>
                </ul>
                <div className="doneBtnContainer">
                    <a href="/games/hangman" className="doneBtn">Done</a>
                    <p>Go back to play Hangman!</p>
                </div>
            </div>
        </>
    );
}     