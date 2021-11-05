import React from 'react'

// Styles
import '@styles/SignUpForm.scss'

// Images
import rapper from '@images/rapper.png'
import cl from '@images/checklogo.png'
// Icons

const PopUpSignUp = () => {
  return (
    <div className='signupFormContainer'>
      <div className='signupFormSubcontainer'>
        <img src={rapper} alt='Rapper' />
        <div className='signupform'>
          <img className='checkLogo' src={cl} alt='Check Logo' />
          <h1>THANKS FOR JOINING</h1>
          <p>
            You will get a verification code in your email, paste it in here and let’s get into the trap!
          </p>
          <hr />
          <form className='formMain'>
            <label>Verification code*</label>
            <input className='formMainInput' type='email' placeholder='Paste your code here' />
            <button type='submit'>Verify</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PopUpSignUp
