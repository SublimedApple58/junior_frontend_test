import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import { useState } from 'react';
import './Form.css'

function Form(){

    const [subscribed, setSubscribed] = useState(false);

    function switchSubscribed() {
      setSubscribed(!subscribed);
    }
  
    return (
      <>
        {subscribed && <Login switchToSingUp={switchSubscribed}/>}
        {!subscribed && <SignUp switchToLogin={switchSubscribed}/>}
      </>
    )
}

export default Form;