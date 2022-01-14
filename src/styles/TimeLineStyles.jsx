import styled from 'styled-components'
import { ResponsiveTo } from '@hooks/useResponsiveFilmCoin'

export const Section = styled.section`
  width:100%;
  height:100vh;
  display:flex;
  background: radial-gradient(88.41% 88.41% at 83.96% -32.42%, #00B050 0%, #000000 100%);
  align-items:center;
  justify-content:center;
`
export const Container = styled.div`
  display:grid;
  grid-template-columns:1fr auto 1fr auto ;
  .GreenRow{
    position:relative;
    top:20px;
  }
  ${ResponsiveTo()}{
    grid-template-columns:1fr auto 1fr auto 1fr auto 1fr auto 1fr;
  }

`
