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
    max-width: 1280px;
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
  p[role="alert"] {
    font-size: 14px;
    line-height: 14px;
    color: var(--red);
    margin-bottom: 1rem;
    @media (min-width: 640px) {
      font-size: 15px;
      line-height: 15px;
    }
  }
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
  p[role="alert"] {
    font-size: 13px;
    line-height: 13px;
    color: var(--red);
    margin-bottom: 1rem;
    @media (min-width: 640px) {
      font-size: 14px;
      line-height: 14px;
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
        background-color: #1d1d1b;
        color: white;
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
    margin-bottom: 1rem;
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
      padding: 1.5rem 2rem;
    }
  }
  p[role="alert"] {
    font-size: 14px;
    line-height: 14px;
    color: var(--red);
    margin-bottom: 1rem;
    @media (min-width: 640px) {
      font-size: 15px;
      line-height: 15px;
    }
  }
`

export const ButtonTerms = styled.div`
  font-family: "steinbeckregular";
  margin-top: 1rem;
  @media (min-width: 640px) {
    margin-top: 1.5rem;
  }
  & > label {
    color: white;
    font-size: 13px;
    line-height: 13px;
    margin-bottom: 1rem;
    @media (min-width: 640px) {
      font-size: 16px;
      line-height: 16px;
    }
    & > input[type="checkbox"] {
      appearance: none;
      cursor: pointer;
      width: 0.75rem;
      height: 0.75rem;
      border-radius: 100%;
      background-color: white;
      margin: 0;
      margin-right: 0.5rem;
      vertical-align: baseline;
      outline: none;
      @media (min-width: 640px) {
        width: 1.25rem;
        height: 1.25rem;
        margin-right: 0.75rem;
        vertical-align: bottom;
      }
    }
    & > input[type="checkbox"]:checked {
      background-color: var(--red);
      border: 2px solid var(--white);
      @media (min-width: 640px) {
        border-width: 4px;
      }
    }
  }
  p {
    margin-top: 0.25rem;
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

export const AttachFileButton = styled.div`
  display: flex;
  width: 11.5rem;
  margin-left: 10px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;

  label{
    text-decoration: none;
    display: flex;
    position: absolute;
    cursor: pointer;
    
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
  }
`

export const Image = styled.div`
display: none;
background-image: url(${props => props.src});
background-size: cover;
background-position: 40% 35%;
background-repeat: no-repeat;
@media (min-width: 768px) {
  display: inline;
  // Render before Form
  order: -1;
  width: 100%;
  height: 20rem;
}
@media (min-width: 1024px) {
  order: 0;
  height: auto;
  width: 100%;
  flex-grow: 1;
}
`

export const MessagePopup = styled.div`
  position:absolute;
  flex-direction: column;
  width: 400px;
  height: 120px;
  font-family: "steinbeckregular";
  font-weight: bold;
  background-color: white;
  box-shadow: 0px 0px 5px 1px red;
  top: 50%;
  left: 45%;
  .button-container{
    display: flex;
    justify-content: flex-end;
    width: 100%;
    font-size: 16px;
    button{
      padding: 10px;
      cursor: pointer;
      color:red;
      font-weight: bolder;
    }
  }
  .text-container{
    display: flex;
    justify-content:center;
    align-items: center;
    height:100%;
    padding: 0 20px;
    font-size: 18px;
      p{
        text-align: center;
      }
    }

  ${cssResponsive('Desktop15')}{
    left: 40%;
  }

  ${cssResponsive('Mobile')}{
    left: 15%;
    width: 300px;
    height: 100px;
    .button-container{
      font-size: 12px;
    }
    .text-container{
      font-size: 14px;
    }
  }

`
