import React from 'react'

// Containers
import Footer from '@containers/Footer'

const Layout = ({ children }) => {
  return (
    <div className='Layout'>
      {children}
      <Footer />
    </div>
  )
}

export default Layout
