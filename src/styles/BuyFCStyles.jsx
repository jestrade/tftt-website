import styled from 'styled-components'
import { ResponsiveTo } from '@hooks/useResponsiveFilmCoin'

export const BuyFCSection = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(149.18% 65.5% at -21.38% 59.53%, #0C7137 10.35%, #052F17 36.65%, #000000 72.52%);
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 1rem;
  color: #fff;
  ${ResponsiveTo('640px')} {
    padding: 3rem 2rem;
  }
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

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  font-family: 'Monument Extended', sans-serif;
  font-size: 1.5rem;
  line-height: 116.5%;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  span{
    color: #009242; 
  }
  ${ResponsiveTo('640px')} {
    font-size: 2.5rem;
  }
  ${ResponsiveTo()} {
    font-size: 4rem;
  }
`

export const Content = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  font-family: 'Space Grotesk mono', sans-serif;
  text-align: center;
  ${ResponsiveTo('640px')} {
    font-size: 1.25rem;
  }
  ${ResponsiveTo()} {
    font-size: 1.5rem;
  }
`

export const TransparentButton = styled.a`
  background: transparent;
  color: white;
  border-radius: 39px;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  border: 1px solid white;
  transition: all .5s;
  &:link, &:visited {
    color: white;
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
    transform: scale(1.1);
  }
`

export const Button = styled(TransparentButton)`
  font-family: 'Monument Extended', sans-serif;
  padding: 0.5rem 1rem;
  ${ResponsiveTo()} {
    font-size: 1.5rem;
    padding: 1.25rem 1.75rem;
  }
`

export const DownloadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`

export const DownloadTitle = styled.h3`
  font-family: 'Monument Extended', sans-serif;
  font-size: 1.5rem;
  line-height: 116.5%;
  text-transform: uppercase;
`

export const AssetsContainer = styled.div`
  display: flex;
  gap: 3rem;
`

export const Asset = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration:none;
  color: white;
`

export const AssetTitle = styled.h4`
  font-family: 'Space Grotesk', sans-serif;
  margin: 0;
  font-size: 0.75rem;
  line-height: 1.5;
  ${ResponsiveTo()} {
    font-size: 0.875rem;
  }
`
export const Text = styled.div`
  font-size:1rem;
  text-align:center;
  max-width:1024px;
  font-family: 'Space Grotesk', sans-serif;
  line-height: 1.5;
  ${ResponsiveTo()}{
    font-size:1.5rem;
  }
`
