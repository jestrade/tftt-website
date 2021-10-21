import styled from 'styled-components'
import '../fonts/font.scss'

export const NavbarSection = styled.nav`
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  width:100%;
  height: 180px;
  padding: 0 100px;
  position: absolute;
  top:0px;
  background-color: #0d061a;
`
export const Logo = styled.div`
  display: flex;
  grid-column: 1;
  margin: auto;
  img{
    width: 93px;
    height: 31px;
  }
`
export const Menu = styled.ul`
  grid-column: 2;
  display:flex;
  flex-direction: row nowrap;
  list-style: none;
  margin: auto ;
  font-family: "Steinbeck";
  li{
    margin-left: 40px;
    
    a{
      text-decoration: none;
      color: ${({ fontColor }) => fontColor};
      
    }
  }
`
