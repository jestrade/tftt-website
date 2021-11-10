import styled from 'styled-components'

export const CountdownContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    @media (max-width: 780px) {
        width: 100%;
        height: 200px;
        margin-top: 35px;
    }
`

export const CountdownTitleContainer = styled.div`
    margin-bottom:20px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 780px) {
        width: 100%;
        height: auto;
        margin-bottom:0px;
    }
`

export const CountdownTitle = styled.h1`
    font-size: 144px;
    font-style: normal;
    font-weight: 900;
    line-height: 122.4px;
    letter-spacing: 0em;
    text-align: center;
    color: white;
    font-family: 'cooper_hewittbold';
    position: relative;
    left: 320px;
    @media (max-width: 780px) {
        font-size: 59px;
        line-height: 50.15px;
        left: 95px;
    }
`

export const CustomButtonTitle = styled.a`
    font-size: 47px;
    text-align: center;
    color: white;
    font-family: 'cooper_hewittbold';
    width: 636px;
    height: 90px;
    background-color: #030303;
    opacity: 0.95;
    border-radius: 17px;
    border: 1px solid white;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    left: -260px;
    @media (max-width: 780px) {
        font-size: 17px;
        line-height: 22.1px;
        left: -110px;
        border-radius: 8px;
        width: 200px;
        height: 45.49px;
        top: -2px;
    }
`
