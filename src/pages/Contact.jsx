import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router'
// Context
import Context from '../context/Context'
// components
import { ContactForm } from '@components/ContactForm'
import Seo from '@components/Seo'

// styles

import { Section } from '@styles/ContactStyles'

export const Contact = () => {
  // This code is for identify if the page is Gallery
  const location = useLocation()
  const { changeNav } = useContext(Context)
  changeNav(location.pathname)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Seo title='Contact' description='Contact us. We will message you shortly' />
      <Section>
        <ContactForm />
      </Section>
    </>

  )
}
