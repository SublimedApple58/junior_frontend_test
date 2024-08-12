import { useState } from 'react';
import './App.css'
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

function App() {

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

export default App
