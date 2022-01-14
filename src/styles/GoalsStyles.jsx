import styled from 'styled-components'
import { ResponsiveTo } from '../hooks/useResponsiveFilmCoin'

export const GoalsSection = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center; 
  background: radial-gradient(58.17% 13.41% at 20.15% 30.37%, #0C7137 0%, #074622 3.63%, #001107 100%);

  ${ResponsiveTo()} {
    background: radial-gradient(25.95% 19.09% at 33.82% 29.86%, #084B25 0%, #001107 100%);
   
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 3rem 1rem;
  color: #fff;
  ${ResponsiveTo('Tablet')} {
    gap: 2rem;
  }
  ${ResponsiveTo()} {
    gap: 3rem;
  }
  ${ResponsiveTo('Desktop15')} {
    gap: 3.75rem;
  }
`

export const Title = styled.h2`
  font-family: 'Monument Extended', sans-serif;
  font-size: 1.5rem;
  line-height: 116.5%;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  max-width: 270px;
  ${ResponsiveTo('480px')} {
    font-size: 1.75rem;
    max-width: 350px;
  }
  ${ResponsiveTo('Tablet')} {
    font-size: 2rem;
    max-width: 400px;
  }
  ${ResponsiveTo()} {
    font-size: 4rem;
    max-width: 80%;
  }
  ${ResponsiveTo('Desktop22')} {
    max-width: 1200px;
  }
`

export const Content = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  font-family: 'Monument Grotesk mono', sans-serif;
  text-align: center;
  max-width: 280px;
  ${ResponsiveTo('480px')} {
    max-width: 320px;
    font-size: 1.125rem;
  }
  ${ResponsiveTo('Tablet')} {
    max-width: 440px;
  }
  ${ResponsiveTo()} {
    max-width: 70%;
    font-size: 1.5rem;
  }
  ${ResponsiveTo('Desktop15')} {
    max-width: 900px;
  }
`
