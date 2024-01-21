import './SignIn.scss'
import SectionDivider from '/src/components/sectionDivider/SectionDivider'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';


function SignIn() {
  const [emailAddress, setEmailAddress] = useState(''); 
  const [password, setPassword] = useState(''); 

  
  const handleInputChange = (state, stateHandler) => {
    stateHandler(state); 
  };

  const handleSignIn = (event) => {
    event.preventDefault; 

    let data = {
      emailAddress: emailAddress,
      password: password
    }

    axios.post('/signin', data)
    .then(() => {
      console.log('axios post request signIn sent'); 
    })
    .catch(err => {
      console.log('axios post request signIn failed', err); 
    })
  };

  return (
    <section className='signIn'>
        <form className='signIn__form'>
        <span>Sign In</span>
            <div className='signIn__form-group'>
              <label htmlFor='emailAddress'>Email Address</label>
              <div className='signIn__textBox'>
                <input value={emailAddress} onChange={(e) => {handleInputChange(e.target.value, setEmailAddress)}}type='text' id='emailAddress' name='emailAddress'></input>
              </div>
            </div>
           
            <div className='signIn__form-group'>
              <label htmlFor='password'>Password</label>
              <div className='signIn__textBox'>
                <input value={password} onChange={(e) => {handleInputChange(e.target.value, setPassword)}}type='password' id='password' name='password'></input>
              </div>
            </div>
            <span>Forgot your password?</span>
            <div className='form__button-container '>
              <button className='form__button form__button-stylesBlack' onClick={(evt) => handleSignIn(evt)} type='button'>Sign In</button>
            </div>
        </form>
        <SectionDivider/>
        <div className='signin__option'>
            <span>Don't have an account?</span>
            <div className='form__button-container'>
              <Link to='/register'>
                <button className='form__button form__button-stylesWhite'>Create Account</button>
              </Link>
            </div>
        </div>
       
    </section>
  )
}

export default SignIn
