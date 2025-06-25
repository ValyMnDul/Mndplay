

import '@/components/Navbar.css';

export default function Navbar(){
    return(
        <nav>
           <div>
                <a href="/" className='Link'>Home</a>            
                <a href="/games" className='Link'>Games</a>
            </div> 
            <div>
                <a href="/profile" className='Link'>Profile</a>
                <img alt='profileImage' src="/favicon.ico"></img>
            </div>
        </nav>
    )
}
