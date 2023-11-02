import React from 'react'
import './Register.scss'
import SectionDivider from '/src/components/sectionDivider/SectionDivider'
import { Link } from 'react-router-dom';


function Register() {
  return (
    <section className='register'>
        <form className='register__form'>
        <span>Register</span>
            <div className='register__form-group'>
              <label htmlFor='emailAddress'>Email Address</label>
              <div className='register__textBox'>
                <input type='text' id='emailAddress' name='emailAddress'></input>
              </div>
            </div>
           
            <div className='register__form-group'>
              <label htmlFor='password'>Password</label>
              <div className='register__textBox'>
                <input type='password' id='password' name='password'></input>
              </div>
            </div>
            <div>
              <div className='register__form-group'>
                  <label htmlFor='firstName'>First Name</label>
                  <div className='register__textBox'>
                      <input type='text' id='firstName' name='firstName'></input>
                  </div>
              </div>
              <div className='register__form-group'>
                  <label htmlFor='lastName'>Last Name</label>
                  <div className='register__textBox'>
                      <input type='text' id='lastName' name='lastName'></input>
                  </div>
              </div>
              <div className='register__form-group'>
                  <label htmlFor='dateOfBirth'>Date of birth (optional)</label>
                  <div className='flex'>
                    <div className='register__textBox-small'> 
                        <input></input>
                    </div>
                    <div className='register__textBox-small'> 
                        <input></input>
                    </div>
                    <div className='register__textBox-small'> 
                        <input></input>
                    </div>
                  </div>
                </div>
             
            </div>
            <div className='form__button-container '><button className='form__button form__button-stylesBlack' type='submit'>Create Account</button></div>
            {/* <SectionDivider/> */}
        </form>
        <SectionDivider/>
        <div className='register__option'>
            <span>Already have an account</span>

            <div className='form__button-container'>
              <Link to='/signin'>
                <button className='form__button form__button-stylesWhite'>Sign In</button>
              </Link>
            </div>
        </div>
       
    </section>
  )
}

export default Register
