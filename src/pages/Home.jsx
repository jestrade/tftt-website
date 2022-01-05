import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
// Styles
import '@styles/Home.scss'
import { SectionActors, TitleMb } from '@styles/HomeStyles'
import { Slider } from '@components/Slider'
import {
  Button,
  CloseBtn,
  Container,
  Description,
  PopupWrapper,
  SmallText,
  Title
} from '@styles/PopupStyles'

// Components
import { SocialMediaBar } from '@components/SocialMediaBar'

// Images
import tfttWhiteLogo from '@logos/tfttWhiteLogo.png'
import terrystone from '@images/terry.png'
import ouatil from '@images/outil.png'
import rolling from '@images/rollingwiththenines.png'
import auhood from '@images/anuvahood.png'
import unation from '@images/unation.png'
import doghouse from '@images/doghouse.png'
import rof from '@images/rof.png'
import outil2 from '@images/outil2.png'
import fade from '@images/FADE.png'
import ijbimg from '@images/IJBIMAG.png'
import rotf from '@images/rotf.png'
import CloseIcon from '@icons/closeIcon.svg'

// Hooks
import { useNearScreen } from '../hooks/userNearScreen'
import Context from '../context/Context'

const Home = () => {
  const [showPopup, setShowPopup] = useState(true)
  // This code is for identify if the page is Gallery
  const location = useLocation()
  const { changeNav } = useContext(Context)
  changeNav(location.pathname)

  const [show1, element1] = useNearScreen()
  const [show2, element2] = useNearScreen()
  const [show3, element3] = useNearScreen()
  const [show4, element4] = useNearScreen()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='home'>
      <PopupWrapper showPopup={showPopup}>
        <Container>
          <CloseBtn onClick={() => setShowPopup(false)}>
            <img src={CloseIcon} alt='close' />
          </CloseBtn>
          <Title>
            Purchase
            <br />
            FILM<strong>COIN</strong>
          </Title>
          <Description>
            The Motion Picture Digital Currency Of Choice
          </Description>

          <Button href='https://thefilmcoin.io/#/payment1'>Buy Now</Button>
          <SmallText>
            20% discount public pre-sale
            <br />
            Minting on 28th February 2022
          </SmallText>
        </Container>
      </PopupWrapper>
      <section>
        <div className='tfttContainer animationHeader'>
          <div className='tfttSubcontainer'>
            <h1>TALES FROM THE<span> TRAP</span></h1>
            <h2>FILM SYNOPSIS</h2>
            <p>
              "TALES FROM THE TRAP" is a gritty no holds barred look inside the World
              faced today by many youths growing up on UK Streets and Council Estates.
              Tales of Gang Culture, Fashion, Music, Knife &amp; Gun Crime,
              County Lines Drug Deals, however more than that "TALES FROM THE TRAP"
              is a story of Friendship and Loyalty that runs deeper than any Family.
            </p>
            <p>Slick is a rising star in the UK Rap &amp; Drill Music scenes
              as part of the SE8 crew who are tearing up the music scene,
              however with a rise in success also comes a rise in status
              and all the dangers that come with it. Soon the SE8’s friendship
              is tested to the limit as rival gangs, bent coppers,
              older drillers and dealers, fate and circumstances force
              these youths hand with deadly consequences.
            </p>
            <p className='paragraph'>
              TALES FROM THE TRAP is as powerful and hard hitting as it is heartwarming
              and tells the story, which is all too familiar on today’s UK streets
              and council estates.
            </p>
            <img className='logo' src={tfttWhiteLogo} alt='Tales from the Trap Logo' />
            <img className='fade' src={fade} alt='Fade' />
          </div>
        </div>
      </section>

      <SectionActors ref={element4}>
        {show4 &&
          <div className='actors-container animation'>
            {/* <TitleMb>CAST & CREW</TitleMb> */}
            <div className='row-actors'>
              <div className='col-img'>
                <div className='img1' alt='' />
              </div>
              <div className='col-img end'>
                <div className='img2' alt='' />
              </div>
              <div className='col-img'>
                <div className='img3' alt='' />
              </div>
              <div className='col-img end'>z
                <div className='img4' alt='' />
              </div>
            </div>
          </div>}
      </SectionActors>

      <section
        className={
          show1
            ? 'terryStoneContainer animation'
            : 'terryStoneContainer'
        }
        ref={element1}
      >
        {show1 && (
          <>
            <h1 className='terryTitle'>PRODUCTION</h1>
            <img className='terryStone' src={terrystone} alt='Terry Stone' />
            <div className='terryStoneTextContainer'>
              <p className='terryText'>
                Terry Stone began his Acting &amp; Producing career in May 2003
                and over the past 18 years has carved an impressive career
                on both sides of the camera. Terry's naturalistic style of acting
                has seen him play some memorable leading roles
                such as a corrupt cop Detective Sargent Andy White
                in the Bafta Nominated and Raindance Film Festival Award winning
                "Rollin' With The Nines"; Tony Tucker in the "Rise of The Footsoldier"
                True Crime Film Franchise and as Jack Spot in the 1930's - 1950's
                period crime film "Once Upon a Time in London".
              </p>
              <p className='terryText'>
                “TALES FROM THE TRAP (“TFT<span>T</span>”) Film &amp;
                Television Franchise will leverage from the anticipated exponential
                growing demand of digital assets in the Film, Television,
                social media, music and the graphic/art content industries.
              </p>
              <p className='terryText'>
                TFT<span>T</span> will create a market place for the sale and resale
                of the Film &amp; Television franchise assets and all related content
                through amongst others the highly sort after non fungible tokens.
                TFT<span>T</span> will commercialize through tokenomics
                and create digital intellectual property for the benefit of
                the TFT<span>T</span> loyal fanbase.”
              </p>
              <p className='terryText'>
                Anyone and everyone will have the opportunity to support
                the TFTT Film &amp; Television franchise.
              </p>
            </div>
          </>
        )}
      </section>

      <section className='movieCatalog'>
        <h2>MOVIE CATALOG</h2>
        <div className='video-container'>
          <div className='video'>
            <iframe
              src='https://player.vimeo.com/video/579966680?autoplay=1&amp;loop=1&amp;muted=1'
              frameBorder='0'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              scrolling='auto'
            />
          </div>
        </div>
      </section>

      <section className='previousFilms'>
        <h2 className='terrySubtitle'>
          PREVIOUS FILMS FROM TERRY STONE
        </h2>
        <div className='moviesContainer'>
          <div className='imageWrapper'>
            <img className='movieCover1' src={auhood} alt='Movie cover' />
            <img className='movieCover' src={auhood} alt='Movie cover' />
            <img className='movieCover3' src={auhood} alt='Movie cover' />
            <img className='movieCover4' src={auhood} alt='Movie cover' />
          </div>
          <div className='imageWrapper'>
            <img className='movieCover1' src={rolling} alt='Movie cover' />
            <img className='movieCover' src={rolling} alt='Movie cover' />
            <img className='movieCover3' src={rolling} alt='Movie cover' />
            <img className='movieCover4' src={rolling} alt='Movie cover' />
          </div>
          <div className='imageWrapper'>
            <img className='movieCover1' src={ouatil} alt='Movie cover' />
            <img className='movieCover' src={ouatil} alt='Movie cover' />
            <img className='movieCover3' src={ouatil} alt='Movie cover' />
            <img className='movieCover4' src={ouatil} alt='Movie cover' />
          </div>
          <div className='imageWrapper'>
            <img className='movieCover1' src={rotf} alt='Movie cover' />
            <img className='movieCover' src={rotf} alt='Movie cover' />
            <img className='movieCover3' src={rotf} alt='Movie cover' />
            <img className='movieCover4' src={rotf} alt='Movie cover' />
          </div>
          <div className='imageWrapper'>
            <img className='movieCover1' src={unation} alt='Movie cover' />
            <img className='movieCover' src={unation} alt='Movie cover' />
            <img className='movieCover3' src={unation} alt='Movie cover' />
            <img className='movieCover4' src={unation} alt='Movie cover' />

          </div>
          <div className='imageWrapper'>
            <img className='movieCover1' src={doghouse} alt='Movie cover' />
            <img className='movieCover' src={doghouse} alt='Movie cover' />
            <img className='movieCover3' src={doghouse} alt='Movie cover' />
            <img className='movieCover4' src={doghouse} alt='Movie cover' />

          </div>
          <div className='imageWrapper'>
            <img className='movieCover1' src={rof} alt='Movie cover' />
            <img className='movieCover' src={rof} alt='Movie cover' />
            <img className='movieCover3' src={rof} alt='Movie cover' />
            <img className='movieCover4' src={rof} alt='Movie cover' />

          </div>
          <div className='imageWrapper'>
            <img className='movieCover1' src={outil2} alt='Movie cover' />
            <img className='movieCover' src={outil2} alt='Movie cover' />
            <img className='movieCover3' src={outil2} alt='Movie cover' />
            <img className='movieCover4' src={outil2} alt='Movie cover' />

          </div>
        </div>
      </section>

      <section className='threePicsContainer'>
        <h1>IF YOU WATCHED...</h1>
        <div className='pictureContainer'>
          <div className='pictureContainer1'>"BLUE STORY"</div>
          <div className='pictureContainer2'>"TOP BOY"</div>
          <div className='pictureContainer3'>"ADULTHOOD"</div>
        </div>
        <h2>YOUR IN THE RIGHT PLACE</h2>
      </section>

      <section className='sliderContainer' ref={element3}>
        {show3 &&
          <div className={show3 ? 'sliderContainer animation' : 'sliderContainer'}>
            <Slider />
          </div>}
      </section>

      <section ref={element2}>
        {show2 &&
          <Link to='/signup' className={show2 ? 'discoverContainer animation' : 'discoverContainer'}>
            <h2 className='ijbTitle'>DISCOVER OUR PEOPLE</h2>
            <h3 className='ijbSubtitle'>FIND YOUR PLACE</h3>
            <img className='ijbImg' src={ijbimg} alt='Im just bait logo' />
          </Link>}
      </section>

      <section className='brickellContainer'>
        <div />
      </section>

      <div className='graffitiContainer'>
        <div className='graffitiContainer'>
          <div className='titleGrafContainer'>
            <h1 className='gcTitle'>EXPERIENCE THE <span>TRAP</span></h1>
            <h3>FROM THE INSIDE OUT</h3>
          </div>

          <div className='relImagesContainer'>
            <div className='reel1'>
              <Link to='/contact' className='redBlock'>
                <h1 className='msjRed'>MEET THE STARS</h1>
              </Link>
            </div>
            <div className='reel2'>
              <Link to='/contact' className='redBlock'>
                <h1 className='msjRed'>BE IN THE MOVIE</h1>
              </Link>
            </div>
            <div className='reel3'>
              <Link to='/contact' className='redBlock'>
                <h1 className='msjRed'>PRIVATE MOVIE SHOWING</h1>
              </Link>
            </div>
            <div className='reel4'>
              <Link to='/contact' className='redBlock'>
                <h1 className='msjRed'>WORK ON THE RED CARPET</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
