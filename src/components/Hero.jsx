import React from 'react'
import { Section, IconsContainer } from '@styles/HeroStyles'
import logo from '@images/FCTextLogo.png'

export default () => {
  return (
    <Section>
      <IconsContainer>
        <div className='coin1'> </div>
        <div className='middDiv'> <img src={logo} alt='Logo FilmCoin' /></div>
        <div className='coin2'> </div>

      </IconsContainer>

    </Section>

  )
}
