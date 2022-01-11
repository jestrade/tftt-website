import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router'
// Context
import Context from '../context/Context'
// Styles
import { Section, Container } from '@styles/PartnershipsStyles'

// Images
import BgImg from '@images/bgNewsImg.png'

//  Components
import { ComingSoon } from '@components/ComingSoon'
import Seo from '../components/Seo'

export const News = () => {
  // This code is for identify if the page is Gallery
  const location = useLocation()
  const { changeNav } = useContext(Context)
  changeNav(location.pathname)
  const name = 'NEWS'
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Seo title='News' description='Coming Soon' />
      <Section bgImg={BgImg}>
        <Container>
          <ComingSoon name={name} />
        </Container>
      </Section>
    </>
  )
}
