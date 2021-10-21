import React from 'react'

// Components
import { Navbar } from '@components/Navbar'

// Containers
import Footer from '@containers/Footer'

const Layout = ({ children }) => {
  return (
    <div className='Layout' style={{ backgroundColor: '#020202' }}>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
