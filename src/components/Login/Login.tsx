import './Login.css';
import '../Form/Form.css'

interface LoginProps {
    switchToSingUp: () => void;
}


function Login({switchToSingUp}: LoginProps){
    
    return (
        <>
            <form action="" id="login">
                <div className="title">
                    <h2>Login</h2>
                    <p>Don't you have ad account? <strong className='link' onClick={switchToSingUp}>Sign Up</strong></p>
                </div>
                <input type="email" placeholder="Inserisci l'email" id="email" className="text"/>
                <input type="password" placeholder="Password" id="password" className="text"/>
                <button>Continue</button>
                <h4>Forgot password?</h4>
            </form>
        </>
    )
}

export default Login;