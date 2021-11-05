import styled from 'styled-components'
import { loadingAnimate } from '@styles/animations'
import { cssResponsive } from '@hooks/useResponsive'
import checkLogo from '@icons/checkLogo.png'

export const Section = styled.section`
  display: flex;
  height: 800px;
  align-content: center;
  align-items: center;
  ${cssResponsive('Mobile')}{
    padding: 40px;
  }
`
export const Container = styled.div`
  display:flex;
  flex-direction: column;
  color: white;
  hr{
    width: 100%;
    color: white;
    margin: 40px auto;
  }
`
export const Icon = styled.div`
  width: 86px;
  height: 86px;
  margin:20px auto;
`
export const TextBox = styled.div`
  display:flex;
  flex-direction: column;
  h1{
    text-align:center;
    margin:20px 0;
  }
`
export const BoxMins = styled.div`
  display:flex;
  flex-flow:row wrap;
  justify-content: space-between;
`
export const MinContainer = styled.div`
  
  max-width: 199px;
  max-height: 133px;
  background-color: black;
  margin-bottom: 20px;
  border-radius: 10px;
  ${cssResponsive('Mobile')}{
    max-width: 134px;
    max-height: 93px;
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`
export const Description = styled.div`
  text-align:center;
`
export const BackButton = styled.button`
  background-color: white;
  border-radius: 6px;
  font-size: 16px;
  font-family: "steinbeckregular";
  color: black;
  width: 272px;
  height: 64px;
  margin: 20px auto;
  
`

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 86px;
  height: 86px;
  border-radius: 50%;
  border: 1px solid white;
`

export const Center = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border-bottom: 2px solid white;
  ${loadingAnimate({ time: '1s', type: 'infinite' })}
`
export const LoadingImage = styled.div`
  position: relative;
  margin: auto;
  top:-30px;
  left: 80px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border-bottom: 2px solid white;
  ${loadingAnimate({ time: '.5s', type: 'infinite' })}

  ${cssResponsive('Mobile')}{
  left: 50px;
  }
`
export const CheckImage = styled.div`
  background-image:url(${checkLogo}) ;
  background-size: contain;
  background-repeat: no-repeat;
  width: 24px;
  height: 13px;
  position: relative;
  margin: auto;
  top:-30px;
  left: 80px;
  ${cssResponsive('Mobile')}{
  left: 50px;
  }
`
