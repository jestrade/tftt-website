import styled from 'styled-components'

export const CountdownContainer = styled.p`
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
        width: 257.15px;
        height: 147px;
        border-radius: 36px;
    }
`

export const CountdownTitleContainer = styled.div`
    margin-bottom:20px;
    @media (max-width: 480px) {
        width: 137px;
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
    @media (max-width: 480px) {
        font-size: 32px;
        line-height: 28.45px;
    }
`

export const CounterNumbersContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 490px;
    height: 112px;
    @media (max-width: 480px) {
        width: 257.15px;
        height: auto;
    }
`

export const CounterNumbersBox = styled.div`
    width: 99px;
    height: 112px;
    margin-right: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 480px) {
        width: 39.65px;
        height: 44.86px;
        margin-right: 6.81px;
    }
`

export const CounterNumbers = styled.p`
    color: white;
    font-size: 80px;
    font-style: normal;
    font-weight: 900;
    line-height: 71px;
    letter-spacing: 0em;
    margin: 0px;
    padding: 0px;
    font-family: 'steinbeckregular';
    @media (max-width: 480px) {
        font-size: 32px;
        line-height: 28.45px;
    }
`

export const CounterText = styled.p`
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 11px;
    letter-spacing: 0em;
    color: white;
    @media (max-width: 480px) {
        font-size: 4px;
        line-height: 3.56px;
    }
`
