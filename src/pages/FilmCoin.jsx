import React from 'react'
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

export default () => {
  return (
    <>
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
              <Title className='FC-learnMore'> Learn More</Title>
              <IconsContainer>
                <DocIcon href='https://drive.google.com/file/d/1mU5OsYmFkbLFzzmRoJdFamhrLkXJ-qkK/view?usp=sharing'>
                  <img src={icon1} alt='Icon White Papper' />
                  <p>White Papper</p>
                </DocIcon>
                <DocIcon href='https://drive.google.com/file/d/1ltU_AIBqkt8FdpJHDKgAr0UXsltYQtMm/view?usp=sharing'>
                  <img src={icon2} alt='Icon Deck' />
                  <p>Deck</p>
                </DocIcon>
                {/* <DocIcon href='#'>
                  <img src={icon1} alt='Icon Document' />
                  <p>Document</p>
                </DocIcon> */}
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
