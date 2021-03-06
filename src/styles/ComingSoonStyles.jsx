import styled from 'styled-components'

export const CountdownContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`

export const CountdownTimer = styled.div`
    height: 367px;
    width: 640px;
    border-radius: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 480px) {
        width: 100%;
        height: 147px;
        border-radius: 36px;
    }
`

export const CountdownTitleContainer = styled.div`
    margin-bottom:20px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 480px) {
        width: 100%;
        height: 29px;
        margin-bottom:30px;
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
    left: 180px;
    @media (max-width: 480px) {
        font-size: 59px;
        line-height: 50.15px;
        left: 70px;
    }
`

export const CustomButtonTitle = styled.a`
    font-size: 47px;
    text-align: center;
    color: white;
    font-family: 'cooper_hewittbold';
    width: 336px;
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
    @media (max-width: 480px) {
        font-size: 17px;
        line-height: 22.1px;
        left: -110px;
        border-radius: 8px;
        height: 29.49px;
        width: 141px;
    }
`
