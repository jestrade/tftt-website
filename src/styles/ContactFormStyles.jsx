import styled from 'styled-components'
import { cssResponsive } from '@hooks/useResponsive'

export const Section = styled.section`
    display:flex;
    flex-flow: row nowrap;
    width: 60%;
    margin: 0 auto;
    ${cssResponsive('Desktop15')}{
      width: 80%;
    }
`
export const Image = styled.div`
  width: 100%;
  background-image: url(${props => props.bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  ${cssResponsive('Mobile')}{
      display:none; 
    }
  
`
export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 70%;
  border: 1px white solid;
  padding: 100px 60px;

  ${cssResponsive('Mobile')}{
      width: 100%;
      padding: 70px 25px;
    }

`
export const Form = styled.form`

  
  font-family: "steinbeckregular";
`

export const Input = styled.div`
  display: grid;
  margin-top: 20px;
  label{
    color: #A9A9A9;
    margin-bottom: 10px;
    font-size: 16px;
    font-family: "steinbeckregular";
  }
  input{
    height: 64px;
    border-radius: 6px;
    background-color: transparent;
    color: white;
    padding-left: 20px;
    font-size: 14px;
    outline: none;
    font-family: "steinbeckregular";
    border:1px solid white;
  }

`

export const InputPhone = styled.div`
  display: grid;
  margin-top: 20px;
  div{
    display: block;
    select{
    width: 70px;
    height: 64px;
    text-align: center;
    font-family: "steinbeckregular";
    font-size: 14px;
    border-radius: 6px 0 0 6px;
    background: transparent;
    color: white;
    outline: none;
    width: 20%;
    border:1px solid white;
    option{
      color: #1d1d1b;
    }
    }

    input{
        height: 64px;
        border-radius: 0 6px 6px 0;
        background-color: transparent;
        color: white;
        padding-left: 20px;
        font-size: 14px;
        outline: none;
        font-family: "steinbeckregular";
        width: 80%;
        border:1px solid white;
    }

  }
  
  label{
    color: #A9A9A9;
    margin-bottom: 10px;
    font-size: 16px;
    font-family: "steinbeckregular";
  }
  
`

export const InputLetUs = styled.div`
  display: grid;
  margin-top: 20px;
  label{
    color: #A9A9A9;
    margin-bottom: 10px;
    font-size: 16px;
    font-family: "steinbeckregular";
  }
  textarea{
    height: 224px;
    border-radius: 6px;
    background-color: transparent;
    color: white;
    padding-left: 20px;
    padding-top: 20px;
    font-size: 14px;
    outline:none;
    font-family: "steinbeckregular";
    border:1px solid white;
    &::placeholder{
      color:white;
    }
  }

`
export const Hr = styled.hr`
  width: 100%;
  color: #F5F5F5;
  margin: 30px 0px;
 `
export const Text = styled.div`
  color:white;

  p:nth-child(1){
    font-size: 30px;
    margin-bottom: 10px;
    font-weight: bolder;
    font-family: "steinbeckregular";
  }
  p:nth-child(2){
    font-size: 18px;
    font-family:"steinbeckregular";
  }
`
export const CheckInput = styled.div`
margin-top: 20px;
display: flex;
align-items: center;
`

export const ButtonsContainer = styled.div`
  display: flex;
  margin:20px 0;
  
`

export const SendButton = styled.button`

  display: flex;
  justify-content: center;
  align-items: center;
  width: 183px;
  height: 64px;
  background-color: white;
  border-radius: 6px;
  cursor: pointer;
  span{
    font-size: 16px;
    margin-left: 10px;
  }
  img{
    width: 30px;
    height: 30px;
  }
  `

export const AttachFileButton = styled.a`
  
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 183px;
  height: 64px;
  border-radius: 6px;
  margin-left: 10px;
  span{
    font-size: 16px;
    margin-left: 10px;
    color:#A9A9A9;
  }
  img{
    width: 24px;
    height: 22  px;
  }
  `
export const ButtonTerms = styled.div`
  display:flex;
  cursor: pointer;
  font-family: "steinbeckregular";
 `
