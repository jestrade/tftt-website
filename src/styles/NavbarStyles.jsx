import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cssResponsive } from '@hooks/useResponsive'
import { fadeIn } from '@styles/animations'

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
  ${cssResponsive('Desktop15')}{
    margin: 42px 80px;
  }
  ${cssResponsive('Mobile')}{
    justify-content: space-between;
    align-items: center;
    margin: 42px 40px;
  }

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
  margin: auto 60px;
  font-family: "steinbeckregular";
  li{
    font-size: 18px;
    
    span{
      color: red;
      
    }
    
    a{
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      text-decoration: none;
      color: ${({ fontColor }) => fontColor};
      img{
        position: absolute;
      }
    }
  }

  ${cssResponsive('Desktop15')}{
      li{
        font-size: 16px;
      }
  }
  ${cssResponsive('Mobile')}{
      display:${props => props.dropMenu};
      flex-flow: column nowrap;
      position: absolute;
      top: 150px;
      left: 0px;
      background-color: #00000044;
      margin: auto 0px;
      ${fadeIn({ time: '.5s', type: 'ease' })}
      li{
        display: flex;
        justify-content: center;
        padding: 10px 10px;
        text-align: center;
        &:hover{
        background-color: #dbdbdb44;
        }
        
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

export const ButtonContainer = styled(Link)`
  display: flex;
  text-decoration: none;
  cursor: pointer;
  ${cssResponsive('Mobile')}{
    display: none;
  }
`
export const ButtonContainerLi = styled(Link)`
  display: none;
  text-decoration: none;
  cursor: pointer;
  ${cssResponsive('Mobile')}{
    display: flex;
    width: 100%;
    justify-content: center;
  }
`

export const RegisterButton = styled.div`
  color:${({ fontColor }) => fontColor};;
  border-radius: 17px;
  width: 126px;
  height: 53px;
  border: 1px solid ${({ fontColor }) => fontColor};  ;
  font-family: "cooper_hewittheavy";
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  
`

export const MenuLogo = styled.button`
  display: none;
  ${cssResponsive('Mobile')}{
    width: 44px;
    height: 24px;
    display: block;
  
  }
`
