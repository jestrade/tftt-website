
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { fadeIn } from '@styles/animations'

export const Grid = styled.div`
  display: grid;
  width: 100%;
  height: 1200px;
  
`

export const Slide = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  ${fadeIn}
`

export const Container = styled.div`
  display: Grid;
  width: 1328px;
  grid-template-columns: 1fr 10fr 1fr;
  margin: auto;
`

export const Button = styled.button`
  border-radius: 50%;
  height: 200px;
  margin: auto 0;
  position: relative;
  cursor: pointer;
  
`

export const Item = styled.button`
  display: grid;
  
  
  p{
    margin:39px 0;
    color: white;
    font-family: 'steinbeckregular';
    font-size: 24px;
  }

`
export const ImgContainer = styled(Link)`
    width: 332px;
    height: 835px;
    background-image: url(${(props) => props.bgImg});
    background-size: cover;
    background-repeat: no-repeat;
    img{
      width: 342px;
      height: 835px;
      opacity: 0;
      object-fit: cover;
      position: relative;
      left: -5px;
      transition: all .5s;
      &:hover{
        opacity: 1;
      }
    }

    
    
`
export const Title = styled.button`
  font-family: 'cooper_hewittbold';
  font-size:90px;
  color:#f10505;
  span{
    color:white
  }
`
