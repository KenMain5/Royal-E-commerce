import './Register.scss'
import SectionDivider from '/src/components/sectionDivider/SectionDivider'
import { Link } from 'react-router-dom';
import axios from 'axios'; 
import { useState } from 'react'; 

function Register() {
  const [emailAddress, setEmailAddress] = useState(''); 
  const [emailError, setEmailError] = useState('');
  const [emailValidated, setEmailValidated] = useState(false); 
  const [emailTouched, setEmailTouched] = useState(false);


  const [password, setPassword] = useState(''); 
  const [passwordError, setPasswordError] = useState('');
  const [passwordValidated, setPasswordValidated] = useState(null); 
  const [passwordTouched, setPasswordTouched] = useState(false);


  const [firstName, setFirstName] = useState(''); 
  const [firstNameError, setFirstNameError] = useState('');
  const [firstNameValidated, setFirstNameValidated] = useState(false); 
  const [firstNameTouched, setFirstNameTouched] = useState(false);


  const [lastName, setLastName] = useState(''); 
  const [lastNameError, setLastNameError] = useState('');
  const [lastNameValidated, setLastNameValidated] = useState(false); 
  const [lastNameTouched, setLastNameTouched] = useState(false);

  //Error for the date, if all validated, no error, if one error, then show error
  const [dayDOB, setDayDOB] = useState(''); 
  const [dayDOBValidated, setDayDOBValidated] = useState(false); 
  const [dayDOBTouched, setDayDOBTouched] = useState(false);


  const [monthDOB, setMonthDOB] = useState(''); 
  const [monthDOBValidated, setMonthDOBValidated] = useState(false); 
  const [monthDOBTouched, setMonthDOBTouched] = useState(false);


  const [yearDOB, setYearDOB] = useState(); 
  const [yearDOBValidated, setYearDOBValidated] = useState(false); 
  const [yearDOBTouched, setYearDOBTouched] = useState(false);


  const [formValidated, setFormValidated] = useState(false); 

  //function that does client side verification and sets the state
  const handleEmailChange = (email) => {
    setEmailTouched(true);
    setEmailAddress(email);
    const error = handleEmailValidation(email); 
    setEmailError(error); 
    setEmailValidated(!error); 
    handleFormValidation(); 
  };

  const handleEmailValidation = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email.toLowerCase())) {
      return 'Enter a valid Email';
    } else {
      return '';
    }
  }
  


  const handlePasswordChange = (password) => {
    setPasswordTouched(true);
    setPassword(password); 
    const error = handlePasswordValidation(password); 
    setPasswordError(error)
    setPasswordValidated(!error); 
    handleFormValidation(); 
  };

  const handlePasswordValidation = (password) => {
    if (password.length < 8) {
      return('Must be 8 characters or more'); 
    } else if (password.length > 20) {
      return('Must be 20 characters or less'); 
    } else if (!/[A-Z]/.test(password)) {
      return('Must contain at least one uppercase letter');
    } else if (!/[0-9]/.test(password)) {
      return('Must contain at least one number');
    } else {
      return(''); 
    }
  }

  

  

  const handleNameChange = (newState, place) => { 
    if (place === 'first') {
      setFirstNameTouched(true);
      setFirstName(newState); 
      let error = handleNameValidation(newState); 
      setFirstNameError(error); 
      setFirstNameValidated(!error); 
    } else {
      setLastNameTouched(true);
      setLastName(newState); 
      let error = handleNameValidation(newState); 
      setLastNameError(error); 
      setLastNameValidated(!error); 
      handleFormValidation(); 
    }
  }

 
  const handleNameValidation = (name) => {
    if (name.length > 1 && name.length < 20) {
      return '';
    } else {
      return 'Enter a valid name';
    }
  };

    const handleDayDOB = (newState) => {
      setDayDOBTouched(true);
      setDayDOB(newState); 
      let error = handleDayDOBValidation(newState); 
      setDayDOBValidated(!error); 
      handleFormValidation(); 
    }

  

    
   
    const handleDayDOBValidation = (newState) => {
      if (newState > 0 && newState < 32) {
        return(''); 
      } else {
        return('Enter a valid DOB'); 
      }
    }

    const handleMonthDOB = (newState) => {
      setMonthDOBTouched(true);

      setMonthDOB(newState); 
      let error = handleMonthValidation(newState); 
      setMonthDOBValidated(!error);
      handleFormValidation(); 
    }

    const handleMonthValidation = (month) => {
      if (month <= 12 && month >= 1) {
        return('');
      } else {
        return('Enter a valid DOB'); 
      }
    }

    const handleYearDOB = (year) => { 
      setYearDOB(year); 
      let error = handleYearValidation(year); 
      setYearDOBValidated(!error);
      handleFormValidation(); 
    }

    const handleYearValidation = (year) => {
      setYearDOBTouched(true);
      let currentDate = new Date(); 
      let currentYear = currentDate.getFullYear(); 
      if (year >= 1930 && year <= currentYear) {
        return('');
      } else {
        return('Enter a valid DOB'); 
      }
    }

    const handleFormValidation = () => {
      if (emailValidated && 
        passwordValidated && 
        firstNameValidated && 
        lastNameValidated && 
        dayDOBValidated && 
        monthDOBValidated && 
        yearDOBValidated) {
          setFormValidated(true); 
        }
    }

  //function to send the data to the server
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
        <form className='register__form' onSubmit={sendData}>
        <span>Register</span>
            <div className='register__form-group'>
              
              <label htmlFor='emailAddress'>Email Address</label>
              
              <div className='register__textBox' 
              style={{ border: emailTouched && !emailValidated ? '1px solid rgb(182, 2, 24)' : '' }}>
                <input value={emailAddress} type='email' onChange={(e) => {handleEmailChange(e.target.value)}} id='emailAddress' name='emailAddress'></input>
                {/* New Code */}
                <div className='register__form-error'>
                  <span>{emailError}</span>
                </div>
                {/* New Code */}
              </div>
              
            </div>
           
            <div className='register__form-group'>
              <label htmlFor='password'>Password</label>
              
              <div className='register__textBox'  style={{ border: passwordTouched && !passwordValidated ? '1px solid rgb(182, 2, 24)' : '' }}>
                <input value={password} type='password' onChange={(e) => {handlePasswordChange(e.target.value)}} id='password' name='password'></input>
                {/* New Code */}
                <div className='register__form-error'>
                  <span>{passwordError}</span>
                </div>
                {/* New Code */}
              </div>
              


            </div>
            <div>
              <div className='register__form-group'>
                  <label htmlFor='firstName'>First Name</label>
                  <div className='register__textBox' style={{ border: firstNameTouched && !firstNameValidated ? '1px solid rgb(182, 2, 24)' : '' }}>
                      <input value={firstName} type='text' onChange={(e) => {handleNameChange(e.target.value, 'first')}} id='firstName' name='firstName'></input>
                      {/* New Code */}
                      <div className='register__form-error'>
                        <span>{firstNameError}</span>
                      </div>
                      {/* New Code */}
                  </div>
              
              </div>
              <div className='register__form-group'>
                  <label htmlFor='lastName'>Last Name</label>
                  <div className='register__textBox' style={{ border: lastNameTouched && !lastNameValidated ? '1px solid rgb(182, 2, 24)' : '' }}>
                      <input value={lastName} type='text' onChange={(e) => {handleNameChange(e.target.value, 'last')}} id='lastName' name='lastName'></input>
                       {/* New Code */}
                       <div className='register__form-error'>
                       <span>{lastNameError}</span>
                        </div>
                        {/* New Code */}
                  </div>
              </div>
              <div className='register__form-group'>
                  <label htmlFor='dateOfBirth'>Date of birth</label>

           

                  
                  <div className='flex'>
                    <div className='register__textBox-small'  style={{ border: dayDOBTouched && !dayDOBValidated ? '1px solid rgb(182, 2, 24)' : '' }}> 
                      <label htmlFor='optionalDOB-DAY'></label>
                        <input value={dayDOB} type='number' onChange={(e) => {handleDayDOB(e.target.value)}} id='dayDOB' name="dayDOB" placeholder='DD'></input>
                    </div>
                    <div className='register__textBox-small' style={{ border: monthDOBTouched && !monthDOBValidated ? '1px solid rgb(182, 2, 24)' : '' }}> 
                       <label htmlFor='optionalDOB-MONTH'></label>
                        <input value={monthDOB} type='number' onChange={(e) => {handleMonthDOB(e.target.value)}} id='monthDOB' name="monthDOB"  placeholder='MM'></input>
                    </div>
                    
                    <div className='register__textBox-small' style={{ border: yearDOBTouched && !yearDOBValidated ? '1px solid rgb(182, 2, 24)' : '' }}> 
                        <label htmlFor='optionalDOB-YEAR'></label>
                        <input value={yearDOB} type='number' onChange={(e) => {handleYearDOB(e.target.value)}} id='yearDOB' name="yearDOB" placeholder='YYYY'></input>
                        
                    </div>
                    
                    
                  </div>
                 
               

                </div>
             
            </div>
            <div className='form__button-container '><button disabled={formValidated ? false: true} onClick={(e) => sendData(e)} id="sendButton" className='form__button form__button-stylesBlack' type='submit'>Create Account</button></div>
         
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
