import React, { useContext } from 'react'

// Components
import { Navbar } from '@components/Navbar'

// Containers
import Footer from '@containers/Footer'
import Context from '../context/Context'

const Layout = ({ children }) => {
  const { navState } = useContext(Context)

  return (
    <div className='Layout' style={{ backgroundColor: '#020202' }}>

      {navState ? <Navbar fontColor='black' /> : <Navbar fontColor='white' />}
      {children}
      <Footer />
    </div>
  )
}

export default Layout
