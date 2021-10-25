import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Grid = styled.section`
  width:100%;
  position: absolute;
  top:0px;
  background-color: transparent;
`

export const NavbarSection = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  height: 57px;
  margin: 42px 181px;

`
export const Logo = styled(Link)`
  display: flex;
  cursor: pointer;
  
`
export const Menu = styled.ul`
  display:flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row nowrap;
  list-style: none;
  margin: auto 50px;
  font-family: "steinbeckregular";
  li{
    
    
    a{
      text-decoration: none;
      color: ${({ fontColor }) => fontColor};
      
    }
  }
`
export const LogoImg = styled.img`
  width: 126px;
  height: 57px;
  
`
export const ButtonBox = styled.div`
  display: flex;
`
export const RegisterButton = styled.button`
  color:${({ fontColor }) => fontColor};;
  width: 126;
  height: 53;
  border-radius: 17px;
  border: 1px solid ${({ fontColor }) => fontColor};;
  font-family: "cooper_hewittheavy";
  font-size: 24px;
  padding: 5px 15px;
`
