import React, { useContext } from 'react'

import Hero from '@components/Hero'
import Goals from '@components/Goals'
import GeneralCard from '@components/GeneralCard'
// styles
import {
  Banner,
  Container,
  IconsContainer,
  DocIcon,
  Title,
  Subtitle,
  Subtitle1,
  LogoFC,
  TextColumns,
  Text
} from '../styles/FilmCoinStyles'
// images
import Logo from '@images/filmCoinLogo.svg'
import icon1 from '@images/icon1.svg'
import icon2 from '@images/icon2.svg'
import { useLocation } from 'react-router-dom'
import Context from '../context/Context'
import bgImg1 from '@images/tapeImg.png'
import TimeLine from '../components/TimeLine'
import MiniCard from '../components/MiniCard'
import GreenRow from '@icons/GreenRowRigth.svg'
import Launchpad from '@components/Launchpad'
import BuyFC from '@components/BuyFC'
import GlobalSolution from '../components/GlobalSolution'
import Seo from '@components/Seo'

export default () => {
  // This code is for identify if the page is Gallery
  const location = useLocation()
  const { changeNav } = useContext(Context)
  changeNav(location.pathname)
  return (
    <>
      <Seo
        title='FILMCOIN'
        description='The FilmCoin Utility Token will be created on the 28th February 2022 using the ERC-20 standard and deployed to the Ethereum blockchain acting as a native currency for the Darkhorse Film Studios decentralized application program (DAPP)'
      />
      <Launchpad />
      <BuyFC />
      <GlobalSolution />
      {/* <Hero />
      <Goals />
      <GeneralCard
        bgImg={bgImg1}
        question='Do you want to join in the exciting  and commercial world of motion  picture and television ...?'
        text='Well, no need to wait any longer, FILMCOIN is poised to launch  in February 2022 ...'
      />,
      <TimeLine>
        <MiniCard
          text='Angel Investment Round'
          date='DEC 2021'
        />
        <img src={GreenRow} className='GreenRow' />
        <MiniCard
          text='Initiate the Flag-Ship Movie Development'
          date='JAN 2022'
        />
        <img src={GreenRow} className='GreenRow' />
        <MiniCard
          text='Token & Smart Contract
        Development'
          date='JAN 2022'
        />
        <img src={GreenRow} className='GreenRow' />
        <MiniCard
          text='Token Generation'
          date='FEB 2022'
        />
        <img src={GreenRow} className='GreenRow' />
        <MiniCard
          text='Wallet Module & API Development'
          date='FEB 2022'
        />
      </TimeLine>,
      <TimeLine>
        <div style={{ position: 'relative' }}>
          <img src={GreenRow} alt='Green down' row style={{ transform: 'rotate(90deg)', position: 'absolute', top: '-50px', left: `${(146 - 39) / 2}px` }} />
          <MiniCard
            text='Payment and Token Allocation Development'
            date='FEB 2022'
          />
        </div>

        <img src={GreenRow} alt='Green right row' className='GreenRow' />
        <MiniCard
          text='Project Beta Launching'
          date=' FEB 2022'
        />
        <img src={GreenRow} alt='Green right row' className='GreenRow' />
        <MiniCard
          text='Token Project Official Launching'
          date='FEB 2022'
        />
        <img src={GreenRow} alt='Green right row' className='GreenRow' />
        <MiniCard
          text='Mobile App Development'
          date='MARCH 2022'
        />
        <img src={GreenRow} alt='Green right row' className='GreenRow' />
        <MiniCard
          text='Movie production'
          date=''
        />
      </TimeLine>,
      {/* End Filmcoin section */}

      <Container>
        <Banner>
          <section>
            <div>
              <Title>MOVIELOUNGE.IO  INTRODUCES</Title>
              <LogoFC src={Logo} alt='' />
              <Subtitle>The Initial DEX Oﬀering - IDO</Subtitle>
            </div>
          </section>
          <section>
            <div>
              <Title className='FC-learnMore'> DOWNLOAD</Title>
              <IconsContainer>
                <DocIcon href='https://drive.google.com/file/d/1mU5OsYmFkbLFzzmRoJdFamhrLkXJ-qkK/view?usp=sharing'>
                  <img src={icon1} alt='Icon White Papper' />
                  <p>White Papper</p>
                </DocIcon>
                <DocIcon href='https://drive.google.com/file/d/1ltU_AIBqkt8FdpJHDKgAr0UXsltYQtMm/view?usp=sharing'>
                  <img src={icon2} alt='Icon Deck' />
                  <p>Deck</p>
                </DocIcon>
              </IconsContainer>
            </div>
          </section>
        </Banner>
        <TextColumns>
          <div>
            <Subtitle1>
              Q. Do you want to join in the exciting  and commercial world of motion  picture and television….?
            </Subtitle1>
            <Text>
              Well, no need to wait any longer, FILMCOIN is poised to launch  in February 2022……

            </Text>
          </div>
          <div>
            <Subtitle1>
              Q. Do you want to proﬁt from various  themed motion picture and television  productions…...?
            </Subtitle1>
            <Text>Well, FILMCOIN is for you, with a bootstrapped business model  and execution team full of market leaders and visionaries  FILMCOIN is well equipped to rip up the traditional and  somewhat archaic rule book and disrupt the USD$2.5 trillion  showbiz industry.
            </Text>
          </div>

        </TextColumns>
      </Container>

    </>
  )
}
