import React from 'react'

// Components
import { Navbar } from '@components/Navbar'

// Containers
import Footer from '@containers/Footer'

const Layout = ({ children }) => {
  return (
    <div className='Layout' style={{ backgroundColor: '#1c1c33' }}>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
