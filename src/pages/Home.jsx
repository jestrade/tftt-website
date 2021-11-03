import React, { useContext, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
// Styles
import '@styles/Home.scss'
import { SectionActors, Title, TitleMb } from '@styles/HomeStyles'

// Components
import { SocialMediaBar } from '@components/SocialMediaBar'
import { Slider } from '@components/Slider'

// Images
import terrystone from '@images/terry.png'
import ouatil from '@images/outil.png'
import rolling from '@images/rollingwiththenines.png'
import auhood from '@images/anuvahood.png'

// import anuvahood from '@images/anuvahood.png'
import fade from '@images/FADE.png'
import ijbimg from '@images/IJBIMAG.png'
import rotf from '@images/rotf.png'

// Hooks
import { useNearScreen } from '../hooks/userNearScreen'
import Context from '../context/Context'

const Home = () => {
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
    <div>
      <section>
        <div className='tfttContainer animationHeader'>
          <div className='tfttSubcontainer'>
            <h1>TALES FROM THE<span> TRAP</span></h1>
            <h2>FILM SYNOPSIS</h2>
            <p>TALES FROM THE TRAP is a gritty no holds barred look at the world faced by many UK's streets and council estates youths of today. A tale of gang culture, knife crime and cross county drug deals, however more than that TALES FROM THE TRAP is a story of brotherhood, loyalty and a friendship that runs deeper than any family.</p>
            <p>Slick is a rising star in the UK Rap &amp; Drill Music scenes as part of the SE8 crew who are tearing up the music scene, however with a rise in success also comes a rise in status and all the dangers that come with it. Soon the SE8’s friendship is tested to the limit as rival gangs, bent coppers, older drillers and dealers, fate and circumstances force these youths hand with deadly consequences.</p>
            <p className='paragraph'>TALES FROM THE TRAP is as powerful and hard hitting as it is heartwarming and tells the story, which is all too familiar on today’s UK streets and council estates.</p>
            <SocialMediaBar />
            <img className='fade' src={fade} alt='Fade' />
          </div>
        </div>
      </section>
      <section className='terryStoneContainer' ref={element1}>
        {show1 &&
          <div className={show1 ? 'terryStoneContainer animation' : 'terryStoneContainer'}>
            <img className='terryStone' src={terrystone} alt='Terry Stone' />
            <div className='terryStoneTextContainer'>
              <h1 className='terryTitle'>TERRY STONE</h1>
              <p className='terryText'>“TALES FROM THE TRAP’s (“TFT<span>T</span>”) Film &amp; Television Franchise will leverage from the anticipated exponential growing demand of digital assets in the Film, Television, social media, music and the graphic/art content industries.</p>
              <p className='terryText'>TFT<span>T</span> will create a market place for the sale and resale of the Film &amp; Television franchise assets and all related content through amongst others the highly sort after non fungible tokens. TFT<span>T</span> will commercialize through tokenomics and create digital intellectual property for the benefit of the TFT<span>T</span> loyal fanbase.”</p>
              <p className='terryText2'>Anyone and everyone will have the opportunity to become a Part Shareholder in the TFT<span>T</span> Film &amp; Television franchise.</p>
              <h1 className='terrySubtitle'>PREVIOUS FILMS FROM TERRY STONE</h1>
              <div className='moviesContainer'>
                <div className='imageWrapper'>
                  <img className='movieCover1' src={rotf} alt='Movie cover' />
                  <img className='movieCover' src={rotf} alt='Movie cover' />
                  <img className='movieCover3' src={rotf} alt='Movie cover' />
                  <img className='movieCover4' src={rotf} alt='Movie cover' />
                  <a href='https://www.gateway-films.com/films.php?film=anuvahood' id='a3'>+</a>
                </div>
                <div className='imageWrapper'>
                  <img className='movieCover1' src={ouatil} alt='Movie cover' />
                  <img className='movieCover' src={ouatil} alt='Movie cover' />
                  <img className='movieCover3' src={ouatil} alt='Movie cover' />
                  <img className='movieCover4' src={ouatil} alt='Movie cover' />
                  <a href='https://www.gateway-films.com/films.php?film=once-upon-a-time' id='a1'>+</a>
                </div>
                <div className='imageWrapper'>
                  <img className='movieCover1' src={rolling} alt='Movie cover' />
                  <img className='movieCover' src={rolling} alt='Movie cover' />
                  <img className='movieCover3' src={rolling} alt='Movie cover' />
                  <img className='movieCover4' src={rolling} alt='Movie cover' />
                  <a href='https://www.gateway-films.com/films.php?film=rolling' id='a2'>+</a>
                </div>
                <div className='imageWrapper'>
                  <img className='movieCover1' src={auhood} alt='Movie cover' />
                  <img className='movieCover' src={auhood} alt='Movie cover' />
                  <img className='movieCover3' src={auhood} alt='Movie cover' />
                  <img className='movieCover4' src={auhood} alt='Movie cover' />
                  <a href='https://www.gateway-films.com/films.php?film=rolling' id='a4'>+</a>
                </div>
              </div>
            </div>
          </div>}
      </section>
      <section className='treepicsContainer'>
        <h1>IF YOU WATCHED...</h1>
        <div className='pictureContainer'>
          <div className='pictureContainer1' />
          <div className='pictureContainer2' />
          <div className='pictureContainer3' />
        </div>
        <h2>YOUR IN THE RIGHT PLACE</h2>
      </section>

      <SectionActors ref={element4}>
        {show4 &&
          <div className='actors-container animation'>
            <TitleMb>CAST & CREW</TitleMb>
            <div className='row-actors'>
              <div className='col-img'>
                <div className='img1' alt='' />
              </div>
              <div className='col-img end'>
                <Title>CAST & CREW</Title>
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

      <section className='sliderContainer' ref={element3}>
        {show3 &&
          <div className={show3 ? 'sliderContainer animation' : 'sliderContainer'}>
            <Slider />
          </div>}
      </section>

      <section className='' ref={element2}>
        {show2 &&
          <Link to='/signup' className={show2 ? 'discoverContainer animation' : 'discoverContainer'}>
            <h2 className='ijbTitle'>DISCOVER OUR PEOPLE</h2>
            <h3 className='ijbSubtitle'>FIND YOUR PLACE</h3>
            <img className='ijbImg' src={ijbimg} alt='Im just bait logo' />
          </Link>}
      </section>

      <div className='graffitiContainer'>
        <div className='graffitiContainer'>
          <div className='titleGrafContainer'>
            <h1 className='gcTitle'>EXPERIENCE THE <span>TRAP</span></h1>
            <h3>FROM THE INSIDE OUT</h3>
          </div>
          {/*  <img className='reel' src={reel} alt='Movie reel' /> */}

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

          {/* <div className='reel2'>
            <img src={reel2} alt='Movie reel' />
            <div className='redBlock'>
              <h1 className='msjRed'>WALK ON THE RED CARPET</h1>
            </div>
          </div>
          <div className='reel3'>
            <img src={reel3} alt='Movie reel' />
            <div className='redBlock'>
              <h1 className='msjRed'>BE IN THE MOVIE</h1>
            </div>
          </div>
          <div className='reel4'>
            <img src={reel4} alt='Movie reel' />
            <div className='redBlock'>
              <h1 className='msjRed'>MEET THE STARS</h1>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Home
