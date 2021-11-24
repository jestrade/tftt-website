import styled from 'styled-components'

export const CountdownContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    margin: 4.5rem 0 2rem;
    @media (max-width: 780px) {
        width: 100%;
        height: 200px;
        margin: 2.5rem 0;
    }
`

export const CountdownTitleContainer = styled.div`
    margin-bottom: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 780px) {
        width: 100%;
        height: auto;
        margin-bottom:0px;
    }
`

export const CountdownTitle = styled.h2`
    width: 100%;
    font-size: 144px;
    font-style: normal;
    font-weight: 900;
    line-height: 122.4px;
    letter-spacing: 0em;
    max-width: 780px;
    text-align: center;
    color: white;
    font-family: 'cooper_hewittbold';
    @media (max-width: 780px) {
        font-size: 59px;
        line-height: 50.15px;
        max-width: 380px;
    }
`

export const CustomButtonTitle = styled.span`
    margin-top: -10rem;
    padding: 1rem 2.5rem;
    font-size: 47px;
    text-align: center;
    color: white;
    font-family: 'cooper_hewittbold';
    max-width: 640px;
    width: auto;
    max-height: 120px;
    height: auto;
    background-color: #030303;
    opacity: 0.85;
    border-radius: 17px;
    border: 1px solid white;
    text-transform: uppercase;
    @media (max-width: 780px) {
        margin-top: -5rem;
        padding: 0.75rem 1rem;
        font-size: 17px;
        line-height: 22.1px;
        border-radius: 8px;
        max-width: 280px;
        max-height: initial;
    }
`
