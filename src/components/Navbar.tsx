import '@/components/Navbar.css';

export default function Navbar(){
    return(
        <nav>
           <ul>
                <a href="/"><li>Home</li></a>            
                <a href="/games"><li>Games</li></a>
            </ul> 
            <ul>
                <a><li>Profile</li></a>
                <a className='img'><img src="/favicon.ico"></img></a>
            </ul>
        </nav>
    )
}
