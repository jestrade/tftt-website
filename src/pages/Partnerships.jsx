import React, { useContext } from 'react'
import { useLocation } from 'react-router'
// Context
import Context from '../context/Context'
// Styles
import { Section, Container } from '@styles/PartnershipsStyles'

// Images

import BgImg from '@images/bgPartnershipsImg.png'

//  Components
import { ComingSoon } from '@components/ComingSoon'

export const Partnerships = () => {
  // This code is for identify if the page is Gallery
  const location = useLocation()
  const { changeNav } = useContext(Context)
  changeNav(location.pathname)
  const name = 'PARTNERSHIPS'
  return (
    <Section bgImg={BgImg}>
      <Container>
        <ComingSoon name={name} />
      </Container>
    </Section>

  )
}
