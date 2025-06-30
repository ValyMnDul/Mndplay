'use client';
import './Footer.css';
export default function Footer(){
    return(
        <div>
            <footer>
                <ul>
                    <a href='/terms_and_conditions'><li>Terms and Conditions</li></a>
                    <a><li>Privacy policy</li></a>
                    <a><li>Contact</li></a>
                    <a><li>About</li></a>
                </ul>
                <p>&copy; 2025 MNDPlay. All rights reserved.</p>
            </footer>
        </div>
    );
}