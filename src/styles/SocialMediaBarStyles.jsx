import styled from 'styled-components'

export const Section = styled.section`
  width: 253px;
  height: 73px;
  margin: 180px auto;
  display: grid;
  grid-template-rows: 2fr 1fr;

`
export const Container = styled.div`
  display: flex;
  flex-direction: row nowrap;
  align-items: center;
  justify-content: space-between;
  grid-row: 1;
  
`
export const Item = styled.div`
  width: 30px;
  height: 30px;

`

export const TextContainer = styled.div`
  grid-row: 2;
  color: white;
  text-align: center;
  margin: auto;
`
