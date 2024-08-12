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
                <button>Create account</button>
            </form>
        </>
        )
    }
    
    export default SignUp;