import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
// Amplify
import { Auth } from 'aws-amplify'

// Styles
import '@styles/SignUpForm.scss'

// Images
import rapper from '@images/rapper.png'
// Icons
import cl from '@images/checklogo.png'

// Form Validation
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
  code: yup
    .string()
    .required('Required')
    .test('validateCode', 'Invalid code', (value) => {
      if (!value) return false
      if (isNaN(parseInt(value))) return false
      const codeFormat = /^[0-9]{6}$/
      if (value.match(codeFormat)) return true
      return false
    })
})

const STATUS = {
  VERIFYING: 'VERIFYING',
  // RESENDING: 'RESENDING', // NOT IMPLEMENTED YET
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE'
}

const PopUpSignUp = () => {
  // State
  const [status, setStatus] = useState(STATUS.VERIFYING)
  // Hooks
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })
  const location = useLocation()
  const username = location.state?.email ?? ''
  // Functions
  const confirmSignUp = async ({ code }) => {
    try {
      await Auth.confirmSignUp(username, code)
      setStatus(STATUS.SUCCESS)
    } catch (error) {
      setStatus(STATUS.FAILURE)
      /* if (error.code === 'ExpiredCodeException') {
        alert('The confirmation code has expired.')
      } else {
        alert(error.message)
      } */
    }
  }

  let content
  if (status === STATUS.VERIFYING) {
    content = (
      <>
        <img className='checkLogo' src={cl} alt='Check Logo' />
        <h1 className='verifyH1'>THANKS FOR JOINING</h1>
        <p>
          You will get a verification code in your email, paste it in here and let’s get into the trap!
        </p>
        <hr />
        <form className='formMain' onSubmit={handleSubmit(confirmSignUp)} noValidate>
          <label htmlFor='code'>Verification code*</label>
          <input {...register('code')} className='formMainInput' placeholder='Paste your code here' />
          {errors.code && <p role='alert'>{errors.code.message}</p>}
          <button type='submit' className='verifyBtn'>Verify</button>
        </form>
      </>
    )
  } else if (status === STATUS.SUCCESS) {
    content = (
      <>
        <img className='checkLogo' src={cl} alt='Check Logo' />
        <h1 className='verifyH1'>SUCCESSFULLY JOINED</h1>
        <p>
          Thanks for get into the trap!
        </p>
        <Link to='/' className='button verifyBtn'>Go to Home</Link>
      </>
    )
  } else if (status === STATUS.FAILURE) {
    content = (
      <>
        <h1 className='verifyH1'>FAILED TO JOIN</h1>
        <p>
          Please try again later.
        </p>
        <Link to='/' className='button verifyBtn'>Go to Home</Link>
      </>
    )
  }

  return (
    <div className='signupFormContainer'>
      <div className='signupFormSubcontainer'>
        <img src={rapper} alt='Rapper' />
        <div className='signupform'>
          {content}
        </div>
      </div>
    </div>
  )
}

export default PopUpSignUp
