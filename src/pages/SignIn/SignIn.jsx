import React from 'react'
import './SignIn.scss'
import { useState } from 'react'
import SectionDivider from '/src/components/sectionDivider/SectionDivider'


function SignIn() {
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
            <div className='form__button-container '><button className='form__button form__button-stylesBlack' type='submit'>Sign In</button></div>
            {/* <SectionDivider/> */}
        </form>
        <SectionDivider/>
        <div className='signin__option'>
            <span>Don't have an account?</span>
            <div className='form__button-container'><button className='form__button form__button-stylesWhite'>Create Account</button></div>
        </div>
       
    </section>
  )
}

export default SignIn
