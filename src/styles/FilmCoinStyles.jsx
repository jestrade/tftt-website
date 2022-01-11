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
  padding: 100px 60px ;
  display: grid;
  grid-template-rows: 1fr 1fr;
  place-items: center;
 
  .FC-learnMore{
    color: #019342;
  }
  section{
    display: flex;
    width: 100%;
    justify-content: center;
  }
  section:nth-child(2){
  justify-content: center;
  }
  @media (min-width: 696px) {
    height: 1490px;
    padding: 20px 220px;
    section{
      justify-content: flex-start;
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
  @media (min-width: 696px) {
    gap: 64px;
  }

  
`
export const DocIcon = styled.a`
  display: grid;
  text-decoration: none;
  
  img{
    width: 74.55px;
  height: 85.68px;
  }
  p{
    font-family:  "cooper_hewittheavy";
    font-size: 18px;
    font-weight: bolder;
    color:#019342;
    margin-top: 16px;
    text-align: center;
  }
  @media (min-width: 696px) {
   img{
    width: 157px;
    height: 180px;
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
  font-family:  "cooper_hewittheavy";
  font-size: 18px;
  font-weight: bolder;
  color:#019342;
  margin-top: 16px;
  text-align: justify;
  @media (min-width: 696px) {
    font-size: 24px;
  }
`
export const TextColumns = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  text-align: justify;
  place-items: center;
  height: 610px;
  background-image: url(${bgImgSect});
  padding: 0 60px;
  @media (min-width: 696px) {
    grid-template-columns: 1fr 1fr;
    gap: 200px;
    padding: 0 220px;
  }
`

export const Text = styled.p`
  font-family:  "steinbeckregular";
  font-size: 14px;
  font-weight: 400;
  color:white;
  margin-top: 16px  ;
  @media (min-width: 696px) {
    font-size: 24px;
  }
`
