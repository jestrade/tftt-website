import styled from 'styled-components'

import imageBg from '@images/bgGalleryVideos.png'
import imageBg2 from '@images/bgSpray.png'

import { cssResponsive } from '@hooks/useResponsive'

export const Section = styled.section`
  padding-top: 9.5rem;
  background-color: white;
  background-image: url(${imageBg2});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 180px;
  ${cssResponsive('Desktop15')}{
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: 260px;
  }
`

export const Title = styled.div`
  text-align: center;
  h1 {
    font-size: 50px;
    line-height: 85%;
    font-family: "cooper_hewittheavy";
    color: #F10505;
    margin-bottom: 0.5rem;
    @media (min-width: 480px) {
      font-size: 106px;
    }
    @media (min-width: 768px) {
      font-size: 144px;
    }
  }
  h2 {
    font-size: 25px;
    line-height: 95%;
    font-family: "cooper_hewittbook";
    @media (min-width: 480px) {
      font-size: 44px;
    }
    @media (min-width: 768px) {
      font-size: 48px;
    }
  }
`
export const Container = styled.div`
  width: 100%;
  padding: 2.5rem 1rem;
  @media (min-width: 480px) {
    padding: 5rem 1.75rem;
  }
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
  @media (min-width: 1024px) {
    background-image: url(${imageBg});
    background-size: contain;
    background-repeat: no-repeat;
    padding-bottom: 10rem;
  }
`
export const Grid = styled.section`
  display: grid;
  width: 100%;
  grid-template-rows: 3.5fr 1fr 5.1fr;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  max-width: 860px;
  grid-template-areas: "a d"
                       "b c"
                       "e e";
  @media (min-width: 480px) {
    gap: 1rem;
  }
  @media (min-width: 1024px) {
    grid-template-rows: 1fr 2.3fr;
    grid-template-columns: 1.5fr 1.3fr 1fr 1.1fr;
    grid-template-areas: "a b c d"
                         "a e e d";
    max-width: 1700px;
  }
  & > div:nth-child(1) > span {
    padding-left: 0.5rem;
    padding-bottom: 0.5rem;
    @media (min-width: 480px) {
      padding-left: 1rem;
      padding-bottom: 1rem;
    }
    @media (min-width: 1024px) {
      padding-bottom: 0;
      margin-bottom: -2rem;
      color: white;
      // Does not hide the text with the bg-white
      text-shadow: 0 0 10px black;
    }
  }
  & > div:nth-child(4) > span {
    display: none;
    @media (min-width: 1024px) {
      display: inline;
      margin-bottom: -2rem;
    }
  }
  & > div:nth-child(5) > span {
    right: 0;
    padding-right: 0.5rem;
    padding-bottom: 0.5rem;
    @media (min-width: 480px) {
      padding-right: 1rem;
      padding-bottom: 1rem;
    }
    @media (min-width: 1024px) {
      right: initial;
      padding-bottom: 0;
      margin-bottom: -2rem;
    }
  }
`
export const Item = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  img {
    object-fit: cover;
    width: inherit;
    height: inherit;
    @media (min-width: 1024px) {
      transition: transform 1s;
      &:hover{
        transform: scale(1.2);
        z-index: 10;
        position: relative;
      }
    }
  }
  img + span {
    position: absolute;
    bottom: 0;
    font-family: "cooper_hewittheavy";
    font-size: 18px;
    color: white;
    @media (min-width: 1024px) {
      color: black;
    }
  }
`
