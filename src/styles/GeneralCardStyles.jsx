
import styled from 'styled-components'
import { WhiteBtn } from './Buttons'
import { ResponsiveTo } from '@hooks/useResponsiveFilmCoin'
export const Section = styled.section`
  width: 100%;
  height: 100vh;
  background: radial-gradient(55.97% 55.63% at 50.12% 50%, #02642E 0%, #004620 23.44%, rgba(6, 2, 2, 0.98) 99.99%, rgba(0, 0, 0, 0) 100%);
  ${ResponsiveTo()}{
    background : -moz-radial-gradient(-39.85% 46.85%, ellipse farthest-side, rgba(0, 237, 101, 1) 0%, rgba(4, 200, 87, 1) 8.09%, rgba(8, 153, 70, 1) 19.99%, rgba(12, 113, 55, 1) 32.3%, rgba(15, 79, 43, 1) 44.81%, rgba(18, 54, 33, 1) 57.6%, rgba(20, 35, 26, 1) 70.78%, rgba(21, 25, 22, 1) 84.57%, rgba(21, 21, 21, 1) 100%);
  background : -webkit-radial-gradient(-39.85% 46.85%, ellipse farthest-side, rgba(0, 237, 101, 1) 0%, rgba(4, 200, 87, 1) 8.09%, rgba(8, 153, 70, 1) 19.99%, rgba(12, 113, 55, 1) 32.3%, rgba(15, 79, 43, 1) 44.81%, rgba(18, 54, 33, 1) 57.6%, rgba(20, 35, 26, 1) 70.78%, rgba(21, 25, 22, 1) 84.57%, rgba(21, 21, 21, 1) 100%);
  background : -webkit-gradient(radial,-39.85% 46.85% ,0 , -39.85% 46.85%, 1696.16 ,color-stop(0,rgba(0, 237, 101, 1) ),color-stop(0.0809,rgba(4, 200, 87, 1) ),color-stop(0.1999,rgba(8, 153, 70, 1) ),color-stop(0.323,rgba(12, 113, 55, 1) ),color-stop(0.4481,rgba(15, 79, 43, 1) ),color-stop(0.576,rgba(18, 54, 33, 1) ),color-stop(0.7078,rgba(20, 35, 26, 1) ),color-stop(0.8457,rgba(21, 25, 22, 1) ),color-stop(1,rgba(21, 21, 21, 1) ));
  background : -o-radial-gradient(-39.85% 46.85%, ellipse farthest-side, rgba(0, 237, 101, 1) 0%, rgba(4, 200, 87, 1) 8.09%, rgba(8, 153, 70, 1) 19.99%, rgba(12, 113, 55, 1) 32.3%, rgba(15, 79, 43, 1) 44.81%, rgba(18, 54, 33, 1) 57.6%, rgba(20, 35, 26, 1) 70.78%, rgba(21, 25, 22, 1) 84.57%, rgba(21, 21, 21, 1) 100%);
  background : -ms-radial-gradient(-39.85% 46.85%, ellipse farthest-side, rgba(0, 237, 101, 1) 0%, rgba(4, 200, 87, 1) 8.09%, rgba(8, 153, 70, 1) 19.99%, rgba(12, 113, 55, 1) 32.3%, rgba(15, 79, 43, 1) 44.81%, rgba(18, 54, 33, 1) 57.6%, rgba(20, 35, 26, 1) 70.78%, rgba(21, 25, 22, 1) 84.57%, rgba(21, 21, 21, 1) 100%);
  background : radial-gradient(-39.85% 46.85%, ellipse farthest-side, rgba(0, 237, 101, 1) 0%, rgba(4, 200, 87, 1) 8.09%, rgba(8, 153, 70, 1) 19.99%, rgba(12, 113, 55, 1) 32.3%, rgba(15, 79, 43, 1) 44.81%, rgba(18, 54, 33, 1) 57.6%, rgba(20, 35, 26, 1) 70.78%, rgba(21, 25, 22, 1) 84.57%, rgba(21, 21, 21, 1) 100%);
  filter: progid:DXImageTransform.Microsoft.Alpha(Stlye=2);
  }
`

export const Container = styled.div`
  
  position:relative;
  z-index: 9;
  height: 100vh;
  
 
  bottom:0;
  ${ResponsiveTo()}{
    height: 609px;
    display:grid;
    height: 100vh;
    grid-template-columns: 1fr 1fr;
  }

`

export const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  position:absolute;
  background-image: url(${props => props.bgImg});
  background-size:cover;
  background-repeat:no-repeat;
  background-position-x:70%;

  ${ResponsiveTo()}{
    position:relative;
  }
  

`

export const TextBox = styled.div`
  display:flex;
  place-self: center;
  padding: 30px 36px;
  flex-direction: column;
  position:absolute;
  top:40%;
  background: rgba(26, 24, 24, 0.91);
  border-radius:6px;
  margin:0 32px;
  h1{
    font-family: "Monument Extended";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 132.5%;
    /* or 32px */

    text-transform: uppercase;
    color:white;
    margin-bottom:40px;
  
  }
  p{
    font-family: 'Monument Grotesk Semi-Mono';
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 132.5%;
    color:white;
  }
  ${ResponsiveTo()}{
    background: transparent;
    margin:0;
    padding: 0 36px;
    position:inherit;
    top:0;
    h1{
      font-size: 24px;
    }
    p{
      font-size:1.5rem;;
    }
  }

`
export const BoxButtons = styled.div`
  display: flex;
  flex-flow: row nowrap;
`
export const Button = styled(WhiteBtn)`
  padding: 8px 16px;
  margin-right: 20px;
`
