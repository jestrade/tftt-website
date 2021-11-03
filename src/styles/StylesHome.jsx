import styled from 'styled-components'
import imgActor1 from '@images/imgActors.png'
import imgActor4 from '@images/imgActors1.png'
import imgActor3 from '@images/imgActors2.png'
import imgActor2 from '@images/imgActors3.png'
import bgImage from '@images/bgActors.png'
import bgImageMob from '@images/bgActorsMobile.png'

export const SectionActors = styled.section`
  min-height: 500px;
  background-color: black;
  
  .actors-container{
    display: flex;
    align-items: center;
    background-image: url(${bgImage});
    background-size: 100% 120%;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
    padding:100px 0 ;
    @media only screen and (max-width:768px){
      background-image: url(${bgImageMob});
      background-size: 100% 100%;
      padding:200px 0 ;
    }
  
    .row-actors{
      display:grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      height: 800px;
      width: 100%;
      .col-img{
        display: flex;
        height: 100%;
        align-items: flex-start;
        &.end{
          align-items: flex-end;
        }
      }  

      .img1{
        margin-right: 20px;
        width: 100%;
        height:85%;
        background-image: url(${imgActor1});
        background-repeat: no-repeat;
        background-size: cover;
        background-position-x:center;
      }
      .img2{
        
        width: 100%;
        height:85%;
        background-image: url(${imgActor2});
        background-repeat: no-repeat;
        background-size: cover;
        background-position-x:center;
        margin:0 20px;
      }
      .img3{
        
        width: 100%;
        height:85%;
        background-image: url(${imgActor3});
        background-repeat: no-repeat;
        background-size: cover;
        background-position-x:center;
        margin:0 20px;
      }
      .img4{
        margin-left: 20px;
        width: 100%;
        height:85%;
        background-image: url(${imgActor4});
        background-repeat: no-repeat;
        background-size: cover;
        background-position-x:center;
      }

      @media only screen and (max-width:768px){
        grid-template-columns: none;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        height: 840px;
        .col-img{
          margin: 0 20px 20px 0;
          padding-bottom: 10px;
          &.end{
            margin: 0 0 20px 20px;
            padding-bottom: 10px;
          }
        }

        .img1{
          margin-right: 0;
          height:100%;
          width: 100%;
          background-position-x:center;
          background-position-y: -100px;
        }
        .img2{
          height:100%;
          width: 100%;
          background-position-x:center;
          margin:0;
        }
        .img3{
          
          height:100%;
          width: 100%;
          background-position-x:center;
          margin:0 ;
        }
        .img4{
          height:100%;
          width: 100%;
          background-position-x:center;
          background-position-y: -100px;
        }
      }

    }
  }
      
`
