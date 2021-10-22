import React from 'react'

// Styles
import {
  Section,
  Title,
  Grid,
  Item,
  Container
} from '@styles/GalleryStyles'
// Images
import imageA from '@images/videoA.png'
import imageB from '@images/videoB.png'
import imageC from '@images/videoC.png'
import imageD from '@images/videoD.png'
import imageE from '@images/videoE.png'
import imageBg from '@images/bgGalleryVideos.png'

export const Gallery = () => {
  return (

    <Section>
      <Title>
        <p>GALLERY</p>
        <p>SNEAK PEEK</p>
      </Title>
      <Container bgImg={imageBg}>

        <Grid>
          <Item style={{ gridArea: 'a' }}>
            <img src={imageA} alt='' />
          </Item>
          <Item style={{ gridArea: 'b' }}>
            <img src={imageB} alt='' />
          </Item>
          <Item style={{ gridArea: 'c' }}>
            <img src={imageC} alt='' />
          </Item>
          <Item style={{ gridArea: 'd' }}>
            <img src={imageD} alt='' />
          </Item>
          <Item style={{ gridArea: 'e' }}>
            <img src={imageE} alt='' />
          </Item>
        </Grid>
      </Container>
    </Section>
  )
}
