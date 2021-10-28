import React, { useContext } from 'react'
import { useLocation } from 'react-router'
// Context
import Context from '../context/Context'

// Styles
import {
  Section,
  Title,
  Grid,
  Item,
  Container,
  GridScenes
} from '@styles/GalleryStyles'
// Images
import imageA from '@images/videoA.png'
import imageB from '@images/videoB.png'
import imageC from '@images/videoC.png'
import imageD from '@images/videoD.png'
import imageE from '@images/videoE.png'

export const Gallery = () => {
  // This code is for identify if the page is Gallery
  const location = useLocation()
  const { changeNav } = useContext(Context)
  changeNav(location.pathname)

  return (

    <Section>
      <Title>
        <h1>GALLERY</h1>
        <h2>SNEAK PEEK</h2>
      </Title>
      <Container>
        <Grid>
          <Item style={{ gridArea: 'a' }}>
            <img src={imageA} alt='' />
            <span>SCENE 5:30</span>
          </Item>
          <Item style={{ gridArea: 'b' }}>
            <img src={imageB} alt='' />
          </Item>
          <Item style={{ gridArea: 'c' }}>
            <img src={imageC} alt='' />
          </Item>
          <Item style={{ gridArea: 'd' }}>
            <img src={imageD} alt='' />
            <span>SCENE 5:30</span>
          </Item>
          <Item style={{ gridArea: 'e' }}>
            <img src={imageE} alt='' />
            <span>SCENE 5:30</span>
          </Item>
        </Grid>
      </Container>
    </Section>
  )
}
