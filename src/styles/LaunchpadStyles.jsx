import styled from 'styled-components'
import { ResponsiveTo } from '@hooks/useResponsiveFilmCoin'

export const Section = styled.section`
  padding: 6rem 0 2rem 0;
  background-color: #000;
  ${ResponsiveTo('640px')} {
    padding-bottom: 2rem;
  }
  ${ResponsiveTo()} {
    padding-top: 8rem;
    padding-bottom: 6rem;
  }
`

export const Title = styled.h2`
  font-family: 'Monument Extended', sans-serif;
  font-size: 1.5rem;
  line-height: 116.5%;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  color: white;
  padding: 2rem 1rem 1rem;
  span{
    color: #009242; 
  }
  ${ResponsiveTo('640px')} {
    padding: 3rem 2rem 1rem;
    font-size: 2.5rem;
  }
  ${ResponsiveTo()} {
    font-size: 4rem;
    padding: 4rem 10% 2rem;
    margin-right: -3%;
  }
  ${ResponsiveTo('1280px')} {
    margin-right: 0;
  }
`

export const Paragraph = styled.p`
  color: white;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  font-weight: 300;
  text-align: center;
  padding: 0 1rem;
  span {
    display: block;
    font-weight: 400;
    margin-top: 1.5rem;
  }
  ${ResponsiveTo('640px')} {
    padding: 0 2rem;
  }
  ${ResponsiveTo()} {
    font-size: 1.5rem;
    padding: 0 10%;
  }
  ${ResponsiveTo('1280px')} {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0;
  }
`

export const Table = styled.table`
  color: white;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  font-weight: 300;
  margin: 1.5rem 1rem 3rem 1rem;
  border: 1px solid white;
  border-radius: 12px;
  border-spacing: 0;
  max-width: 1100px;
  td {
    border-bottom: 1px solid white;
    border-right: 1px solid white;
    padding: 0.5rem 1rem;
  }
  td:first-child {
    color: #009827;
    text-transform: capitalize;
    font-weight: 500;
  }
  tr td:last-child {
    border-right: none;
  }
  tr:last-child td {
    border-bottom: none;
  }
  ${ResponsiveTo('640px')} {
    margin: 2.5rem 2rem 0;
  }
  ${ResponsiveTo()} {
    margin: 2.5rem 10% 3rem;
    font-size: 1.125rem;
    td {
      padding: 0.75rem 1.5rem;
    }
  }
  ${ResponsiveTo('1280px')} {
    margin: 2.5rem auto 3rem;
  }
`
