import React, { useEffect, useState } from 'react'

// Styles
import {
  Grid,
  Slide,
  Container,
  Button,
  Item,
  Title,
  ImgContainer,
  Paginator,
  ItemPaginator
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
import Image4Mob from '@images/slider/1IMGMob(2).png'
import Image5Mob from '@images/slider/2IMGMob(2).png'

// import BePartImg from '@images/BePartOfTheFilm.png'

// Icons
import ArrowBack from '@icons/arrowBack.png'
import ArrowForward from '@icons/arrowForward.png'

// Components
import { ComingSoon } from '@components/ComingSoon'
import { useMobileEvents } from '../hooks/useMobileEvents'

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
        { id: 1, img: Image4, imgMob: Image4Mob, href: '/signup' },
        { id: 2, img: Image5, imgMob: Image5Mob, href: '/signup' },
        { id: 3, img: Image6, imgMob: Image3Mob, href: '/signup' }
      ]
    }
  ]

  const [current, setCurrent] = useState(0)
  const length = slides.length
  const [animation, setAnimation] = useState(true)

  const [move, events, setMove] = useMobileEvents() // hook for mobile swipe events

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
    setAnimation(true)
    setMove({ moved: '' })
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
    setAnimation(false)
    setMove({ moved: '' })
  }

  // Handle swiped mobile

  useEffect(() => {
    if (move.moved === 'left') {
      nextSlide()
    } else if (move.moved === 'right') {
      prevSlide()
    }
  }, [move.moved])
  /*  const [startX, setStartX] = useState(0)
  const [moveX, setMoveX] = useState(0)

  const setStart = (e) => {
    setStartX(e.touches[0].clientX)
  }
  const setMoving = (e) => {
    setMoveX(e.touches[0].clientX)
  }
  const setDir = (e) => {
    if (startX + 100 < moveX) {
      prevSlide()
    } else if (startX - 100 > moveX) {
      nextSlide()
    }
  } */

  const name = 'LEARN MORE'

  return (
    <Grid>
      <Title>
        STEP INTO THE <span> TRAP</span>
      </Title>

      <Paginator>
        {slides.map((slide, index) => (
          <li key={index}>
            <ItemPaginator onClick={() => setCurrent(index)}>
              <div
                className='center'
                style={index === current ? { background: 'red' } : { background: 'white' }}
              />
            </ItemPaginator>

          </li>
        ))}
      </Paginator>

      <Container {...events}>
        <Button onClick={prevSlide} style={{ gridColum: 1 }}>
          <img src={ArrowBack} alt='' />
        </Button>
        <div style={{ gridColum: 2 }}>

          {
          slides.map((slide, index) => {
            return (
              index === current && <Slide key={index} animation={animation}>
                <Item to={slide.conten[0].href}>
                  <ImgContainer bgImg={slide.conten[0].img} bgImgMob={slide.conten[0].imgMob}>
                    <span>BE PART IN THE FILM</span>
                  </ImgContainer>

                  <span>BE IN THE FILM</span>
                </Item>
                <Item to={slide.conten[1].href}>
                  <ImgContainer bgImg={slide.conten[1].img} bgImgMob={slide.conten[1].imgMob}>
                    <span>UPLOAD YOUR MUSIC</span>
                  </ImgContainer>
                  <span>UPLOAD YOUR MUSIC</span>
                </Item>
                <Item to={slide.conten[2].href}>
                  <ImgContainer bgImg={slide.conten[2].img} bgImgMob={slide.conten[2].imgMob}>
                    <span>UPLOAD YOUR VIDEO</span>
                  </ImgContainer>
                  <span>UPLOAD YOUR VIDEO</span>
                </Item>
                {/* eslint-disable-next-line react/jsx-indent */}
                                   </Slide>

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
