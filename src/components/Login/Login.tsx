import './Login.css';
import '../Form/Form.css'
import Input from '../input/Input';

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
                <Input type="email" description="Email"/>
                <Input type="password" description="Password" subscribed={true}/>
                <Input type='button' description='Continue'/>
                <h4>Forgot password?</h4>
            </form>
        </>
    )
}

export default Login;