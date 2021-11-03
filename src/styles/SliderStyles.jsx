
import { Link } from 'react-router-dom'
import styled from 'styled-components'
/* import { fadeIn } from '@styles/animations' */
import { slideAnimate } from '@styles/animations'
import { cssResponsive } from '@hooks/useResponsive'
import BePartImg from '@images/BePartOfTheFilm.png'

export const Grid = styled.div`
  display: grid;
  width: 100%;
  height: auto;
  ${cssResponsive('Mobile')}{
    display:flex;
    flex-flow: column nowrap;
  }
`

export const Slide = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  position: relative;
  margin: 0 auto;
  max-width: 1340px;
  ${props => props.animation
  ? slideAnimate({ time: '1s', direction: 'right' })
  : slideAnimate({ time: '1s', direction: 'left' })
  }
  

  ${cssResponsive('Mobile')}{
    
    flex-flow: column nowrap;
    width: 100%;
  }
`

export const Container = styled.div`
  display: Grid;
  width: 100%;
  grid-template-columns: 1fr 10fr 1fr;
  margin: auto;
  ${cssResponsive('Mobile')}{
    display:block;
    grid-template-columns:none;
    width: 100%;
    margin: 40px auto;
  }
`

export const Button = styled.button`
  border-radius: 50%;
  height: 200px;
  margin: auto 0;
  position: relative;
  cursor: pointer;
  ${cssResponsive('Mobile')}{
    display: none;
  }
  
`

export const Item = styled(Link)`
  display: grid;
  text-decoration: none;
  
  p{
    margin:39px 0;
    color: white;
    font-family: 'steinbeckregular';
    font-size: 24px;
    text-align: center;
  }
  ${cssResponsive('Mobile')}{
    margin-bottom: 10px;
    p{
      margin:20px 0;
    }
  }

`
export const ImgContainer = styled.div`
    width: 332px;
    height: 835px;
    background-image: url(${(props) => props.bgImg});
    background-size: cover;
    background-repeat: no-repeat;
    transition: all .5s;
    &:hover{
      background-image: url(${BePartImg});
      background-size: cover;
      background-repeat: no-repeat;
      ${cssResponsive('Mobile')}{
        background-position-y: -330px;
      }
    }
    ${cssResponsive('Mobile')}{
      width: 375px ;
      height:  249px;
      background-image: url(${(props) => props.bgImgMob});
      background-size: cover;
      background-repeat: no-repeat;
      margin:auto;
      
    }

    
    
`
export const Title = styled.div`
  
  font-family: 'cooper_hewittbold';
  font-size:90px;
  text-align: center;
  color:#f10505;
  span{
    color:white
  }
  ${cssResponsive('Mobile')}{
    font-size: 40px;
    width: 200px;
    margin-left: 20px;
    text-align: left;
  }
`
