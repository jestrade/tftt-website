import React from 'react'

// Styles
import '@styles/Home.scss'

// Components
import { SocialMediaBar } from '@components/SocialMediaBar'
import { Slider } from '@components/Slider'

// Images
import terrystone from '@images/terry.png'
import ouatil from '@images/outil.png'
import rolling from '@images/rollingwiththenines.png'
import anuvahood from '@images/anuvahood.png'
import fade from '@images/FADE.png'
import ijbimg from '@images/IJBIMAG.png'
import reel from '@images/moviereel.png'
import { useNearScreen } from '../hooks/userNearScreen'

const Home = () => {
  const [show1, element1] = useNearScreen()
  const [show2, element2] = useNearScreen()
  const [show3, element3] = useNearScreen()
  const [show4, element4] = useNearScreen()

  return (
    <div>

      <div className='tfttContainer animation'>
        <div className='tfttSubcontainer'>
          <h1>TALES FROM THE<span> TRAP</span></h1>
          <h3>FILM SYNOPSIS</h3>
          <p>Is a gritty no holds barred look at the world faced by many  UK's streets and council estates youths of today. A tale of gang culture, knife crime and cross county drug deals, however more than that Tales From The Trap is a story of brotherhood, loyalty and a friendship that runs deeper than any family.</p>
          <p>Slick is a rising star in the UK Rap & Drill Music scenes as part of the SE8 crew who are tearing up the music scene, however with a rise in success also comes a rise in status and all the dangers that come with it. Soon the SE8’s friendship is tested to the limit as rival gangs, bent coppers, older drillers and dealers, fate and circumstances force these youths hand with deadly consequences.</p>
          <p className='paragraph'>Tales From The Trap is as powerful and hard hitting as it is heartwarming and tells the story, which is all too familiar on today’s streets and council estates</p>
          <SocialMediaBar />
          <img className='fade' src={fade} alt='Fade' />
        </div>
      </div>
      <section className='terryStoneContainer' ref={element1}>
        {show1 &&
          <div className={show1 ? 'terryStoneContainer animation' : 'terryStoneContainer'}>
            <img className='terryStone animation' src={terrystone} alt='Terry Stone' />
            <div className='terryStoneTextContainer'>
              <h1 className='terryTitle'>TERRY STONE</h1>
              <p className='terryText'>“Tales From The Trap’s (“TFTT”) Film & Television Franchise will leverage from the anticipated exponential growing demand of digital assets in the film, TV, social media, music and the graphic/art content industries.</p>
              <p className='terryText'>TFTT will create a market place for the sale and resale of the film & television franchise assets and all related content through amongst others the highly sort after non fungible tokens. TFTT will commercialize through tokenomics and create digital intellectual property for the benefit of the TFTT loyal fanbase.”</p>
              <p className='terryText2'>Anyone and everyone will have the opportunity to become a Part Shareholder in the TFTT film & television franchise</p>
              <h1 className='terrySubtitle'>PREVIOUS FILMS FROM TERRY STONE</h1>
              <div className='moviesContainer'>
                <img className='movieCover' src={ouatil} alt='Movie cover' />
                <img className='movieCover' src={rolling} alt='Movie cover' />
                <img className='movieCover' src={anuvahood} alt='Movie cover' />
              </div>
            </div>
          </div>}
      </section>

      <section className='discoverContainer' ref={element2}>
        {show2 &&
          <div className={show1 ? 'discoverContainer animation' : 'discoverContainer'}>

            <h1 className='ijbTitle'>DISCOVER OUR PEOPLE</h1>
            <p className='ijbSubtitle'>FIND YOUR PLACE</p>
            <img className='ijbImg' src={ijbimg} alt='Im just bait logo' />

          </div>}
      </section>

      <div className='sliderContainer' ref={element3}>
        {show3 &&
          <div className={show3 ? 'sliderContainer animation' : 'sliderContainer'}>
            <Slider />
          </div>}

      </div>

      <div className='graffitiContainer' ref={element4}>
        {show4 &&
          <div className={show4 ? 'graffitiContainer animation' : 'graffitiContainer'}>
            <h1>EXPERIENCE THE <span>TRAP</span></h1>
            <h3>FROM THE INSIDE OUT</h3>
            <img src={reel} alt='Movie reel' />
          </div>}
      </div>
    </div>
  )
}

export default Home
