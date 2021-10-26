import styled from 'styled-components'

import imageBg from '@images/bgGalleryVideos.png'
import imageBg2 from '@images/bgSpray.png'

import { cssResponsive } from '@hooks/useResponsive'

export const Section = styled.section`
  padding-top: 240px;
  padding-bottom: 200px;
  
  
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
  ${cssResponsive('Desktop13')}{
    
  }
`

export const Title = styled.section`
  display: flex;
  flex-flow: column nowrap;
  text-align: center;
  
  margin: auto;
  p:nth-child(1){
    font-size: 138px;
    font-family: "cooper_hewittheavy";
    color:#F10505;
  }
  p:nth-child(2){
    font-size: 48px;
    font-family: "cooper_hewittbook";
  }

`
export const Container = styled.div`
  width: 100%;
  
  background-image: url(${imageBg});
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: 100px;
  
  
`
export const Grid = styled.section`
  padding: 14px 100px;
  display: grid;
  width:100%;
  
 
  grid-template-areas:"a a b c d d"
                      "a a e e d d" ;
  
  ${cssResponsive('Desktop15')}{
    grid-template-areas:"a a b b c c d d"
                      "a a e e e e d d" ;
    padding:10px 10px;
  }

`
export const Item = styled.section`
  display: flex;
  margin: 10px;
  img{
    width: 100%;
    height: 100%;
    
    transition: transform 1s;
    &:hover{
      transform: scale(1.2);
      z-index: 10;
      position: relative;
    }
    
    ${cssResponsive('Desktop15')}{
      width: 100%;
      height: 100%;
  }
  
  }

 

    


`

export const GridScenes = styled.div`
  display:flex;
  flex-flow: row nowrap;
  margin: 0px 118px;
  font-family: "cooper_hewittheavy";
  div:nth-child(1){
    color: white;
  }
  div:nth-child(2){
    margin-left: 25.5%;
  }
  div:nth-child(3){
    margin-left: 43%;
  }

`
