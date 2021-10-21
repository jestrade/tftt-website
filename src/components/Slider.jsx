import React from 'react'

// Styles
import { Grid, Slide, Container, Button, Item, Title } from '@styles/SliderStyles'

// Images
import Image1 from '@images/slider/1IMG.png'
import Image2 from '@images/slider/2IMG.png'
import Image3 from '@images/slider/3IMG.png'

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
            <img src={Image1} alt='' />
            <p>BE IN THE FILM</p>
          </Item>
          <Item>
            <img src={Image2} alt='' />
            <p>UPLOAD YOUR MUSIC</p>
          </Item>
          <Item>
            <img src={Image3} alt='' />
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
