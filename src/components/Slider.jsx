import React from 'react'

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
  /* const dataInfoSliders = [
    {
      idSlider: 1,
      conten: [
        { id: 1, img: 'url1' },
        { id: 2, img: 'url2' },
        { id: 3, img: 'url3' }
      ]
    },
    {
      idSlider: 2,
      conten: [
        { id: 1, img: 'url1' },
        { id: 2, img: 'url2' },
        { id: 3, img: 'url3' }
      ]
    }
  ] */

  return (
    <Grid>
      <Title>
        STEP INTO THE <span> TRAP</span>
      </Title>
      <Container>

        <Button>
          <img src={ArrowBack} alt='' />
        </Button>

        <Slide>
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
        </Slide>
        <Button>
          <img src={ArrowForward} alt='' />
        </Button>

      </Container>
    </Grid>
  )
}
