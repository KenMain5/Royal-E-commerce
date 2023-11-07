import React from 'react'
import './Register.scss'
import SectionDivider from '/src/components/sectionDivider/SectionDivider'
import { Link } from 'react-router-dom';
import axios from 'axios'; 

function Register() {
   
  // const sendData = () => {

  //   const formData = new FormData(document.querySelector('.register__form'));
  //   const userData = Object.fromEntries(formData.entries()); 
  //   axios.post('/register', userData)
  //   .then(response => {
  //     console.log(response.data); 
  //   })
  //   .catch(err => {
  //     console.log('there was an error', err); 
  //   })
  // };

  const sendData = (event) => {
    event.preventDefault(); 
    const emailAddress2 = document.querySelector('#emailAddress').value; 
    const password2 = document.querySelector('#password').value; 
    const firstName2 = document.querySelector('#firstName').value; 
    const lastName2 = document.querySelector('#lastName').value; 
    const dayDOB2 = document.querySelector('#dayDOB').value; 
    const monthDOB2 = document.querySelector('#monthDOB').value; 
    const yearDOB2 = document.querySelector('#yearDOB').value; 

    let userData = {
      emailAddress: emailAddress2, 
      password: password2, 
      firstName: firstName2, 
      lastName: lastName2, 
      dayDOB: dayDOB2, 
      monthDOB: monthDOB2, 
      yearDOB: yearDOB2
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
                      <label htmlFor='optionalDOB-DAY'></label>
                        <input id='dayDOB' name="dayDOB" placeholder='DD'></input>
                    </div>
                    <div className='register__textBox-small'> 
                       <label htmlFor='optionalDOB-MONTH'></label>
                        <input id='monthDOB' name="monthDOB"  placeholder='MM'></input>
                    </div>
                    <div className='register__textBox-small'> 
                        <label htmlFor='optionalDOB-YEAR'></label>
                        <input id='yearDOB' name="yearDOB" placeholder='YYYY'></input>
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
