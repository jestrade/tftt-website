import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

// Context
import Context from '../context/Context'

// Styles
import { NavbarSection, Logo, Menu, Grid, LogoImg, ButtonBox, RegisterButton } from '@styles/NavbarStyles'

// Logos
import tfttBlackLogo from '@logos/tfttBlackLogo.png'
import tfttWhiteLogo from '@logos/tfttWhiteLogo.png'
import logoStore from '@logos/logoStore.png'
export const Navbar = ({ fontColor = 'white' }) => {
  const { navState } = useContext(Context)
  return (
    <Grid>
      <NavbarSection>
        <Logo to='/'>
          <LogoImg src={navState ? tfttBlackLogo : tfttWhiteLogo} alt='Logo' borderColor={fontColor} />
        </Logo>
        <Menu fontColor={fontColor}>
          <li> <Link to='#'> ABOUT TTF<span>T</span>  </Link> </li>
          <li> <Link to='/im-just-bait'> I'M JUST BAIT </Link> </li>
          <li> <Link to='/partnerships'> PARTNERSHIPS </Link> </li>
          <li> <Link to='/store'> <img src={logoStore} alt='Store' /> <p style={{ marginLeft: 43 }}>STORE</p>  </Link> </li>
          <li> <Link to='/news'> NEWS </Link> </li>
          <li> <Link to='/contact'> CONTACT </Link> </li>
          <li> <Link to='/gallery'> GALLERY </Link> </li>
        </Menu>
        <ButtonBox>
          <RegisterButton fontColor={fontColor}>
            REGISTER
          </RegisterButton>
        </ButtonBox>
      </NavbarSection>
    </Grid>
  )
}
