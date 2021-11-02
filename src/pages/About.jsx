import React, { useContext } from 'react'

import '@styles/About.scss'
import { useLocation } from 'react-router'
import Context from '../context/Context'

// Images
import imgSyn from '@images/imgSynopsis.png'
import imgBec from '@images/imgBecome.png'
export const About = () => {
  // This code is for identify if the page is Gallery
  const location = useLocation()
  const { changeNav } = useContext(Context)
  changeNav(location.pathname)

  return (
    <>
      <section className='bannerAbout'>
        <div className='bannerContainer'>
          <h1>
            <p>WELCOME TO TALES </p>
            <p> FROM THE <span>TRAP</span> </p>
          </h1>
        </div>
      </section>
      <section>
        <div className='gridProducer'>
          <div className='title'>
            <p>THE PRODUCER</p>
            <p>Mr. STONE</p>
          </div>
          <div className='grid'>
            <div>
              <p>
                Terry Stone is a world recognised, highly acclaimed,
                Television/Film, BAFTA Nominee actor and producer, as well as
                staring in one of the UK’s biggest and most successful crime
                film franchises of all time.
              </p>
              <p>
                Released in 2007, Terry created and starred in the inaugural
                “Rise of the Footsoldier” the highly acclaimed British crime and
                gangster film, pursuant to its success, Terry portrayed Tony
                Tucker throughout the notorious “Rise of The Footsoldier” film
                franchise, a franchise which has become one of the UK’s biggest
                and most successful crime film franchises of all time.
              </p>
              <p>
                Terry also portrayed starring roles in films such as the BAFTA
                nominee “Rollin with The Nines” the UK crime drama “Bonded by
                Blood” and he also starred in the UK box office smash
                “Anuvahood”
              </p>
            </div>
            <div>
              Terry Stone commented: “I believe It’s just a matter of time
              before most Television and Film productions adopt some form of
              digital money as part of their own business modelling, the
              Darkhorse team have developed a cryptocurrency and NFT’s
              (Non-Fungible Tokens) platform that could potentially
              revolutionise the way film production companies engage with fans
              around the world, and together with ongoing revenues for all
              stakeholders we have potentially developed an industry game
              changer, we are full steam ahead and aim to launch the new
              platform within the last Qtr. 2021”
            </div>
          </div>
        </div>
      </section>
      <section className='bgBricks'>
        <section>
          <div className='gridSynopsis'>
            <div className='title'>FILM SYNOPSIS</div>
            <div className='grid'>
              <div>
                <img src={imgSyn} alt='' />
              </div>
              <div>
                <p>
                  TALES FROM THE TRAP is a gritty no holds barred look at the
                  world faced by many UK's streets and council estates youths of
                  today. A tale of gang culture, knife crime and cross county drug
                  deals, however more than that TALES FROM THE TRAP is a story of
                  brotherhood, loyalty and a friendship that runs deeper than any
                  family.
                </p>
                <p>
                  Slick is a rising star in the UK Rap & Drill Music scenes as
                  part of the SE8 crew who are tearing up the music scene, however
                  with a rise in success also comes a rise in status and all the
                  dangers that come with it. Soon the SE8’s friendship is tested
                  to the limit as rival gangs, bent coppers, older drillers and
                  dealers, fate and circumstances force these youths hand with
                  deadly consequences.
                </p>
              </div>
              <div>
                TALES FROM THE TRAP is as powerful and hard hitting as it is
                heartwarming and tells the story, which is all too familiar on
                today’s UK streets and council estates.
              </div>
            </div>
            <hr />
          </div>
        </section>
        <section>
          <div className='gridBecome'>

            <div className='textBox'>
              <div className='title'>
                YOU CAN BECOME A SHAREHOLDER IN THE FILM & TV FRANCHISE
              </div>
              <p>
                “TALES FROM THE TRAP’s (“TFTT”) Film & Television Franchise will
                leverage from the anticipated exponential growing demand of digital
                assets in the Film, Television, social media, music and the
                graphic/art content industries.
              </p>
              <p>
                TFTT will create a market place for
                the sale and resale of the Film & Television franchise assets and
                all related content through amongst others the highly sort after non
                fungible tokens. TFTT will commercialize through tokenomics and
                create digital intellectual property for the benefit of the TFTT
                loyal fanbase.”
              </p>
              <p>
                TFTT will create a market place for
                the sale and resale of the Film & Television franchise assets and
                all related content through amongst others the highly sort after non
                fungible tokens. TFTT will commercialize through tokenomics and
                create digital intellectual property for the benefit of the TFTT
                loyal fanbase.”
              </p>
            </div>
            <div>
              <img src={imgBec} alt='' />
            </div>
          </div>
        </section>
      </section>
    </>
  )
}