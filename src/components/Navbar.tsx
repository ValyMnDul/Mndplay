import '@/components/Navbar.css';

export default function Navbar(){
    return(
        <nav>
           <ul>
                <a href="/games"><li>Games</li></a>
                <a><li>Preferences</li></a>
            </ul> 
            <ul>
                <a><li>Profile</li></a>
                <img width="50px" src="/favicon.ico"></img>
            </ul>
        </nav>
    )
}