import styled from 'styled-components'
import Background from '../../assets/Home/background.png'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
`

export const Filter = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, rgba(213, 32, 71, 0.8) 0%, rgba(238, 61, 27, 0.8) 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width:425px) {
        align-items: flex-start;
    }
`

export const Title = styled.h1`
    font-weight: 700;
    font-size: 72px;
    line-height: 86px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-bottom: 35px;

    @media (max-width:768px) {
        font-size: 50px;
    }

    @media (max-width:425px) {
        font-size: 30px;
        margin-left: 20px;
        line-height: 30px;
    }
`

export const Paragraph = styled.p`
    max-width: 520px;
    font-weight: 600;
    font-size: 24px;
    line-height: 40px;
    margin-bottom: 50px;
    text-align: center;
    color: #FFFFFF;

    @media (max-width:768px) {
        font-size: 18px;
        max-width: 480px;
    }

    @media (max-width:425px) {
        max-width: 90%;
        margin-left: 20px;
        text-align: start;
        font-size: 15px;
        margin-bottom: 30px;
    }
`

export const Button = styled.button`
    padding: 17px 33px;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: #ED4C5C;
    background: #FFFFFF;
    border-radius: 6px;
    cursor: pointer;
    border: none;

    @media (max-width:425px) {
        margin-left: 20px;
        font-size: 10px;
    }
`


