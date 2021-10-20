import React from 'react-dom'
import { Link } from 'react-router-dom'
// styles
import { NavbarSection, Logo, Menu } from '@styles/NavbarStyles'
// images
import tfttLogo from '@logos/tftt.png'

export const Navbar = (/* { fontColor = 'white' } */) => {
  // eslint-disable-next-line no-unused-vars
  const fontColor = useNavbar('white')
  console.log(fontColor)
  fontColor.setColor('white')
  return (
    <>
      <NavbarSection>
        <Logo>
          <img src={tfttLogo} alt='Logo' />
        </Logo>
        <Menu fontColor={fontColor.color}>
          <li> <Link to='/'> ABOUT TTFT </Link> </li>
          <li> <Link to='#'> I'M JUST BLIT </Link> </li>
          <li> <Link to='#'> PARTNERSHIPS </Link> </li>
          <li> <Link to='#'> STORE </Link> </li>
          <li> <Link to='#'> NEWS </Link> </li>
          <li> <Link to='#'> CONTACT </Link> </li>
          <li> <Link to='/gallery'> GALLERY </Link> </li>
        </Menu>
      </NavbarSection>
    </>
  )
}
