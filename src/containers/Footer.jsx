import React from 'react'
import '@styles/Footer.scss'
import FooterCard from '@components/FooterCard'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='lettersContainer'>
        <h1 className='Title1'>CONNECT WITH THE</h1>
        <h1 className='Title2'>TRAP</h1>
      </div>
      <div className='cardsContainer'>
        <FooterCard />
      </div>
    </div>
  )
}

export default Footer
