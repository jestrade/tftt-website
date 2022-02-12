import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router'
// Context
import Context from '../context/Context'
// Styles
import '@styles/ImJustBait.scss'
import Logo from '../assets/logos/IJB.png'
// images
import logoBC from '@images/logoBaitCoin.svg'
import Seo from '../components/Seo'

const ImJustBaitPage = () => {
  // This code is for identify if the page is Gallery
  const location = useLocation()
  const { changeNav } = useContext(Context)
  changeNav(location.pathname)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Seo title='IMJUSTBAIT' description='IMJUSTBAIT is one of the most popular and culturally relevant Instagram accounts for young people in the UK' />
      <div className='IJB-container'>
        <div className='IJB-image__first' />
        <div className='IJB-headings'>
          <h1>DISCOVER OUR PEOPLE</h1>
          <h2>FIND YOUR PLACE IN OUR FILM</h2>
        </div>
        <div className='IJB-description'>
          <p>
            Created in 2014 by Anthony Robb (aka Antz), who's just 22 years old.
          </p>
          <p>
            IMJUSTBAIT started out as an Instagram meme page that has skyrocketed
            to success within the past six years.
          </p>
          <p>
            Now with the aforementioned 4.7 million followers on Instagram,
            it is one of the most popular and culturally relevant Instagram accounts
            for young people in the UK
          </p>
        </div>
        <img className='IJB-logo' src={Logo} alt='Im Just Bait logo' />
        <div className='IJB-image__last' />

      </div>
      <section className='BC-container'>
        <div className='text-box'>
          <img src={logoBC} alt='Logo Baitcoin' />
          <div className='text'>
            A Full-On-Chain Liquidity Protocol that can be implemented on any Smart Contract-Enabled Blockchain.
            Utility coming soon.
          </div>
        </div>
        <a href='https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x10f6F43d8321A3C86c2986BA4753ceBEba477BAa' className='buy-button' target='_blank' rel="noopener noreferrer">
          buy <span>baitcoin</span> coin
        </a>
      </section>

    </>
  )
}

export default ImJustBaitPage
