import styled from 'styled-components'

export const Section = styled.section`
  display: grid;
  width: 100%;
  background-image: url(${(props) => props.bgImg}) ;
  background-size: cover;
  background-repeat: no-repeat;
  height: 1281px;
  padding-top: 99px;
`
export const Container = styled.div`
  margin: auto;
  font-family: 'steinbeckregular';
`
