import React from 'react'
import './Register.scss'
import SectionDivider from '/src/components/sectionDivider/SectionDivider'
import { Link } from 'react-router-dom';
import axios from 'axios'; 
import { useState } from 'react';

function Register() {
  const [emailAddress, setEmailAddress] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [firstName, setFirstName] = useState(''); 
  const [lastName, setLastName] = useState(''); 
  const [dayDOB, setDayDOB] = useState(''); 
  const [monthDOB, setMonthDOB] = useState(''); 
  const [yearDOB, setYearDOB] = useState(); 

  const handleInputChange = (state, stateHandler) => {
    stateHandler(state); 
  };

   
  const sendData = (event) => {
    event.preventDefault(); 
   
    let userData = {
      emailAddress: emailAddress, 
      password: password, 
      firstName: firstName, 
      lastName: lastName, 
      dayDOB: dayDOB, 
      monthDOB: monthDOB, 
      yearDOB: yearDOB
    }

    axios.post('/register', userData)
    .then(results => {
      console.log('success', results); 
    })
    .catch(err => {
      console.log("there was an error",err); 
    })
  } 





  return (
    <section className='register'>
        <form className='register__form'>
        <span>Register</span>
            <div className='register__form-group'>
              <label htmlFor='emailAddress'>Email Address</label>
              <div className='register__textBox'>
                <input value={emailAddress} type='text' onChange={(e) => {handleInputChange(e.target.value, setEmailAddress)}} id='emailAddress' name='emailAddress'></input>
              </div>
            </div>
           
            <div className='register__form-group'>
              <label htmlFor='password'>Password</label>
              <div className='register__textBox'>
                <input value={password} type='password' onChange={(e) => {handleInputChange(e.target.value, setPassword)}} id='password' name='password'></input>
              </div>
            </div>
            <div>
              <div className='register__form-group'>
                  <label htmlFor='firstName'>First Name</label>
                  <div className='register__textBox'>
                      <input value={firstName} type='text' onChange={(e) => {handleInputChange(e.target.value, setFirstName)}} id='firstName' name='firstName'></input>
                  </div>
              </div>
              <div className='register__form-group'>
                  <label htmlFor='lastName'>Last Name</label>
                  <div className='register__textBox'>
                      <input value={lastName} type='text' onChange={(e) => {handleInputChange(e.target.value, setLastName)}} id='lastName' name='lastName'></input>
                  </div>
              </div>
              <div className='register__form-group'>
                  <label htmlFor='dateOfBirth'>Date of birth (optional)</label>
                  <div className='flex'>
                    <div className='register__textBox-small'> 
                      <label htmlFor='optionalDOB-DAY'></label>
                        <input value={dayDOB} type='number' onChange={(e) => {handleInputChange(e.target.value, setDayDOB)}} id='dayDOB' name="dayDOB" placeholder='DD'></input>
                    </div>
                    <div className='register__textBox-small'> 
                       <label htmlFor='optionalDOB-MONTH'></label>
                        <input value={monthDOB} type='number' onChange={(e) => {handleInputChange(e.target.value, setMonthDOB)}} id='monthDOB' name="monthDOB"  placeholder='MM'></input>
                    </div>
                    <div className='register__textBox-small'> 
                        <label htmlFor='optionalDOB-YEAR'></label>
                        <input value={yearDOB} type='number' onChange={(e) => {handleInputChange(e.target.value, setYearDOB)}} id='yearDOB' name="yearDOB" placeholder='YYYY'></input>
                    </div>
                  </div>
                </div>
             
            </div>
            <div className='form__button-container '><button onClick={(e) => sendData(e)} id="sendButton" className='form__button form__button-stylesBlack' type='button'>Create Account</button></div>
         
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
