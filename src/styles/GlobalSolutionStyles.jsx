import styled from 'styled-components'
import { ResponsiveTo } from '@hooks/useResponsiveFilmCoin'

export const Container = styled.section`
  display:flex;
  flex-direction:column;
  justify-content:center;
  width:100%;
  min-height:100vh;
  height: auto;
  padding: 2rem 1rem;  
  background: radial-gradient(43.43% 43.98% at 103.36% 53.09%, #009242 1.73%, #007C38 13.54%, #005928 38.02%, #000000 100%);
  ${ResponsiveTo('640px')}{
    padding: 3rem 2rem;
  }
  ${ResponsiveTo()}{
    padding: 6rem 10%;
  }
`

export const Title = styled.h1`
  font-family: 'Monument Extended';
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 1.5;
  text-align: center;
  color:white;
  margin-bottom:36px;
  span{
    color:#009242;
  }
  ${ResponsiveTo('Tablet')}{
    font-size: 2.5rem
  }
  ${ResponsiveTo()}{
    font-size: 4rem;
    line-height: 67px;
    margin-bottom:48px;
  }
`
export const Text = styled.div`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
  text-align: center;
  color: #FFFFFF;
  p{
    margin-bottom:20px;
    span{
    color:#009242;
  }
  }
  ${ResponsiveTo()}{
    font-size: 1.5rem;
  }
`
