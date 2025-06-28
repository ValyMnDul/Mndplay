import './style.css';
export default function Login(){
    return(
        <div className='container'>
            <h1>Login</h1>
            <form action='/api/login'>
                <label htmlFor='email'>Email</label>
                <br></br>
                <input id='email' type='email'></input>
                <br></br><br></br>
                
                <label htmlFor='password'>Password</label>
                <br></br>
                <input id='password' type='password'></input>
                <br></br><br></br>

                <button type='submit'>Login</button>
            </form>
            <p>Don't have an account? <a href="/register">Register here</a></p>
            <p>Forgot your password? <a href="/reset-password">Reset it here</a></p>
        </div>
    );
}