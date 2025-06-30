'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import './style.css';
export default function TermsAndConditionsPage() {
    return (
        <>
            <Navbar />
            <div className="container">
                <h1>Terms and Conditions</h1>
                <p><strong>Last updated:</strong> June 29, 2025</p>

                <p>Welcome to <strong>mndplay</strong>! These Terms and Conditions govern your use of the website available at <strong>mndplay</strong> . By accessing or using the Site, you agree to be bound by these Terms. If you do not agree with any part of the Terms, you must not use the Site.</p>

                <h2>1. About mndplay</h2>
                <p>mndplay is a simple web-based platform where users can play classic games like Hangman, Rock-Paper-Scissors, and Tic-Tac-Toe. Users can also create a profile to keep track of their scores and achievements. The platform is developed and maintained by a solo developer.</p>

                <h2>2. User Accounts</h2>
                <ul>
                    <li>You may create an account to save your scores and profile data.</li>
                    <li>You are responsible for keeping your login credentials secure.</li>
                    <li>You agree not to share your account with others or impersonate another person.</li>
                </ul>

                <h2>3. Use of the Site</h2>
                <p>You agree to use mndplay only for personal and non-commercial purposes. You must not:</p>
                <ul>
                    <li>Attempt to disrupt or interfere with the site&apos;s functionality.</li>
                    <li>Use bots, cheats, or other unauthorized tools to gain an advantage.</li>
                    <li>Upload or transmit any harmful or malicious code.</li>
                </ul>

                <h2>4. Intellectual Property</h2>
                <p>All game logic, design, and content on mndplay are the property of the developer unless otherwise noted. You may not copy, reproduce, or redistribute any part of the Site without prior written permission.</p>

                <h2>5. Data and Privacy</h2>
                <p>mndplay stores basic profile information and scores for registered users. No sensitive personal information is collected. By using the site, you consent to the collection and use of this data as described.</p>

                <h2>6. Disclaimer</h2>
                <p>mndplay is provided &quot;as is&quot; without any warranties. While we strive to keep the site running smoothly, we do not guarantee that it will always be error-free or available.</p>

                <h2>7. Changes to These Terms</h2>
                <p>We may update these Terms occasionally. Any changes will be posted ong this page. Continued use of the site after changes means you accept the revised Terms.</p>
            </div>
            <Footer /> 
        </>
    );
}
