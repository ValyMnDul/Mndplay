import "./style.css";
import Navbar from "@/components/Navbar";
export default function Rules(){
    return(
        <>
            <Navbar/>

            <h1>Tic Tac Toe Rules</h1>
            <div className="container">
                <p>
                    Tic Tac Toe is a simple two-player game where players take turns marking a square on a 3x3 grid. The first player to get three of their marks in a row (horizontally, vertically, or diagonally) wins the game.
                </p>
                <h2>How to Play:</h2>
                <ul>
                    <li>- Players decide who will be "X" and who will be "O".</li>
                    <li>- Players take turns placing their mark in an empty square.</li>
                    <li>- The first player to align three of their marks wins.</li>
                    <li>- If all squares are filled and no player has three in a row, the game ends in a draw.</li>
                </ul>
                <h2>Winning Conditions:</h2>
                <ul>
                    <li>- Three marks in a row horizontally.</li>
                    <li>- Three marks in a row vertically.</li>
                    <li>- Three marks in a row diagonally.</li>
                </ul>
                <h2>Tips:</h2>
                <ul>
                    <li>- Try to block your opponent from getting three in a row.</li>
                    <li>- Look for opportunities to create two potential winning moves at once.</li>
                    <li>- Control the center square for better chances of winning.</li>
                </ul>
            </div>

            <div className="doneBtnContainer">
                <a href="/games/tic_tac_toe" className="doneBtn">Done</a>
                <p>Go back to play tic-tac-toe!</p>
            </div>
        </>
    )
}