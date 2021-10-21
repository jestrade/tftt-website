import styled from 'styled-components'

export const Section = styled.section`
    display:flex;
    flex-flow: row nowrap;
    width: 1249px;
    margin: auto;
`
export const Image = styled.div`
  width: 694px;
  height: 872px;

`
export const Container = styled.div`
  width: 555px;
  height: 872px;
  border: 1px white solid;
  padding: 50px 0;
`
export const Form = styled.form`
  width: 426px;
  margin: auto;
`

export const Input = styled.div`
  display: grid;
  margin-top: 20px;
  label{
    color: #A9A9A9;
    margin-bottom: 10px;
    font-size: 16px;
  }
  input{
    height: 64px;
    border-radius: 6px;
    background-color: transparent;
    color: white;
    padding-left: 20px;
    font-size: 14px;
    outline: none;
  }

`
export const InputLetUs = styled.div`
  display: grid;
  margin-top: 20px;
  label{
    color: #A9A9A9;
    margin-bottom: 10px;
    font-size: 16px;
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
    &::placeholder{
      color:white;
    }
  }

`
export const Hr = styled.hr`
  width: 427px;
  color: #F5F5F5;
 `
export const Text = styled.div`
  color:white;
  width: 411px;
  height: 100px;
  margin: auto;
  p:nth-child(1){
    font-size: 30px;
    margin-bottom: 10px;
  }
  p:nth-child(2){
    font-size: 18px;
  }
`
export const CheckInput = styled.div`
margin-top: 20px;
display: flex;
align-items: center;
  input{
    display: none;
  }
  radio__input{

  }
  label{
    
    margin-left: 10px;
    color: #A9A9A9;
    font-size: 16px;
  }
  .radioBox{
  width: 21px;
  height: 21px;
  background-color: white;
  border-radius: 50%;
  padding:3px;
  &::after{
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    background: green;
    border-radius: 50%;
    
    transform: scale(0);
  }

  
  }
  input:checked + .radioBox::after{
    transform: scale(1);
  }
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
  span{
    font-size: 16px;
    margin-left: 10px;
  }
  img{
    width: 40px;
    height: 40px;
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
    height: 24px;
  }
  `
