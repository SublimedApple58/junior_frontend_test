import './Login.css';
import '../Form.css'

function Form(){
    
    return (
        <>
            <form action="" id="login">
                <h2>Form</h2>
                <input type="email" placeholder="Inserisci l'email" id="email" className="text"/>
                <input type="password" placeholder="Password" id="password" className="text"/>
                <button>Continue</button>
            </form>
        </>
    )
}

export default Form;