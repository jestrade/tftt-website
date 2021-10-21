import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  width: 100%;
  height: 1200px;
  
`

export const Slide = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

export const Container = styled.div`
  display: Grid;
  grid-template-columns: 1fr 10fr 1fr;
  margin: auto;
`

export const Button = styled.button`
  border-radius: 50%;
  height: 200px;
  margin: auto 0;
`

export const Item = styled.button`
  display: grid;
  margin: 0px 25px;
  img{
    width: 332px;
    height: 835px;
    object-fit:cover;
  }
  p{
    margin:39px 0;
    color: white;
    font-family: 'steinbeckregular';
    font-size: 24px;
  }

`
export const Title = styled.button`
  font-family: 'cooper_hewittbold';
  font-size:90px;
  color:#f10505;
  span{
    color:white
  }
`
