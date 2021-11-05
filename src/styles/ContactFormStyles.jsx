import styled from 'styled-components'
import { cssResponsive } from '@hooks/useResponsive'

/* Responsive styles */
export const Contact = styled.div`
  display:flex;
  flex-direction: column;
  width: 100%;
  margin-top: 9rem;
  margin-bottom: 5.25rem;
  @media (min-width: 1024px) {
    flex-direction: row;
    max-width: 1249px;
    max-height: 872px;
  }
`

export const FormContainer = styled.div`
  width: inherit;
  height: auto;
  border: 1px white solid;
  padding: 0.8rem 1rem;
  font-family: "steinbeckregular";
  @media (min-width: 640px) {
    padding: 2rem 2.5rem;
  }
  @media (min-width: 1024px) {
    width: 40%;
    max-width: 555px;
    padding: 2.5rem;
  }
`

export const Text = styled.div`
  color: white;
  width: 100%;
  margin: auto;
  h1 {
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 0.5rem;
    @media (min-width: 640px) {
      font-size: 30px;
      line-height: 30px;
      margin-bottom: 1.25rem;
    }
  }
  p {
    font-size: 13px;
    line-height: 15px;
    @media (min-width: 640px) {
      font-size: 18px;
      line-height: 20.5px;
      margin-right: 1rem;
    }
  }
`

export const Hr = styled.hr`
  margin-top: 1.25rem;
  margin-bottom: 1rem;
  width: 100%;
  color: #F5F5F5;
  @media (min-width: 640px) {
    margin-top: 0.75rem;
  }
`
export const Form = styled.form`
  width: 100%;
  font-family: "steinbeckregular";
`

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  label{
    color: #A9A9A9;
    font-size: 13px;
    line-height: 13px;
    @media (min-width: 640px) {
      font-size: 16px;
      line-height: 16px;
    }
  }
  input{
    height: 2.5rem;
    border-radius: 6px;
    background-color: transparent;
    color: white;
    border: solid white 1px;
    padding: 1rem;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    outline: none;
    font-family: "steinbeckregular";
    font-size: 14px;
    line-height: 14px;
    &::placeholder {
      color: white;
    }
    @media (min-width: 640px) {
      height: 4rem;
      font-size: 16px;
      line-height: 16px;
      padding: 1.5rem 2rem;
    }
  }

`

export const InputPhone = styled.div`
  
  div {
    display: flex;
    height: 2.5rem;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    @media (min-width: 640px) {
      height: 4rem;
    }
    select {
      -webkit-appearance: none;
      height: 100%;
      width: 30%;
      text-align: center;
      border-radius: 6px 0 0 6px;
      background: transparent;
      color: white;
      outline: none;
      border: 1px solid white;
      max-width: 7rem;
      font-family: "steinbeckregular";
      font-size: 14px;
      line-height: 14px;
      padding-left: 0.25rem;
      


      @media (min-width: 640px) {
        font-size: 16px;
        line-height: 16px;
        padding: 0 0.75rem;
      }
      option{
        color: #1d1d1b;
      }
    }

    input{
      height: 100%;
      border-radius: 0 6px 6px 0;
      background-color: transparent;
      color: white;
      outline: none;
      width: 70%;
      border:1px solid white;
      padding: 1rem;
      font-family: "steinbeckregular";
      font-size: 14px;
      line-height: 14px;
      @media (min-width: 420px) {
        flex-grow: 1;
      }
      @media (min-width: 640px) {
        font-size: 16px;
        line-height: 16px;
        padding: 1.5rem 2rem;
      }
    }

  }

  label{
    color: #A9A9A9;
    font-size: 13px;
    line-height: 13px;
    @media (min-width: 640px) {
      font-size: 16px;
      line-height: 16px;
    }
  }
`

export const IconSelect = styled.div`
  position: relative;
  pointer-events: none;
  height: 100%;
  width: 0px;
  right:15px;
  top: 32%;
  img{
    width: 10px;
    height: 6px;
  }
  ${cssResponsive('Mobile')}{
    top: 24%;
  }
`

export const InputLetUs = styled.div`
  display: flex;
  flex-direction: column;
  label{
    color: #A9A9A9;
    font-size: 13px;
    line-height: 13px;
    @media (min-width: 640px) {
      font-size: 16px;
      line-height: 16px;
    }
  }
  textarea{
    resize: none;
    height: 10rem;
    border-radius: 6px;
    background-color: transparent;
    color: white;
    border: solid white 1px;
    padding: 1rem;
    margin-top: 0.5rem;
    outline: none;
    font-family: "steinbeckregular";
    font-size: 14px;
    line-height: 14px;
    ::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
    }
    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: #c4c4c4;
    }
    &::placeholder{
      color:white;
    }
    @media (min-width: 640px) {
      font-size: 16px;
      line-height: 16px;
      height: 14rem;
      margin-top: 0.25rem;
      padding: 1.5rem 2rem;
    }
  }

`

export const ButtonTerms = styled.div`
  display:flex;
  cursor: pointer;
  font-family: "steinbeckregular";
  align-items: center;
  margin-top: 1rem;
  @media (min-width: 640px) {
    margin-top: 1.5rem;
  }
  & > div {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    padding: 3px;
    background-color: white;
    margin-right: 0.5rem;
    @media (min-width: 640px) {
      width: 1.25rem;
      height: 1.25rem;
      margin-right: 0.75rem;
    }
  }
  & > p {
    color: white;
    font-size: 13px;
    line-height: 13px;
    @media (min-width: 640px) {
      font-size: 16px;
      line-height: 16px;
    }
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  margin: 1.75rem 0 0 0;
  height: 2.5rem;
  @media (min-width: 640px) {
    height: 4rem;
    margin: 1rem 0 0 0;
  }
`

export const SendButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 11.5rem;
  background-color: white;
  border-radius: 6px;
  cursor: pointer;
  span{
    color: black;
    margin-left: 0.5rem;
    font-size: 14px;
    line-height: 14px;
    @media (min-width: 640px) {
      margin-left: 0.75rem;
      font-size: 16px;
      line-height: 16px;
    }
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
  width: 11.5rem;
  border-radius: 6px;
  margin-left: 10px;
  span{
    margin-left: 0.5rem;
    font-size: 14px;
    line-height: 14px;
    color:#A9A9A9;
    @media (min-width: 640px) {
      margin-left: 0.75rem;
      font-size: 16px;
      line-height: 16px;
    }
  }
  img{
    width: 24px;
    height: 22px;
  }
`

export const Image = styled.div`
display: none;
@media (min-width: 768px) {
  display: inline;
  // Render before Form
  order: -1;
  img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
    object-position: 40% 35%;
  }
}
@media (min-width: 1024px) {
  order: 0;
  max-width: 739px;
  height: 100%;
  img {
    height: 100%;
    width: auto;
    object-fit: initial;
    object-position: initial;
    flex-grow: 1;
  }
}
`
