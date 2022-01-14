import styled from 'styled-components'
import { ResponsiveTo } from '@hooks/useResponsiveFilmCoin'

export const Card = styled.article`
  width:112px;
  text-align:center;
  justify-content:center;
  margin-bottom:20px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  p{
    margin-top:10px;
    color:white;
    font-family: 'Space Mono', monospace;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    /* or 107% */

    text-align: center;
  }
 
  ${ResponsiveTo()}{
    
    width:146px;
    margin-bottom:0px;
    p{
      margin-top:20px;
      font-size: 14px;
    }
    
  }
`

export const ImgContainer = styled.div`
  width:45px;
  height:45px;
  margin: 0 auto;
   svg{
    width: 100%;
    height: 100%;
  }
  ${ResponsiveTo()}{
    width:84px;
    height:84px;
  }
`
