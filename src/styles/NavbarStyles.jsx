import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Grid = styled.nav`
  width:100%;
  position: absolute;
  top:0px;
  background-color: transparent;
`

export const NavbarSection = styled.nav`
  display: grid;
  grid-template-columns: 1fr 10fr 2fr;
  height: 57px;
  margin: 42px 181px;
  
`
export const Logo = styled(Link)`
  display: flex;
  grid-column: 1;
  margin: auto;
  border: 1px solid ${(props) => props.borderColor};
  padding:10px 15px;
  cursor: pointer;
  img{
    width: 93px;
    height: 31px;
  }
`
export const Menu = styled.ul`
  grid-column: 2;
  display:flex;
  width: 100%;
  justify-content: end;
  flex-direction: row nowrap;
  list-style: none;
  margin: auto ;
  font-family: "steinbeckregular";
  li{
    margin-left: 70px;
    
    a{
      text-decoration: none;
      color: ${({ fontColor }) => fontColor};
      
    }
  }
`
