import React from 'react'
// Styles

import {
  Section,
  Container,
  Item,
  TextContainer
} from '@styles/SocialMediaBarStyles'
// Icons
import FBlogo from '@logos/facebook.svg'
import TWlogo from '@logos/twitter.png'
import TGlogo from '@logos/telegram.png'
import DDlogo from '@logos/discord.png'
import IGlogo from '@logos/instagram.svg'

export const SocialMediaBar = () => {
  return (
    <Section>
      <Container>
        <Item>
          <img src={TWlogo} alt='twitter logo' />
        </Item>
        <Item>
          <img src={IGlogo} alt='instagram logo' />
        </Item>
        <Item>
          <img src={DDlogo} alt='discord logo' />
        </Item>
        <Item>
          <img src={FBlogo} alt='facebook logo' />
        </Item>
        <Item>
          <img src={TGlogo} alt='telegram logo' />
        </Item>
      </Container>
      <TextContainer>
        Copyright all rights reserved.
      </TextContainer>
    </Section>
  )
}
