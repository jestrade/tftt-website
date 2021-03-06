import React, { useContext, useEffect } from 'react'

// Components
import SignUpForm from '@components/SignUpForm'
import { useLocation } from 'react-router'
import Context from '../context/Context'

const SignUpPage = () => {
  // This code is for identify if the page is Gallery
  const location = useLocation()
  const { changeNav } = useContext(Context)
  changeNav(location.pathname)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <SignUpForm />
  )
}

export default SignUpPage
