import React from 'react'
import { Link } from 'react-router-dom'

// Styles
import { NavbarSection, Logo, Menu, Grid } from '@styles/NavbarStyles'

// Logos
import tfttLogo from '@logos/tftt.png'

export const Navbar = ({ fontColor = 'white' }) => {
  return (
    <Grid>
      <NavbarSection>
        <Logo>
          <img src={tfttLogo} alt='Logo' />
        </Logo>
        <Menu fontColor={fontColor}>
          <li> <Link to='#'> ABOUT TTFT </Link> </li>
          <li> <Link to='/im-just-bait'> I'M JUST BAIT </Link> </li>
          <li> <Link to='/partnerships'> PARTNERSHIPS </Link> </li>
          <li> <Link to='/store'> STORE </Link> </li>
          <li> <Link to='/news'> NEWS </Link> </li>
          <li> <Link to='/contact'> CONTACT </Link> </li>
          <li> <Link to='/gallery'> GALLERY </Link> </li>
        </Menu>
      </NavbarSection>
    </Grid>
  )
}
