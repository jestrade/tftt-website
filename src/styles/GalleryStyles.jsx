import styled from 'styled-components'

import imageBg from '@images/bgGalleryVideos.png'
import imageBg2 from '@images/bgSpray.png'

export const Section = styled.section`
  padding-top: 240px;
  padding-bottom: 200px;
  
  width: 100%;
  background-color: white;
  background-image: url(${imageBg2});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 180px;
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
  height: 575px;
  background-image: url(${imageBg});
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 40px;
`
export const Grid = styled.section`
  padding: 28px 0px;
  display: grid;
  scale:1.3;
  width:100%;
  margin: 0 auto;
  grid-template-columns: auto;
  grid-template-rows: auto ;
  grid-template-areas:"a a b c d d"
                      "a a e e d d" ;
  
  

`
export const Item = styled.section`
  display: flex;
  
  img{
    object-fit: cover;
    margin: auto;
    scale: 1;
    transition: all 1s;
    &:hover{
      scale: 1.2;
      z-index: 10;
      position: relative;
    }
  }

`
