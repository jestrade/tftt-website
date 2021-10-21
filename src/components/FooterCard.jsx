import React from 'react'
import '@styles/FooterCard.scss'
import ProfilePicture from '../assets/images/tfttCirculImage.png'
import Card1Image from '../assets/images/footerCard1.png'
import Card2Image from '../assets/images/footerCard2.png'
import Card3Image from '../assets/images/footerCard3.png'
import Card4Image from '../assets/images/footerCard4.png'

const FooterCard = () => {
  return (
    <div className='footerCardsContainer'>
      <div className='card'>
        <div className='cardPPTitle'>
          <img className='cardPP' src={ProfilePicture} alt='Profile' />
          <div className='cardTitleContainer'>
            <p className='cardTitle'>Tales From The Trap</p>
            <p className='cardTitle'>@TFTTMovie</p>
          </div>
        </div>
        <p className='cardMsg'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoree.</p>
        <img className='cardImg' src={Card1Image} alt='Image description' />
      </div>

      <div className='card'>
        <div className='cardPPTitle'>
          <img className='cardPP' src={ProfilePicture} alt='Profile' />
          <div className='cardTitleContainer'>
            <p className='cardTitle'>Tales From The Trap</p>
            <p className='cardTitle'>@TFTTMovie</p>
          </div>
        </div>
        <p className='cardMsg'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoree.</p>
        <img className='cardImg' src={Card2Image} alt='Image description' />
      </div>

      <div className='card'>
        <div className='cardPPTitle'>
          <img className='cardPP' src={ProfilePicture} alt='Profile' />
          <div className='cardTitleContainer'>
            <p className='cardTitle'>Tales From The Trap</p>
            <p className='cardTitle'>@TFTTMovie</p>
          </div>
        </div>
        <p className='cardMsg'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoree.</p>
        <img className='cardImg' src={Card3Image} alt='Image description' />
      </div>

      <div className='card'>
        <div className='cardPPTitle'>
          <img className='cardPP' src={ProfilePicture} alt='Profile' />
          <div className='cardTitleContainer'>
            <p className='cardTitle'>Tales From The Trap</p>
            <p className='cardTitle'>@TFTTMovie</p>
          </div>
        </div>
        <p className='cardMsg'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoree.</p>
        <img className='cardImg' src={Card4Image} alt='Image description' />
      </div>
    </div>
  )
}

export default FooterCard
