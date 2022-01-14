import styled from 'styled-components'
import { ResponsiveTo } from '../hooks/useResponsiveFilmCoin'
import MobCoin1 from '@images/Coins1.svg'
import MobCoin2 from '@images/Coins2.svg'
export const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(189.56% 24.76% at 180.18% 50%, #0C7137 0%, #001107 100%);
 
  img{
    position: static;
    z-index: 10;
    width: 219px;
    height: 108px;
  }
  ${ResponsiveTo()}{
  
    background: radial-gradient(83.26% 35.4% at 103.17% 50%, #0C7137 0%, #001107 100%);
  img{ 
  width: 395px;
  height: 196px;
  }
  }
`

export const IconsContainer = styled.div`
  display: grid;
  width: 100%;
  
  place-items: center;
  place-content: center;
  .middDiv{
    margin: 40px 0;
  }
  .coin1{
    position: absolute;
    width: 300px;
    height: 300px;
    background-image:url(${MobCoin1});
    background-size:100%;
    background-position-x: -50px;
    background-repeat:no-repeat ;
    left: 0;
    top:500px;
  }
  .coin2{
    position: absolute;
    width: 300px;
    height: 300px;
    background-image:url(${MobCoin2});
    background-size:100%;
    background-position-x: 30px;
    background-repeat: no-repeat;
    right: 0;
    top:180px;
  }
  ${ResponsiveTo()}{
   .coin1{
    width: 400px;
    height: 400px;
    top: 200px;
   }
   .coin2{
    width: 400px;
    height: 400px;
    top: 250px;
   }
  }

`
