import './SignUp.css';
import Input from '../input/Input';

interface SignUpProps {
    switchToLogin: () => void;
}

function SignUp({switchToLogin} : SignUpProps){
    
    return(
            <>
                <form action="" id="login">
                    <div className="title">
                    <h2>Signup</h2>
                    <p>Already registered? <strong className="link" onClick={switchToLogin}>Login</strong></p>
                    </div>
                    <Input type='text' description='Name'/>
                    <Input type='text' description='Last name'/>
                    <Input type='email' description='Email'/>
                    <Input type='password' description='Password' subscribed={false}/>
                    <Input type='checkbox' description='Agree to our <u>Terms and conditions</u>'/>
                    <Input type='button' description='Create account'/>
                </form>
            </>
        )
    }
    
    export default SignUp;