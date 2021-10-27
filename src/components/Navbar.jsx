import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

// Context
import Context from '../context/Context'

// Styles
import {
  MenuLogo,
  NavbarSection,
  Logo,
  Menu, Grid,
  LogoImg,
  ButtonBox,
  RegisterButton,
  ButtonContainer,
  ButtonContainerLi
} from '@styles/NavbarStyles'

// Logos
import tfttBlackLogo from '@logos/tfttBlackLogo.png'
import tfttWhiteLogo from '@logos/tfttWhiteLogo.png'
import logoStore from '@logos/logoStore.png'
import logoMenu from '@logos/menuNav.png'

export const Navbar = ({ fontColor = 'white' }) => {
  const { navState } = useContext(Context)
  const [dropMenu, setDropMenu] = useState(false)
  const onClick = (e) => {
    e.preventDefault()
    setDropMenu(!dropMenu)
    console.log(dropMenu)
  }

  return (
    <Grid>
      <NavbarSection>
        <Logo to='/'>
          <LogoImg src={navState ? tfttBlackLogo : tfttWhiteLogo} alt='Logo' borderColor={fontColor} />
        </Logo>
        <Menu fontColor={fontColor} dropMenu={dropMenu ? 'block' : 'none'}>
          <li> <Link to='#'> ABOUT TTF<span>T</span>  </Link> </li>
          <li> <Link to='/im-just-bait'> I'M JUST BAIT </Link> </li>
          <li> <Link to='/partnerships'> PARTNERSHIPS </Link> </li>
          <li> <Link to='/store'> <img src={logoStore} alt='Store' /> <p style={{ marginLeft: 43 }}>STORE</p>  </Link> </li>
          <li> <Link to='/news'> NEWS </Link> </li>
          <li> <Link to='/contact'> CONTACT </Link> </li>
          <li> <Link to='/gallery'> GALLERY </Link> </li>

          <ButtonContainerLi to='/signup'>
            <RegisterButton fontColor={fontColor}>
              REGISTER
            </RegisterButton>
          </ButtonContainerLi>

        </Menu>
        <ButtonBox>
          <ButtonContainer to='/signup'>
            <RegisterButton fontColor={fontColor}>
              REGISTER
            </RegisterButton>
          </ButtonContainer>
          <MenuLogo onClick={onClick}>
            <img src={logoMenu} alt='' />
          </MenuLogo>
        </ButtonBox>
      </NavbarSection>
    </Grid>
  )
}
