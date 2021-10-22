import React, { useState } from 'react'

// Styles
import { Grid, Slide, Container, Button, Item, Title, ImgContainer } from '@styles/SliderStyles'

// Images
import Image1 from '@images/slider/1IMG.png'
import Image2 from '@images/slider/2IMG.png'
import Image3 from '@images/slider/3IMG.png'
import BePartImg from '@images/BePartOfTheFilm.png'

// Icons
import ArrowBack from '@icons/arrowBack.png'
import ArrowForward from '@icons/arrowForward.png'

export const Slider = () => {
  const slides = [
    {
      conten: [
        { id: 1, img: Image1, href: '#' },
        { id: 2, img: Image2, href: '#' },
        { id: 3, img: Image3, href: '#' }
      ]
    },
    {
      conten: [
        { id: 1, img: 'NoImage', href: '#' },
        { id: 2, img: 'NoImage', href: '#' },
        { id: 3, img: 'NoImage', href: '#' }
      ]
    }
  ]

  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

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
                {index === current && <Slide>
                  <Item>
                    <ImgContainer to={slide.conten[0].href} bgImg={slide.conten[0].img}>
                      <img src={BePartImg} alt='Be Part Image' />
                    </ImgContainer>

                    <p>BE IN THE FILM</p>
                  </Item>
                  <Item>
                    <ImgContainer to={slide.conten[1].href} bgImg={slide.conten[1].img}>
                      <img src={BePartImg} alt='Be Part Image' />
                    </ImgContainer>
                    <p>UPLOAD YOUR MUSIC</p>
                  </Item>
                  <Item>
                    <ImgContainer to={slide.conten[2].href} bgImg={slide.conten[2].img}>
                      <img src={BePartImg} alt='Be Part Image' />
                    </ImgContainer>
                    <p>UPLOAD YOUR VIDEO</p>
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
    </Grid>
  )
}
