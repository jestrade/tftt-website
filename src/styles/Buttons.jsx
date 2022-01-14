import styled from 'styled-components'
import { TextScrollAnimation } from './AnimationsFilmCoin'
export const WhiteBtn = styled.button`
  cursor: pointer;
  color: #000000;
  background: white;;
  border-radius: 39px;
  font-weight: normal;
  font-size: 16px;
  transition: all .5s;
  display:flex;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  span{
    margin:auto;
  }
  &:hover{
    color: white;
    background: black;
    transform: scale(1.1);
    span{
    
    ${TextScrollAnimation({ time: '2s' })}
    }
  }
`
export const BlackBtn = styled.button`
  cursor: pointer;
  background: #000000;
  color: white;
  border-radius: 39px;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  transition: all .5s;
  display:flex;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  span{
    margin:auto;
  }
  
  &:hover{
    color: black;
    background: white;
    transform: scale(1.1);
    span{
    ${TextScrollAnimation({ time: '2s' })}
    }
  }
`

export const GreenBtn = styled.button`
  cursor: pointer;
  background: #009242;
  color: white;
  border-radius: 39px;
  font-weight: normal;
  font-size: 16px;
  transition: all .5s;
  text-align:center;
  display:flex;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  span{
    margin:auto;
  }
  &:hover{
    color: #009242;
    background: white;
    transform: scale(1.1);
    span{
      
    ${TextScrollAnimation({ time: '2s' })}
    }
  }
`

export const TransparentButton = styled.button`
  cursor: pointer;
  background: transparent;
  color: white;
  border-radius: 39px;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  border:1px solid white;
  transition: all .5s;
  &:hover{
    transform: scale(1.1);
  }
`
