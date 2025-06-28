

import '@/components/Navbar.css';

export default function Navbar(){
    return(
        <nav>
           <div>
                <a href="/" >Home</a>            
                <a href="/games">Games</a>
            </div> 
            <div>
                <a href="/profile">Profile</a>
                <img alt='profileImage' src="/favicon.ico"></img>
            </div>
        </nav>
    )
}
