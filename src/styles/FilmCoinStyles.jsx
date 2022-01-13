import styled from 'styled-components'
import bgImg from '@images/bgFilmcoin.png'
import bgImgSect from '@images/bgSectionFilmcoin.png'

export const Container = styled.div`
  color: white;
`
export const Banner = styled.div`
  width: 100%;
  height: 800px;
  background-image: url(${bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 180px 60px ;
  display: grid;
  grid-template-rows: 1fr 1fr;
  place-items: center;
  gap: 40px;
  .FC-learnMore{
    font-family:"Monument Extended", sans-serif;
    text-decoration: none;
    
  }
  section{
    display: flex;
    width: 100%;
    justify-content: center;
    div{
      text-align: center;
    }
  }
  section:nth-child(2){
  justify-content: center;
  }
  @media (min-width: 696px) {
    height: 1490px;
    padding: 20px 220px;
    gap: 0;
    section{
      justify-content: flex-start;
      div{
        text-align: left;
      }
    }
    section:nth-child(2){
      justify-content: flex-end;
    }
  }
`
export const LogoFC = styled.img`
  
  margin-top: 40px;
  margin-bottom: 20px;
  width: 226px;
  @media (min-width: 696px) {
    width: 473px;
  }
`
export const IconsContainer = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 16px;
  place-content: center;
  @media (min-width: 696px) {
    gap: 64px;
  }

  
`
export const DocIcon = styled.a`
  display: grid;
  text-decoration: none;
  place-items: center;
  transition: all 0.5s;
  img{
    width: 74.55px;
  height: 85.68px;
  }
  p{
    font-family:  "Monument Grotesk", sans-serif;
    font-size: 0.75rem;
    font-weight: bolder;
    color: white;
    margin-top: 16px;
    text-align: center;
  }
  &:hover{
    transform: scale(1.1);
  }
  @media (min-width: 696px) {
   img{
    width: 157px;
    height: 180px;
   }
   p{
    font-size: 1.7rem;
   }
  }
`
export const Title = styled.p`
  font-family: 'cooper_hewittheavy';
  font-size: 30px;
  text-decoration: underline;
  @media (min-width: 696px) {
    font-size: 48px;
  }
`
export const Subtitle = styled.p`
  font-family: "cooper_hewittheavy";
  font-size: 18px;
  font-weight: bolder;
`
export const Subtitle1 = styled.p`
  font-family:  "Monument Extended";
  font-size: 18px;
  font-weight: bolder;
  color:#019342;
  margin-top: 0px;
  text-align: justify;
  @media (min-width: 696px) {
    font-size: 24px;
    margin-top: 16px;
  }
`
export const TextColumns = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  text-align: justify;
  place-items: center;
  height: 690px;
  background-image: url(${bgImgSect});
  padding: 20px 60px;
  @media (min-width: 696px) {
    grid-template-columns: 1fr 1fr;
    gap: 200px;
    padding: 0 220px;
    height: 610px;
  }
`

export const Text = styled.p`
  font-family:   "Monument Grotesk Semi-Mono";
  font-size: 14px;
  font-weight: 400;
  color:white;
  line-height: 132.5%;
  margin-top: 16px  ;
  @media (min-width: 696px) {
    font-size: 24px;
  }
`
