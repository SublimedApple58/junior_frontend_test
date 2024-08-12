import './SignUp.css';

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
                <input type="text" placeholder="Name" id="name" className="text"/>
                <input type="text" placeholder="Last name" id="lastName" className="text"/>
                <input type="email" placeholder="Inserisci l'email" id="email" className="text"/>
                <input type="password" placeholder="Password" id="password" className="text"/>
                <div className="check">
                    <div className="bar">
                        <div id='level'></div>
                    </div>
                    <p>too easy my friend</p>
                </div>
                <button>Create account</button>
            </form>
        </>
        )
    }
    
    export default SignUp;