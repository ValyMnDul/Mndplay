
import { useAuth } from '@/context/AuthContext'
import '@/components/Navbar.css';

export default function Navbar(){
    const {isLoggedIn}=useAuth();

    if(isLoggedIn==false){
        return(
        <nav>
           <div>
                <a href="/" >Home</a>            
                <a href="/games">Games</a>
            </div> 
            <div>
                <a href="/register">Register</a>
                <a href="/login">Login</a>
            </div>
        </nav>
        )
    }
    else{
        return(
        <nav>
           <div>
                <a href="/" >Home</a>            
                <a href="/games">Games</a>
            </div> 
            <div>
                <a href="/account">Account</a>
                <img alt='profile' src="/favicon.ico"></img>
            </div>
        </nav>
        )
    }
}