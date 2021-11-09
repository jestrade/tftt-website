import React from 'react'

// images
import tfttWhiteLogo from '@logos/tfttWhiteLogo.png'

// Styles
import '@styles/Footer.scss'
// Components
// import FooterCard from '@components/FooterCard'
// import { SocialMediaBar } from '@components/SocialMediaBar'
import { ComingSoon } from '@components/ComingSoon'

const Footer = () => {
  const name = 'CONNECT WITH THE TRAP'
  return (
    <div className='footer'>
      {/* <h2 className='title1'>CONNECT WITH THE <span>TRAP</span></h2>
      <FooterCard />
      <SocialMediaBar /> */}
      <ComingSoon name={name} />
      <p>Copyright all rights reserved.</p>
      <img src={tfttWhiteLogo} alt='tftt logo' />
    </div>
  )
}

export default Footer
