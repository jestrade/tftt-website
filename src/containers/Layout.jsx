import React from 'react'

// Components
import { Navbar } from '@components/Navbar'
import { SocialMediaBar } from '../components/SocialMediaBar'

// Containers
import Footer from '@containers/Footer'
import { ContactForm } from '../components/ContactForm'

const Layout = ({ children }) => {
  return (
    <div className='Layout' style={{ backgroundColor: '#1c1c33' }}>
      <Navbar />
      <SocialMediaBar />
      <ContactForm />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
