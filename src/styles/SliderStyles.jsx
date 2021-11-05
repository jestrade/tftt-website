
import { Link } from 'react-router-dom'
import styled from 'styled-components'
/* import { fadeIn } from '@styles/animations' */
import { slideAnimate } from '@styles/animations'
import { cssResponsive } from '@hooks/useResponsive'
import Bricks from '@images/BRICKS.png'

export const Grid = styled.div`
  display: grid;
  width: 100%;
  height: auto;
  background-image: url(${Bricks});
  background-size: cover;
  
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
  overflow: hidden; // disable scroll 
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
    pointer-events: none;
  }
  
`

export const Item = styled(Link)`
  display: grid;
  text-decoration: none;
  span{
    margin:39px 0;
    color: white;
    font-family: 'steinbeckregular';
    font-size: 24px;
    text-align: center;
  }
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
    span{
      display:none;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      font-family: "cooper_hewittheavy";
      font-size:40px;
      font-weight: bolder;
      margin: 0;
      padding: 0px 80px
    }
    &:hover{
      background-image: none;
      background-color: #f10505;
      span{
        display: flex;
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
export const Title = styled.h1`
  
  font-family: 'cooper_hewittbold';
  font-size:90px;
  text-align: center;
  color:#f10505;
  margin-top: 100px;
  margin-bottom: 20px;
  span{
    color:white
  }
  ${cssResponsive('Mobile')}{
    font-size: 40px;
    width: 200px;
    margin-left: 20px;
    text-align: center;
    margin: 0 auto;
    margin-top: 100px;
    margin-bottom: 20px;
  }
`
export const Paginator = styled.ul`
  list-style: none;
  display: none;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  li{
    margin:0 10px
  }
  ${cssResponsive('Mobile')}{
    display: flex;
  }
 `

export const ItemPaginator = styled.div`
  display:flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background-color: white;
  box-shadow: 0px 0px 5px 0px red ;
  .center{
    border-radius: 50%;
    width: 70%;
    height: 70%;
  }
`
