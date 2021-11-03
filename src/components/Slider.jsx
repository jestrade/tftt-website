import React, { useState } from 'react'

// Styles
import {
  Grid,
  Slide,
  Container,
  Button,
  Item,
  Title,
  ImgContainer
} from '@styles/SliderStyles'

// Images
import Image1 from '@images/slider/1IMG.png'
import Image2 from '@images/slider/2IMG.png'
import Image3 from '@images/slider/3IMG.png'
import Image4 from '@images/slider/1IMG(2).png'
import Image5 from '@images/slider/2IMG(2).png'
import Image6 from '@images/slider/3IMG(2).png'

import Image1Mob from '@images/slider/1IMGMob.png'
import Image2Mob from '@images/slider/2IMGMob.png'
import Image3Mob from '@images/slider/3IMGMob.png'

// import BePartImg from '@images/BePartOfTheFilm.png'

// Icons
import ArrowBack from '@icons/arrowBack.png'
import ArrowForward from '@icons/arrowForward.png'

// Components
import { ComingSoon } from '@components/ComingSoon'

export const Slider = () => {
  const slides = [
    {
      conten: [
        { id: 1, img: Image1, imgMob: Image1Mob, href: '/signup' },
        { id: 2, img: Image2, imgMob: Image2Mob, href: '/signup' },
        { id: 3, img: Image3, imgMob: Image3Mob, href: '/signup' }
      ]
    },
    {
      conten: [
        { id: 1, img: Image4, imgMob: Image1Mob, href: '/signup' },
        { id: 2, img: Image5, imgMob: Image2Mob, href: '/signup' },
        { id: 3, img: Image6, imgMob: Image3Mob, href: '/signup' }
      ]
    }
  ]

  const [current, setCurrent] = useState(0)
  const length = slides.length
  const [animation, setAnimation] = useState(true)

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
    setAnimation(true)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
    setAnimation(false)
  }

  const name = 'LEARN MORE'

  return (
    <Grid>
      <Title>
        STEP INTO THE <span> TRAP</span>
      </Title>
      <Container>
        <Button onClick={prevSlide} style={{ gridColum: 1 }}>
          <img src={ArrowBack} alt='' />
        </Button>
        <div style={{ gridColum: 2 }}>
          {
          slides.map((slide, index) => {
            return (
              <div key={index}>
                {index === current && <Slide animation={animation}>
                  <Item to={slide.conten[0].href}>
                    <ImgContainer bgImg={slide.conten[0].img} bgImgMob={slide.conten[0].imgMob} />

                    <span>BE IN THE FILM</span>
                  </Item>
                  <Item to={slide.conten[1].href}>
                    <ImgContainer bgImg={slide.conten[1].img} bgImgMob={slide.conten[1].imgMob} />
                    <span>UPLOAD YOUR MUSIC</span>
                  </Item>
                  <Item to={slide.conten[2].href}>
                    <ImgContainer bgImg={slide.conten[2].img} bgImgMob={slide.conten[2].imgMob} />
                    <span>UPLOAD YOUR VIDEO</span>
                  </Item>
                  {/* eslint-disable-next-line react/jsx-indent */}
                                      </Slide>}
              </div>

            )
          })
        }
        </div>
        {/* <Slide>
          <Item>
            <ImgContainer href='#' bgImg={Image1}>
              <img src={BePartImg} alt='Be Part Image' />
            </ImgContainer>

            <p>BE IN THE FILM</p>
          </Item>
          <Item>
            <ImgContainer href='#' bgImg={Image2}>
              <img src={BePartImg} alt='Be Part Image' />
            </ImgContainer>
            <p>UPLOAD YOUR MUSIC</p>
          </Item>
          <Item>
            <ImgContainer href='#' bgImg={Image3}>
              <img src={BePartImg} alt='Be Part Image' />
            </ImgContainer>
            <p>UPLOAD YOUR VIDEO</p>
          </Item>
        </Slide> */}

        <Button onClick={nextSlide} style={{ gridColumn: 3 }}>
          <img src={ArrowForward} alt='' />
        </Button>

      </Container>
      <ComingSoon name={name} />
    </Grid>
  )
}
