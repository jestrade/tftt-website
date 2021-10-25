import React, { useContext } from 'react'
import { useLocation } from 'react-router'
// Context
import Context from '../context/Context'
// components
import { ContactForm } from '@components/ContactForm'

// styles

import { Section } from '@styles/ContactStyles'

export const Contact = () => {
  // This code is for identify if the page is Gallery
  const location = useLocation()
  const { changeNav } = useContext(Context)
  changeNav(location.pathname)
  return (
    <Section>
      <ContactForm />
    </Section>

  )
}
