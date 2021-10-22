import styled from 'styled-components'

export const Section = styled.section`
    display:flex;
    flex-flow: row nowrap;
    width: 1249px;
    margin: 0 auto;
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
