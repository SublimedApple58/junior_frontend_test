import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import { useState } from 'react';
import './Form.css'

function Form(){

    const [subscribed, setSubscribed] = useState(false);

    function switchToLogin() {
      setSubscribed(!subscribed);
    }
  
    function switchToSignUp() {
      setSubscribed(!subscribed);
    }
  
    return (
      <>
        {subscribed && <Login switchToSingUp={switchToSignUp}/>}
        {!subscribed && <SignUp switchToLogin={switchToLogin}/>}
      </>
    )
}

export default Form;