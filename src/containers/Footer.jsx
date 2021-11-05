import React from 'react'

// Styles
import '@styles/Footer.scss'
// Components
import FooterCard from '@components/FooterCard'
import { SocialMediaBar } from '@components/SocialMediaBar'

const Footer = () => {
  return (
    <div className='footer'>
      <h2 className='title1'>CONNECT WITH THE <span>TRAP</span></h2>
      <FooterCard />
      <SocialMediaBar />
    </div>
  )
}

export default Footer
