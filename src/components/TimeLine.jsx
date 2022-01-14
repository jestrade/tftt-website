import React from 'react'
import { Container, Section } from '@styles/TimeLineStyles'

export default ({ children }) => {
  return (

    <Section>
      <Container>
        {children}
      </Container>
    </Section>
  )
}
