import React from 'react'
import './SignIn.scss'
import SectionDivider from '/src/components/sectionDivider/SectionDivider'
import { Link } from 'react-router-dom';
import axios from 'axios'



function SignIn() {
  const handleSignIn = (event) => {
    event.preventDefault; 
    let data = {
      emailAddress: document.querySelector('#emailAddress').value, 
      password: document.querySelector('#password').value, 
    }

    axios.post('/signin', data)
    .then(result => {
      console.log('signing in'); 
    })
    .catch(err => {
      console.log('there was an error signing in', err); 
    })
  };




  return (
    <section className='signIn'>
        <form className='signIn__form'>
        <span>Sign In</span>
            <div className='signIn__form-group'>
              <label htmlFor='emailAddress'>Email Address</label>
              <div className='signIn__textBox'>
                <input type='text' id='emailAddress' name='emailAddress'></input>
              </div>
            </div>
           
            <div className='signIn__form-group'>
              <label htmlFor='password'>Password</label>
              <div className='signIn__textBox'>
                <input type='password' id='password' name='password'></input>
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
